# Ascentix Ladders — Google Sites source and assets

This repository contains the design prototypes, Google Sites embed snippets, page blueprints and media for [Ascentix Ladders](https://sites.google.com/view/ascentix-ladders/). The published site is edited in Google Sites; repository changes do not deploy it.

## Current SEO and AI search content

Start with the [SEO publishing pack](seo/README.md), [implementation priorities](seo/IMPLEMENTATION.md) and [sixteen-page intent map](seo/PAGE_MAP.md). These editorial drafts use current catalogue model types, contextual links and model-specific answers. They supersede conflicting claims in older blueprints.

The catalogue presents design concepts. Certification, load rating, electrical suitability, measured performance, price and warranty require model-specific evidence. Illustrations and earlier marketing scripts are not that evidence.

| Model | Catalogue design direction |
|---|---|
| TelePro 360 | Telescopic ladder |
| CarbonApex X1 | Step-ladder concept; carbon-composite construction under review |
| MultiFlex Transform | Multi-position ladder |
| TitanSafe Industrial | Platform-access design |
| AeroReach Pro | Extension ladder |
| VaultStep Deluxe | Combination ladder |
| SolarStep FX | Roof-hook ladder concept |
| VoltShield FG-5 | Fibreglass step-ladder design; electrical rating unconfirmed |
| AtticMaster HA-3 | Folding attic-mount ladder |
| DeckRise Modular | Adjustable work-platform design |

## Repository layout

- `seo/` — current editorial source, native Google Sites copy and implementation checks.
- `scripts/build_seo_content.py` — builds and validates the sixteen page drafts without dependencies.
- `site_content/` — legacy page blueprints and design history; review notices before reuse.
- `assets/` — logo, product, social and email media.
- `GOOGLE_SITES_*.md` — historical build and embed instructions; embedded metadata does not set parent-page metadata.
- `SESSION_3_RESTRUCTURING_AND_SEO_GUIDE.md` — current search setup entry point.
- Other `SESSION_*.md` and campaign suites — coursework and campaign references; verify claims before reuse.
- `index.html` and `advertisement_clip.html` — standalone prototypes, not the published Google Sites application.

## Editing and validation

Edit `seo/content.json`, then run:

```bash
python3 scripts/build_seo_content.py
python3 scripts/build_seo_content.py --check
```

Generated Markdown includes editor notes and a marked copy section. Paste only the relevant copy into native Google Sites text boxes, retaining existing manual edits. The Products page already has a model guide and FAQs; do not duplicate them. Preserve the six featured homepage models and current footer. Use the existing light theme.

Preview desktop and phone layouts and review all pending Google Sites changes before publishing. Source validation does not prove indexing, real product performance, form delivery or ranking gains. SEO improvements also support AI search discovery; no inclusion is guaranteed.

## Prototype preview

Open `index.html` or `advertisement_clip.html` in a browser to view the historical standalone prototypes. Review legacy claims before using their content publicly.

## License

Proprietary — Ascentix Ladders. All rights reserved.
