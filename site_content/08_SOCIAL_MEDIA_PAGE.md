# Ascentix Ladders — Social Media & Community Hub
**Target Platform**: Google Sites (Social Media Page)  
**Page Title**: Social Media & Community Hub | Connect with Ascentix  
**Campaign Hashtags**: `#AscentixClimb` • `#DropTestThursday` • `#EngineeredForSafety` • `#TakeTheHigherGround`  

---

## 1. Hero Banner Section
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Pages** tab and select **Social Media Hub**.
> 2. Hover over the top banner on the canvas.
> 3. Click **Header type** → Select **Banner**.
> 4. In the banner text box:
>    - Set style to **Title**: `Join the High Ground Community`
>    - Set style to **Subheading**: `Watch extreme stress tests, connect with over 1,50,000 professional tradespeople across India, and see how Ascentix is transforming job-site safety.`

---

## 2. Interactive Social Channels Bar (Ready-to-Paste Embed Code)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → **"Embed code"** tab.
> 2. Paste the snippet below → Click **Next** → Click **Insert**.
> 3. Drag the right blue handle full width across the page (12 columns).
> 4. Drag the **bottom blue handle downward** to **~420px – 460px** height so all 4 cards and buttons fit cleanly without internal scrollbars.

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

## 3. Native Google Sites Social Links Widget
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** tab.
> 2. Scroll down below Content blocks and click **Social links**.
> 3. In the popup dialog, enter your official handles:
>    - **YouTube**: `https://youtube.com/@AscentixLadders`
>    - **Instagram**: `https://instagram.com/ascentix_safety`
>    - **TikTok**: `https://tiktok.com/@ascentix_tools`
>    - **LinkedIn**: `https://linkedin.com/company/ascentix-ladders`
> 4. Click **Insert**. (Google Sites will automatically render the official brand logos).

---

## 4. Featured Video Series: #DropTestThursday
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Under **Content blocks**, click the **3rd tile (3 columns)**.
> 2. In each column, paste an episode card from below (or embed a YouTube video using **Insert > YouTube**).

### Episode 42: The 500 lb Anvil Drop
- **Title**: *500 lb Anvil vs Carbon Fiber Step*
- **Description**: We dropped a half-ton anvil directly onto the top platform of the CarbonApex X1 from 15 feet. Watch the frame absorb the impact with zero structural failure.

### Episode 39: Sand & Mud Slurry Torture Test
- **Title**: *TelePro 360 vs Heavy Slurry*
- **Description**: We submerged the TelePro 360 in wet river silt for 48 hours to test pneumatic piston seals. Result: 100% smooth retraction with zero grit binding.

### Episode 35: 35,000-Volt Electrical Arc Test
- **Title**: *35kV Dielectric High-Voltage Arc Test*
- **Description**: Side-by-side electrical arc demonstration comparing traditional aluminum, fiberglass, and Toray carbon composite frames.

---

## 5. The Ascentix Trade Ambassador Program
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Under **Content blocks**, click the **1st tile (1 large image on left + text on right)**.
> 2. On the left: upload `assets/logo/ascentix_logo.jpg` (or trade ambassador badge).
> 3. On the right: paste the ambassador perks below.
> 4. Add a button below: **Insert** → **Button** → Name: `Apply for Trade Ambassador Program` → Link: Select `Contact Us`.

### Ambassador Callout:
Are you a licensed electrician, civil contractor, HVAC technician, or architectural finisher with an active following across India?  
Join over 500 certified trade ambassadors who test our prototype ladders before they hit the commercial market.

**Ambassador Perks**:
- Free prototype hardware for real job-site torture testing across Indian conditions (monsoon, extreme heat, dust).
- 15% custom affiliate commission for your audience.
- Feature spots on Ascentix official YouTube and Instagram channels.
- VIP access to the annual India Safety Summit & ACETECH trade show participation.
