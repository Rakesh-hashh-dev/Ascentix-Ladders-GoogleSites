# Ascentix Ladders — Social Media & Community Hub
**Target Platform**: Google Sites (Social Media Page)  
**Page Title**: Social Media & Community Hub | Connect with Ascentix  
**Framework**: Aligned with Session 4 Learning (Alan Charlesworth, Chapter 3: *What Is Social Media Marketing?*)  
**Campaign Hashtags**: `#AscentixClimb` • `#DropTestThursday` • `#EngineeredForSafety` • `#35kVArcTest`  

---

## 1. Hero Banner Section
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Pages** tab and select **Social Media Hub**.
> 2. Hover over the top banner on the canvas.
> 3. Click **Header type** → Select **Banner**.
> 4. In the banner text box:
>    - Set style to **Title**: `Join the High Ground Community`
>    - Set style to **Subheading**: `Watch certified 4K drop tests, connect with over 1,50,000 professional tradespeople across India, and see how Ascentix is transforming job-site safety.`

---

## 2. Interactive Social Channels Dashboard (Ready-to-Paste Embed Code)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → **"Embed code"** tab.
> 2. Paste the snippet below → Click **Next** → Click **Insert**.
> 3. Drag the right blue handle full width across the page (12 columns).
> 4. Drag the **bottom blue handle downward** to **~430px – 470px** height so all 4 cards and buttons fit cleanly without internal scrollbars.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
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
    padding: 24px 18px 20px 18px;
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
    font-size: 0.70rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ff5e14;
    margin-bottom: 4px;
  }
  .channel-handle {
    font-size: 1.05rem;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    line-height: 1.3;
    margin-bottom: 8px;
    text-decoration: none;
  }
  .channel-desc {
    font-size: 0.82rem;
    color: #64748b;
    line-height: 1.45;
    margin-bottom: 16px;
    flex-grow: 1;
  }
  .action-btn {
    width: 100%;
    padding: 9px 12px;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    color: #1e293b;
    font-size: 0.82rem;
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
  .action-btn.btn-wa:hover {
    border-color: #22c55e;
    background: #22c55e;
  }
  @media (max-width: 960px) {
    .social-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
  @media (max-width: 520px) {
    .social-grid { grid-template-columns: 1fr; }
    .social-card { padding: 20px 16px 16px; }
  }
</style>
</head>
<body>
  <div class="social-grid">
    <!-- Card 1: YouTube (Video Sharing / Demonstrations) -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill="#FF0000"/>
          <polygon points="18,14.5 30,22 18,29.5" fill="#FFFFFF"/>
        </svg>
      </div>
      <div class="channel-label">YOUTUBE (VIDEO PROOF)</div>
      <div class="channel-handle">@ASCENTIXLADDERS</div>
      <p class="channel-desc">Certified 4K Drop Tests, 35kV electrical arc trials, and destructive load tests for Indian safety inspectors.</p>
      <a href="https://youtube.com/@AscentixLadders" target="_blank" class="action-btn">Subscribe (1.42L+)</a>
    </div>

    <!-- Card 2: LinkedIn (B2B Fleet & Tenders) -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill="#0A66C2"/>
          <path fill="#FFFFFF" d="M12.5 17.5h5V32.5h-5V17.5zm2.5-7.5c1.6 0 2.9 1.3 2.9 2.9 0 1.6-1.3 2.9-2.9 2.9-1.6 0-2.9-1.3-2.9-2.9 0-1.6 1.3-2.9 2.9-2.9zm6.2 7.5h4.8v2.1h.1c.7-1.3 2.3-2.6 4.8-2.6 5.1 0 6.1 3.4 6.1 7.7V32.5h-5v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V32.5h-5V17.5z"/>
        </svg>
      </div>
      <div class="channel-label">LINKEDIN (B2B PROCUREMENT)</div>
      <div class="channel-handle">ASCENTIX LADDERS</div>
      <p class="channel-desc">DISCOM fleet whitepapers, BIS IS 4130 compliance reports, and institutional tender announcements.</p>
      <a href="https://linkedin.com/company/ascentix-ladders" target="_blank" class="action-btn">Connect (34K)</a>
    </div>

    <!-- Card 3: Instagram (Visual Tradesperson Community) -->
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
      <div class="channel-label">INSTAGRAM (COMMUNITY)</div>
      <div class="channel-handle">@ASCENTIX.LADDERS</div>
      <p class="channel-desc">Real Indian job-site reels, tradesperson spotlights, and #DropTestThursday community submissions.</p>
      <a href="https://instagram.com/ascentix.ladders" target="_blank" class="action-btn">Follow (89K)</a>
    </div>

    <!-- Card 4: WhatsApp Fleet Desk (Dark Social / 1-to-1 RFQ) -->
    <div class="social-card">
      <div class="icon-box">
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="44" height="44" rx="10" fill="#22C55E"/>
          <path fill="#FFFFFF" d="M22 10C15.4 10 10 15.4 10 22c0 2.6.8 5 2.3 7L11 34l5.2-1.3c1.9 1.2 4.1 1.8 6.3 1.8 6.6 0 12-5.4 12-12s-5.4-12-12-12zm6.2 16.9c-.3.7-1.5 1.4-2.1 1.4-.6.1-1.3.1-2.1-.2-.5-.2-1.2-.4-2-.9-3.7-2-5.9-5.8-6.1-6.1-.2-.3-1.5-2-1.5-3.8 0-1.8 1-2.7 1.3-3.1.4-.4.8-.5 1.1-.5.3 0 .5 0 .7.1.3.6 1 2.3 1.1 2.5.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.8 1.7 3.2 1.9.4.2.6.2.8-.1.3-.3.9-1.1 1.2-1.4.3-.4.5-.3.8-.2.3.1 2 1 2.4 1.2.3.2.6.3.7.4.1.3.1 1.3-.2 2z"/>
        </svg>
      </div>
      <div class="channel-label">WHATSAPP (DARK SOCIAL)</div>
      <div class="channel-handle">FLEET &amp; TECH DESK</div>
      <p class="channel-desc">Instant 1-to-1 RFQ quotes, NABL test certificates delivery, and private engineering consultations.</p>
      <a href="https://wa.me/919876543210" target="_blank" class="action-btn btn-wa">Chat on WhatsApp ↗</a>
    </div>
  </div>
</body>
</html>
```

---

## 3. Native Google Sites Social Links Setup
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Insert** tab.
> 2. Scroll down below Content blocks and click **Social links**.
> 3. Enter your official handles (notice TikTok/Snapchat are excluded in compliance with Session 4 B2B criteria):
>    - **YouTube**: `https://youtube.com/@AscentixLadders`
>    - **LinkedIn**: `https://linkedin.com/company/ascentix-ladders`
>    - **Instagram**: `https://instagram.com/ascentix.ladders`
>    - **WhatsApp**: `https://wa.me/919876543210`
> 4. Click **Insert**.

---

## 4. Featured Video Series: #DropTestThursday (Content Marketing Doctrine)
> *Grounded in Robert Rose's principle (§3.3.3): "Traditional marketing is telling the world you're a rock star; Content Marketing is showing the world you are one."*

### Episode 42: The 500 lb Anvil Drop
- **Title**: *500 lb Anvil vs MultiFlex Transform Quad-Lock Hinge*
- **Description**: We dropped a 225 kg anvil from 4 meters directly onto the 7075-T6 aluminum hinge mechanism. Watch the high-speed 1000fps capture showing zero fracture and immediate full latch retention.

### Episode 39: 35,000-Volt Electrical Arc Test (NABL Lab)
- **Title**: *Can 35,000 Volts Penetrate Toray Carbon Fiber?*
- **Description**: Side-by-side high-voltage test comparing traditional aluminum (violent short-circuit explosion) against the CarbonApex X1 dielectric composite rail (0.00 mA leakage).

### Episode 35: Sand, Slurry & Monsoonal Soak Test
- **Title**: *TelePro 360 vs Heavy River Silt for 48 Hours*
- **Description**: Testing pneumatic soft-close damping seals under severe Indian construction grit conditions to verify zero piston binding.

---

## 5. The Trade Ambassador Program (Micro-Influencer Policy)
> *Grounded in Roy's (2014) Influencer Expectation Model (§3.3.2) & Nielsen's 90-9-1 Rule.*

Rather than paying celebrity influencers who possess no credibility on job sites, Ascentix partners with **verified micro-influencers (1,000–10,000 followers)** who are active electrical contractors, solar EPC installers, and civil site engineers.

**Ambassador Framework**:
- **31% Gear / Testing Materials**: Free loaner ladders (*VoltShield FG5*, *SolarStep FX*) for 60-day extreme site evaluations.
- **28% Technical Information**: Early access to factory destruction lab blueprints and NABL high-voltage test data before public release.
- **100% Disclosure Compliance**: All ambassador posts clearly tag `#AscentixPartner` and `#ProductLoanedForTesting` to maintain strict credibility and regulatory compliance.

---

## 6. Social Service & Support Escalation Protocol (§3.3.9)
- **Proactive Social Service**: Regular maintenance guides, step-by-step ladder inspection tutorials, and seasonal safety checklists posted openly to educate the industry.
- **Reactive Support Shift to Dark Social**: Any customer expressing difficulty or raising a safety concern in a public comment section is routed within 30 minutes to our private engineering desk at `wa.me/919876543210` or `support@ascentix-ladders.in`. This ensures immediate resolution while protecting public brand perception.
