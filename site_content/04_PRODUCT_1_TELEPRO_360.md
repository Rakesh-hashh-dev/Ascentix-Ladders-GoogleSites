# Dedicated Model Page: Ascentix TelePro 360
**Target Platform**: Google Sites (Dedicated Sub-Page under `/products/telepro-360`)  
**Page Title**: Ascentix TelePro 360 | Ultra-Compact Telescopic Aerospace Ladder  
**Hero Image File**: [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg)  

---

## 1. Hero Banner Section
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Pages** tab → Click **TelePro 360** (subpage under *Products*).
> 2. Hover over the banner at the top of the canvas.
> 3. Click **Header type** in the floating bottom-left bar → Select **Banner**.
> 4. Click **Image** → Select **Upload** → Select [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg).
> 5. Click the bottom-right **Sparkle icon** (*Remove readability adjustment*) to keep the photo bright.
> 6. In the banner text box:
>    - Set style to **Title**: `Ascentix TelePro 360`
>    - Set style to **Subheading**: `Full-height extension ladder capability that fits in the trunk of a compact sedan.`
> 7. Add CTA Button:
>    - Click **Insert** → **Button** → Name: `Request Fleet Quote - ₹28,999` → Link: Select `Contact Us` → Click **Insert**.

---

## 2. Key Technical Overview (2-Column Layout)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** tab.
> 2. Under **Content blocks**, click the **1st tile (1 large image on left + text on right)**.
> 3. In the left image frame: click `(+)` → **Upload** → [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg).
> 4. **CRITICAL FIX**: Click the uploaded photo → In the mini toolbar, click **Uncrop (⤢)** so the full ladder is shown.
> 5. In the right text frame, paste the *Engineering Highlights* below.

### Key Engineering Highlights:
- **Zero-Pinch Air Damping (Soft-Close)**: Internal pneumatic air cartridges create a gentle, controlled descent during retraction. Each section collapses silently in 1.2 seconds without violent snapping, eliminating finger pinches — critical for India's long-shift electricians and civil contractors.
- **Magnetic Top Utility Tray**: The integrated top cap features embedded neodymium rare-earth magnets to securely hold screws, drill bits, tape measures, and screwdrivers.
- **Smart-Lock Visual Indicators**: Every individual rung features dual mechanical green/red safety windows confirming positive latch engagement before climbing — a must for high-rise residential and commercial projects.

---

## 3. 4 Premium Color Variations
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Under **Content blocks**, click the **6th tile (4 columns)**.
> 2. Paste each color finish into one of the 4 columns:

| Colorway | Finish Type | Hex Codes | Visual & Functional Description |
| :--- | :--- | :--- | :--- |
| **1. Apex Titanium & Safety Orange** | Brushed Anodized 7075 Aluminum | `#94A3B8` / `#FF5E14` | Raw satin brushed aircraft alloy with high-contrast safety orange locking collars and soft-touch latch levers. |
| **2. Matte Obsidian Stealth** | Hard-Anodized Military Spec | `#12151B` / `#334155` | Non-reflective tactical matte black body with anti-scratch ceramic micro-coating. Built for covert inspections. |
| **3. Arctic Silver & Royal Cobalt** | Electro-Polished Architectural | `#E2E8F0` / `#1D4ED8` | Ultra-clean mirror-sheen silver stiles with deep cobalt blue rung insets. Ideal for high-end architects and designers. |
| **4. High-Vis Jobsite Yellow & Graphite** | Industrial Safety Powder-Coat | `#FACC15` / `#18181B` | Vibrant high-visibility yellow stiles with textured industrial graphite steps for active construction zones. |

---

## 4. Complete Technical Specifications Table
> 💡 **Google Sites Action Steps to Embed**:
> 1. In Google Sites right sidebar, click **Insert** → Click **Embed (`< >`)**.
> 2. Click the **Embed code** tab at the top of the popup.
> 3. Copy and paste the HTML snippet below into the box → Click **Next** → Click **Insert**.
> 4. Drag the bottom blue handle downward to **~680px height** so all 11 specifications display without internal scrollbars.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 16px; color: #1a1d23; }
  .spec-container {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  }
  .spec-header {
    background: #f8f9fa;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e5ea;
    flex-wrap: wrap;
    gap: 10px;
  }
  .spec-title {
    font-family: 'Oswald', sans-serif;
    font-size: 1.35rem;
    text-transform: uppercase;
    color: #1a1d23;
    letter-spacing: 0.5px;
  }
  .spec-title span { color: #ff5e14; }
  .cert-badge {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    color: #ff5e14;
    border: 1px solid rgba(255, 94, 20, 0.28);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.91rem; text-align: left; }
  th {
    background: #f1f3f6;
    color: #4b5563;
    padding: 13px 20px;
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e2e5ea;
  }
  td { padding: 13px 20px; border-bottom: 1px solid #edf0f4; color: #374151; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; width: 34%; }
  .tag-highlight {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    color: #ff5e14;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 94, 20, 0.25);
    font-size: 0.8rem;
  }
  .spec-footer {
    background: #fafbfc;
    padding: 12px 24px;
    border-top: 1px solid #edf0f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.82rem;
    color: #6b7280;
    flex-wrap: wrap;
    gap: 8px;
  }
  .spec-footer strong { color: #ff5e14; }
</style>
</head>
<body>
  <div class="spec-container">
    <div class="spec-header">
      <div class="spec-title">TelePro 360 <span>Technical Specifications</span></div>
      <span class="cert-badge">● BIS IS 4130 : 2002 Certified</span>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Metric Value</th>
            <th>Imperial Equivalent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Maximum Extended Height</td>
            <td>3.80 meters</td>
            <td>12.5 feet</td>
          </tr>
          <tr>
            <td>Maximum Reach Height</td>
            <td>4.80 meters</td>
            <td>15.75 feet</td>
          </tr>
          <tr>
            <td>Storage Height (Closed)</td>
            <td>0.88 meters (Boot-Friendly)</td>
            <td>34.6 inches</td>
          </tr>
          <tr>
            <td>Total Product Weight</td>
            <td>10.8 kg</td>
            <td>23.8 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">150 kg (BIS IS 4130 Heavy Duty)</span></td>
            <td>330 lbs Heavy-Duty</td>
          </tr>
          <tr>
            <td>Material Composition</td>
            <td>Extruded 7075-T6 Aerospace Aluminium</td>
            <td>Cold-Milled 7075-T6 Alloy</td>
          </tr>
          <tr>
            <td>Retraction Mechanism</td>
            <td>Sealed Quad-Valve Air Damping Piston</td>
            <td>Pinch-Free Controlled Descent</td>
          </tr>
          <tr>
            <td>Rung Spacing</td>
            <td>300 mm (Equal Spacing)</td>
            <td>11.8 inches</td>
          </tr>
          <tr>
            <td>Footing Type</td>
            <td>Articulated Dual-Angle Non-Marking TPR</td>
            <td>Thermoplastic Rubber</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 4130 : 2002</strong> (Indian Standard)</td>
            <td>Bureau of Indian Standards Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>Lifetime Structural / 5-Year Mechanism</td>
            <td>Commercial Trade Assurance</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="spec-footer">
      <span>Tested to 3× Proof Load (450 kg Proof Test)</span>
      <span><strong>Ascentix Ladders Pvt. Ltd.</strong> · Mumbai, Maharashtra</span>
    </div>
  </div>
</body>
</html>
```

### Reference Markdown Table:

| Specification | Metric | Imperial |
| :--- | :--- | :--- |
| **Maximum Extended Height** | 3.80 meters | 12.5 feet |
| **Reach Height** | 4.80 meters | 15.75 feet |
| **Closed / Storage Height** | 0.88 meters | 34.6 inches |
| **Total Product Weight** | 10.8 kg | 23.8 lbs |
| **Maximum Load Capacity** | 150 kg (BIS IS 4130 Heavy Duty) | 330 lbs |
| **Material Composition** | Extruded 7075-T6 Aerospace Aluminium | 7075-T6 Alloy |
| **Rung Spacing** | 300 mm | 11.8 inches |
| **Footing Type** | Articulated Dual-Angle Non-Marking TPR | Thermoplastic Rubber |
| **Safety Certifications** | BIS IS 4130 : 2002 (Indian Standard) | BIS IS Certified |
| **Warranty** | Lifetime Structural / 5-Year Mechanism | Lifetime Assurance |

---

## 5. Ideal Applications
> 💡 **Google Sites Action Steps to Embed**:
> 1. In Google Sites right sidebar, click **Insert** → Click **Embed (`< >`)**.
> 2. Click the **Embed code** tab at the top of the popup.
> 3. Copy and paste the HTML snippet below into the box → Click **Next** → Click **Insert**.
> 4. Drag the bottom blue handle downward to **~380px height** (Desktop) so all 3 application cards display cleanly without scrollbars.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 16px; color: #1a1d23; }
  .apps-container {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    padding: 24px 26px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  }
  .apps-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 22px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .badge {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    color: #ff5e14;
    border: 1px solid rgba(255, 94, 20, 0.28);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .title {
    font-family: 'Oswald', sans-serif;
    font-size: 1.45rem;
    text-transform: uppercase;
    color: #1a1d23;
    letter-spacing: 0.5px;
    line-height: 1.2;
  }
  .title span { color: #ff5e14; }
  .subtitle {
    font-size: 0.88rem;
    color: #7b8290;
    margin-top: 4px;
    max-width: 620px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
  }
  .app-card {
    background: #f8f9fa;
    border: 1px solid #e2e5ea;
    border-radius: 10px;
    padding: 22px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  }
  .app-card:hover {
    transform: translateY(-3px);
    border-color: #ff5e14;
    box-shadow: 0 8px 24px rgba(255, 94, 20, 0.1);
    background: #ffffff;
  }
  .icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #e2e5ea;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 14px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.04);
  }
  .app-card:hover .icon-wrap {
    background: #fef6f2;
    border-color: rgba(255, 94, 20, 0.3);
  }
  .tag {
    font-size: 0.72rem;
    font-weight: 700;
    color: #ff5e14;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-bottom: 6px;
    display: block;
  }
  .app-title {
    font-weight: 700;
    font-size: 1.05rem;
    color: #1a1d23;
    margin-bottom: 8px;
    line-height: 1.3;
  }
  .app-desc {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.55;
    margin-bottom: 16px;
    flex-grow: 1;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #ffffff;
    border: 1px solid #e2e5ea;
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
    color: #374151;
    width: fit-content;
  }
  .pill-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff5e14;
  }
  .footer-bar {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid #edf0f4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 0.82rem;
    color: #6b7280;
  }
  .footer-cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #ff5e14;
    color: #ffffff;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: background 0.18s;
  }
  .footer-cta:hover { background: #e04f08; }
</style>
</head>
<body>
  <div class="apps-container">
    <div class="apps-header">
      <div>
        <span class="badge">Field-Tested Trade Sectors</span>
        <div class="title">TelePro 360 — <span>Ideal Applications</span></div>
        <p class="subtitle">Compact single-person deployment designed for rapid elevation tasks across Indian urban and telecom networks.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏢</div>
          <span class="tag">Residential & Real Estate</span>
          <div class="app-title">Property & Roof Inspectors</div>
          <p class="app-desc">Easily carry up apartment stairs or fit into compact lift lobbies in Indian residential towers for rapid ceiling and terrace inspections.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>88 cm Boot-Friendly Storage</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">📡</div>
          <span class="tag">Telecom & Infrastructure</span>
          <div class="app-title">Telecom & Fibre Technicians</div>
          <p class="app-desc">Swift deployment for BSNL, Airtel, and Jio field crews servicing junction boxes and rooftop dishes without roof-rack clearance issues.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Rapid Single-Tech Deploy</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏠</div>
          <span class="tag">Interior & Smart Home</span>
          <div class="app-title">Smart Home & DIY Enthusiasts</div>
          <p class="app-desc">Effortlessly stores in compact Indian urban flats, under beds, or in utility cupboards for quick lighting and smart device installs.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>1.2s Soft-Close Air Damping</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Standardized access equipment for Indian field engineers, technicians, and contractors</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

### Reference Markdown:
- **Property & Roof Inspectors**: Easily carry up apartment stairs or fit into compact lift lobbies in Indian residential towers.
- **Telecom & Fibre Technicians**: Swift deployment for BSNL, Airtel, and Jio infrastructure work without roof-rack clearance issues.
- **Smart Home & DIY Enthusiasts**: Effortlessly stores in small Indian urban apartments, under beds, or in utility cupboards.
