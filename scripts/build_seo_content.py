#!/usr/bin/env python3
"""Build native Google Sites copy; --check validates links/assets and detects drift.

No network, publication, tracking or dependencies. content.json is the edited source.
"""
import argparse
import json
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "seo/content.json"
OUT = ROOT / "seo/pages"


def build(data):
    models = {m["slug"]: m for m in data["models"]}
    assert len(models) == len(data["models"]) == 10, "Expected ten distinct models"
    paths = [p["path"] for p in data["pages"]] + [f"/products/{s}" for s in models]
    assert len(paths) == len(set(paths)) == 16, "Expected sixteen distinct page paths"
    assert data["base_url"] == "https://sites.google.com/view/ascentix-ladders"
    assert data["status"] == "editorial-draft"
    pages = list(data["pages"])
    for slug, m in models.items():
        assert (ROOT / m["image"]).is_file(), f"Missing image: {m['image']}"
        assert len(m["related"]) >= 2 and slug not in m["related"]
        assert all(s in models for s in m["related"]), f"Unknown related model: {slug}"
        p = {
            "path": f"/products/{slug}",
            "title": f"{m['name']} | {m['type']} | Ascentix Ladders",
            "heading": f"Ascentix {m['name']} — {m['type'].lower()}",
            "intent": f"Evaluate {m['name']} and compare related configurations",
            "summary": m["summary"],
            "body": m["overview"],
            "links": [["Compare all ten designs", "/products"],
                      *[[f"Compare {models[s]['name']}", f"/products/{s}"] for s in m["related"]],
                      [f"Enquire about {m['name']}", "/contact-us"]],
            "model": m,
        }
        pages.append(p)
    assert len({p["title"] for p in pages}) == len(pages), "Duplicate titles"
    assert len({p["summary"] for p in pages}) == len(pages), "Duplicate summaries"
    result = {}
    manifest = ["# Page intent and copy map", "", "Editorial drafts; keep existing URLs. Suggested titles/summaries are not deployed metadata.", "", "| Page | Search intent | Recommended title | Copy |", "|---|---|---|---|"]
    for p in pages:
        name = p["path"].strip("/").replace("/", "--") + ".md"
        url = data["base_url"] + p["path"]
        lines = ["# Editor notes — do not paste this section", "", f"- Existing URL: {url}",
                 f"- Search intent: {p['intent']}", f"- Suggested title: {p['title']}",
                 f"- Suggested search summary: {p['summary']}",
                 "- Paste native text; preserve existing manual edits and avoid duplicate sections."]
        if "model" in p:
            m = p["model"]
            lines += [f"- Image: `{m['image']}`", f"- Suggested alt text: Ascentix {m['name']} {m['type'].lower()} design illustration.",
                      "- Replace conflicting legacy specification claims; do not leave contradictory tables beside this copy."]
        if p["path"] == "/home":
            lines += ["- Add the overview alongside the existing hero; keep the six featured models and footer."]
        if p["path"] == "/products":
            lines += ["- The public page already has a native model guide and FAQs. Reconcile rather than append this copy."]
        if p["path"] == "/about-us/the-team":
            lines += ["- Retain verified team names and roles. Add only confirmed responsibilities and consented biographies; no invented credentials."]
        if p["path"] == "/contact-us":
            lines += ["- Confirm the contact identity and form delivery before publication. This draft deliberately supplies no unverified address or phone number."]
        lines += ["", "---", "", "<!-- COPY START -->", "", f"# {p['heading']}", "", p["body"]]
        if "model" in p:
            m = p["model"]
            lines += ["", "## Intended application", "", m["application"], "", "## Catalogue information", "",
                      f"- Design type: {m['type']}.", f"- Material: {m['material']}.",
                      "- Dimensions, folded size, weight, rated load, certifications and warranty: request current model-specific evidence.",
                      "- Pricing and availability: confirmed on enquiry.", "", f"## {m['question']}", "", m["answer"],
                      "", "## Before requesting a quote", "",
                      "Share your application, required access height, quantity and delivery location. Ask for the current specification sheet and permitted configurations for the exact model."]
        if p["path"] == "/products":
            lines += ["", "## Compare designs by application", "", "| Model | Design direction | Intended application |", "|---|---|---|"]
            for m in models.values():
                lines += [f"| [{m['name']}]({data['base_url']}/products/{m['slug']}) | {m['type']} | {m['application']} |"]
            lines += ["", "## What should I confirm before selecting a model?", "",
                      "Confirm actual dimensions, rated load, permitted configurations, applicable test evidence and the intended task. Working reach, ladder height and platform height are different measurements. A material or model name does not establish electrical suitability."]
        lines += ["", "## Explore further", ""]
        for label, target in p["links"]:
            if target.startswith("/"):
                assert target in paths, f"Unknown internal route: {target}"
                target = data["base_url"] + target
            else:
                assert target in {"https://www.youtube.com/@AscentixLadders", "https://www.instagram.com/ascentix_ladders/"}
            assert urlparse(target).scheme == "https"
            lines += [f"- [{label}]({target})"]
        lines += ["", "<!-- COPY END -->", ""]
        result[name] = "\n".join(lines)
        manifest.append(f"| [{p['path']}]({url}) | {p['intent']} | {p['title']} | [{name}](pages/{name}) |")
    return result, "\n".join(manifest) + "\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    result, manifest = build(json.loads(DATA.read_text()))
    files = {OUT / name: body for name, body in result.items()}
    files[ROOT / "seo/PAGE_MAP.md"] = manifest
    extra = set(OUT.glob("*.md")) - {OUT / n for n in result}
    assert not extra, f"Unexpected generated pages: {extra}"
    if args.check:
        drift = [str(p.relative_to(ROOT)) for p, body in files.items() if not p.exists() or p.read_text() != body]
        if drift:
            raise SystemExit("Rebuild generated copy: " + ", ".join(drift))
        print("PASS: 16 pages, 10 models, unique titles/summaries, local assets, related/internal routes and generated-copy consistency.")
    else:
        OUT.mkdir(parents=True, exist_ok=True)
        for p, body in files.items():
            p.write_text(body)
        print("Built 16 native-text drafts and seo/PAGE_MAP.md; nothing published.")


if __name__ == "__main__":
    main()
