# SEO, GEO and discoverability implementation

Review date: 16 October 2026 (IST). GEO here means visibility in generative search answers. It does not imply geographic targeting.

## Current evidence and priority

| Priority | Observed issue | Concrete action | Verification |
|---|---|---|---|
| P0 | TelePro's embedded table asserts BIS certification, measured load, proof testing and warranty while native copy calls these unvalidated | Obtain model-specific evidence or replace the conflicting table with clearly labelled reference information; check equivalent embeds on every model | Read both native text and rendered embeds; no conflicting claims remain |
| P0 | Older repository copy describes CarbonApex as a 35 kV electrical product, unlike the current interior step-ladder concept | Use the current catalogue description across source, detail pages and social copy; do not infer electrical suitability | Same model type and limitations across pages |
| P0 | Previously observed Contact and social embeds used different phone/email identities and unsubstantiated business or audience claims | Confirm one enquiry identity with the owner; reconcile every embed, form destination and social link before publishing | All enquiries reach the confirmed destination; no invented address, registration, follower totals or testimonials |
| P1 | Home's important marketing content is mainly in embeds; its observed native headings start at testimonials | Add the short native overview in `pages/home.md`, styled using the site's existing light theme | Heading and summary visible in parent page DOM, alongside working contextual links |
| P1 | Live Products already has a ten-model guide, native links and six selection FAQs | Preserve it; use `pages/products.md` only for targeted reconciliation | No duplicate guide or FAQ section |
| P1 | Sampled model pages have generic document titles and thin native selection context | Use specific headings, model-specific answers and related-model links in this pack; retain existing slugs and short navigation labels | Unique intent and visible answer per model; links resolve |
| P2 | Search Console, Bing indexing and analytics status are unverified | Collect account evidence after publishing, when analytics work is resumed | Date-stamped URL Inspection and performance exports, rather than setup assumptions |

The public Home, Products, TelePro and CarbonApex pages were sampled in the browser. All ten model routes come from the catalogue; this is not a complete technical crawl of every page. Browser visibility proves public rendering, not Google indexing or bot access. No traffic, ranking or AI citation improvement has been measured.

## Native Google Sites application

- Keep the current off-white, orange and charcoal theme and existing edge treatment. Use native text boxes, headings and buttons; no new padded iframe is needed.
- Use one clear page title, then descriptive section headings in logical order. The suggested heading is on-page copy, not a promise that Google will use that wording as its search title.
- Keep existing page URLs. Long descriptive headings can coexist with short navigation labels. If a URL must change, first establish a supported redirect and update links; do not rename for a marginal keyword gain.
- Paste only the copy section from each page file. Add real links using Google Sites' link controls if formatted paste does not preserve them. Use links to specific model pages in the body, not only a common footer.
- Keep useful text accessible in the parent page alongside interactive embeds. An iframe is not automatically invisible to search, but its metadata and rendering should not be the only source of essential information.
- Add descriptive alt text to informative images. The suggested product alt text identifies the pictured design without asserting untested capabilities. Check it against the actual selected image; decorative images can have empty alt text.
- Use an appropriately sized image for its displayed dimensions; preview on phone and desktop. Do not crop away the product to remove whitespace. Fix container spacing and iframe height where the blank area originates.
- Do not add invisible keyword blocks, duplicate FAQs, fabricated ratings, unverifiable author credentials, or city pages without distinct local evidence.

## Technical checks before publication

1. Compare the current editor draft with the published version. Google Sites may have unrelated pending changes: a repository PR and a Google Sites Publish are separate operations.
2. Preview Home, Products and every changed model on desktop and phone. Verify headings, image crop/alt text, model links and quote navigation. Check iframe height after filtering/comparing; a fixed tall iframe can leave empty space.
3. Inspect the parent document's title, canonical, description and robots directives. Google Sites controls these fields. Embedded head tags do not override them; no root `robots.txt`, sitemap or metadata control is claimed by this pack.
4. Check the published site's visibility is Public and that **Request public search engines to not display my site** is not selected. Do not alter sharing permissions without reviewing their impact.
5. In Search Console, verify the exact URL-prefix property using a method actually offered for the account. An Analytics connection does not guarantee automatic ownership verification. Run URL Inspection on Home, Products and changed model pages; inspect indexability, Google-selected canonical and rendered HTML.
6. Request indexing for representative changed URLs if offered. There is no guarantee of crawling, indexing, ranking or a deadline. Do not submit the legacy `system/feeds/sitemap` path by assumption. Submit a sitemap only after confirming a successful XML sitemap response for this published site; record the URL and result.
7. In Bing Webmaster Tools, import an eligible verified GSC property if offered, or follow an available verification method. Inspect actual ownership, crawl and indexing results; import is not instant-indexing evidence.

## AI search and evidence

Google says ordinary SEO practices apply to AI Overviews and AI Mode: useful textual content, accessible links, good page experience and evidence-consistent markup. It requires no special AI file or schema. Eligibility does not guarantee inclusion.

OpenAI documents OAI-SearchBot for ChatGPT search and GPTBot for potential training, with independent controls. On Google-hosted Sites, do not claim to have changed host-level bot rules by committing a `robots.txt` file to this repository. If migrating to controlled hosting later, evaluate search access separately from training preferences.

Make answers easy to understand and substantiate: start with the model type, describe its intended application, distinguish it from related models, and state what remains unconfirmed. Visible FAQs serve readers; they do not guarantee rich results or AI citations. Add structured data only on a deployment where the actual parent page supports it, and only for facts present and supported on that page. No Product Offer, rating, LocalBusiness or certification schema is emitted here.

For local SEO, first confirm whether this is a trading business or an academic brand concept. Create or update a Business Profile only for an eligible real business and actual service area. Do not publish an invented office or mass-produce location pages.

## Measurement after publishing

Record a baseline and the exact publication date. Compare equivalent 28-day periods and annotate small samples and seasonality.

| Outcome | Evidence | Interpretation |
|---|---|---|
| Discovery | GSC indexed URLs, query/page impressions and clicks | Inspect individual changed pages and branded/non-branded queries; visibility alone is not a sale |
| Search engagement | CTR and average position in GSC | Segment by query and device before attributing changes to copy |
| Enquiries | Confirmed form success or enquiry records | A WhatsApp/outbound click indicates intent, not a completed lead |
| AI visibility | Dated prompt, engine, region, response and cited URL | Manual checks are variable samples, not a universal ranking |
| AI referral traffic | Available source/referrer data | Missing referrers or zero reported visits do not prove absence of citations |

GA4 setup remains paused at the user's request. No new tracking, consent changes, account login or conversion configuration is part of this pack. Google's AI-feature traffic is included in Search Console's Web reporting; do not invent a dedicated AI performance total.

## References checked 16 October 2026

- [Google: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Sites: Publish and share your site](https://support.google.com/sites/answer/6372880?hl=en)
- [OpenAI: Overview of crawlers](https://developers.openai.com/api/docs/bots)
