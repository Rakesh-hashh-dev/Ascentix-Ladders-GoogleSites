# Ascentix Ladders — Implementation Guide for New Products & Phase 3 Updates

This complete hands-on manual guides you through building all 4 newly added products on **[Google Sites](https://sites.google.com/)** and applying the Phase 3 restructuring changes.

---

## 🔄 Phase 3 Changes Applied (Completed)

Before building the new product pages, note these two files have already been updated:

| File | Change |
| :--- | :--- |
| [`site_content/05_PRODUCT_2_CARBONAPEX_X1.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/05_PRODUCT_2_CARBONAPEX_X1.md) | **CarbonApex X1 B2B Reposition** — CTA changed to `Request DISCOM Fleet Quote`, Card 3 replaced from "Architects & Finishers" → "Film & Broadcast Riggers", footer updated to DISCOM fleet procurement messaging |
| [`site_content/01_HOME_PAGE.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/01_HOME_PAGE.md) | **Product Grid Expanded 6 → 10** — grid updated to 5×2 responsive layout, hero button says "Explore All 10 Product Models", `Best For` decision tags added to AeroReach Pro & MultiFlex Transform cards, 4 new product cards (Models 7–10) added to both the HTML embed and the native Option B table |

### Phase 3 Google Sites Actions Required:
1. **CarbonApex X1 Page** — Open the CarbonApex X1 subpage in Google Sites, delete the existing CTA button, re-insert it with name: `Request DISCOM Fleet Quote`. Re-embed the Applications Cards widget from **Section 5** of `05_PRODUCT_2_CARBONAPEX_X1.md` (Card 3 now shows Film & Broadcast Riggers).
2. **Home Page** — Re-embed the Product Lineup widget from **Section 4** of `01_HOME_PAGE.md` (now all 10 product cards in a 5×2 grid). Drag the bottom handle to **~1600px** height. Update the hero CTA button text to `Explore All 10 Product Models`.

---

## 🗺️ 1. Site Navigation & Information Architecture

After adding the 4 new products, your **Pages** tab in Google Sites should look like:

```text
[Home]
├── [About Us]
│   └── [The Team] (Subpage)
├── [Products] (Category Hub)
│   ├── [TelePro 360]
│   ├── [CarbonApex X1]
│   ├── [MultiFlex Transform]
│   ├── [TitanSafe Industrial]
│   ├── [AeroReach Pro]
│   ├── [VaultStep Deluxe]
│   ├── [SolarStep FX]           ← NEW (Product 7)
│   ├── [VoltShield FG-5]        ← NEW (Product 8)
│   └── [DeckRise Modular]       ← NEW (Product 10)
├── [Home Solutions]             ← NEW CATEGORY
│   └── [AtticMaster HA-3]       ← NEW (Product 9)
├── [Social Media Hub]
└── [Contact Us]
```

> 💡 **Why AtticMaster HA-3 is separate**: It's a consumer/residential interior product (concealed ceiling loft ladder), not an industrial ladder. Placing it under **Home Solutions** prevents diluting Ascentix's core B2B industrial branding while capturing homeowner/interior designer traffic.

---

## 📁 2. Quick Asset Reference

**Blueprints folder**: `f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\site_content\`  
**Images folder**: `f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\assets\products\`

> **Quick Upload Tip**: When Google Sites opens the file selector, click into the Windows File Explorer address bar and paste `f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\assets\products` then press **Enter** to jump straight there.

### Full 10-Model Product Map

| Model | Blueprint | Flagship Image | 4 Color Variants | Price |
| :--- | :--- | :--- | :--- | :--- |
| **1: TelePro 360** | [`04_PRODUCT_1_TELEPRO_360.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/04_PRODUCT_1_TELEPRO_360.md) | `model_1_telepro_360.jpg` | cobalt / signature / stealth / yellow | ₹18,999 |
| **2: CarbonApex X1** ⚡ | [`05_PRODUCT_2_CARBONAPEX_X1.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/05_PRODUCT_2_CARBONAPEX_X1.md) | `model_2_carbonapex_x1.jpg` | blackout / copper / crimson / signature | ₹42,999 |
| **3: MultiFlex Transform** | [`06_PRODUCT_3_MULTIFLEX_TRANSFORM.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/06_PRODUCT_3_MULTIFLEX_TRANSFORM.md) | `model_3_multiflex_transform.jpg` | flagship / lime / navy / yellow | ₹24,999 |
| **4: TitanSafe Industrial** | [`07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md) | `model_4_titansafe_industrial.jpg` | cyan / navy / orange / yellow | ₹38,499 |
| **5: AeroReach Pro** | [`08_PRODUCT_5_AEROREACH_PRO.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/08_PRODUCT_5_AEROREACH_PRO.md) | `model_5_aeroreach_pro.jpg` | green / grey / orange / yellow | ₹34,999 |
| **6: VaultStep Deluxe** | [`09_PRODUCT_6_VAULTSTEP_DELUXE.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/09_PRODUCT_6_VAULTSTEP_DELUXE.md) | `model_6_vaultstep_deluxe.jpg` | black / blue / moss / red | ₹22,999 |
| **7: SolarStep FX** 🆕 | [`10_PRODUCT_7_SOLARSTEP_FX.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/10_PRODUCT_7_SOLARSTEP_FX.md) | `model_7_solarstep_fx.jpg` | [solarstep_fx.jpg](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_fx.jpg) / [blue](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_blue.jpg) / [black](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_black.jpg) / [lime](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_lime.jpg) | ₹31,999 |
| **8: VoltShield FG-5** 🆕 | [`11_PRODUCT_8_VOLTSHIELD_FG5.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/11_PRODUCT_8_VOLTSHIELD_FG5.md) | `model_8_voltshield_fg5.jpg` | [fg5.jpg](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_fg5.jpg) / [orange](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_orange.jpg) / [white](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_white.jpg) / [slate](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_slate.jpg) | ₹18,499 |
| **9: AtticMaster HA-3** 🆕 | [`12_PRODUCT_9_ATTICMASTER_HA3.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/12_PRODUCT_9_ATTICMASTER_HA3.md) | `model_9_atticmaster_ha3.jpg` | [ha3.jpg](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_ha3.jpg) / [grey](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_grey.jpg) / [oak](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_oak.jpg) / [black](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_black.jpg) | ₹24,999 |
| **10: DeckRise Modular** 🆕 | [`13_PRODUCT_10_DECKRISE_MODULAR.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/13_PRODUCT_10_DECKRISE_MODULAR.md) | `model_10_deckrise_modular.jpg` | [modular.jpg](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_modular.jpg) / [white](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_white.jpg) / [red](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_red.jpg) / [orange](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_orange.jpg) | ₹64,999 |

---

## 🛠️ 3. The 5-Step Product Page Assembly Formula

Every Ascentix product page uses the same standardized layout. Apply this for each of the 4 new products:

```text
┌────────────────────────────────────────────────────────┐
│  1. Hero Banner: Product Title + Tagline + CTA Button  │
├────────────────────────────────────────────────────────┤
│  2. Key Technical Overview (2-Column: Image + 3 Bullet │
│     Engineering Highlights)                            │
├────────────────────────────────────────────────────────┤
│  3. 4 Color Variants Showcase (4-Column Layout)        │
├────────────────────────────────────────────────────────┤
│  4. Technical Specifications Table (HTML Embed ~680px) │
├────────────────────────────────────────────────────────┤
│  5. Real-World Application Cards (HTML Embed ~480px)   │
└────────────────────────────────────────────────────────┘
```

---

## 📋 4. Step-by-Step Build Instructions for Each New Product

---

### Product 7: Ascentix SolarStep FX — ₹31,999
*Blueprint*: [`site_content/10_PRODUCT_7_SOLARSTEP_FX.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/10_PRODUCT_7_SOLARSTEP_FX.md)

1. **Create Page**: Pages tab → hover **Products** → **⋮** → **Add subpage** → Name: `SolarStep FX`.
2. **Hero Banner**: Header type **Banner** → upload `model_7_solarstep_fx.jpg` → click **Sparkle ✨** → Title: `Ascentix SolarStep FX` → Subheading: `India's first dedicated rooftop ladder. RoofGrip™ Ridge Hook. Built for PM Surya Ghar's 1 crore homes.` → Button: `Request EPC Fleet Quote - ₹31,999` → Link: `Contact Us`.
3. **2-Column Block**: Insert **Image Left + Text Right** → upload `model_7_solarstep_fx.jpg` → click **Uncrop ⤢** → paste 3 Engineering Highlights from Section 2 of blueprint.
4. **4-Column Color Block**: Insert **4 columns** → upload:
   - Col 1: `model_7_solarstep_fx.jpg` → `Solar Orange & Slate Grey`
   - Col 2: `model_7_solarstep_blue.jpg` → `Sky Blue & Brushed Silver`
   - Col 3: `model_7_solarstep_black.jpg` → `Matte Black & Amber`
   - Col 4: `model_7_solarstep_lime.jpg` → `High-Vis Lime & Carbon`
5. **Specs Embed**: Insert → Embed `< >` → Embed code tab → paste Section 4 HTML → drag to **~720px**.
6. **Applications Embed**: Insert → Embed `< >` → paste Section 5 HTML → drag to **~480px** *(Residential Solar EPC / Commercial Rooftop / Wind Turbine Access)*.

---

### Product 8: Ascentix VoltShield FG-5 — ₹18,499
*Blueprint*: [`site_content/11_PRODUCT_8_VOLTSHIELD_FG5.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/11_PRODUCT_8_VOLTSHIELD_FG5.md)

1. **Create Page**: Pages tab → hover **Products** → **⋮** → **Add subpage** → Name: `VoltShield FG-5`.
2. **Hero Banner**: Header type **Banner** → upload `model_8_voltshield_fg5.jpg` → click **Sparkle ✨** → Title: `Ascentix VoltShield FG-5` → Subheading: `25kV Dielectric Non-Conductive Safety. Professional fibreglass step ladder at a price every Indian electrician can afford.` → Button: `Order Now - ₹18,499` → Link: `Contact Us`.
3. **2-Column Block**: Upload `model_8_voltshield_fg5.jpg` → **Uncrop ⤢** → paste 3 Highlights from Section 2 *(Pultruded E-Glass 25kV / Dual Red Locking Feet / 550mm Wide-Stance Spreader Bar)*.
4. **4-Column Color Block**:
   - Col 1: `model_8_voltshield_fg5.jpg` → `Safety Yellow & Black`
   - Col 2: `model_8_voltshield_orange.jpg` → `Fluorescent Orange & Grey`
   - Col 3: `model_8_voltshield_white.jpg` → `White & Sky Blue`
   - Col 4: `model_8_voltshield_slate.jpg` → `Slate & Red Safety`
5. **Specs Embed**: Paste Section 4 HTML → drag to **~680px**.
6. **Applications Embed**: Paste Section 5 HTML → drag to **~480px** *(DISCOM & LT Distribution / Commercial HVAC & Electrical / Pharma & Hospital Cleanrooms)*.

---

### Product 9: Ascentix AtticMaster HA-3 — ₹24,999
*Blueprint*: [`site_content/12_PRODUCT_9_ATTICMASTER_HA3.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/12_PRODUCT_9_ATTICMASTER_HA3.md)

1. **Create Category & Subpage**:
   - Pages tab → **(+) New Page** → Name: `Home Solutions` → Done.
   - Hover `Home Solutions` → **⋮** → **Add subpage** → Name: `AtticMaster HA-3` → Done.
2. **Hero Banner**: Header type **Banner** → upload `model_9_atticmaster_ha3.jpg` → click **Sparkle ✨** → Title: `Ascentix AtticMaster HA-3` → Subheading: `Gas-strut folding loft ladder for Indian homes. Fits ceiling heights 2.40m–3.20m. One-hand deployment.` → Button: `Book Installation - ₹24,999` → Link: `Contact Us`.
3. **2-Column Block**: Upload `model_9_atticmaster_ha3.jpg` → **Uncrop ⤢** → paste 3 Highlights from Section 2 *(Gas-Strut 2kg Pull / 40mm PIR Foam Insulated Hatch / Variable-Height Telescoping Legs)*.
4. **4-Column Finish Block**:
   - Col 1: `model_9_atticmaster_ha3.jpg` → `Off-White Melamine`
   - Col 2: `model_9_atticmaster_grey.jpg` → `Matte Grey Lam`
   - Col 3: `model_9_atticmaster_oak.jpg` → `Natural Oak Veneer`
   - Col 4: `model_9_atticmaster_black.jpg` → `Anodized Black Trim`
5. **Specs Embed**: Paste Section 4 HTML → drag to **~680px**.
6. **Applications Embed**: Paste Section 5 HTML → drag to **~480px** *(Luxury Penthouse & Row Houses / Duplex Apartment Loft Storage / Commercial Office False-Ceiling Access)*.

---

### Product 10: Ascentix DeckRise Modular — ₹64,999
*Blueprint*: [`site_content/13_PRODUCT_10_DECKRISE_MODULAR.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/13_PRODUCT_10_DECKRISE_MODULAR.md)

1. **Create Page**: Pages tab → hover **Products** → **⋮** → **Add subpage** → Name: `DeckRise Modular`.
2. **Hero Banner**: Header type **Banner** → upload `model_10_deckrise_modular.jpg` → click **Sparkle ✨** → Title: `Ascentix DeckRise Modular` → Subheading: `4-Height Adjustable Rolling Work Platform. 1.0m to 3.0m in 60 seconds. 200 kg Rated. Factories Act 1948 Compliant.` → Button: `Request Fleet Quote - ₹64,999` → Link: `Contact Us`.
3. **2-Column Block**: Upload `model_10_deckrise_modular.jpg` → **Uncrop ⤢** → paste 3 Highlights from Section 2 *(4-Level Tool-Free Height Adjustment / Pneumatic Auto-Leveling Feet / Expandable Deck 800mm → 1200mm)*.
4. **4-Column Color Block**:
   - Col 1: `model_10_deckrise_modular.jpg` → `Safety Yellow & Black`
   - Col 2: `model_10_deckrise_white.jpg` → `Cleanroom White & Royal Blue`
   - Col 3: `model_10_deckrise_red.jpg` → `Ember Red & Silver`
   - Col 4: `model_10_deckrise_orange.jpg` → `Orange & Graphite`
5. **Specs Embed**: Paste Section 4 HTML → drag to **~680px**.
6. **Applications Embed**: Paste Section 5 HTML → drag to **~480px** *(E-Commerce Logistics / Supermarket Retail Planograms / Aircraft & Heavy Vehicle Maintenance)*.

---

## ⚡ 5. Google Sites Pro-Tips & Quality Checklist

| Check | Action |
| :--- | :--- |
| **Ladder visible, not cropped** | After uploading any image, click it and click **Uncrop (⤢)** in the mini toolbar |
| **Banner image is bright and crisp** | After setting banner image, click the **Sparkle icon (✨)** in the banner bottom-right to disable readability dimming |
| **Embed widgets don't scroll internally** | Click the embedded widget box → drag the **blue bottom-center circle handle downward** until no inner scrollbar appears |
| **Mobile cards stack cleanly** | Click the **Preview (💻/📱)** icon → select **Phone** view and verify columns stack vertically |
| **Navigation has Home Solutions** | In Pages tab, confirm `Home Solutions` appears as a top-level page with `AtticMaster HA-3` nested inside it |
| **All changes are live** | Click the blue **Publish** button at top right → click **Publish** |

---

## 📂 6. Complete File Directory

```text
f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\
│
├── site_content\                         ← All blueprint markdown files
│   ├── 01_HOME_PAGE.md                  ← Updated: 10-card grid, Best For tags
│   ├── 05_PRODUCT_2_CARBONAPEX_X1.md   ← Updated: B2B DISCOM reposition
│   ├── 10_PRODUCT_7_SOLARSTEP_FX.md    ← NEW
│   ├── 11_PRODUCT_8_VOLTSHIELD_FG5.md  ← NEW
│   ├── 12_PRODUCT_9_ATTICMASTER_HA3.md ← NEW
│   └── 13_PRODUCT_10_DECKRISE_MODULAR.md ← NEW
│
├── assets\products\                      ← All 46 product images
│   ├── model_7_solarstep_fx.jpg         ← SolarStep flagship
│   ├── model_7_solarstep_blue.jpg
│   ├── model_7_solarstep_black.jpg
│   ├── model_7_solarstep_lime.jpg
│   ├── model_8_voltshield_fg5.jpg       ← VoltShield flagship
│   ├── model_8_voltshield_orange.jpg
│   ├── model_8_voltshield_white.jpg
│   ├── model_8_voltshield_slate.jpg
│   ├── model_9_atticmaster_ha3.jpg      ← AtticMaster flagship
│   ├── model_9_atticmaster_grey.jpg
│   ├── model_9_atticmaster_oak.jpg
│   ├── model_9_atticmaster_black.jpg
│   ├── model_10_deckrise_modular.jpg    ← DeckRise flagship
│   ├── model_10_deckrise_white.jpg
│   ├── model_10_deckrise_red.jpg
│   └── model_10_deckrise_orange.jpg
│
├── NEW_PRODUCTS_IMPLEMENTATION_GUIDE.md ← This file
├── GOOGLE_SITES_STEP_BY_STEP_GUIDE.md  ← Original full site guide
└── GOOGLE_SITES_EMBED_SNIPPETS.md       ← Reusable embed snippets
```
