# Ascentix Ladders — Home Page Content Blueprint & Embed Snippets
**Target Platform**: Google Sites (Home Page)  
**Page Title**: Ascentix Ladders | Engineered for the Summit of Safety  
**Navigation Bar**: Home | About Us | The Team | Products ▾ | Social Media Hub | Contact Us  

---

## 1. Hero Section

You have two ways to build this in Google Sites:

### Option A: The Exact White Card Embed (Recommended — Gives 100% Visual Match)
> 💡 **Google Sites Action Steps**:
> 1. In Google Sites, hover over your top banner and click **Header type** (bottom-left) → Select **Title only**.
> 2. Delete all text inside that title box so the ugly dark background banner disappears completely.
> 3. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Click the **"Embed code"** tab.
> 4. Paste the snippet below → Click **Next** → Click **Insert**.
> 5. Click the inserted block on your canvas:
>    - Drag the **right blue circle handle** all the way across to make it full width (12 grid columns).
>    - Drag the **bottom blue circle handle** downward to **~460px** until all text, buttons, and image are visible without any scrollbar.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 12px; }
  
  .hero-card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 14px;
    padding: 44px 40px;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 36px;
    align-items: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    position: relative;
    overflow: hidden;
  }
  .hero-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 5px; height: 100%;
    background: #ff5e14;
  }
  .badge {
    display: inline-block;
    background: rgba(255, 94, 20, 0.08);
    border: 1px solid rgba(255, 94, 20, 0.3);
    color: #ff5e14;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 1.8px;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  .hero-title {
    font-family: 'Oswald', sans-serif;
    font-size: 2.8rem;
    line-height: 1.05;
    letter-spacing: 0.5px;
    margin-bottom: 14px;
    text-transform: uppercase;
    color: #1a1d23;
  }
  .hero-title span { color: #ff5e14; }
  .hero-desc {
    color: #3d4350;
    font-size: 0.98rem;
    line-height: 1.6;
    margin-bottom: 26px;
  }
  .actions { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    background: #ff5e14;
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 12px 22px;
    border-radius: 6px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: background 0.2s;
    cursor: pointer;
  }
  .btn-primary:hover { background: #e04f08; }
  .btn-secondary {
    background: transparent;
    border: 1.5px solid #d1d5db;
    color: #374151;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 12px 20px;
    border-radius: 6px;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
    cursor: pointer;
  }
  .btn-secondary:hover { border-color: #ff5e14; color: #ff5e14; }
  
  .visual-box img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
  }
  @media (max-width: 768px) {
    .hero-card { grid-template-columns: 1fr; padding: 24px; gap: 20px; }
    .hero-title { font-size: 2rem; }
    .visual-box img { height: 250px; }
  }
</style>
</head>
<body>
  <div class="hero-card">
    <div>
      <span class="badge">Aerospace Climbing Systems — India</span>
      <h1 class="hero-title">Engineered for the<br><span>Summit of Safety.</span></h1>
      <p class="hero-desc">We combine aerospace-grade 7075-T6 alloys, pure Toray carbon fiber, and zero-wobble geometry to build India's most trusted industrial climbing equipment — BIS certified for Indian job sites.</p>
      <div class="actions">
        <!-- In Google Sites embeds, relative links like href="Products" do not work because embeds run inside an iframe.
             Replace "YOUR-SITE-URL" with your published Google Site URL, e.g. https://sites.google.com/view/ascentix-ladders/products -->
        <a href="https://sites.google.com/view/ascentix-ladders/products" target="_blank" class="btn-primary">Explore All 10 Product Models</a>
        <a href="https://sites.google.com/view/ascentix-ladders/about-us" target="_blank" class="btn-secondary">The Ascentix Story</a>
      </div>
    </div>
    <div class="visual-box">
      <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80" alt="Ascentix TelePro 360 Ladder">
    </div>
  </div>
</body>
</html>
```

---

### Option B: Native Google Sites Banner
> If you prefer not using an embed, use Google Sites' native tools:
> 1. Set **Header type** → **Large banner**.
> 2. Click **Image** → **Upload** → [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg).
> 3. Click the bottom-right **Sparkle icon** (*Remove readability adjustment*) to un-dim the photo.
> 4. In the text box, enter:
>    - **Line 1 (Subheading)**: `NEXT-GENERATION INDUSTRIAL CLIMBING SYSTEMS`
>    - **Line 2 (Title)**: `Engineered for the Summit of Safety.`
>    - **Line 3 (Normal text)**: `We combine aerospace-grade alloys, Toray carbon fiber, and zero-wobble geometry...`
> 5. Click **Insert** → **Button** (`Explore Product Lineup` → link to `Products`).

---

## 2. Stat Callout & Engineering Proof Bar

> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Click **Embed (`< >`)** → Click **"Embed code"** tab.
> 2. Paste the snippet below → Click **Next** → Click **Insert**.
> 3. Drag the right blue handle full width, and drag the bottom handle downward to **~160px** height.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  body { background: transparent; padding: 10px 14px; }
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

## 3. The Ascentix Zero-Fail Architecture Matrix

> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Click **Embed (`< >`)** → Click **"Embed code"** tab.
> 2. Paste the snippet below → Click **Next** → Click **Insert**.
> 3. Drag the right blue handle full width, and drag the bottom handle downward to **~420px** height.
> 4. *Optional*: Hover over the left edge of this section → Click **Palette icon 🎨** → Select **Emphasis 1** for a soft gray background.

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
      <div class="card-desc">Internal triangular trusses and 7075-T6 box-beam stiles eliminate torsional twisting by 84%. Rock-solid footing at maximum 5.5 m extension — built for India's toughest infrastructure job sites.</div>
      <span class="card-tag">84% Less Sway Certified</span>
    </div>
    <div class="card">
      <div class="card-num">02</div>
      <div class="card-title">Toray Carbon Fiber</div>
      <div class="card-desc">High-modulus composite stiles tested to 35,000 Volts dielectric resistance. 60% lighter than standard fiberglass — essential safety for Indian electricians working on 33kV & 66kV overhead lines.</div>
      <span class="card-tag">Dielectric 35kV Certified</span>
    </div>
    <div class="card">
      <div class="card-num">03</div>
      <div class="card-title">Pneumatic Air Damping</div>
      <div class="card-desc">Patented dual hydraulic/pneumatic valving cushions every rung during retraction. Smooth, quiet descent protects fingers — critical for fatigue-free use across long Indian construction shifts.</div>
      <span class="card-tag">Zero-Pinch Air-Damped</span>
    </div>
  </div>
</body>
</html>
```

---

## 4. The Product Lineup (All 6 Models Grid)

### Option A: Complete Embed Code (All 6 Models in Responsive 3×2 Grid)
> 💡 **Google Sites Action Steps**:
> 1. Click **Insert** → **Embed (`< >`)** → **"Embed code"** tab.
> 2. Paste the snippet below → Click **Next** → Click **Insert**.
> 3. Click the newly inserted embed on your canvas:
>    - Drag the **right blue handle** all the way across to make it full width (12 grid columns).
>    - Drag the **bottom blue handle downward to ~1600px** (Desktop) so all rows of cards and their buttons fit cleanly without scrollbars.

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

  /* ── SECTION HEADER ── */
  .section-header { margin-bottom: 24px; text-align: left; }
  .section-title {
    font-family: 'Oswald', sans-serif;
    font-size: 2.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #1a1d23;
    margin-bottom: 6px;
    line-height: 1.1;
  }
  .section-title span { color: #ff5e14; }
  .section-subtitle { color: #7b8290; font-size: 0.95rem; }

  /* ── 10-CARD RESPONSIVE GRID (5×2 ON DESKTOP) ── */
  .card-grid-10 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  /* ── CARD ── */
  .card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 10px;
    padding: 18px;
    transition: all 0.22s ease;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    text-decoration: none;
    color: inherit;
  }
  .card:hover {
    border-color: #ff5e14;
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(255, 94, 20, 0.12);
  }
  .card-img-wrap {
    width: 100%;
    height: 190px;
    background: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 14px;
    border: 1px solid #e2e5ea;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 8px;
    transition: transform 0.25s ease;
  }
  .card:hover .card-img {
    transform: scale(1.03);
  }
  .meta-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }
  .role-badge {
    font-size: 0.72rem;
    color: #ff5e14;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }
  .price-tag {
    font-size: 0.85rem;
    font-weight: 700;
    color: #1a1d23;
    background: #f3f4f6;
    padding: 2px 8px;
    border-radius: 4px;
  }
  .card h3 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    color: #1a1d23;
    line-height: 1.2;
  }
  .card p {
    color: #4b5563;
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 16px;
    flex-grow: 1;
  }
  .btn-secondary {
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #d1d5db;
    color: #374151;
    padding: 10px 14px;
    font-size: 0.82rem;
    font-weight: 600;
    border-radius: 6px;
    text-align: center;
    text-decoration: none;
    transition: all 0.18s;
    margin-top: auto;
    display: block;
  }
  .card:hover .btn-secondary {
    border-color: #ff5e14;
    color: #ff5e14;
    background: rgba(255, 94, 20, 0.06);
  }

  @media (max-width: 1200px) {
    .card-grid-10 { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 960px) {
    .card-grid-10 { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 580px) {
    .card-grid-10 { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>
  <div class="section-header">
    <h2 class="section-title">The Product <span>Lineup</span></h2>
    <p class="section-subtitle">10 specialized models — click any card to explore full specifications, 4 color finishes, and application details.</p>
  </div>

  <div class="card-grid-10">
    <!-- MODEL 1: TelePro 360 -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/telepro-360" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" class="card-img" alt="TelePro 360">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 01 • Telescopic</span>
        <span class="price-tag">₹18,999</span>
      </div>
      <h3>TelePro 360</h3>
      <p>3.8m reach aerospace aluminium ladder that collapses to 88 cm for car-boot storage. BIS IS 4130 certified for compact urban mobility.</p>
      <div class="btn-secondary">View Model & Colors →</div>
    </a>

    <!-- MODEL 2: CarbonApex X1 -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/carbonapex-x1" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" class="card-img" alt="CarbonApex X1">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 02 • Carbon Fiber</span>
        <span class="price-tag">₹42,999</span>
      </div>
      <h3>CarbonApex X1</h3>
      <p>Only 3.2 kg. 100% dielectric Toray 3K carbon fiber. Zero electrical conductivity — BIS IS 4131 certified safe for Indian high-voltage sites.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 3: MultiFlex Transform -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/multiflex-transform" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80" class="card-img" alt="MultiFlex Transform">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 03 • 14-in-1</span>
        <span class="price-tag">₹24,999</span>
      </div>
      <h3>MultiFlex Transform</h3>
      <p>Quad-lock dual-pin hinges and auto-leveling outriggers — stable on India's uneven terrain, sloped rooftops, and stairwell landings.</p>
      <p style="font-size:0.78rem;color:#ff5e14;font-weight:700;margin-top:-8px;margin-bottom:8px;">&#127919; Best For: Stairwell & multi-position indoor work</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 4: TitanSafe Industrial -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/titansafe-industrial" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80" class="card-img" alt="TitanSafe Industrial">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 04 • Industrial</span>
        <span class="price-tag">₹38,499</span>
      </div>
      <h3>TitanSafe Industrial</h3>
      <p>BIS IS 4130 Heavy Duty 170 kg rated with full 360° safety cage & auto-braking casters — built for Indian warehouses & manufacturing plants.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 5: AeroReach Pro -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/aeroreach-pro" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80" class="card-img" alt="AeroReach Pro">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 05 • Smart Extension</span>
        <span class="price-tag">₹34,999</span>
      </div>
      <h3>AeroReach Pro</h3>
      <p>BIS IS 1875 certified 6.2m telescoping extension ladder with AeroLock™ one-touch rungs, aerospace 6061-T6 alloy, and all-terrain stabiliser feet.</p>
      <p style="font-size:0.78rem;color:#ff5e14;font-weight:700;margin-top:-8px;margin-bottom:8px;">&#127919; Best For: High-reach outdoor & extension work</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 6: VaultStep Deluxe -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/vaultstep-deluxe" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" class="card-img" alt="VaultStep Deluxe">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 06 • 5-in-1 Combination</span>
        <span class="price-tag">₹22,999</span>
      </div>
      <h3>VaultStep Deluxe</h3>
      <p>5-in-1 multi-position ladder with VaultFlex™ hinge, 260 mm wide anti-fatigue platform steps, and integrated 5 kg tool caddy tray.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 7: SolarStep FX -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/solarstep-fx" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80" class="card-img" alt="SolarStep FX">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 07 &bull; Solar Rooftop</span>
        <span class="price-tag">₹31,999</span>
      </div>
      <h3>SolarStep FX</h3>
      <p>India’s first dedicated solar rooftop ladder. RoofGrip™ Ridge Hook rated 450 kg. PM Surya Ghar EPC installer fleet ready.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 8: VoltShield FG-5 -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/voltshield-fg5" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80" class="card-img" alt="VoltShield FG-5">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 08 &bull; Dielectric Step</span>
        <span class="price-tag">₹18,499</span>
      </div>
      <h3>VoltShield FG-5</h3>
      <p>25kV pultruded E-glass fibreglass step ladder. Dual red locking safety feet. 550 mm wide-stance spreader bar for Indian LT/HV panel work.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 9: AtticMaster HA-3 (Home Solutions) -->
    <a href="https://sites.google.com/view/ascentix-ladders/home-solutions/atticmaster-ha3" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" class="card-img" alt="AtticMaster HA-3">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 09 &bull; Home Solutions</span>
        <span class="price-tag">₹24,999</span>
      </div>
      <h3>AtticMaster HA-3</h3>
      <p>Gas-strut folding attic loft ladder. 2 kg one-hand pull. Fits 2.40m–3.20m ceiling heights. 40mm PIR insulated ceiling hatch panel.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>

    <!-- MODEL 10: DeckRise Modular -->
    <a href="https://sites.google.com/view/ascentix-ladders/products/deckrise-modular" target="_blank" class="card">
      <div class="card-img-wrap">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" class="card-img" alt="DeckRise Modular">
      </div>
      <div class="meta-row">
        <span class="role-badge">Model 10 &bull; Rolling Platform</span>
        <span class="price-tag">₹64,999</span>
      </div>
      <h3>DeckRise Modular</h3>
      <p>4-height adjustable rolling work platform. 1.0m to 3.0m in 60 seconds. 200 kg rated. Expandable 800–1200mm deck. Factories Act 1948 compliant.</p>
      <div class="btn-secondary">View Model &amp; Colors &rarr;</div>
    </a>
  </div>
</body>
</html>
```

---

### Option B: Native Google Sites 10-Model Content Blocks (Best for Using Local Files)
> If you want to use the exact 3D ladder render files from your project without relying on online URLs, build this natively in Google Sites using two 5-column blocks:
> 1. In right sidebar, click **Insert** tab.
> 2. Under **Content blocks**, click the **6th tile (4 columns)** — Google Sites max is 4 columns natively, so use two rows of 5 columns by inserting the block twice and adjusting.
> 3. For each column, click **(+)** → **Upload** → upload the matching file from [`assets/products/`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/):
>    - **Row 1 Col 1**: [`model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg)
>    - **Row 1 Col 2**: [`model_2_carbonapex_x1.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_2_carbonapex_x1.jpg)
>    - **Row 1 Col 3**: [`model_3_multiflex_transform.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_3_multiflex_transform.jpg)
>    - **Row 1 Col 4**: [`model_4_titansafe_industrial.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_4_titansafe_industrial.jpg)
>    - **Row 1 Col 5**: [`model_5_aeroreach_pro.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_5_aeroreach_pro.jpg)
>    - **Row 2 Col 1**: [`model_6_vaultstep_deluxe.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_6_vaultstep_deluxe.jpg)
>    - **Row 2 Col 2**: [`model_7_solarstep_fx.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_fx.jpg)
>    - **Row 2 Col 3**: [`model_8_voltshield_fg5.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_fg5.jpg)
>    - **Row 2 Col 4**: [`model_9_atticmaster_ha3.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_ha3.jpg)
>    - **Row 2 Col 5**: [`model_10_deckrise_modular.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_modular.jpg)
> 5. **Fix Image Crop**: Click each uploaded image → click the **Uncrop icon (⤢)** on the mini floating toolbar so the full ladder height is visible.
> 6. Fill in the card text for each column:
>    - **Line 1 (Eyebrow)**: `MODEL XX • CATEGORY` (Highlight & choose font color Safety Orange `#FF5E14`, font style: Small)
>    - **Line 2 (Title)**: `PRODUCT NAME` (Style: Heading)
>    - **Line 3 (Description)**: Paste description from table below (Style: Normal text)
> 7. Add a **Button** below each column:
>    - Name: `View Model & Colors →` | Link: Select matching subpage from dropdown.

| Slot | Product Name | Eyebrow Tag | Price | Description Copy | Upload Asset File | Subpage Link |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Row 1 Col 1** | **TELEPRO 360** | `MODEL 01 • TELESCOPIC` | ₹18,999 | 3.8m reach aerospace aluminium ladder that collapses to 88 cm for car-boot storage. BIS IS 4130 certified. | [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg) | `TelePro 360` |
| **Row 1 Col 2** | **CARBONAPEX X1** | `MODEL 02 • CARBON FIBER` | ₹42,999 | Only 3.2 kg. 100% dielectric Toray 3K carbon fiber. BIS IS 4131 certified safe for Indian high-voltage sites. | [`assets/products/model_2_carbonapex_x1.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_2_carbonapex_x1.jpg) | `CarbonApex X1` |
| **Row 1 Col 3** | **MULTIFLEX TRANSFORM** | `MODEL 03 • 14-IN-1` | ₹24,999 | Quad-lock dual-pin hinges and auto-leveling outriggers. **Best For: Stairwell & multi-position indoor work.** | [`assets/products/model_3_multiflex_transform.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_3_multiflex_transform.jpg) | `MultiFlex Transform` |
| **Row 1 Col 4** | **TITANSAFE INDUSTRIAL** | `MODEL 04 • INDUSTRIAL` | ₹38,499 | BIS IS 4130 Heavy Duty 170 kg rated with full 360° safety cage & auto-braking casters — ideal for Indian factories. | [`assets/products/model_4_titansafe_industrial.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_4_titansafe_industrial.jpg) | `TitanSafe Industrial` |
| **Row 1 Col 5** | **AEROREACH PRO** | `MODEL 05 • EXTENSION` | ₹34,999 | BIS IS 1875 certified 6.2m telescoping extension ladder. **Best For: High-reach outdoor & extension work.** | [`assets/products/model_5_aeroreach_pro.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_5_aeroreach_pro.jpg) | `AeroReach Pro` |
| **Row 2 Col 1** | **VAULTSTEP DELUXE** | `MODEL 06 • COMBINATION` | ₹22,999 | 5-in-1 multi-position ladder with VaultFlex™ hinge, 260 mm wide platform steps & integrated 5 kg tool tray. | [`assets/products/model_6_vaultstep_deluxe.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_6_vaultstep_deluxe.jpg) | `VaultStep Deluxe` |
| **Row 2 Col 2** | **SOLARSTEP FX** | `MODEL 07 • SOLAR ROOFTOP` | ₹31,999 | India’s first dedicated solar rooftop access ladder. RoofGrip™ Ridge Hook 450 kg proof load. PM Surya Ghar EPC fleet ready. | [`assets/products/model_7_solarstep_fx.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_7_solarstep_fx.jpg) | `SolarStep FX` |
| **Row 2 Col 3** | **VOLTSHIELD FG-5** | `MODEL 08 • DIELECTRIC STEP` | ₹18,499 | 25kV pultruded E-glass fibreglass step ladder. Dual red locking feet. 550 mm wide-stance spreader bar for Indian LT/HV panel work. | [`assets/products/model_8_voltshield_fg5.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_8_voltshield_fg5.jpg) | `VoltShield FG-5` |
| **Row 2 Col 4** | **ATTICMASTER HA-3** | `MODEL 09 • HOME SOLUTIONS` | ₹24,999 | Gas-strut folding attic loft ladder. 2 kg one-hand pull. Fits 2.40m–3.20m ceiling heights. 40mm PIR insulated hatch panel. | [`assets/products/model_9_atticmaster_ha3.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_9_atticmaster_ha3.jpg) | `AtticMaster HA-3` (under Home Solutions) |
| **Row 2 Col 5** | **DECKRISE MODULAR** | `MODEL 10 • ROLLING PLATFORM` | ₹64,999 | 4-height adjustable rolling work platform. 1.0m–3.0m in 60 sec. 200 kg rated. Expandable 800–1200mm deck. Factories Act 1948 compliant. | [`assets/products/model_10_deckrise_modular.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_10_deckrise_modular.jpg) | `DeckRise Modular` |

---

## 5. Verifications & Industry Certifications (Ready-to-Paste Embed Code)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Select the **"Embed code"** tab.
> 2. Paste the code snippet below → Click **Next** → Click **Insert**.
> 3. Click the newly inserted block on your canvas:
>    - Drag the **right blue handle** all the way across to make it full width (12 grid columns).
>    - Drag the **bottom blue handle downward** to **~260px** (Desktop) or **~360px** so the cards and badges fit cleanly without scrollbars.
> 4. *Tip*: Hover over the left edge of this section → Click **Palette icon 🎨** → Choose **Emphasis 1 (Light Gray)** to make the white certification cards pop.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
  body { background: transparent; padding: 14px; color: #1a1d23; }

  .verifications-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  .verifications-header {
    margin-bottom: 20px;
    text-align: left;
  }
  .verifications-eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #ff5e14;
    display: inline-block;
    margin-bottom: 4px;
  }
  .verifications-title {
    font-family: 'Oswald', 'Inter', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a1d23;
    line-height: 1.1;
  }
  .verifications-title span {
    color: #ff5e14;
  }

  /* 4-Card Responsive Grid */
  .cert-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }

  .cert-card {
    background: #ffffff;
    border: 1px solid #e2e5ea;
    border-radius: 12px;
    padding: 20px 22px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.22s ease;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .cert-card:hover {
    border-color: #ff5e14;
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(255, 94, 20, 0.12);
  }

  .cert-icon-badge {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: rgba(255, 94, 20, 0.08);
    border: 1px solid rgba(255, 94, 20, 0.25);
    color: #ff5e14;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  }
  .cert-icon-badge svg {
    width: 20px;
    height: 20px;
  }

  .cert-name {
    font-size: 1.05rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.3;
    margin-bottom: 8px;
  }
  .cert-desc {
    font-size: 0.86rem;
    color: #4b5563;
    line-height: 1.5;
    flex-grow: 1;
  }

  @media (max-width: 960px) {
    .cert-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 540px) {
    .cert-grid { grid-template-columns: 1fr; }
    .verifications-title { font-size: 1.7rem; }
  }
</style>
</head>
<body>
  <div class="verifications-wrapper">
    <div class="verifications-header">
      <div class="verifications-eyebrow">Safety &amp; Compliance Standards</div>
      <h2 class="verifications-title">Verifications<span>.</span></h2>
    </div>

    <div class="cert-grid">
      <!-- 1. ANSI Certified -->
      <div class="cert-card">
        <div class="cert-icon-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div class="cert-name">ANSI A14.2 &amp; A14.5 Certified</div>
        <div class="cert-desc">Compliant with highest American National Standards Institute safety tiers.</div>
      </div>

      <!-- 2. OSHA Class IAA -->
      <div class="cert-card">
        <div class="cert-icon-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div class="cert-name">OSHA Class IAA</div>
        <div class="cert-desc">375 lb Special Heavy Duty Rating for industrial job sites.</div>
      </div>

      <!-- 3. EN131 Professional -->
      <div class="cert-card">
        <div class="cert-icon-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div class="cert-name">EN131 Professional</div>
        <div class="cert-desc">European standard for professional trade climbing equipment.</div>
      </div>

      <!-- 4. TÜV Rheinland Tested -->
      <div class="cert-card">
        <div class="cert-icon-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <div class="cert-name">TÜV Rheinland Tested</div>
        <div class="cert-desc">50,000-cycle stress fatigue verified with zero structural failure.</div>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Alternative: Native Google Sites Text Box Layout (No Code)
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Click **Text box**.
> 2. Center-align the text and paste the badges below.
> 3. Hover on the left edge → Click **Palette icon 🎨** → Choose **Emphasis 1 (Light Gray)**.

- **ANSI A14.2 & A14.5 Certified**: Compliant with highest American National Standards Institute safety tiers.
- **OSHA Class IAA**: 375 lb Special Heavy Duty Duty Rating for industrial job sites.
- **EN131 Professional**: European standard for professional trade climbing equipment.
- **TÜV Rheinland Tested**: 50,000-cycle stress fatigue verified with zero structural failure.

---

## 6. Client Testimonials & Trade Reviews
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Under **Content blocks**, click the **2nd tile (2 columns)**.
> 2. In Column 1, paste Testimonial 1.
> 3. In Column 2, paste Testimonial 2.

> *"Switching our electrical contracting team to the Ascentix CarbonApex X1 reduced shoulder strain complaints by 65%. It is lighter than a bucket of cement and completely non-conductive — a game-changer for our 66kV substation work."*  
> **— Rajesh Iyer, Senior Electrical Contractor & Safety Officer, Iyer Power Infrastructure, Chennai**

> *"The auto-leveling outriggers on the MultiFlex Transform allowed our crew to work on a 3-storey sloped terrace with absolute zero wobble. Best investment we made for our metro construction project this year."*  
> **— Priya Nambiar, Lead Project Engineer, Nambiar Construction & Interiors, Bengaluru**

---

## 7. Site Footer (Ready-to-Paste Embed Code)
> 💡 **Google Sites Action Steps**:
> 1. Scroll down to the very bottom of the Google Sites canvas and click **Edit footer** (or **Add footer**).
> 2. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Click the **"Embed code"** tab.
> 3. Paste the snippet below → Click **Next** → Click **Insert**.
> 4. Resize the embed box:
>    - Drag the **right blue handle** all the way across to make it full width (12 grid columns).
>    - Drag the **bottom blue handle downward** to **~220px** (Desktop) so all 3 columns and links display cleanly without vertical scrollbars.
> 5. Because this is placed in Google Sites' global footer area, it automatically renders across all pages of your website!

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
  }
  body { 
    background: transparent; 
    padding: 16px; 
    color: #1a1d23; 
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.4fr 0.8fr 0.8fr;
    gap: 36px;
    padding: 24px 0 16px 0;
    border-top: 1px solid #e5e7eb;
  }

  /* Column 1: Brand */
  .footer-brand-title {
    font-family: 'Oswald', 'Inter', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #ff5e14;
    margin-bottom: 12px;
  }
  .footer-brand-desc {
    color: #64748b;
    font-size: 0.88rem;
    line-height: 1.6;
    margin-bottom: 18px;
    max-width: 460px;
  }
  .footer-copyright {
    color: #94a3b8;
    font-size: 0.8rem;
  }

  /* Columns 2 & 3: Navigation & Products */
  .footer-col-title {
    font-family: 'Oswald', 'Inter', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #1a1d23;
    margin-bottom: 14px;
  }
  .footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
  .footer-links a {
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
    display: inline-block;
  }
  .footer-links a:hover {
    color: #ff5e14;
  }

  @media (max-width: 768px) {
    .footer-container {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  }
</style>
</head>
<body>
  <footer class="footer-container">
    <!-- Col 1: Company Info -->
    <div>
      <div class="footer-brand-title">ASCENTIX LADDERS PVT. LTD.</div>
      <p class="footer-brand-desc">
        Engineered for the summit of safety. Premium climbing systems built with aerospace 7075-T6 aluminium, Toray carbon fibre, and zero-wobble geometry. BIS IS 4130/4131 certified for India.
      </p>
      <p class="footer-copyright">
        &copy; 2026 Ascentix Ladders Pvt. Ltd. All rights reserved.
      </p>
    </div>

    <!-- Col 2: Navigation -->
    <div>
      <div class="footer-col-title">NAVIGATION</div>
      <ul class="footer-links">
        <li><a href="Home" target="_top">Home</a></li>
        <li><a href="About-Us" target="_top">About Us</a></li>
        <li><a href="The-Team" target="_top">The Team</a></li>
        <li><a href="Social-Media-Hub" target="_top">Social Media Hub</a></li>
        <li><a href="Contact-Us" target="_top">Contact Us</a></li>
      </ul>
    </div>

    <!-- Col 3: Product Models -->
    <div>
      <div class="footer-col-title">PRODUCT MODELS</div>
      <ul class="footer-links">
        <li><a href="Products/TelePro-360" target="_top">1. TelePro 360</a></li>
        <li><a href="Products/CarbonApex-X1" target="_top">2. CarbonApex X1</a></li>
        <li><a href="Products/MultiFlex-Transform" target="_top">3. MultiFlex Transform</a></li>
        <li><a href="Products/TitanSafe-Industrial" target="_top">4. TitanSafe Industrial</a></li>
      </ul>
    </div>
  </footer>
</body>
</html>
```

