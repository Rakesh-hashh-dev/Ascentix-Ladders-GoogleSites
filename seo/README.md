# Ascentix SEO and AI search publishing pack

Prepared 16 October 2026. **Source drafts; not a deployment record.** The public site is Google Sites; merging this repository does not publish it. Preserve existing manual edits, URLs, the six featured homepage models, and the footer.

## Use this pack

1. Read [IMPLEMENTATION.md](IMPLEMENTATION.md) for the audit, priorities, platform limits and publication checks.
2. Use [pages/](pages/) for native Google Sites text. The Products page already has a model guide and FAQs: reconcile rather than append duplicates.
3. Edit [content.json](content.json), then run `python3 scripts/build_seo_content.py` from the repository root. Run `python3 scripts/build_seo_content.py --check` before committing.
4. Compare every proposed block with the current editor draft. Publish only after reviewing **all** pending Google Sites changes, including changes made outside this pack.

The generated page files contain editor notes followed by a clearly marked copy section. Do not paste editor notes, search-intent labels or suggested search summaries onto the website.

## Source of truth

The current catalogue is the basis for model types and intended applications. Illustrations and older blueprints do not establish measured dimensions, load ratings, electrical suitability, certification, prices or warranty. Confirm those against model-specific documents before publishing them as facts. This pack supplies no fabricated reviews, offers or test results.

Titles and summaries are editorial recommendations. Google Sites generates the parent document metadata; putting a `<title>`, meta description, canonical tag or JSON-LD inside an Embed does not set the parent page's head. No special AI schema or `llms.txt` is required for Google AI features.

Legacy `site_content/` files and embed manuals remain available as design history. Their prominent notices point here; do not redeploy old specification tables or contact details without review.
