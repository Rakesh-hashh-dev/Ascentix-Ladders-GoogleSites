# Ascentix Ladders — Leadership & Functional Team
**Target Platform**: Google Sites (Dedicated "The Team" Page)  
**Page Title**: The Team | The Engineers & Visionaries Behind Ascentix  
**Navigation Hierarchy**: Home | About Us | **The Team** | Products ▾ | Social Media Hub | Contact Us  

---

## 1. Page Header Banner
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Pages** tab and select **The Team**.
> 2. Hover over the top banner → Click **Header type** → Select **Banner**.
> 3. Click the text box inside the banner:
>    - Style: **Title** → `The Multidisciplinary Team Behind Ascentix`
>    - Style: **Subheading** → `Meet the 11 specialized leads directing engineering, ergonomics, customer insights, and industrial quality across India's next-generation climbing brand.`

---

## 2. Redesigned Interactive 11-Member Team Directory (Ready-to-Paste Embed)

> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Click **Embed (`< >`)** → Select **"Embed code"** tab.
> 2. Paste the snippet below into the box → Click **Next** → Click **Insert**.
> 3. Click the newly placed widget on your canvas:
>    - Drag the **right blue handle** all the way across to make it full width (12 grid columns).
>    - Drag the **bottom blue handle downward to ~680px** (Desktop) so all 11 cards fit cleanly without scrollbars.

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

## 3. Team Member Role Mapping Table (11 Members across 7 Authorized Roles)

| # | Name | Assigned Role (from 7 Authorized) | Description |
| :--- | :--- | :--- | :--- |
| **01** | **Rakesh Kumar Behera** | **Leader (1)** *(Fixed)* | Coordinates the company concept and product direction. |
| **02** | **Aditya Ajay Limkar** | **Developer Lead** | Guides ladder design and prototype planning. |
| **03** | **Kritika Rathi** | **Design Lead** | Shapes the visual identity and product finishes. |
| **04** | **Purvi** | **Social media** | Plans the brand’s social content and community presence. |
| **05** | **Sachin Kumar** | **Product Managers** | Defines needs for home-use models. |
| **06** | **Shukla Shivam Rajendra** | **Product Managers** | Defines needs for professional-use models. |
| **07** | **Anuj Tripathi** | **Analytics** | Organizes concept feedback and comparison data. |
| **08** | **Harsha** | **Market Research** | Studies customer needs and use cases. |
| **09** | **Navneet Kumar Pandit** | **Product Managers** | Supports model concepts and feature planning. |
| **10** | **Wilson Toppo** | **Design Lead** | Develops page visuals and presentation assets. |
| **11** | **Apoorva Sharma** | **Market Research** | Collects feedback from home and trade users. |
