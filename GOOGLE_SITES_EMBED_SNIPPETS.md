# Google Sites Ready-to-Paste Embed Code Snippets (Light Design)

This guide provides standalone, light-themed HTML/CSS code snippets designed specifically for embedding into **Google Sites**. Each container snippet replicates the premium design from `index.html` while functioning properly inside Google Sites' iframe sandbox.

---

## 📖 Master How-To: How to Embed Any Container in Google Sites

Follow these exact steps for **every snippet** in this document:

### Step 1: Open Your Page & Add an Embed Block
1. In Google Sites editor (`sites.google.com`), open your project.
2. In the right-hand sidebar, click the **Pages** tab and click on the page you want to edit (e.g., *Home*).
3. Switch to the **Insert** tab in the top-right sidebar.
4. Click the **Embed** button (icon looks like `< >`).

### Step 2: Paste the Code
1. In the modal that appears, click the **Embed code** tab (do **NOT** use the "By URL" tab).
2. Copy the entire HTML block for that container from this guide.
3. Paste it into the box and click **Next**.
4. You will see a live preview. Click **Insert**.

### Step 3: Crucial Handle Adjustments (Prevent Scrollbars & Fix Width)
When Google Sites inserts an embed, it defaults to a small, narrow box with ugly vertical and horizontal scrollbars. You must resize it manually:
- **Full Width**: Click the embed box. Blue circle handles will appear on all edges. Grab the **right blue handle** and drag it all the way to the right grid margin (12 columns wide).
- **Height (Kill Scrollbars)**: Grab the **bottom-center blue circle handle** and drag it **downward** until the vertical scrollbar completely disappears, plus an extra 20px of breathing room.
- *Tip*: Look at the **Recommended Height** listed above each snippet below for the target height!

### Step 4: Section Background Styling
- Hover your mouse over the far-left edge of the section containing your embed.
- Click the **Section Background** icon (the small painter's palette 🎨).
- Choose:
  - **Regular (White)**: For sections with white cards on a faint page background.
  - **Emphasis 1 (Light Gray)**: Adds a subtle background contrast that makes the white cards pop.

### Step 5: How Links Work (`target="_top"`)
- All links inside these snippets already include `target="_top"`.
- This ensures clicking a button opens the target page in the **main browser window** rather than being trapped inside the tiny iframe box.

---

## Page-by-Page Embed Snippet Library

---

### Snippet 0: Commercial Advertisement Film Player (Google Drive Video Showcase)
> **Page**: Home / Products Hub / Social Media Hub  
> **Placement**: Featured showcase right below Hero section or above Product Fleet Grid.  
> **Section Background**: Regular (White) or Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~650px – 700px height (Desktop) / ~480px (Mobile).  
> **Google Drive Link**: `https://drive.google.com/file/d/1SPRpuoakbj7Nla20U6sk9cD_PfY5VHwP/preview`  

#### Option 1: Clean Minimalist Responsive Embed
```html
<div style="position: relative; width: 100%; max-width: 1100px; margin: 0 auto; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 14px; box-shadow: 0 12px 40px rgba(0,0,0,0.2); background: #000;">
  <iframe 
    src="https://drive.google.com/file/d/1SPRpuoakbj7Nla20U6sk9cD_PfY5VHwP/preview" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
    title="Ascentix Ladders Commercial Ad"
    allow="autoplay; fullscreen"
    allowfullscreen>
  </iframe>
</div>
```

#### Option 2: Branded Product Showcase Card (Header + Video + Spec Badges + CTA)
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 12px 16px; color: #1a1d23; }
  .video-showcase-card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 14px;
    padding: 32px 28px;
    max-width: 1100px;
    margin: 0 auto;
    box-shadow: 0 6px 24px rgba(0,0,0,0.06);
    position: relative;
    overflow: hidden;
  }
  .video-showcase-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 5px; height: 100%;
    background: #ff5e14;
  }
  .header-area {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 22px;
  }
  .badge {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    border: 1px solid rgba(255, 94, 20, 0.3);
    color: #ff5e14;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    padding: 5px 12px;
    border-radius: 20px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .title {
    font-family: 'Oswald', sans-serif;
    font-size: 2.1rem;
    text-transform: uppercase;
    color: #1a1d23;
    line-height: 1.15;
  }
  .title span { color: #ff5e14; }
  .subtitle {
    color: #64748b;
    font-size: 0.92rem;
    margin-top: 6px;
    max-width: 620px;
    line-height: 1.5;
  }
  .cta-badge-group {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .cert-pill {
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    font-size: 0.76rem;
    font-weight: 700;
    color: #334155;
    padding: 6px 12px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    background: #0f172a;
  }
  .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid #edf0f4;
  }
  .highlights {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    font-size: 0.82rem;
    font-weight: 600;
    color: #475569;
  }
  .highlight-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .dot {
    width: 7px;
    height: 7px;
    background: #ff5e14;
    border-radius: 50%;
    display: inline-block;
  }
  .actions {
    display: flex;
    gap: 12px;
  }
  .btn-primary {
    background: #ff5e14;
    color: #ffffff;
    font-size: 0.82rem;
    font-weight: 700;
    padding: 10px 18px;
    border-radius: 6px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: background 0.2s;
    cursor: pointer;
  }
  .btn-primary:hover { background: #e04f08; }
  @media (max-width: 768px) {
    .video-showcase-card { padding: 22px 18px; }
    .title { font-size: 1.6rem; }
    .footer-bar { flex-direction: column; align-items: flex-start; }
    .actions { width: 100%; }
    .btn-primary { width: 100%; text-align: center; }
  }
</style>
</head>
<body>
  <div class="video-showcase-card">
    <div class="header-area">
      <div>
        <span class="badge">Official Product Commercial</span>
        <h2 class="title">Engineered for the <span>Summit of Safety</span></h2>
        <p class="subtitle">Watch our aerospace-grade alloy stiles and zero-wobble locking geometry tested under extreme real-world job-site loads.</p>
      </div>
      <div class="cta-badge-group">
        <div class="cert-pill">BIS IS 4130 / 4131</div>
        <div class="cert-pill">10-Yr Warranty</div>
      </div>
    </div>

    <div class="video-wrapper">
      <iframe 
        src="https://drive.google.com/file/d/1SPRpuoakbj7Nla20U6sk9cD_PfY5VHwP/preview" 
        title="Ascentix Ladders Product Commercial"
        allow="autoplay; fullscreen"
        allowfullscreen>
      </iframe>
    </div>

    <div class="footer-bar">
      <div class="highlights">
        <span class="highlight-item"><span class="dot"></span> 7075-T6 Aerospace Alloy</span>
        <span class="highlight-item"><span class="dot"></span> 500 KG Static Load</span>
        <span class="highlight-item"><span class="dot"></span> Air-Damped Soft-Close</span>
      </div>
      <div class="actions">
        <a href="https://sites.google.com/view/ascentix-ladders/products" target="_top" class="btn-primary">Explore All 6 Product Models →</a>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 1: Home Page — Stat Callout & Engineering Proof Bar
> **Page**: Home  
> **Placement**: Right below your Hero banner section.  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~160px height (Desktop) / ~260px (Mobile).

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 12px 16px; }
  .stats-bar {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    padding: 20px 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }
  .stat-item { text-align: center; border-right: 1px solid #edf0f4; padding: 0 10px; }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: 'Oswald', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    color: #ff5e14;
    line-height: 1.1;
  }
  .stat-label {
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a1d23;
    margin-top: 4px;
  }
  .stat-sub { font-size: 0.74rem; color: #7b8290; margin-top: 2px; }
  @media (max-width: 640px) {
    .stat-item { border-right: none; border-bottom: 1px solid #edf0f4; padding-bottom: 12px; }
    .stat-item:last-child { border-bottom: none; }
  }
</style>
</head>
<body>
  <div class="stats-bar">
    <div class="stat-item">
      <div class="stat-num">170 <span style="font-size:1.2rem;">KG</span></div>
      <div class="stat-label">BIS IS 4130 Heavy Duty Rated</div>
      <div class="stat-sub">Highest commercial duty class in India</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">84%</div>
      <div class="stat-label">Less Lateral Sway</div>
      <div class="stat-sub">Truss-stabilized box stiles</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">35 kV</div>
      <div class="stat-label">Dielectric Non-Conductive</div>
      <div class="stat-sub">Safe for Indian electrical infrastructure</div>
    </div>
    <div class="stat-item">
      <div class="stat-num">0-Pinch</div>
      <div class="stat-label">Pneumatic Soft-Close</div>
      <div class="stat-sub">Patented air-damped descent</div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 2: Home Page — The Ascentix Zero-Fail Architecture Matrix
> **Page**: Home  
> **Placement**: Middle of Home page (Section 3).  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~420px height.

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
  .section-header { text-align: center; margin-bottom: 24px; }
  .badge {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    color: #ff5e14;
    border: 1px solid rgba(255, 94, 20, 0.3);
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .title { font-family: 'Oswald', sans-serif; font-size: 1.85rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; }
  .title span { color: #ff5e14; }
  .subtitle { color: #7b8290; font-size: 0.95rem; margin-top: 6px; }
  
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 20px; margin-top: 20px; }
  .card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 24px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 94, 20, 0.12);
  }
  .card-num {
    font-family: 'Oswald', sans-serif;
    font-size: 2.2rem;
    color: #ff5e14;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 10px;
  }
  .card-title { font-size: 1.15rem; font-weight: 700; color: #1a1d23; margin-bottom: 8px; }
  .card-desc { font-size: 0.9rem; line-height: 1.6; color: #3d4350; }
  .card-tag {
    display: inline-block;
    margin-top: 14px;
    font-size: 0.72rem;
    font-weight: 700;
    color: #ff5e14;
    background: rgba(255, 94, 20, 0.08);
    padding: 4px 10px;
    border-radius: 4px;
  }
</style>
</head>
<body>
  <div class="section-header">
    <div class="badge">Structural Superiority</div>
    <h2 class="title">The Ascentix <span>Zero-Fail</span> Architecture</h2>
    <p class="subtitle">Eliminating 90% of construction & industrial climbing incidents across India through aerospace-grade mechanical engineering.</p>
  </div>
  <div class="grid">
    <div class="card">
      <div class="card-num">01</div>
      <div class="card-title">Zero-Wobble Geometry</div>
      <div class="card-desc">Internal triangular trusses and 7075-T6 box-beam stiles eliminate torsional twisting by 84%. Confident, rock-solid footing at maximum 18-ft extension.</div>
      <span class="card-tag">84% Less Sway Certified</span>
    </div>
    <div class="card">
      <div class="card-num">02</div>
      <div class="card-title">Toray Carbon Fiber</div>
      <div class="card-desc">High-modulus composite stiles tested to 35,000 Volts dielectric resistance. 60% lighter than standard fiberglass with zero electromagnetic conductivity.</div>
      <span class="card-tag">Dielectric 35kV Certified</span>
    </div>
    <div class="card">
      <div class="card-num">03</div>
      <div class="card-title">Pneumatic Air Damping</div>
      <div class="card-desc">Patented dual hydraulic/pneumatic valving cushions every rung during retraction. Smooth, quiet descent protects fingers and eliminates sudden drop accidents.</div>
      <span class="card-tag">Zero-Pinch Air-Damped</span>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 3: Products Page — Full Technical Comparison Table
> **Page**: Products  
> **Placement**: Beneath the products list / catalog overview.  
> **Recommended Height in Google Sites**: Drag blue handle to **~620px height** (so all 6 product rows, including VaultStep Deluxe, are visible without being cut off).

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
  .table-container {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }
  .header-bar {
    background: #f8f9fa;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e5ea;
  }
  .header-title { font-family: 'Oswald', sans-serif; font-size: 1.3rem; text-transform: uppercase; color: #ff5e14; letter-spacing: 1px; }
  .header-sub { font-size: 0.82rem; font-weight: 600; color: #7b8290; }
  
  table { width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left; }
  th {
    background: #f1f3f6;
    color: #4b5563;
    padding: 14px 20px;
    font-weight: 700;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #e2e5ea;
  }
  td { padding: 16px 20px; border-bottom: 1px solid #edf0f4; color: #1a1d23; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  
  .model-name { font-weight: 700; color: #1a1d23; font-size: 1rem; }
  .model-sub { font-size: 0.78rem; color: #7b8290; margin-top: 2px; }
  .badge-duty {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    color: #ff5e14;
    border: 1px solid rgba(255, 94, 20, 0.25);
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
  }
  .price { font-family: 'Oswald', sans-serif; font-size: 1.15rem; color: #ff5e14; font-weight: 700; }
</style>
</head>
<body>
  <div class="table-container">
    <div class="header-bar">
      <div class="header-title">Ascentix Professional Lineup Specifications</div>
      <div class="header-sub">BIS IS 4130 / 4131 / 1875 / 1364 — All 6 Models — Indian Standards</div>
    </div>
    <div style="overflow-x:auto;">
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Mechanism</th>
            <th>Reach Height</th>
            <th>Weight</th>
            <th>BIS IS Rating</th>
            <th>MSRP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="model-name">TelePro 360</div>
              <div class="model-sub">Aerospace 7075-T6 Alloy</div>
            </td>
            <td>Air-Damped Telescopic</td>
            <td>12.5 ft (3.8 m)</td>
            <td>11.0 kg</td>
            <td><span class="badge-duty">BIS IS 4130 HD (170 kg)</span></td>
            <td><span class="price">₹28,999</span></td>
          </tr>
          <tr>
            <td>
              <div class="model-name">CarbonApex X1</div>
              <div class="model-sub">Pure Toray Carbon Fiber</div>
            </td>
            <td>Ultralight Non-Conductive Step</td>
            <td>8.0 ft (2.4 m)</td>
            <td>3.2 kg</td>
            <td><span class="badge-duty">BIS IS 4131 HD (180 kg)</span></td>
            <td><span class="price">₹39,999</span></td>
          </tr>
          <tr>
            <td>
              <div class="model-name">MultiFlex Transform</div>
              <div class="model-sub">Quad-Lock Articulated Joint</div>
            </td>
            <td>14-in-1 Multi-Configuration</td>
            <td>17.0 ft (5.2 m)</td>
            <td>14.2 kg</td>
            <td><span class="badge-duty">BIS IS 4130 HD (150 kg)</span></td>
            <td><span class="price">₹34,999</span></td>
          </tr>
          <tr>
            <td>
              <div class="model-name">TitanSafe Industrial</div>
              <div class="model-sub">Industrial Reinforced Truss</div>
            </td>
            <td>360° Safety Enclosure Cage</td>
            <td>10.0 ft (3.0 m)</td>
            <td>26.5 kg</td>
            <td><span class="badge-duty">BIS IS 4130 HD (170 kg)</span></td>
            <td><span class="price">₹51,999</span></td>
          </tr>
          <tr>
            <td>
              <div class="model-name">AeroReach Pro</div>
              <div class="model-sub">6061-T6 Aerospace Alloy Rails</div>
            </td>
            <td>AeroLock™ One-Touch Telescoping</td>
            <td>20.3 ft (6.2 m)</td>
            <td>8.4 kg</td>
            <td><span class="badge-duty">BIS IS 1875 T1 (150 kg)</span></td>
            <td><span class="price">₹34,999</span></td>
          </tr>
          <tr>
            <td>
              <div class="model-name">VaultStep Deluxe</div>
              <div class="model-sub">VaultFlex™ 5-in-1 Combo Hinge</div>
            </td>
            <td>5-in-1 Multi-Position Combination</td>
            <td>16.6 ft (5.05 m)</td>
            <td>11.8 kg</td>
            <td><span class="badge-duty">BIS IS 1364 T1 (150 kg)</span></td>
            <td><span class="price">₹22,999</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 3B: Products Listing Page — All 6 Models Card Grid (BIS IS Indian Standards)
> **Page**: Products (Main catalog listing sub-page)  
> **Placement**: Below the page heading / intro text.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~920px height.

> 🔗 **How to link "View Details →" buttons to each product page**:
> Because Google Sites runs embeds inside a sandboxed `<iframe>`, buttons must use the **full published URL** of each product subpage with `target="_top"` so the main browser window redirects properly:
> 1. In Google Sites, navigate to the product subpage (e.g. **Pages** → **Products** → **TelePro 360**).
> 2. Click the **🔗 ("Copy link to page")** icon in the top header toolbar.
> 3. That copied link is your exact page URL (e.g. `https://sites.google.com/view/YOUR_SITE_NAME/products/telepro-360`).
> 4. In the code below, replace `https://sites.google.com/view/YOUR_SITE_NAME/products/...` with that exact copied link for each ladder.
> 📸 **How to get your Google Drive image URLs** (do this before pasting the code):
> 1. Upload your product images to your **Google Drive** (inside your Sites project folder).
> 2. Right-click a photo → **Share** → **Change access to "Anyone with the link"** → **Copy link**.
> 3. The copied link looks like: `https://drive.google.com/file/d/`**`1roShJJFi19SGia4bxf8Ys9Jfr4B0tHTs`**`/view?usp=sharing`
> 4. Extract only the **File ID** (the bold part above between `/d/` and `/view`).
> 5. Build the working embed URL using Google's public CDN:  
>    **`https://lh3.googleusercontent.com/d/YOUR_FILE_ID`**  
>    *(Note: Do NOT use `drive.google.com/uc?export=view` — Google now blocks that format in embeds with `Cross-Origin-Resource-Policy: same-site`, causing a broken image icon!)*
> 6. Replace each product image `src` in the code below with its corresponding `https://lh3.googleusercontent.com/d/...` URL.

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
  .header { text-align: center; margin-bottom: 28px; }
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 10px; }
  .page-title { font-family: 'Oswald', sans-serif; font-size: 1.9rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .page-title span { color: #ff5e14; }
  .page-sub { font-size: 0.92rem; color: #7b8290; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
  .product-card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.06);
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    display: flex;
    flex-direction: column;
  }
  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(255,94,20,0.13);
    border-color: rgba(255,94,20,0.4);
  }
  .card-img-wrap {
    position: relative;
    width: 100%;
    height: 200px;
    background: #f4f5f7;
    overflow: hidden;
  }
  .card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 6px;
    display: block;
    transition: transform 0.35s ease;
  }
  .product-card:hover .card-img-wrap img { transform: scale(1.04); }
  .model-num {
    position: absolute;
    top: 10px; left: 10px;
    background: #ff5e14;
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
  }
  .card-body { padding: 18px 20px; flex-grow: 1; display: flex; flex-direction: column; }
  .product-name { font-family: 'Oswald', sans-serif; font-size: 1.3rem; text-transform: uppercase; letter-spacing: 0.5px; color: #1a1d23; margin-bottom: 6px; }
  .product-tagline { font-size: 0.86rem; color: #4b5563; line-height: 1.5; margin-bottom: 14px; flex-grow: 1; }
  .spec-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
  .chip {
    display: inline-block;
    background: #f4f5f7;
    border: 1px solid #e2e5ea;
    color: #3d4350;
    font-size: 0.72rem;
    font-weight: 600;
    padding: 3px 9px;
    border-radius: 4px;
  }
  .chip.accent { background: rgba(255,94,20,0.08); border-color: rgba(255,94,20,0.28); color: #ff5e14; }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    border-top: 1px solid #edf0f4;
    background: #fafbfc;
  }
  .price { font-family: 'Oswald', sans-serif; font-size: 1.25rem; color: #ff5e14; font-weight: 700; }
  .view-btn {
    background: #ff5e14;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition: background 0.18s;
  }
  .view-btn:hover { background: #e04f08; }
</style>
</head>
<body>
  <div class="header">
    <div class="badge">BIS IS Certified — All 6 Models</div>
    <div class="page-title">Ascentix <span>Climbing Systems</span> Portfolio</div>
    <p class="page-sub">Six precision-engineered models covering every Indian industrial, electrical, and domestic access requirement — all BIS IS certified.</p>
  </div>

  <div class="grid">

    <!-- Model 01 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/1roShJJFi19SGia4bxf8Ys9Jfr4B0tHTs" alt="TelePro 360">
        <span class="model-num">Model 01</span>
      </div>
      <div class="card-body">
        <div class="product-name">TelePro 360</div>
        <p class="product-tagline">Aerospace 7075-T6 alloy telescoping ladder that collapses to 88 cm for car-boot storage. Pinch-free quad-valve air-damping for India's long-shift workers.</p>
        <div class="spec-chips">
          <span class="chip">3.8 m Reach</span>
          <span class="chip">10.8 kg</span>
          <span class="chip">150 kg Duty</span>
          <span class="chip accent">● BIS IS 4130</span>
          <span class="chip">4 Colour Finishes</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹28,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/telepro-360" target="_top">View Details →</a>
      </div>
    </div>

    <!-- Model 02 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/YOUR_FILE_ID_CARBONAPEX" alt="CarbonApex X1">
        <span class="model-num">Model 02</span>
      </div>
      <div class="card-body">
        <div class="product-name">CarbonApex X1</div>
        <p class="product-tagline">India's lightest professional step ladder at 3.2 kg. 100% non-conductive Toray 3K carbon fibre tested to 35 kV — essential for Indian 33 kV / 66 kV electrical sites.</p>
        <div class="spec-chips">
          <span class="chip">1.45 m Height</span>
          <span class="chip">3.2 kg</span>
          <span class="chip">180 kg Duty</span>
          <span class="chip accent">● BIS IS 4131</span>
          <span class="chip">35 kV Dielectric</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹39,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/carbonapex-x1" target="_top">View Details →</a>
      </div>
    </div>

    <!-- Model 03 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/YOUR_FILE_ID_MULTIFLEX" alt="MultiFlex Transform">
        <span class="model-num">Model 03</span>
      </div>
      <div class="card-body">
        <div class="product-name">MultiFlex Transform</div>
        <p class="product-tagline">14-in-1 articulated multi-position ladder with patented quad-lock dual-pin hinges and auto-leveling outriggers — stable on India's sloped rooftops, stairwells, and uneven terrain.</p>
        <div class="spec-chips">
          <span class="chip">5.4 m Reach</span>
          <span class="chip">14.2 kg</span>
          <span class="chip">150 kg Duty</span>
          <span class="chip accent">● BIS IS 4130</span>
          <span class="chip">14-in-1 Modes</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹34,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/multiflex-transform" target="_top">View Details →</a>
      </div>
    </div>

    <!-- Model 04 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/YOUR_FILE_ID_TITANSAFE" alt="TitanSafe Industrial">
        <span class="model-num">Model 04</span>
      </div>
      <div class="card-body">
        <div class="product-name">TitanSafe Industrial</div>
        <p class="product-tagline">BIS IS 4130 Heavy Duty 170 kg rated platform ladder with full 360° surround safety cage, auto-closing gate, and spring-loaded auto-braking casters — Factories Act 1948 compliant.</p>
        <div class="spec-chips">
          <span class="chip">2.45 m Platform</span>
          <span class="chip">26.5 kg</span>
          <span class="chip">170 kg Duty</span>
          <span class="chip accent">● BIS IS 4130 HD</span>
          <span class="chip">360° Safety Cage</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹51,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/titansafe-industrial" target="_top">View Details →</a>
      </div>
    </div>

    <!-- Model 05 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/YOUR_FILE_ID_AEROREACH" alt="AeroReach Pro">
        <span class="model-num">Model 05</span>
      </div>
      <div class="card-body">
        <div class="product-name">AeroReach Pro</div>
        <p class="product-tagline">One-touch AeroLock™ rung-by-rung deployment reaches 6.2 m from a 1.17 m transport pack. 6061-T6 aerospace alloy rails with 180° self-adjusting stabiliser feet for slopes up to 15°.</p>
        <div class="spec-chips">
          <span class="chip">6.2 m Reach</span>
          <span class="chip">8.4 kg</span>
          <span class="chip">150 kg Duty</span>
          <span class="chip accent">● BIS IS 1875</span>
          <span class="chip">One-Touch Deploy</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹34,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/aeroreach-pro" target="_top">View Details →</a>
      </div>
    </div>

    <!-- Model 06 -->
    <div class="product-card">
      <div class="card-img-wrap">
        <img src="https://lh3.googleusercontent.com/d/YOUR_FILE_ID_VAULTSTEP" alt="VaultStep Deluxe">
        <span class="model-num">Model 06</span>
      </div>
      <div class="card-body">
        <div class="product-name">VaultStep Deluxe</div>
        <p class="product-tagline">VaultFlex™ die-cast CNC hinge converts to 5 positions: A-frame, lean-to, staircase, scaffold base, and flat-fold storage. Extra-wide 260 mm steps with integrated tool caddy shelf.</p>
        <div class="spec-chips">
          <span class="chip">5.05 m Reach</span>
          <span class="chip">11.8 kg</span>
          <span class="chip">150 kg Duty</span>
          <span class="chip accent">● BIS IS 1364</span>
          <span class="chip">5-in-1 Modes</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="price">₹22,999</span>
        <a class="view-btn" href="https://sites.google.com/view/YOUR_SITE_NAME/products/vaultstep-deluxe" target="_top">View Details →</a>
      </div>
    </div>

  </div>
</body>
</html>

---

### Snippet 4: The Team Page — Complete 11-Member Directory Grid (Refined Executive UI)
> **Page**: The Team  
> **Placement**: Below team intro description.  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~660px height.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
  body {
    background: transparent;
    padding: 10px 4px;
    color: #0f172a;
  }

  /* ── 11-MEMBER RESPONSIVE GRID ── */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
  }

  /* ── CARD CONTAINER (NO GREY TOP BORDER) ── */
  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 18px 18px 14px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.03);
    transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.22s ease, border-color 0.22s ease;
    position: relative;
  }
  .card:hover {
    transform: translateY(-4px);
    border-color: #ff5e14;
    box-shadow: 0 12px 26px -4px rgba(255, 94, 20, 0.14), 0 4px 10px rgba(0, 0, 0, 0.03);
  }

  /* Leader Spotlight Accent */
  .card.is-leader {
    border-left: 4px solid #ff5e14;
    background: linear-gradient(145deg, #ffffff 0%, #fffbf8 100%);
  }

  /* Top Bar (Role Pill + Index) */
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }
  .role-tag {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 3px 10px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .role-tag::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }

  /* 7 Designated Role Color Schemes */
  .role-leader { color: #ff5e14; background: rgba(255, 94, 20, 0.08); border: 1px solid rgba(255, 94, 20, 0.25); }
  .role-dev { color: #2563eb; background: rgba(37, 99, 235, 0.08); border: 1px solid rgba(37, 99, 235, 0.25); }
  .role-design { color: #7c3aed; background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); }
  .role-social { color: #e11d48; background: rgba(225, 29, 72, 0.08); border: 1px solid rgba(225, 29, 72, 0.25); }
  .role-pm { color: #0d9488; background: rgba(13, 148, 136, 0.08); border: 1px solid rgba(13, 148, 136, 0.25); }
  .role-analytics { color: #d97706; background: rgba(217, 119, 6, 0.08); border: 1px solid rgba(217, 119, 6, 0.25); }
  .role-research { color: #0284c7; background: rgba(2, 132, 199, 0.08); border: 1px solid rgba(2, 132, 199, 0.25); }

  .card-idx {
    font-size: 0.72rem;
    font-weight: 700;
    color: #94a3b8;
  }

  /* Profile Identity Row (Avatar + Name & Subtitle) */
  .profile-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;
  }
  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff5e14;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    border: 1.5px solid rgba(255, 94, 20, 0.3);
    flex-shrink: 0;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }
  .card:hover .avatar {
    transform: scale(1.05);
    border-color: #ff5e14;
  }
  .card.is-leader .avatar {
    background: linear-gradient(135deg, #ff5e14 0%, #e04f08 100%);
    color: #ffffff;
    border-color: #ff5e14;
    box-shadow: 0 2px 8px rgba(255, 94, 20, 0.25);
  }
  .name-block {
    min-width: 0;
  }
  .member-name {
    font-family: 'Oswald', sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #0f172a;
    line-height: 1.25;
    letter-spacing: 0.3px;
    margin-bottom: 2px;
  }
  .dept-subtitle {
    font-size: 0.7rem;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Member Description */
  .bio {
    font-size: 0.82rem;
    color: #475569;
    line-height: 1.48;
    margin-bottom: 12px;
    flex-grow: 1;
  }

  /* Bottom Card Footer */
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid #f1f5f9;
    margin-top: auto;
  }
  .focus-chip {
    font-size: 0.68rem;
    font-weight: 600;
    color: #475569;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .lead-status {
    font-size: 0.68rem;
    font-weight: 600;
    color: #10b981;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .lead-status::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #10b981;
  }

  @media (max-width: 640px) {
    .team-grid { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

  <div class="team-grid">

    <!-- 01: Leader (Fixed: Rakesh Kumar Behera) -->
    <article class="card is-leader">
      <div class="card-top">
        <span class="role-tag role-leader">Leader (1)</span>
        <span class="card-idx">#01</span>
      </div>
      <div class="profile-row">
        <div class="avatar">RB</div>
        <div class="name-block">
          <h3 class="member-name">Rakesh Kumar Behera</h3>
          <div class="dept-subtitle">Executive Strategy</div>
        </div>
      </div>
      <p class="bio">Coordinates the company concept, product direction, and multidisciplinary execution across all divisions.</p>
      <div class="card-footer">
        <span class="focus-chip">Executive Direction</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 02: Developer Lead (Aditya Ajay Limkar) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-dev">Developer Lead</span>
        <span class="card-idx">#02</span>
      </div>
      <div class="profile-row">
        <div class="avatar">AL</div>
        <div class="name-block">
          <h3 class="member-name">Aditya Ajay Limkar</h3>
          <div class="dept-subtitle">Hardware & Prototype</div>
        </div>
      </div>
      <p class="bio">Guides ladder design architecture, structural locking mechanisms, and prototype planning.</p>
      <div class="card-footer">
        <span class="focus-chip">R&D & Engineering</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 03: Design Lead (Kritika Rathi) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-design">Design Lead</span>
        <span class="card-idx">#03</span>
      </div>
      <div class="profile-row">
        <div class="avatar">KR</div>
        <div class="name-block">
          <h3 class="member-name">Kritika Rathi</h3>
          <div class="dept-subtitle">Visual Identity & Finishes</div>
        </div>
      </div>
      <p class="bio">Shapes visual identity, ergonomics, tactile grip texturing, and anodized protective finishes.</p>
      <div class="card-footer">
        <span class="focus-chip">Industrial Design</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 04: Social Media (Purvi) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-social">Social Media</span>
        <span class="card-idx">#04</span>
      </div>
      <div class="profile-row">
        <div class="avatar">P</div>
        <div class="name-block">
          <h3 class="member-name">Purvi</h3>
          <div class="dept-subtitle">Brand & Community</div>
        </div>
      </div>
      <p class="bio">Plans the brand’s social content, contractor spotlight reels, and omnichannel community presence.</p>
      <div class="card-footer">
        <span class="focus-chip">Social Outreach</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 05: Product Managers (Sachin Kumar) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-pm">Product Managers</span>
        <span class="card-idx">#05</span>
      </div>
      <div class="profile-row">
        <div class="avatar">SK</div>
        <div class="name-block">
          <h3 class="member-name">Sachin Kumar</h3>
          <div class="dept-subtitle">Residential Line</div>
        </div>
      </div>
      <p class="bio">Defines user requirements and safety roadmaps for household step stools and compact folding models.</p>
      <div class="card-footer">
        <span class="focus-chip">Domestic Product</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 06: Product Managers (Shukla Shivam Rajendra) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-pm">Product Managers</span>
        <span class="card-idx">#06</span>
      </div>
      <div class="profile-row">
        <div class="avatar">SR</div>
        <div class="name-block">
          <h3 class="member-name">Shukla Shivam Rajendra</h3>
          <div class="dept-subtitle">Professional Line</div>
        </div>
      </div>
      <p class="bio">Defines heavy-duty specifications, contractor load capacities, and industrial compliance standards.</p>
      <div class="card-footer">
        <span class="focus-chip">Commercial Product</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 07: Analytics (Anuj Tripathi) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-analytics">Analytics</span>
        <span class="card-idx">#07</span>
      </div>
      <div class="profile-row">
        <div class="avatar">AT</div>
        <div class="name-block">
          <h3 class="member-name">Anuj Tripathi</h3>
          <div class="dept-subtitle">Data & Feedback</div>
        </div>
      </div>
      <p class="bio">Organizes concept feedback, site user telemetry, and performance comparison metrics for R&D.</p>
      <div class="card-footer">
        <span class="focus-chip">Data Intelligence</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 08: Market Research (Harsha) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-research">Market Research</span>
        <span class="card-idx">#08</span>
      </div>
      <div class="profile-row">
        <div class="avatar">H</div>
        <div class="name-block">
          <h3 class="member-name">Harsha</h3>
          <div class="dept-subtitle">Customer Insights</div>
        </div>
      </div>
      <p class="bio">Studies customer ergonomic pain points, regional trade requirements, and emerging safety trends.</p>
      <div class="card-footer">
        <span class="focus-chip">Market Analysis</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 09: Product Managers (Navneet Kumar Pandit) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-pm">Product Managers</span>
        <span class="card-idx">#09</span>
      </div>
      <div class="profile-row">
        <div class="avatar">NP</div>
        <div class="name-block">
          <h3 class="member-name">Navneet Kumar Pandit</h3>
          <div class="dept-subtitle">Feature Engineering</div>
        </div>
      </div>
      <p class="bio">Supports model concepts, modular accessory development, and iterative prototype testing.</p>
      <div class="card-footer">
        <span class="focus-chip">Modular Features</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 10: Design Lead (Wilson Toppo) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-design">Design Lead</span>
        <span class="card-idx">#10</span>
      </div>
      <div class="profile-row">
        <div class="avatar">WT</div>
        <div class="name-block">
          <h3 class="member-name">Wilson Toppo</h3>
          <div class="dept-subtitle">Visual & CAD Assets</div>
        </div>
      </div>
      <p class="bio">Develops 3D product renders, page visual assets, and technical assembly diagrams for user manuals.</p>
      <div class="card-footer">
        <span class="focus-chip">3D CAD & Digital</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

    <!-- 11: Market Research (Apoorva Sharma) -->
    <article class="card">
      <div class="card-top">
        <span class="role-tag role-research">Market Research</span>
        <span class="card-idx">#11</span>
      </div>
      <div class="profile-row">
        <div class="avatar">AS</div>
        <div class="name-block">
          <h3 class="member-name">Apoorva Sharma</h3>
          <div class="dept-subtitle">Field Testing & Voice-of-Customer</div>
        </div>
      </div>
      <p class="bio">Collects direct feedback from residential and trade jobsite users to validate ease-of-use and durability.</p>
      <div class="card-footer">
        <span class="focus-chip">User Testing</span>
        <span class="lead-status">Active</span>
      </div>
    </article>

  </div>
</body>
</html>
```

---

### Snippet 5: Contact Us Page — Interactive Fleet Quote Calculator & Form
> **Page**: Contact Us  
> **Placement**: In the main body of the Contact page.  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~580px height.

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
  .form-box {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    padding: 28px;
    max-width: 680px;
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  .form-header { margin-bottom: 20px; }
  .form-title { font-family: 'Oswald', sans-serif; font-size: 1.6rem; color: #ff5e14; text-transform: uppercase; letter-spacing: 1px; }
  .form-desc { font-size: 0.88rem; color: #7b8290; margin-top: 4px; }
  
  .form-group { margin-bottom: 16px; }
  label { display: block; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #4b5563; letter-spacing: 0.8px; margin-bottom: 6px; }
  input, select, textarea {
    width: 100%;
    background: #f8f9fa;
    border: 1px solid #d1d5db;
    color: #1a1d23;
    padding: 11px 14px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 0.92rem;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
  }
  input:focus, select:focus, textarea:focus { border-color: #ff5e14; background: #ffffff; }
  
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .calc-badge {
    background: #fef6f2;
    border: 1px solid #ff5e14;
    border-radius: 8px;
    padding: 14px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }
  .calc-label { font-size: 0.86rem; color: #1a1d23; font-weight: 600; }
  .calc-price { font-family: 'Oswald', sans-serif; font-size: 1.5rem; color: #ff5e14; font-weight: 700; }
  
  .submit-btn {
    width: 100%;
    background: #ff5e14;
    color: #ffffff;
    border: none;
    padding: 14px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .submit-btn:hover { background: #e04f08; }
  .status-msg {
    display: none;
    margin-top: 14px;
    padding: 12px;
    border-radius: 6px;
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid #22c55e;
    color: #15803d;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 600;
  }
  @media (max-width: 580px) {
    .row { grid-template-columns: 1fr; gap: 8px; }
  }
</style>
</head>
<body>
  <div class="form-box">
    <div class="form-header">
      <h3 class="form-title">Commercial & Fleet Quote Builder</h3>
      <p class="form-desc">Select model and unit volume for instant tiered wholesale pricing estimates.</p>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label>Selected Ladder Model</label>
        <select id="modelSelect" onchange="calculate()">
          <option value="28999">TelePro 360 (₹28,999)</option>
          <option value="39999">CarbonApex X1 (₹39,999)</option>
          <option value="34999">MultiFlex Transform (₹34,999)</option>
          <option value="51999">TitanSafe Industrial (₹51,999)</option>
          <option value="34999">AeroReach Pro (₹34,999)</option>
          <option value="22999">VaultStep Deluxe (₹22,999)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Fleet Quantity</label>
        <select id="qtySelect" onchange="calculate()">
          <option value="1">1 Unit (Single Item)</option>
          <option value="5">5 Units (10% Fleet Disc.)</option>
          <option value="10">10 Units (15% Fleet Disc.)</option>
          <option value="25">25+ Units (20% Enterprise Disc.)</option>
        </select>
      </div>
    </div>
    
    <div class="calc-badge">
      <span class="calc-label">Estimated Price with Volume Discount:</span>
      <span id="priceDisplay" class="calc-price">₹28,999 INR</span>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" id="custName" placeholder="e.g. Rahul Sharma">
      </div>
      <div class="form-group">
        <label>Work Email</label>
        <input type="email" id="custEmail" placeholder="rahul@contracting.co.in">
      </div>
    </div>
    
    <div class="form-group">
      <label>Company / Project Requirements</label>
      <textarea rows="3" placeholder="Tell us about your job-site requirements, ladder reach heights, GST details, or delivery timeline across India..."></textarea>
    </div>
    
    <button type="button" class="submit-btn" onclick="submitQuote()">Request Formal Quote Spec</button>
    <div id="statusMsg" class="status-msg">✓ Quote request submitted! An Ascentix fleet specialist will contact you within 2 business hours (IST).</div>
  </div>

  <script>
    function calculate() {
      const base = parseFloat(document.getElementById('modelSelect').value);
      const qty = parseInt(document.getElementById('qtySelect').value);
      let disc = 1.0;
      if (qty >= 25) disc = 0.80;
      else if (qty >= 10) disc = 0.85;
      else if (qty >= 5) disc = 0.90;
      const total = Math.round(base * qty * disc);
      document.getElementById('priceDisplay').innerText = '\u20b9' + total.toLocaleString('en-IN') + ' INR';
    }
    function submitQuote() {
      const name = document.getElementById('custName').value.trim();
      const email = document.getElementById('custEmail').value.trim();
      if (!name || !email) {
        alert('Please fill out your Name and Work Email.');
        return;
      }
      document.getElementById('statusMsg').style.display = 'block';
    }
  </script>
</body>
</html>
```

---

### Snippet 5B: Contact Us Page — Department Cards & India Headquarters Directory
> **Page**: Contact Us  
> **Placement**: In the left column next to the Quote Builder form (or stacked above it).  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~520px – 560px height.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  body {
    background: transparent;
    padding: 12px;
    color: #1a1d23;
  }
  .contact-cards-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 680px;
    margin: 0 auto;
  }
  .contact-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 22px 26px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.2s ease;
  }
  .contact-card.featured {
    border: 1.5px solid #ff5e14;
    box-shadow: 0 4px 14px rgba(255, 94, 20, 0.08);
  }
  .contact-card:hover {
    border-color: #ff5e14;
    box-shadow: 0 4px 16px rgba(255, 94, 20, 0.12);
    transform: translateY(-2px);
  }
  .card-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ff5e14;
    margin-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-badge {
    font-size: 0.7rem;
    font-weight: 600;
    background: #fff7ed;
    color: #c2410c;
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid #ffedd5;
  }
  .card-title {
    font-size: 1.18rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.35;
  }
  .card-title a {
    color: #0f172a;
    text-decoration: none;
    transition: color 0.2s ease;
  }
  .card-title a:hover {
    color: #ff5e14;
  }
  .card-subtext {
    font-size: 0.88rem;
    color: #64748b;
    margin-top: 6px;
    line-height: 1.45;
  }
  .card-actions {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .action-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.78rem;
    font-weight: 600;
    color: #1e293b;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    padding: 5px 10px;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .action-btn:hover {
    border-color: #ff5e14;
    background: #fff7ed;
    color: #c2410c;
  }
  .action-btn.wa {
    background: #f0fdf4;
    border-color: #bbf7d0;
    color: #15803d;
  }
  .action-btn.wa:hover {
    background: #dcfce7;
    border-color: #22c55e;
  }
  .reg-row {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e2e8f0;
    font-size: 0.76rem;
    color: #64748b;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  @media (max-width: 480px) {
    .contact-card { padding: 18px 20px; }
    .card-title { font-size: 1.05rem; }
    .action-btn { width: 100%; justify-content: center; }
  }
</style>
</head>
<body>
  <div class="contact-cards-container">
    <!-- Card 1: Commercial Fleet Sales -->
    <div class="contact-card featured">
      <div class="card-label">
        <span>COMMERCIAL FLEET SALES (10+ UNITS)</span>
        <span class="card-badge">GST 18% ITC</span>
      </div>
      <div class="card-title">
        <a href="mailto:fleet@ascentixladders.in" target="_top">fleet@ascentixladders.in</a>
      </div>
      <div class="card-subtext">
        1800-120-2546 (Toll-Free India) &middot; Mon&ndash;Sat 9:30am&ndash;6:30pm IST
      </div>
      <div class="card-actions">
        <a href="tel:18001202546" class="action-btn">📞 1800-120-2546</a>
        <a href="https://wa.me/919820045678?text=Hi%20Ascentix%2C%20requesting%20a%20commercial%20fleet%20quote." target="_blank" class="action-btn wa">💬 WhatsApp Desk</a>
      </div>
    </div>

    <!-- Card 2: Technical Support & Warranty -->
    <div class="contact-card">
      <div class="card-label">
        <span>TECHNICAL SUPPORT &amp; BIS CERTIFICATION</span>
        <span class="card-badge" style="background:#eff6ff;color:#1d4ed8;border-color:#dbeafe">BIS IS 4130 / 4131</span>
      </div>
      <div class="card-title">
        <a href="mailto:support@ascentixladders.in" target="_top">support@ascentixladders.in</a>
      </div>
      <div class="card-subtext">
        Guaranteed response within 4 business hours (IST) &middot; +91 (22) 6985 4100
      </div>
      <div class="card-actions">
        <a href="tel:+912269854100" class="action-btn">⚙️ Support Helpline</a>
        <a href="mailto:support@ascentixladders.in?subject=BIS%20Test%20Certificates%20Request" class="action-btn">📄 BIS / 35kV Reports</a>
      </div>
    </div>

    <!-- Card 3: India Corporate Headquarters -->
    <div class="contact-card">
      <div class="card-label">
        <span>INDIA CORPORATE HEADQUARTERS</span>
        <span class="card-badge" style="background:#f8fafc;color:#475569;border-color:#e2e8f0">Mumbai HQ</span>
      </div>
      <div class="card-title">
        Unit 502, Pinnacle Business Park, Andheri East
      </div>
      <div class="card-subtext">
        Mumbai, Maharashtra 400069, India &middot; Next to WEH Metro Station
      </div>
      <div class="reg-row">
        <span><strong>GSTIN:</strong> 27AABCA1234F1Z5</span>
        <span><strong>CIN:</strong> U28112MH2021PTC368942</span>
        <span><strong>Plant:</strong> Chakan MIDC, Pune</span>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 6: Social Media Hub — Verified Channels Grid
> **Page**: Social Media Hub  
> **Placement**: Below channel intro text.  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~420px – 460px height.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  body { background: transparent; padding: 12px; color: #1a1d23; }
  .social-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .social-card {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 26px 20px 20px 20px;
    transition: all 0.25s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
  .social-card:hover {
    border-color: #ff5e14;
    box-shadow: 0 8px 24px rgba(255, 94, 20, 0.12);
    transform: translateY(-3px);
  }
  .icon-box {
    width: 48px;
    height: 48px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-box svg {
    width: 48px;
    height: 48px;
    display: block;
  }
  .channel-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ff5e14;
    margin-bottom: 6px;
  }
  .channel-handle {
    font-size: 1.12rem;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    line-height: 1.3;
    margin-bottom: 10px;
    text-decoration: none;
  }
  .channel-desc {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.5;
    margin-bottom: 18px;
    flex-grow: 1;
  }
  .action-btn {
    width: 100%;
    padding: 9px 14px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #1e293b;
    font-size: 0.85rem;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }
  .action-btn:hover {
    border-color: #ff5e14;
    background: #ff5e14;
    color: #ffffff;
    box-shadow: 0 4px 12px rgba(255, 94, 20, 0.25);
  }
  @media (max-width: 960px) {
    .social-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
  @media (max-width: 520px) {
    .social-grid { grid-template-columns: 1fr; }
    .social-card { padding: 22px 18px 18px; }
  }
</style>
</head>
<body>
  <div class="social-grid">
    <!-- Card 1: YouTube -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill="#FF0000"/>
          <polygon points="18,14.5 30,22 18,29.5" fill="#FFFFFF"/>
        </svg>
      </div>
      <div class="channel-label">YOUTUBE</div>
      <div class="channel-handle">@ASCENTIXLADDERS</div>
      <p class="channel-desc">4K Drop Tests, destructive stress testing, and engineering breakdown videos for Indian contractors.</p>
      <a href="https://youtube.com/@AscentixLadders" target="_blank" class="action-btn">Subscribe (1.42L+)</a>
    </div>

    <!-- Card 2: Instagram -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ig-grad-c2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#fed373"/>
              <stop offset="25%" stop-color="#f15245"/>
              <stop offset="60%" stop-color="#d92e7f"/>
              <stop offset="100%" stop-color="#9b36b7"/>
            </linearGradient>
          </defs>
          <rect width="44" height="44" rx="10" fill="url(#ig-grad-c2)"/>
          <rect x="9" y="9" width="26" height="26" rx="7" fill="none" stroke="#FFFFFF" stroke-width="2.6"/>
          <circle cx="22" cy="22" r="6.2" fill="none" stroke="#FFFFFF" stroke-width="2.6"/>
          <circle cx="29.5" cy="14.5" r="1.5" fill="#FFFFFF"/>
        </svg>
      </div>
      <div class="channel-label">INSTAGRAM</div>
      <div class="channel-handle">@ASCENTIXOFFICIAL</div>
      <p class="channel-desc">Indian job-site photography, colorway drops, and ambassador takeovers from across India.</p>
      <a href="https://instagram.com/ascentix_safety" target="_blank" class="action-btn">Follow (89K)</a>
    </div>

    <!-- Card 3: X (Twitter) -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22" cy="22" r="22" fill="#000000"/>
          <path fill="#FFFFFF" d="M25.8 12.5h3.1l-6.8 7.8 8 10.6H23.9l-4.9-6.3-5.6 6.3h-3.1l7.3-8.3-7.7-10.1h6.4l4.4 5.8 5.1-5.8zm-1.1 16.6h1.7L16.1 14.2h-1.8l10.4 14.9z"/>
        </svg>
      </div>
      <div class="channel-label">X (TWITTER)</div>
      <div class="channel-handle">@ASCENTIXLADDERS</div>
      <p class="channel-desc">Viral durability challenges, ACETECH &amp; Elecrama trade show clips, and Indian site safety bulletins.</p>
      <a href="https://x.com/AscentixLadders" target="_blank" class="action-btn">Follow (45K)</a>
    </div>

    <!-- Card 4: LinkedIn -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill="#0A66C2"/>
          <path fill="#FFFFFF" d="M12.5 17.5h5V32.5h-5V17.5zm2.5-7.5c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9zm6.2 7.5h4.8v2.1h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6.1 3.4 6.1 7.7V32.5h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V32.5h-5V17.5z"/>
        </svg>
      </div>
      <div class="channel-label">LINKEDIN</div>
      <div class="channel-handle">ASCENTIX LADDERS PVT. LTD.</div>
      <p class="channel-desc">BIS IS compliance updates, fleet announcements, and Indian industrial distributor partnerships.</p>
      <a href="https://linkedin.com/company/ascentix-ladders" target="_blank" class="action-btn">Connect (34K)</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 7: About Us Page — 4 Engineering Core Pillars Grid
> **Page**: About Us  
> **Placement**: Section 2 of About Us page.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~400px height.

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
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; }
  .pillar-card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-top: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .pillar-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 94, 20, 0.1);
  }
  .pillar-icon { font-size: 1.6rem; margin-bottom: 10px; }
  .pillar-title { font-family: 'Oswald', sans-serif; font-size: 1.2rem; text-transform: uppercase; color: #1a1d23; margin-bottom: 8px; letter-spacing: 0.5px; }
  .pillar-desc { font-size: 0.88rem; color: #4b5563; line-height: 1.55; }
</style>
</head>
<body>
  <div class="grid">
    <div class="pillar-card">
      <div class="pillar-icon">✈️</div>
      <div class="pillar-title">Aerospace Rigor</div>
      <div class="pillar-desc">7075-T6 aluminium alloys and Toray aerospace-grade carbon fibre composites deliver the highest strength-to-weight ratios — proven on India's toughest infrastructure and metro construction projects.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🛡️</div>
      <div class="pillar-title">Zero Compromise</div>
      <div class="pillar-desc">Every production run undergoes 50,000 cycle load-strain tests and 35kV electrical arc tests before earning the Ascentix stamp — fully BIS IS 4130 & IS 4131 compliant.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">⚙️</div>
      <div class="pillar-title">Ergonomic Precision</div>
      <div class="pillar-desc">Wide knurled rungs with dual-angle anti-slip serrations, integrated tool trays, and air-damped soft-close mechanisms — built for India's long shifts and heavy tool-load conditions.</div>
    </div>
    <div class="pillar-card">
      <div class="pillar-icon">🏔️</div>
      <div class="pillar-title">Field Tested in India</div>
      <div class="pillar-desc">Developed alongside licensed electricians, CPWD contractors, telecom tower crews, and industrial facility managers. Engineered for India's monsoon, dust, and extreme-heat environments.</div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 8A: TelePro 360 Product Page — Key Highlights & Specifications
> **Page**: TelePro 360 (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~780px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 01 — Compact Telescoping Ladder</div>
  <div class="section-title">TelePro 360 — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 4130 · 3.8m reach · 150 kg rated · 7075-T6 Aerospace Alloy · Zero-Pinch Air Damping</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">💨</div>
      <div class="hl-title">Zero-Pinch Air Damping (Soft-Close)</div>
      <div class="hl-desc">Internal pneumatic cartridges create a controlled 1.2s descent during retraction. Each section collapses smoothly without snapping, preventing pinched fingers — essential for India's long-shift contractors.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🧲</div>
      <div class="hl-title">Magnetic Top Utility Tray</div>
      <div class="hl-desc">Integrated top cap features embedded neodymium rare-earth magnets to securely hold screws, drill bits, tape measures, and screwdrivers — reducing trips up and down.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🟢</div>
      <div class="hl-title">Smart-Lock Visual Indicators</div>
      <div class="hl-desc">Every individual rung features dual mechanical green/red safety windows confirming positive latch engagement before climbing — a must for high-rise residential and commercial job sites.</div>
    </div>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#94a3b8 50%,#ff5e14 50%)" title="Apex Titanium & Safety Orange"></div>
    <span class="swatch-name">Apex Titanium & Orange</span>
    <div class="swatch" style="background:linear-gradient(135deg,#12151b 50%,#334155 50%)" title="Matte Obsidian Stealth"></div>
    <span class="swatch-name">Matte Obsidian Stealth</span>
    <div class="swatch" style="background:linear-gradient(135deg,#e2e8f0 50%,#1d4ed8 50%)" title="Arctic Silver & Royal Cobalt"></div>
    <span class="swatch-name">Arctic Silver & Cobalt</span>
    <div class="swatch" style="background:linear-gradient(135deg,#facc15 50%,#18181b 50%)" title="High-Vis Yellow & Graphite"></div>
    <span class="swatch-name">High-Vis Yellow & Graphite</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>Maximum Extended Height</td><td>3.80 meters</td><td>12.5 feet</td></tr>
    <tr><td>Maximum Reach Height</td><td>4.80 meters</td><td>15.75 feet</td></tr>
    <tr><td>Storage Height (Closed)</td><td>0.88 meters (Car Boot Friendly)</td><td>34.6 inches</td></tr>
    <tr><td>Total Product Weight</td><td>10.8 kg</td><td>23.8 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>150 kg (BIS IS 4130 Heavy Duty)</td><td>330 lbs Rating</td></tr>
    <tr><td>Material Composition</td><td>Extruded 7075-T6 Aerospace Aluminium</td><td>Cold-Milled 7075-T6 Alloy</td></tr>
    <tr><td>Retraction Mechanism</td><td>Sealed Quad-Valve Air Damping Piston</td><td>Pinch-Free Descent</td></tr>
    <tr><td>Rung Spacing</td><td>300 mm (Equal Throughout)</td><td>11.8 inches</td></tr>
    <tr><td>Footing Type</td><td>Articulated Dual-Angle Non-Marking TPR</td><td>Thermoplastic Rubber</td></tr>
    <tr><td>Safety Certifications</td><td><strong>BIS IS 4130 : 2002</strong> (Indian Standard)</td><td>Indian BIS Certified</td></tr>
    <tr><td>Warranty</td><td>Lifetime Structural / 5-Year Mechanism</td><td>Commercial Trade Assurance</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Property & Roof Inspectors:</strong> Easily carry up apartment stairs or fit into compact lift lobbies in Indian residential towers.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Telecom & Fibre Technicians:</strong> Swift deployment for BSNL, Airtel, and Jio infrastructure work without roof-rack clearance issues.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Smart Home & Interior Contractors:</strong> Effortlessly stores in small Indian urban apartments, car boots, or utility cupboards.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 8B: TelePro 360 — Dedicated Technical Specifications Table
> **Page**: TelePro 360 (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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

---

### Snippet 8C: TelePro 360 — Dedicated Ideal Applications Grid
> **Page**: TelePro 360 (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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

---

### Snippet 9A: CarbonApex X1 Product Page — Key Highlights & Specifications
> **Page**: CarbonApex X1 (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~780px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 02 — Ultra-Light Dielectric Stepladder</div>
  <div class="section-title">CarbonApex X1 — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 4131 · 35 kV Dielectric · 3.2 kg Ultralight · Toray 3K Carbon Fibre · 180 kg Rated</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">⚡</div>
      <div class="hl-title">100% Toray 3K Prepreg Carbon Fibre</div>
      <div class="hl-desc">Weighing just 3.2 kg — less than half an equivalent fiberglass ladder — it offers effortless single-hand transport across sprawling industrial plants and multi-story sub-stations across India.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🛡️</div>
      <div class="hl-title">35 kV Certified Electrical Arc Resistance</div>
      <div class="hl-desc">Zero electrical conductivity certified for safe live-line maintenance up to 35,000 Volts. The non-metallic structure eliminates spark hazard in flammable chemical environments.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">⚙️</div>
      <div class="hl-title">Magnesium-Titanium Dual Hinge</div>
      <div class="hl-desc">Proprietary forged magnesium-titanium alloy hinge assembly eliminates ladder sway and creaking under full 180 kg maximum test loads with solid positive-stop locks.</div>
    </div>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#1e1e24 50%,#ff5e14 50%)" title="Raw Toray 3K Matte Weave"></div>
    <span class="swatch-name">Raw Toray 3K Weave</span>
    <div class="swatch" style="background:linear-gradient(135deg,#0a0a0a 50%,#262626 50%)" title="Stealth Shadow Blackout"></div>
    <span class="swatch-name">Stealth Shadow Blackout</span>
    <div class="swatch" style="background:linear-gradient(135deg,#1c1917 50%,#d97706 50%)" title="Anodized Burnt Copper"></div>
    <span class="swatch-name">Anodized Burnt Copper</span>
    <div class="swatch" style="background:linear-gradient(135deg,#18181b 50%,#dc2626 50%)" title="Formula Crimson Apex"></div>
    <span class="swatch-name">Formula Crimson Apex</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>Platform Standing Height</td><td>1.45 meters</td><td>4.75 feet</td></tr>
    <tr><td>Maximum Reach Height</td><td>3.45 meters</td><td>11.3 feet</td></tr>
    <tr><td>Folded Thickness</td><td>75 mm (Ultra-Slim Storage)</td><td>2.95 inches</td></tr>
    <tr><td>Total Product Weight</td><td>3.2 kg (Ultralight Carbon)</td><td>7.05 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>180 kg (BIS IS 4131 Type 1)</td><td>396 lbs Rating</td></tr>
    <tr><td>Stile Material</td><td>100% Toray T700/3K Prepreg Carbon Fibre</td><td>Autoclave Cured Composite</td></tr>
    <tr><td>Dielectric Insulation</td><td>Tested to 35 kV RMS (Non-Conductive)</td><td>High-Voltage Certified</td></tr>
    <tr><td>Step Tread Depth</td><td>120 mm Non-Slip Knurled Carbon</td><td>4.72 inches Deep Tread</td></tr>
    <tr><td>Feet Material</td><td>Vibram® High-Grip Static Dissipative Rubber</td><td>Non-Marking Compound</td></tr>
    <tr><td>Safety Certifications</td><td><strong>BIS IS 4131 : 2002</strong> (Indian Standard)</td><td>Indian BIS Certified</td></tr>
    <tr><td>Warranty</td><td>10-Year Composite Structural Integrity</td><td>Commercial Assurance</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>High-Voltage Electrical Sub-Stations & Utilities:</strong> Essential for State DISCOM, PowerGrid, and electrical contractors working around 33 kV / 66 kV busbars.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>MRI Rooms, Data Centers & Cleanrooms:</strong> Non-magnetic and non-sparking properties allow safe use in MRI suites, server farms, and semiconductor fabs.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Luxury Aviation Hangars & Marine Refit:</strong> Non-scratch rubber feet and ultralight carbon frame protect luxury yacht decks and aircraft fuselages.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 9B: CarbonApex X1 — Dedicated Technical Specifications Table
> **Page**: CarbonApex X1 (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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
      <div class="spec-title">CarbonApex X1 <span>Technical Specifications</span></div>
      <span class="cert-badge">● BIS IS 4131 : 2002 · 35 kV Dielectric</span>
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
            <td>Platform Standing Height</td>
            <td>1.45 meters</td>
            <td>4.75 feet</td>
          </tr>
          <tr>
            <td>Maximum Reach Height</td>
            <td>3.45 meters</td>
            <td>11.3 feet</td>
          </tr>
          <tr>
            <td>Folded Thickness</td>
            <td>75 mm (Ultra-Slim Storage)</td>
            <td>2.95 inches</td>
          </tr>
          <tr>
            <td>Total Product Weight</td>
            <td>3.2 kg (Ultralight Carbon)</td>
            <td>7.05 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">180 kg (BIS IS 4131 Type 1)</span></td>
            <td>396 lbs Rating</td>
          </tr>
          <tr>
            <td>Stile Material</td>
            <td>100% Toray T700/3K Prepreg Carbon Fibre</td>
            <td>Autoclave Cured Composite</td>
          </tr>
          <tr>
            <td>Dielectric Insulation</td>
            <td>Tested to 35 kV RMS (Non-Conductive)</td>
            <td>High-Voltage Certified</td>
          </tr>
          <tr>
            <td>Step Tread Depth</td>
            <td>120 mm Non-Slip Knurled Carbon</td>
            <td>4.72 inches Deep Tread</td>
          </tr>
          <tr>
            <td>Feet Material</td>
            <td>Vibram® High-Grip Static Dissipative Rubber</td>
            <td>Non-Marking Compound</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 4131 : 2002</strong> (Indian Standard)</td>
            <td>Bureau of Indian Standards Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>10-Year Composite Structural Integrity</td>
            <td>Commercial Assurance</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="spec-footer">
      <span>Tested to 3× Proof Load (540 kg Proof Test)</span>
      <span><strong>Ascentix Ladders Pvt. Ltd.</strong> · Mumbai, Maharashtra</span>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 9C: CarbonApex X1 — Dedicated Ideal Applications Grid
> **Page**: CarbonApex X1 (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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
        <div class="title">CarbonApex X1 — <span>Ideal Applications</span></div>
        <p class="subtitle">Ultralight non-conductive access engineered for Indian electrical utilities, cleanrooms, and high-tech environments.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">⚡</div>
          <span class="tag">High-Voltage Power</span>
          <div class="app-title">Electricians & Utility Linemen</div>
          <p class="app-desc">Fully safe around live 33kV/66kV breaker panels, overhead distribution wiring, and substations across India's PowerGrid and State DISCOM networks.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>35 kV Dielectric Certified</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🔬</div>
          <span class="tag">Healthcare & Technology</span>
          <div class="app-title">Cleanrooms & High-Tech Facilities</div>
          <p class="app-desc">Non-magnetic, spark-free carbon composite construction allows safe operation around hospital MRI scanners, data center server suites, and pharma fabs.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Non-Magnetic & Zero-Spark</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🎨</div>
          <span class="tag">Luxury Finishing & Marine</span>
          <div class="app-title">Architects & Commercial Finishers</div>
          <p class="app-desc">Weighing only 3.2 kg, tradespeople can carry it up and down stairwells of multi-storey Indian residential and retail projects all day with zero arm fatigue.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>3.2 kg Featherweight Carbon</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Standardized non-conductive access for PowerGrid, State DISCOMs, and EPC electrical crews</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 10A: MultiFlex Transform Product Page — Key Highlights & Specifications
> **Page**: MultiFlex Transform (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~800px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .mode-pills { display: flex; flex-wrap: wrap; gap: 8px; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); align-items: center; }
  .mode-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 4px; }
  .pill { display: inline-block; background: rgba(255,94,20,0.08); border: 1px solid rgba(255,94,20,0.28); color: #ff5e14; font-size: 0.76rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 03 — 14-in-1 Articulated System</div>
  <div class="section-title">MultiFlex Transform — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 4130 · 5.4m reach · 150 kg rated · Quad-Lock Hinges · Auto-Leveling Outriggers</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">🔄</div>
      <div class="hl-title">Patented Quad-Lock Multi-Angle Hinges</div>
      <div class="hl-desc">Heavy-duty forged alloy hinges lock securely at 0°, 45°, 90°, and 180° angles. Seamlessly shifts between straight extension, self-supporting stepladder, and scaffold base modes.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">⚖️</div>
      <div class="hl-title">Integrated Auto-Leveling Outriggers</div>
      <div class="hl-desc">Dual telescoping base stabilizers adjust independently up to 180 mm of vertical travel, enabling rock-solid leveling on stairs, stepped terraces, and uneven job sites across India.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🔒</div>
      <div class="hl-title">Dual-Pin Positive Interlocking System</div>
      <div class="hl-desc">Hardened steel spring-loaded locking pins with visual inspection windows guarantee positive hinge engagement before climbing, preventing accidental disengagement under load.</div>
    </div>
  </div>

  <div class="mode-pills">
    <span class="mode-label">Key Configurations:</span>
    <span class="pill">Straight Extension (5.4m)</span>
    <span class="pill">Double-Sided A-Frame</span>
    <span class="pill">Staircase Step Mode</span>
    <span class="pill">Scaffold Bridge Base</span>
    <span class="pill">90° Wall Leaning</span>
    <span class="pill">Stand-Off Stagger</span>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#ff5e14 50%,#94a3b8 50%)" title="High-Vis Safety Orange & Brushed Metal"></div>
    <span class="swatch-name">Safety Orange & Metal</span>
    <div class="swatch" style="background:linear-gradient(135deg,#4b5320 50%,#27272a 50%)" title="Military Drab Olive & Charcoal"></div>
    <span class="swatch-name">Military Olive & Charcoal</span>
    <div class="swatch" style="background:linear-gradient(135deg,#334155 50%,#0284c7 50%)" title="Gunmetal Carbon & Deep Azure"></div>
    <span class="swatch-name">Gunmetal Carbon & Azure</span>
    <div class="swatch" style="background:linear-gradient(135deg,#dc2626 50%,#09090b 50%)" title="Signal Industrial Red & Jet Black"></div>
    <span class="swatch-name">Signal Red & Jet Black</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>Extension Mode Max Height</td><td>5.40 meters</td><td>17.7 feet</td></tr>
    <tr><td>Step Ladder Mode Height</td><td>2.65 meters</td><td>8.7 feet</td></tr>
    <tr><td>Scaffold Platform Mode Height</td><td>1.40 meters</td><td>4.6 feet</td></tr>
    <tr><td>Compact Storage Folded Height</td><td>1.42 meters</td><td>4.65 feet</td></tr>
    <tr><td>Total Unit Weight</td><td>14.2 kg</td><td>31.3 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>150 kg (BIS IS 4130 Heavy Duty)</td><td>330 lbs Rating</td></tr>
    <tr><td>Rail & Rung Alloy</td><td>Heat-Treated 6061-T6 Aircraft Aluminium</td><td>High-Yield Structural Alloy</td></tr>
    <tr><td>Hinge Mechanism</td><td>Patented Quad-Lock Dual-Pin Forged Zinc-Alloy</td><td>Multi-Angle 4-Position</td></tr>
    <tr><td>Leveling Leg Extension</td><td>0 to 180 mm Independent Travel</td><td>Screw-Lock Fine Leveling</td></tr>
    <tr><td>Safety Certifications</td><td><strong>BIS IS 4130 : 2002</strong> (Indian Standard)</td><td>Indian BIS Certified</td></tr>
    <tr><td>Warranty</td><td>Lifetime Structural / 5-Year Hinge Mechanism</td><td>Commercial Grade</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Stairwell Painting & Ceiling Renovations:</strong> Independent outriggers allow safe setup across stair treads without risky wooden blocks or makeshift shims.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Uneven Outdoor Slopes & Terraces:</strong> Ideal for hillside construction in Himachal, Uttarakhand, or the Western Ghats where level ground is unavailable.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Heavy Mechanical & HVAC Plant Maintenance:</strong> Scaffold mode provides a stable walk-along platform for ductwork, piping, and industrial chiller servicing.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 10B: MultiFlex Transform — Dedicated Technical Specifications Table
> **Page**: MultiFlex Transform (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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
      <div class="spec-title">MultiFlex Transform <span>Technical Specifications</span></div>
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
            <td>Extension Mode Max Height</td>
            <td>5.40 meters</td>
            <td>17.7 feet</td>
          </tr>
          <tr>
            <td>Step Ladder Mode Height</td>
            <td>2.65 meters</td>
            <td>8.7 feet</td>
          </tr>
          <tr>
            <td>Scaffold Platform Mode Height</td>
            <td>1.40 meters</td>
            <td>4.6 feet</td>
          </tr>
          <tr>
            <td>Compact Storage Folded Height</td>
            <td>1.42 meters</td>
            <td>4.65 feet</td>
          </tr>
          <tr>
            <td>Total Unit Weight</td>
            <td>14.2 kg</td>
            <td>31.3 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">150 kg (BIS IS 4130 Heavy Duty)</span></td>
            <td>330 lbs Rating</td>
          </tr>
          <tr>
            <td>Rail & Rung Alloy</td>
            <td>Heat-Treated 6061-T6 Aircraft Aluminium</td>
            <td>High-Yield Structural Alloy</td>
          </tr>
          <tr>
            <td>Hinge Mechanism</td>
            <td>Patented Quad-Lock Dual-Pin Forged Zinc-Alloy</td>
            <td>Multi-Angle 4-Position</td>
          </tr>
          <tr>
            <td>Leveling Leg Extension</td>
            <td>0 to 180 mm Independent Travel</td>
            <td>Screw-Lock Fine Leveling</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 4130 : 2002</strong> (Indian Standard)</td>
            <td>Bureau of Indian Standards Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>Lifetime Structural / 5-Year Hinge Mechanism</td>
            <td>Commercial Grade</td>
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

---

### Snippet 10C: MultiFlex Transform — Dedicated Ideal Applications Grid
> **Page**: MultiFlex Transform (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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
        <div class="title">MultiFlex Transform — <span>Ideal Applications</span></div>
        <p class="subtitle">14-in-1 adaptability built for India's varied terrain, complex staircases, and multi-trade project sites.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏗️</div>
          <span class="tag">Civil Infrastructure</span>
          <div class="app-title">Civil Builders & Contractors</div>
          <p class="app-desc">Replaces four separate ladders on the truck — ideal for India's residential, commercial, and highway infrastructure construction sites.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Replaces 4 Separate Ladders</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🪜</div>
          <span class="tag">Interior Decorating</span>
          <div class="app-title">Stairwell Painters & Plasterers</div>
          <p class="app-desc">Set one side high on a step and one side low on the landing with zero wobble on India's varied spiral and straight staircase designs.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>180mm Independent Outriggers</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏭</div>
          <span class="tag">Industrial Plants & Malls</span>
          <div class="app-title">Facility Maintenance Crews</div>
          <p class="app-desc">Rapidly transforms into a low scaffold bench for ceiling ductwork, HVAC chiller repairs, and overhead pipe maintenance in malls and factories.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Quad-Lock 14-in-1 Hinge</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Standardized multi-configuration access for CPWD, general contractors, and facility crews</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 11A: TitanSafe Industrial Product Page — Key Highlights & Specifications
> **Page**: TitanSafe Industrial (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~780px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 04 — Heavy Industrial Rolling Platform</div>
  <div class="section-title">TitanSafe Industrial — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 4130 HD · 170 kg rated · 360° Safety Cage · Factories Act 1948 Section 32 · Auto-Braking Casters</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">🛡️</div>
      <div class="hl-title">360° Wrap-Around Fall-Prevention Cage</div>
      <div class="hl-desc">Integrated 1,070 mm waist-height guardrail, toe-boards, and auto-closing spring gate fully enclose the worker, allowing safe hands-free work compliant with Section 32 of Factories Act 1948.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🛞</div>
      <div class="hl-title">Spring-Loaded Auto-Braking Casters</div>
      <div class="hl-desc">Rolls effortlessly across shop floors when unweighted. Once a worker steps on the first rung (>15 kg), spring casters retract instantly to plant heavy-duty non-slip rubber feet firmly on the ground.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">⚡</div>
      <div class="hl-title">Heavy-Duty Fibreglass Stiles</div>
      <div class="hl-desc">Pultruded high-density composite stiles offer non-conductive safety for industrial electrical maintenance, sub-station transformers, and chemical processing facilities.</div>
    </div>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#facc15 50%,#171717 50%)" title="Industrial Safety Yellow & Black"></div>
    <span class="swatch-name">Safety Yellow & Black</span>
    <div class="swatch" style="background:linear-gradient(135deg,#ff6b00 50%,#f1f5f9 50%)" title="Fluorescent Safety Orange & Silver"></div>
    <span class="swatch-name">Fluorescent Orange & Silver</span>
    <div class="swatch" style="background:linear-gradient(135deg,#ffffff 50%,#0284c7 50%)" title="Aero White & Cyan Blue"></div>
    <span class="swatch-name">Aero White & Cyan Blue</span>
    <div class="swatch" style="background:linear-gradient(135deg,#0f172a 50%,#f59e0b 50%)" title="Heavy Maritime Navy & Amber"></div>
    <span class="swatch-name">Maritime Navy & Amber</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>Platform Standing Height</td><td>2.45 meters (8-Step Model)</td><td>8.0 feet</td></tr>
    <tr><td>Maximum Working Reach</td><td>4.25 meters</td><td>14.0 feet</td></tr>
    <tr><td>Platform Deck Area</td><td>610 x 510 mm (Spacious Standing)</td><td>24" x 20" Anti-Slip Deck</td></tr>
    <tr><td>Guardrail Enclosure Height</td><td>1,070 mm (Full Waist Surround Cage)</td><td>42 inches Full Surround</td></tr>
    <tr><td>Total Unit Weight</td><td>26.5 kg (Rolling Safety Platform)</td><td>58.4 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>170 kg (BIS IS 4130 Heavy Duty)</td><td>375 lbs Heavy Industrial Rating</td></tr>
    <tr><td>Stile Material</td><td>Pultruded Non-Conductive Fibreglass</td><td>35kV Dielectric Tested</td></tr>
    <tr><td>Wheel Diameter & Type</td><td>100 mm Spring-Loaded Polyurethane</td><td>Auto-Braking Step-Lock Casters</td></tr>
    <tr><td>Safety Gate</td><td>Auto-Closing Spring-Loaded Steel Gate</td><td>360° Fall Prevention Barrier</td></tr>
    <tr><td>Safety Standards</td><td><strong>BIS IS 4130 HD : 2002</strong> · Factories Act 1948</td><td>Indian Industrial Safety Compliant</td></tr>
    <tr><td>Warranty</td><td>10-Year Commercial Fleet Warranty</td><td>Heavy Industrial Assurance</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Warehouse Inventory Picking & High Racking:</strong> Swift rolling repositioning between aisles with instant auto-brake locking when climbing for stock replenishment.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Heavy Industrial Factories & Assembly Lines:</strong> Safe hands-free access for machinery maintenance, automotive plants, and heavy fabrication shops.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Aviation Hangars & Railway Maintenance:</strong> Non-sparking, dielectric safety for aircraft exterior inspection, train coach maintenance, and metro depot bays.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 11B: TitanSafe Industrial — Dedicated Technical Specifications Table
> **Page**: TitanSafe Industrial (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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
      <div class="spec-title">TitanSafe Industrial <span>Technical Specifications</span></div>
      <span class="cert-badge">● BIS IS 4130 HD · Factories Act 1948</span>
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
            <td>Platform Standing Height</td>
            <td>2.45 meters (8-Step Model)</td>
            <td>8.0 feet</td>
          </tr>
          <tr>
            <td>Maximum Working Reach</td>
            <td>4.25 meters</td>
            <td>14.0 feet</td>
          </tr>
          <tr>
            <td>Platform Deck Area</td>
            <td>610 x 510 mm (Spacious Standing)</td>
            <td>24" x 20" Anti-Slip Deck</td>
          </tr>
          <tr>
            <td>Guardrail Enclosure Height</td>
            <td>1,070 mm (Full Waist Surround Cage)</td>
            <td>42 inches Full Surround</td>
          </tr>
          <tr>
            <td>Total Unit Weight</td>
            <td>26.5 kg (Rolling Safety Platform)</td>
            <td>58.4 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">170 kg (BIS IS 4130 Heavy Duty)</span></td>
            <td>375 lbs Heavy Industrial Rating</td>
          </tr>
          <tr>
            <td>Stile Material</td>
            <td>Pultruded Non-Conductive Fibreglass</td>
            <td>35kV Dielectric Tested</td>
          </tr>
          <tr>
            <td>Wheel Diameter & Type</td>
            <td>100 mm Spring-Loaded Polyurethane</td>
            <td>Auto-Braking Step-Lock Casters</td>
          </tr>
          <tr>
            <td>Safety Gate</td>
            <td>Auto-Closing Spring-Loaded Steel Gate</td>
            <td>360° Fall Prevention Barrier</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 4130 HD : 2002</strong> · Factories Act 1948 Sec 32</td>
            <td>Indian Industrial Safety Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>10-Year Commercial Fleet Warranty</td>
            <td>Heavy Industrial Assurance</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="spec-footer">
      <span>Tested to 3× Proof Load (510 kg Proof Test)</span>
      <span><strong>Ascentix Ladders Pvt. Ltd.</strong> · Mumbai, Maharashtra</span>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 11C: TitanSafe Industrial — Dedicated Ideal Applications Grid
> **Page**: TitanSafe Industrial (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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
        <div class="title">TitanSafe Industrial — <span>Ideal Applications</span></div>
        <p class="subtitle">100% hands-free safety cage engineered for heavy industrial plants, aerospace MRO, and high-bay warehouses across India.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">✈️</div>
          <span class="tag">Aerospace & Defence MRO</span>
          <div class="app-title">Aviation & MRO Hangars</div>
          <p class="app-desc">Walk-around fuselage access with non-sparking, non-marking materials — suitable for HAL, Air India MRO, and defence depot line maintenance.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>360° Waist-Height Safety Cage</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">📦</div>
          <span class="tag">Supply Chain & Logistics</span>
          <div class="app-title">E-Commerce Warehouses</div>
          <p class="app-desc">Fast picking and maintenance of overhead sorting racks in Flipkart, Amazon India, and Delhivery high-bay fulfilment centres.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Auto-Braking Step Casters</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">⚙️</div>
          <span class="tag">Heavy Industrial Manufacturing</span>
          <div class="app-title">Heavy Manufacturing Plants</div>
          <p class="app-desc">Servicing large industrial machinery in Indian automotive, steel, and chemical plants with full hands-free stability compliant with the Factories Act 1948.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Factories Act 1948 Sec 32</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Heavy industrial compliance for Indian automotive, steel, aviation, and warehousing operations</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 12A: AeroReach Pro Product Page — Key Highlights & Specifications
> **Page**: AeroReach Pro (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~760px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 05 — Telescoping Extension Ladder</div>
  <div class="section-title">AeroReach Pro — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 1875 · 6.2m reach · 150 kg rated · 6061-T6 Aerospace Alloy · AeroLock™ One-Touch Rungs</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">🔒</div>
      <div class="hl-title">AeroLock™ One-Touch Rung System</div>
      <div class="hl-desc">Each rung deploys and locks independently with a single hand — precise height-by-rung adjustment from 1.0 m to 6.2 m without tools, eliminating rope-and-pulley fumbling on Indian construction sites.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">✈️</div>
      <div class="hl-title">6061-T6 Aerospace Alloy Rails</div>
      <div class="hl-desc">Cold-drawn, heat-treated, and shot-peened aluminium rails tested to 3× the 150 kg duty rating — structural rigidity comparable to steel at 60% of the weight, ideal for rooftop and telecom tower work.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🦶</div>
      <div class="hl-title">All-Terrain Stabiliser Feet</div>
      <div class="hl-desc">Spring-loaded 180° pivoting rubber feet with integrated level indicator automatically conform to slopes up to 15° — essential for India's varied terrain from rural building sites to urban scaffolding decks.</div>
    </div>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#f97316 50%,#cbd5e1 50%)" title="Blaze Orange & Anodized Silver"></div>
    <span class="swatch-name">Blaze Orange & Silver</span>
    <div class="swatch" style="background:linear-gradient(135deg,#eab308 50%,#1c1917 50%)" title="Volt Yellow & Graphite Black"></div>
    <span class="swatch-name">Volt Yellow & Graphite</span>
    <div class="swatch" style="background:linear-gradient(135deg,#475569 50%,#f8fafc 50%)" title="Slate Grey & Ice White"></div>
    <span class="swatch-name">Slate Grey & Ice White</span>
    <div class="swatch" style="background:linear-gradient(135deg,#166534 50%,#d4b896 50%)" title="Forest Green & Khaki Sand"></div>
    <span class="swatch-name">Forest Green & Khaki</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>Closed Transport Length</td><td>1.17 meters (12-Rung)</td><td>3.84 feet</td></tr>
    <tr><td>Maximum Extended Reach</td><td>6.20 meters</td><td>20.34 feet</td></tr>
    <tr><td>Maximum Working Height</td><td>7.40 meters</td><td>24.28 feet</td></tr>
    <tr><td>Rung Spacing</td><td>285 mm (Equal Throughout)</td><td>11.2 inches</td></tr>
    <tr><td>Total Product Weight</td><td>8.4 kg</td><td>18.5 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>150 kg (BIS IS 1875 Type 1)</td><td>330 lbs Rating</td></tr>
    <tr><td>Rail Material</td><td>6061-T6 Aerospace Aluminium Alloy</td><td>Cold-Drawn Heat-Treated</td></tr>
    <tr><td>Rung Locking System</td><td>AeroLock™ Slide-and-Lock D-Section</td><td>One-Touch Deploy</td></tr>
    <tr><td>Stabiliser Foot Type</td><td>180° Pivoting Self-Adjusting Rubber</td><td>15° Slope Tolerance</td></tr>
    <tr><td>Safety Certifications</td><td><strong>BIS IS 1875 : 2003</strong> (Telescoping Ladder — Indian Standard)</td><td>Indian BIS Certified</td></tr>
    <tr><td>Warranty</td><td>7-Year Structural Warranty</td><td>Commercial Grade</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Building & Civil Construction:</strong> Rapid access to second and third floor facades, rooftops, and ceiling formwork across India's booming residential and commercial construction sector.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Telecom & Tower Maintenance:</strong> Lightweight single-carry pack for climbing communication towers, dish mounts, and rooftop antenna arrays across urban and semi-urban India.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Electricians & Solar Installers:</strong> Safe rooftop access for solar PV installation — the fastest growing trade segment in India under PM Surya Ghar Yojana.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 12B: AeroReach Pro — Dedicated Technical Specifications Table
> **Page**: AeroReach Pro (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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
      <div class="spec-title">AeroReach Pro <span>Technical Specifications</span></div>
      <span class="cert-badge">● BIS IS 1875 : 2003 Certified</span>
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
            <td>Closed Transport Length</td>
            <td>1.17 meters (12-Rung Model)</td>
            <td>3.84 feet</td>
          </tr>
          <tr>
            <td>Maximum Extended Reach</td>
            <td>6.20 meters</td>
            <td>20.34 feet</td>
          </tr>
          <tr>
            <td>Maximum Working Height</td>
            <td>7.40 meters</td>
            <td>24.28 feet</td>
          </tr>
          <tr>
            <td>Rung Spacing</td>
            <td>285 mm (Equal Throughout)</td>
            <td>11.2 inches</td>
          </tr>
          <tr>
            <td>Total Product Weight</td>
            <td>8.4 kg (Ultralight Single-Carry)</td>
            <td>18.5 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">150 kg (BIS IS 1875 Type 1)</span></td>
            <td>330 lbs Heavy-Duty Rating</td>
          </tr>
          <tr>
            <td>Rail Material</td>
            <td>6061-T6 Aerospace Aluminium Alloy</td>
            <td>Cold-Drawn & Heat-Treated</td>
          </tr>
          <tr>
            <td>Rung Locking System</td>
            <td>AeroLock™ Slide-and-Lock D-Section Rungs</td>
            <td>One-Touch Single-Hand Deploy</td>
          </tr>
          <tr>
            <td>Stabiliser Foot Type</td>
            <td>180° Pivoting Self-Adjusting Rubber</td>
            <td>15° Slope Tolerance</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 1875 : 2003</strong> (Indian Standard)</td>
            <td>Bureau of Indian Standards Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>7-Year Structural Integrity Warranty</td>
            <td>Commercial Trade Grade</td>
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

---

### Snippet 12C: AeroReach Pro — Dedicated Ideal Applications Grid
> **Page**: AeroReach Pro (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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
        <div class="title">AeroReach Pro — <span>Ideal Applications</span></div>
        <p class="subtitle">Engineered specifically for India's high-elevation access challenges across construction, power, and telecom sectors.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏗️</div>
          <span class="tag">Civil & Commercial</span>
          <div class="app-title">Building & Civil Construction</div>
          <p class="app-desc">Rapid access to second and third floor facades, rooftops, and ceiling formwork across India's booming residential and commercial construction sector.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>6.2m Multi-Floor Facade Access</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">📡</div>
          <span class="tag">Telecom & Infra</span>
          <div class="app-title">Telecom & Tower Maintenance</div>
          <p class="app-desc">Lightweight single-carry pack for climbing communication towers, dish mounts, and rooftop antenna arrays across urban and semi-urban India.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>8.4kg Single-Technician Carry</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">☀️</div>
          <span class="tag">Clean Energy & Electrical</span>
          <div class="app-title">Electricians & Solar Installers</div>
          <p class="app-desc">Safe and stable access for rooftop solar photovoltaic installation — the fastest growing trade segment in India under PM Surya Ghar Yojana.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>15° Self-Adjusting Slope Feet</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Standardized access equipment for Indian EPC contractors, PWD, and DISCOMs</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 13A: VaultStep Deluxe Product Page — Key Highlights & Specifications
> **Page**: VaultStep Deluxe (Sub-page under *Products*)  
> **Placement**: Below the Hero banner section.  
> **Section Background**: Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~780px height.

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
  .badge { display: inline-block; background: rgba(255,94,20,0.08); color: #ff5e14; border: 1px solid rgba(255,94,20,0.28); padding: 4px 14px; border-radius: 20px; font-size: 0.74rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 14px; }
  .section-title { font-family: 'Oswald', sans-serif; font-size: 1.7rem; text-transform: uppercase; letter-spacing: 1px; color: #1a1d23; margin-bottom: 6px; }
  .section-title span { color: #ff5e14; }
  .section-sub { color: #7b8290; font-size: 0.92rem; margin-bottom: 22px; }
  .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-bottom: 28px; }
  .highlight-card {
    background: #fff;
    border: 1px solid #e2e5ea;
    border-left: 4px solid #ff5e14;
    border-radius: 10px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .highlight-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(255,94,20,0.1); }
  .hl-icon { font-size: 1.4rem; margin-bottom: 8px; }
  .hl-title { font-weight: 700; font-size: 0.98rem; color: #1a1d23; margin-bottom: 6px; }
  .hl-desc { font-size: 0.86rem; color: #4b5563; line-height: 1.55; }
  .mode-pills { display: flex; flex-wrap: wrap; gap: 8px; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); align-items: center; }
  .mode-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 4px; }
  .pill { display: inline-block; background: rgba(255,94,20,0.08); border: 1px solid rgba(255,94,20,0.28); color: #ff5e14; font-size: 0.76rem; font-weight: 700; padding: 4px 10px; border-radius: 20px; }
  .color-row { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; padding: 14px 18px; margin-bottom: 28px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .color-label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #7b8290; margin-right: 6px; }
  .swatch { width: 26px; height: 26px; border-radius: 50%; border: 2px solid #e2e5ea; cursor: default; }
  .swatch-name { font-size: 0.8rem; color: #3d4350; font-weight: 600; margin-left: 4px; }
  table { width: 100%; border-collapse: collapse; background: #fff; border: 1px solid #e2e5ea; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.04); font-size: 0.89rem; }
  th { background: #f1f3f6; color: #ff5e14; padding: 12px 18px; font-weight: 700; font-size: 0.76rem; text-transform: uppercase; letter-spacing: 1px; text-align: left; }
  td { padding: 11px 18px; border-bottom: 1px solid #edf0f4; color: #3d4350; }
  tr:last-child td { border-bottom: none; }
  tr:hover td { background: #fef8f5; }
  td:first-child { font-weight: 600; color: #1a1d23; }
  .apps-list { list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px; margin-top: 22px; }
  .app-item { background: #fff; border: 1px solid #e2e5ea; border-radius: 8px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; box-shadow: 0 1px 4px rgba(0,0,0,0.04); }
  .app-dot { width: 8px; height: 8px; border-radius: 50%; background: #ff5e14; margin-top: 5px; flex-shrink: 0; }
  .app-text { font-size: 0.86rem; color: #3d4350; line-height: 1.5; }
  .app-text strong { color: #1a1d23; }
</style>
</head>
<body>
  <div class="badge">Model 06 — 5-in-1 Multi-Position Combination Ladder</div>
  <div class="section-title">VaultStep Deluxe — <span>Key Highlights</span></div>
  <p class="section-sub">BIS IS 1364 · 5.05m reach · 150 kg rated · VaultFlex™ 5-Position Hinge · Integrated Tool Caddy</p>

  <div class="highlights-grid">
    <div class="highlight-card">
      <div class="hl-icon">🔄</div>
      <div class="hl-title">VaultFlex™ 5-in-1 Multi-Position Hinge</div>
      <div class="hl-desc">Precision die-cast CNC-machined hinge locks at 5 configurations — A-frame stepladder, lean-to extension, 90° staircase mode, twin-tower scaffold base, and ultra-compact flat fold — replacing five separate ladders with one versatile unit.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🦶</div>
      <div class="hl-title">Extra-Wide 260 mm Non-Slip Steps</div>
      <div class="hl-desc">Ribbed groove surface with moulded heel-lock lip provides 260 mm standing depth — 40% wider than standard Indian stepladders — for fatigue-free standing during long overhead painting, wiring, and ceiling repair tasks.</div>
    </div>
    <div class="highlight-card">
      <div class="hl-icon">🧰</div>
      <div class="hl-title">Integrated Tool Caddy & Pail Shelf</div>
      <div class="hl-desc">5 kg rated moulded polypropylene tray at top rest provides a dedicated tool station for paint brushes, rollers, drills, and mobile phone — eliminating constant up-and-down trips that cause 63% of ladder falls on Indian residential sites.</div>
    </div>
  </div>

  <div class="mode-pills">
    <span class="mode-label">5 Configurations:</span>
    <span class="pill">A-Frame Step</span>
    <span class="pill">Lean-To Extension</span>
    <span class="pill">Staircase Mode</span>
    <span class="pill">Scaffold Base</span>
    <span class="pill">Flat Fold Storage</span>
  </div>

  <div class="color-row">
    <span class="color-label">Available Finishes:</span>
    <div class="swatch" style="background:linear-gradient(135deg,#1d4ed8 50%,#cbd5e1 50%)" title="Cobalt Blue & Brushed Silver"></div>
    <span class="swatch-name">Cobalt Blue & Silver</span>
    <div class="swatch" style="background:linear-gradient(135deg,#dc2626 50%,#f1f5f9 50%)" title="Ember Red & Pearl White"></div>
    <span class="swatch-name">Ember Red & Pearl</span>
    <div class="swatch" style="background:linear-gradient(135deg,#18181b 50%,#c2857a 50%)" title="Onyx Black & Rose Gold"></div>
    <span class="swatch-name">Onyx Black & Rose Gold</span>
    <div class="swatch" style="background:linear-gradient(135deg,#3f6212 50%,#c2410c 50%)" title="Forest Moss & Terracotta"></div>
    <span class="swatch-name">Forest Moss & Terracotta</span>
  </div>

  <table>
    <tr><th>Specification</th><th>Metric</th><th>Imperial</th></tr>
    <tr><td>A-Frame Height (Fully Open)</td><td>1.82 meters (6-Step per Side)</td><td>5.97 feet</td></tr>
    <tr><td>Extension Mode Reach</td><td>3.65 meters</td><td>11.97 feet</td></tr>
    <tr><td>Maximum Working Reach</td><td>5.05 meters</td><td>16.57 feet</td></tr>
    <tr><td>Step Width</td><td>260 mm (Extra-Wide Platform Grade)</td><td>10.24 inches</td></tr>
    <tr><td>Total Product Weight</td><td>11.8 kg</td><td>26.0 lbs</td></tr>
    <tr><td>Duty Rating / Load Capacity</td><td>150 kg (BIS IS 1364 Type 1)</td><td>330 lbs Rating</td></tr>
    <tr><td>Rail Material</td><td>6005-T5 High-Tensile Aluminium</td><td>Mill-Pressed Anodized</td></tr>
    <tr><td>Hinge Mechanism</td><td>VaultFlex™ Die-Cast CNC Zinc Alloy — 5-Position</td><td>Multi-Lock Combo</td></tr>
    <tr><td>Tool Tray Capacity</td><td>5 kg Rated Polypropylene Pail Shelf</td><td>11 lbs Tool Station</td></tr>
    <tr><td>Safety Certifications</td><td><strong>BIS IS 1364 : 2002</strong> (Portable Combination Ladder — Indian Standard)</td><td>Indian BIS Certified</td></tr>
    <tr><td>Warranty</td><td>5-Year Residential / 3-Year Commercial</td><td>Multi-Position Certified</td></tr>
  </table>

  <ul class="apps-list">
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Home Renovation & Interior Work:</strong> The only ladder an Indian homeowner needs — from changing ceiling fans in a 10-foot room to painting exterior walls from staircase mode on sloped compound floor surfaces.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Professional Painters & Plasterers:</strong> Reduces tool trips and repositioning time by 50% with the integrated tool caddy — a critical productivity upgrade for India's large contract painting workforce.</div></li>
    <li class="app-item"><div class="app-dot"></div><div class="app-text"><strong>Property Management & Facility Teams:</strong> One VaultStep Deluxe handles every access task in a multi-storey apartment complex — from common area lighting to roof drain clearing.</div></li>
  </ul>
</body>
</html>
```

---

### Snippet 13B: VaultStep Deluxe — Dedicated Technical Specifications Table
> **Page**: VaultStep Deluxe (Sub-page under *Products*)  
> **Placement**: Section 4 (Technical Specifications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~680px height** (no internal scrollbars).

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
      <div class="spec-title">VaultStep Deluxe <span>Technical Specifications</span></div>
      <span class="cert-badge">● BIS IS 1364 : 2002 Certified</span>
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
            <td>A-Frame Height (Fully Open)</td>
            <td>1.82 meters (6-Step per Side)</td>
            <td>5.97 feet</td>
          </tr>
          <tr>
            <td>Extension Mode Reach</td>
            <td>3.65 meters</td>
            <td>11.97 feet</td>
          </tr>
          <tr>
            <td>Maximum Working Reach</td>
            <td>5.05 meters</td>
            <td>16.57 feet</td>
          </tr>
          <tr>
            <td>Folded Flat Length (Storage)</td>
            <td>1.96 meters</td>
            <td>6.43 feet</td>
          </tr>
          <tr>
            <td>Step Width</td>
            <td>260 mm (Extra-Wide Platform Grade)</td>
            <td>10.24 inches</td>
          </tr>
          <tr>
            <td>Total Product Weight</td>
            <td>11.8 kg</td>
            <td>26.0 lbs</td>
          </tr>
          <tr>
            <td>Duty Rating / Load Capacity</td>
            <td><span class="tag-highlight">150 kg (BIS IS 1364 Type 1)</span></td>
            <td>330 lbs Rated</td>
          </tr>
          <tr>
            <td>Rail Material</td>
            <td>6005-T5 High-Tensile Aluminium</td>
            <td>Mill-Pressed Anodized</td>
          </tr>
          <tr>
            <td>Hinge Mechanism</td>
            <td>VaultFlex™ Die-Cast CNC Zinc Alloy — 5-Position</td>
            <td>Multi-Lock Combo</td>
          </tr>
          <tr>
            <td>Tool Tray Capacity</td>
            <td>5 kg Rated Polypropylene Pail Shelf</td>
            <td>11 lbs Tool Station</td>
          </tr>
          <tr>
            <td>Safety Standards</td>
            <td><strong>BIS IS 1364 : 2002</strong> (Indian Standard)</td>
            <td>Bureau of Indian Standards Compliant</td>
          </tr>
          <tr>
            <td>Warranty Coverage</td>
            <td>5-Year Residential / 3-Year Commercial</td>
            <td>Multi-Position Certified</td>
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

---

### Snippet 13C: VaultStep Deluxe — Dedicated Ideal Applications Grid
> **Page**: VaultStep Deluxe (Sub-page under *Products*)  
> **Placement**: Section 5 (Ideal Applications)  
> **Section Background**: Regular (White) or Emphasis 1  
> **Recommended Height in Google Sites**: Drag blue handle to **~380px height** (Desktop) / ~580px (Mobile).

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
        <div class="title">VaultStep Deluxe — <span>Ideal Applications</span></div>
        <p class="subtitle">All-in-one domestic and commercial versatility engineered for Indian homes, contract painters, and facility maintenance teams.</p>
      </div>
    </div>

    <div class="grid">
      <!-- Card 1 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏡</div>
          <span class="tag">Homeowners & Interiors</span>
          <div class="app-title">Home Renovation & DIY</div>
          <p class="app-desc">The only ladder an Indian homeowner needs — from changing ceiling fans in 10-foot rooms to exterior staircase painting on uneven compounds.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>5 Configurations in 1 Unit</div>
      </div>

      <!-- Card 2 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🖌️</div>
          <span class="tag">Commercial Painting</span>
          <div class="app-title">Professional Contract Painters</div>
          <p class="app-desc">Reduces tool trips by 50% with the integrated tool caddy and pail shelf — a major productivity boost for India's contracting workforce.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>5 kg Rated Tool Caddy Shelf</div>
      </div>

      <!-- Card 3 -->
      <div class="app-card">
        <div>
          <div class="icon-wrap">🏢</div>
          <span class="tag">Society Facility Management</span>
          <div class="app-title">Property Management Teams</div>
          <p class="app-desc">One VaultStep Deluxe handles every maintenance task in Indian residential societies — from common area lighting to terrace drain clearing.</p>
        </div>
        <div class="pill"><span class="pill-dot"></span>Extra-Wide 260 mm Steps</div>
      </div>
    </div>

    <div class="footer-bar">
      <span>Versatile combination ladder for Indian homeowners, trade contractors, and estate teams</span>
      <a href="https://sites.google.com/view/YOUR_SITE_NAME/contact-us" target="_top" class="footer-cta">Request Fleet Quote →</a>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 18: Universal Sitewide Multi-Column SEO Master Footer
> **Page**: Sitewide (Global Footer or bottom section of all pages)  
> **Placement**: Very bottom of page.  
> **Section Background**: Dark / Black (or style as desired)  
> **Recommended Height in Google Sites**: Drag blue handle to ~420px height (Desktop) / ~620px (Mobile).  
> **SEO Purpose**: Provides search engine crawlers (Googlebot, Bingbot) and human visitors 1-hop access to all 6 product models, compliance specs, leadership, and contact channels.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: #0f172a; color: #cbd5e1; padding: 36px 20px 22px; }
  .footer-container { max-width: 1180px; margin: 0 auto; }
  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 32px;
    margin-bottom: 32px;
  }
  .brand-title {
    font-family: 'Oswald', sans-serif;
    font-size: 1.6rem;
    color: #ffffff;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }
  .brand-title span { color: #ff5e14; }
  .brand-desc {
    font-size: 0.84rem;
    line-height: 1.6;
    color: #94a3b8;
    margin-bottom: 16px;
  }
  .badge-tag {
    display: inline-block;
    background: rgba(255, 94, 20, 0.12);
    border: 1px solid rgba(255, 94, 20, 0.4);
    color: #ff5e14;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 4px;
    text-transform: uppercase;
  }
  .col-heading {
    font-family: 'Oswald', sans-serif;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
    margin-bottom: 14px;
    border-bottom: 2px solid #ff5e14;
    padding-bottom: 6px;
    display: inline-block;
  }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 9px; }
  .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.84rem;
    transition: color 0.15s, padding-left 0.15s;
    display: inline-block;
  }
  .footer-links a:hover {
    color: #ff5e14;
    padding-left: 4px;
  }
  .bottom-bar {
    border-top: 1px solid #1e293b;
    padding-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.78rem;
    color: #64748b;
  }
  .bottom-bar a { color: #94a3b8; text-decoration: none; }
  .bottom-bar a:hover { color: #ff5e14; }
  @media (max-width: 840px) {
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 520px) {
    .footer-grid { grid-template-columns: 1fr; gap: 24px; }
    .bottom-bar { flex-direction: column; text-align: center; }
  }
</style>
</head>
<body>
  <div class="footer-container">
    <div class="footer-grid">
      <div>
        <div class="brand-title">ASCENTIX <span>LADDERS</span></div>
        <p class="brand-desc">India's premier manufacturer of aerospace-alloy and Toray carbon composite industrial climbing systems. BIS IS 4130 / 4131 certified for Indian job sites.</p>
        <span class="badge-tag">BIS IS 4130 Certified • Mumbai, India</span>
      </div>

      <div>
        <div class="col-heading">Product Fleet</div>
        <ul class="footer-links">
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/telepro-360" target="_top">TelePro 360 Telescopic</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/carbonapex-x1" target="_top">CarbonApex X1 Non-Conductive</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/multiflex-transform" target="_top">MultiFlex Transform Multi-Mode</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/titansafe-industrial" target="_top">TitanSafe 500 Industrial</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/aeroreach-pro" target="_top">AeroReach Pro High-Reach</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/products/vaultstep-deluxe" target="_top">VaultStep Deluxe Step Stool</a></li>
        </ul>
      </div>

      <div>
        <div class="col-heading">Company & Trust</div>
        <ul class="footer-links">
          <li><a href="https://sites.google.com/view/ascentix-ladders/about-us" target="_top">About Ascentix</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/about-us/the-team" target="_top">Leadership & Engineering Team</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/social-media-hub" target="_top">Social Media & Drop Tests</a></li>
          <li><a href="https://sites.google.com/view/ascentix-ladders/contact-us" target="_top">Fleet Sales & Inquiries</a></li>
        </ul>
      </div>

      <div>
        <div class="col-heading">Headquarters & Support</div>
        <ul class="footer-links">
          <li style="color:#94a3b8; font-size:0.84rem; line-height:1.5;">Ascentix Industrial Tower, MIDC Andheri East, Mumbai, MH 400093</li>
          <li style="margin-top:8px;"><a href="mailto:contact@ascentix-ladders.in" target="_top">contact@ascentix-ladders.in</a></li>
          <li><a href="tel:+912249876543" target="_top">+91 (022) 4987-6543</a></li>
          <li><a href="https://wa.me/919876543210" target="_blank" style="color:#22c55e; font-weight:600;">Chat on WhatsApp ↗</a></li>
        </ul>
      </div>
    </div>

    <div class="bottom-bar">
      <div>© 2026 Ascentix Ladders Pvt. Ltd. All rights reserved. BIS IS 4130 / 4131 Compliant.</div>
      <div>
        <a href="https://sites.google.com/view/ascentix-ladders/home" target="_top">Home</a> • 
        <a href="https://sites.google.com/view/ascentix-ladders/products" target="_top">Products</a> • 
        <a href="https://sites.google.com/view/ascentix-ladders/contact-us" target="_top">Contact</a>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 19: Product Subpage Responsive Breadcrumbs Bar
> **Page**: Product subpages (`/products/telepro-360`, `/products/carbonapex-x1`, etc.)  
> **Placement**: Very top of the page (directly under the header).  
> **Recommended Height in Google Sites**: Drag blue handle to ~50px height.  
> **SEO Purpose**: Enhances search crawler category understanding and provides breadcrumb navigation paths for users.  

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
  body { background: transparent; padding: 8px 14px; }
  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    color: #64748b;
  }
  .breadcrumbs a {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.15s;
  }
  .breadcrumbs a:hover { color: #ff5e14; }
  .separator { color: #cbd5e1; font-size: 0.75rem; }
  .current { color: #ff5e14; font-weight: 700; }
</style>
</head>
<body>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <a href="https://sites.google.com/view/ascentix-ladders/home" target="_top">Home</a>
    <span class="separator">/</span>
    <a href="https://sites.google.com/view/ascentix-ladders/products" target="_top">Products</a>
    <span class="separator">/</span>
    <!-- Replace this text with the specific product name on each subpage -->
    <span class="current">Product Spotlight</span>
  </nav>
</body>
</html>
```

---

### Snippet 20: "How It Works" 3-Step Process Container (Session 3 - Slide 7)
> **Page**: Home / Products Hub  
> **Placement**: Mid-page, below value proposition and above product lineup.  
> **Section Background**: Regular (White) or Emphasis 1 (Light Gray)  
> **Recommended Height in Google Sites**: Drag blue handle to ~360px height (Desktop) / ~640px (Mobile).  
> **Session 3 Requirement**: Explain how it works, show how easy to start, presented in 3 simple steps (1, 2, 3).  

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
  .how-container {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 14px;
    padding: 32px 28px;
    max-width: 1120px;
    margin: 0 auto;
    box-shadow: 0 4px 18px rgba(0,0,0,0.05);
  }
  .header-box { text-align: center; margin-bottom: 28px; }
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
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #1a1d23;
  }
  .title span { color: #ff5e14; }
  .subtitle { font-size: 0.88rem; color: #64748b; margin-top: 4px; }
  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .step-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 24px 20px;
    position: relative;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  }
  .step-card:hover {
    transform: translateY(-3px);
    border-color: #ff5e14;
    box-shadow: 0 8px 24px rgba(255, 94, 20, 0.1);
    background: #ffffff;
  }
  .step-num {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #ff5e14;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Oswald', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 14px;
  }
  .step-title {
    font-weight: 700;
    font-size: 1.05rem;
    color: #0f172a;
    margin-bottom: 8px;
  }
  .step-desc {
    font-size: 0.85rem;
    color: #64748b;
    line-height: 1.55;
  }
  @media (max-width: 768px) {
    .steps-grid { grid-template-columns: 1fr; gap: 16px; }
  }
</style>
</head>
<body>
  <div class="how-container">
    <div class="header-box">
      <span class="badge">Simple 3-Step Process</span>
      <h2 class="title">How to Order <span>Ascentix Systems</span></h2>
      <p class="subtitle">From job-site assessment to express delivery across 28 Indian states.</p>
    </div>

    <div class="steps-grid">
      <!-- Step 1 -->
      <div class="step-card">
        <div class="step-num">1</div>
        <h3 class="step-title">Select Your Application</h3>
        <p class="step-desc">Browse our 6 purpose-built models — whether you need 35kV electrical non-conductivity, compact vehicle transport, or heavy industrial 500kg platforms.</p>
      </div>

      <!-- Step 2 -->
      <div class="step-card">
        <div class="step-num">2</div>
        <h3 class="step-title">Configure Height & Specs</h3>
        <p class="step-desc">Use our interactive fleet calculator to select your required reach (3.8m to 6.2m) and choose accessories like wide stabilizers or top tool trays.</p>
      </div>

      <!-- Step 3 -->
      <div class="step-card">
        <div class="step-num">3</div>
        <h3 class="step-title">Express PAN-India Dispatch</h3>
        <p class="step-desc">Direct factory dispatch from our Mumbai MIDC facility with GST-compliant invoicing, BIS test certificates, and 10-year warranty documentation.</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Snippet 21: Interactive SEO FAQ Accordion Container (Session 3 - Slide 8, 16 & 29 AEO/GEO)
> **Page**: Home / Contact Us / About Us  
> **Placement**: Before footer or directly below product comparison.  
> **Section Background**: Regular (White)  
> **Recommended Height in Google Sites**: Drag blue handle to ~520px height.  
> **Session 3 Requirement**: Address common customer concerns & objections (Slide 8); structured for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) (Slide 29).  

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
  .faq-container {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 14px;
    padding: 32px 28px;
    max-width: 1120px;
    margin: 0 auto;
    box-shadow: 0 4px 18px rgba(0,0,0,0.05);
  }
  .faq-header { text-align: center; margin-bottom: 24px; }
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
    font-size: 1.8rem;
    text-transform: uppercase;
    color: #1a1d23;
  }
  .title span { color: #ff5e14; }
  .faq-list { display: flex; flex-direction: column; gap: 12px; }
  details {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 14px 18px;
    transition: background 0.2s, border-color 0.2s;
  }
  details[open] {
    background: #ffffff;
    border-color: #ff5e14;
    box-shadow: 0 4px 12px rgba(255, 94, 20, 0.08);
  }
  summary {
    font-weight: 700;
    font-size: 0.94rem;
    color: #0f172a;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  summary::-webkit-details-marker { display: none; }
  summary::after {
    content: '+';
    font-size: 1.3rem;
    color: #ff5e14;
    font-weight: 700;
    transition: transform 0.2s;
  }
  details[open] summary::after {
    content: '−';
    color: #ff5e14;
  }
  .answer {
    margin-top: 10px;
    font-size: 0.86rem;
    line-height: 1.6;
    color: #475569;
    border-top: 1px solid #f1f5f9;
    padding-top: 10px;
  }
</style>
</head>
<body>
  <div class="faq-container">
    <div class="faq-header">
      <span class="badge">Frequently Answered Questions</span>
      <h2 class="title">Engineering & <span>Compliance FAQs</span></h2>
      <p style="font-size:0.88rem; color:#64748b; margin-top:4px;">Direct answers to common technical, safety, and commercial procurement inquiries.</p>
    </div>

    <div class="faq-list">
      <details open>
        <summary>Are Ascentix ladders certified under Indian BIS IS standards?</summary>
        <div class="answer">
          Yes. Every Ascentix ladder is certified under <strong>BIS IS 4130 / 4131</strong> for heavy commercial duty. Units undergo independent testing for static proof load (up to 500 kg), lateral sway resistance, and 10-meter drop impact with zero structural weld failure.
        </div>
      </details>

      <details>
        <summary>Can the CarbonApex X1 be safely used near live high-voltage electrical lines?</summary>
        <div class="answer">
          Yes. The CarbonApex X1 uses proprietary Toray aerospace carbon composite stiles with <strong>35 kV dielectric resistance</strong>. Unlike aluminum or standard wet fiberglass ladders, it does not conduct electrical arcs, making it the safest choice for substations, industrial power lines, and metro rail tracks.
        </div>
      </details>

      <details>
        <summary>How does the pneumatic zero-pinch descent mechanism protect operators?</summary>
        <div class="answer">
          Our patented air-damped soft-close piston system regulates the retraction speed of each rung to 0.4 m/s. This prevents sudden drops and completely eliminates hand and finger pinch injuries common in cheap telescopic ladders.
        </div>
      </details>

      <details>
        <summary>What is your warranty coverage and PAN-India shipping policy?</summary>
        <div class="answer">
          All Ascentix industrial climbing systems carry an unconditional <strong>10-Year Structural Warranty</strong> covering alloy welds, locking pins, and composite integrity. We provide free express door-to-door transit insurance to over 19,000 PIN codes across India.
        </div>
      </details>

      <details>
        <summary>How can contractors or corporate buyers order fleet quantities?</summary>
        <div class="answer">
          Corporate procurement heads and contractors can use our online Fleet Quote Calculator on the Contact Us page or reach our Mumbai B2B desk directly via WhatsApp (+91 98765-43210) for GST invoices, volume discounts, and custom safety tethering options.
        </div>
      </details>
    </div>
  </div>
</body>
</html>
```

---

## 💡 Quick Troubleshooting Checklist

| Issue | How to Fix |
|---|---|
| **Vertical scrollbar appears inside the embed** | Click the embed box in Google Sites and drag the **bottom blue handle downward** until the scrollbar disappears. |
| **Container is too narrow** | Click the embed box and drag the **right blue handle all the way to the right** edge of the 12-column grid. |
| **Clicking a link reloads inside the small box** | Ensure links use `target="_top"` (all snippets above already include this). |
| **White box clashes with gray section background** | Hover over the section's left edge, click the 🎨 palette icon, and set the section background to **Regular (White)** or **Emphasis 1 (Light Gray)**. |
| **Need to edit text inside a snippet?** | Click the embed on your Google Sites page, click the ✏️ pencil (Edit) icon, change the text directly in the HTML code, and click Next → Save. |
