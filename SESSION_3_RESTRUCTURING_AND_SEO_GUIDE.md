# Ascentix search integration and information architecture

Updated 16 October 2026. This replaces the earlier setup guide, which overstated automatic verification and indexing and contained outdated product positioning. See the [current implementation guide](seo/IMPLEMENTATION.md) and [page copy map](seo/PAGE_MAP.md).

## Preserve the current structure

- Home: six featured models and a route to the complete catalogue.
- Products: all ten models, native comparison text and selection FAQs.
- Model pages: retain their existing `/products/<model-slug>` URLs.
- About Us: The Team remains a subpage.
- Social Media Hub and Contact Us: retain existing routes; reconcile identity and claims before republishing.
- Footer: preserve the current footer. Contextual links within page content supplement it.

CarbonApex X1 is the current interior step-ladder concept. Do not restore the older 35 kV electrical-fleet positioning. Ratings, certifications, prices and warranty require current supporting documents.

## Google Sites text and metadata

Use the native page title, headings, descriptive text, image alt text and actual links. An embedded document's meta tags or JSON-LD do not modify the Google Sites parent document's head. Do not claim that an embedded footer guarantees PageRank transfer or indexing. Read the published page and, when available, Search Console's rendered HTML.

## Search Console

1. Check the site's public visibility and search-engine opt-out setting. Review permissions before changing them.
2. Use the exact published URL-prefix property; do not try to verify the `sites.google.com` domain as your own.
3. Follow a verification method actually offered for the account. Linking GA4 does not guarantee automatic ownership verification.
4. Inspect Home, Products and changed model URLs for indexability, canonical selection and rendered content.
5. Request indexing where offered; record the result. Crawling and indexing are not guaranteed.
6. Submit a sitemap only if its exact URL has been verified to return a valid successful XML sitemap. The former `system/feeds/sitemap` instruction is not a verified endpoint for this site and must not be copied by assumption.

## Bing Webmaster Tools

Import an eligible verified Search Console property if the account offers that workflow, or use an available manual method. Review requested permissions. Confirm ownership, crawl and index status in the account; import alone is not evidence of indexing or a completion deadline.

## Analytics

GA4 work is paused at the user's request. Keep existing configuration unless separately authorised to resume. When resumed, verify the actual measurement ID and collection rather than creating duplicate properties. Realtime traffic can be affected by processing delay, filters, consent and blockers; it does not guarantee a user count or location. Outbound WhatsApp clicks do not prove delivered enquiries.

## Publication checklist

- [ ] Reconcile contradictory embedded specification tables and native concept copy.
- [ ] Use consistent model names, applications and confirmed contact details.
- [ ] Check contextual links, headings and image descriptions.
- [ ] Preview desktop and mobile, including short filtered catalogue results.
- [ ] Review all pending editor changes before publishing; a GitHub merge is not a Google Sites publish.
- [ ] After publication, record URL Inspection results and a performance baseline.

## Official guidance

- [Google AI features and SEO](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Sites publishing settings](https://support.google.com/sites/answer/6372880?hl=en)
- [OpenAI crawler controls](https://developers.openai.com/api/docs/bots)

No special AI text file or schema is required for Google AI features. Hosted Google Sites bot controls are not changed by adding a `robots.txt` file to this repository. See the implementation guide for evidence and measurement limits.
