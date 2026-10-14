# Homepage product lineup

`homepage-product-lineup.html` is the six-card Google Sites homepage embed: TelePro, MultiFlex, TitanSafe, VoltShield, SolarStep and VaultStep, followed by **View more**. It preserves the existing Google Sites product destinations and the four established Google-hosted photographs.

## Image spacing

All image frames use a 4:3 landscape aspect ratio. Images fill the frame without inner padding. The two new images use the same landscape composition as the established photographs, keeping the whole ladder visible instead of fitting a narrow portrait image inside a wide box.

## New assets

- `assets/products/model_8_voltshield_homepage.jpg`
- `assets/products/model_7_solarstep_homepage.jpg`

These are AI-assisted concept marketing images, created with the built-in image-generation tool using each original studio product image as the edit target and `model_1_telepro_360.jpg` as the photographic style reference. The original assets remain available. The prompt direction was to preserve the product identity, create a 4:3 landscape composition, keep the full ladder visible, and match the existing natural-light industrial photography. VoltShield uses an electrical maintenance workshop; SolarStep uses a solar rooftop context. No captions or certification badges were requested. The generated artwork is not evidence of tested product performance or a real installation.

## Google Sites installation and scrollbars

Edit the existing homepage Product Lineup embed and replace its HTML with the file contents. This source does not change the footer or publish the Google Site. GitHub commits do not automatically replace inline Google Sites HTML.

The grid has three columns on wide screens and two columns below 960px. Images size with the cards. Preview desktop, tablet and phone after updating. If Google Sites keeps the embed shorter than its content, increase the embed height until the **View more** link is reachable without a nested scrollbar. A cross-origin embed cannot resize the Google Sites parent frame through its own CSS. Do not hide vertical overflow to disguise clipped cards. Other homepage embeds require their own sizing review.
