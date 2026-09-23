# Ascentix Ladders — Contact Us Page
**Target Platform**: Google Sites (Contact Us Page)  
**Page Title**: Contact Ascentix Ladders Pvt. Ltd. | India HQ, Fleet Sales & Support  
**Target Market**: India (PAN-India Operations, BIS IS 4130/4131 Certified)

---

## 1. Hero Banner Section
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Pages** tab and select **Contact Us**.
> 2. Hover over the top banner → Click **Header type** → Select **Banner**.
> 3. In the banner text box:
>    - Set style to **Title**: `Connect with Ascentix Ladders India`
>    - Set style to **Subheading**: `Direct access to our Mumbai engineering headquarters, commercial fleet sales team, and nationwide technical support desk.`

---

## 2. Interactive Fleet Quote Calculator & Inquiry Form (100% Responsive & Google Sheets Connected)

> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Click **"Embed code"** tab.
> 2. Paste the snippet below into the box → Click **Next** → Click **Insert**.
> 3. Click on the newly inserted calculator widget:
>    - Drag the right blue handle across the page (full 12 grid columns).
>    - Drag the **bottom-center blue circle handle downward** to **~650px** (Desktop) or **~820px** (Mobile view) so all fields fit without scrollbars.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@600;700&display=swap" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
  html, body { width: 100%; background: transparent; padding: 8px; color: #1a1d23; -webkit-text-size-adjust: 100%; }
  
  .form-box {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: clamp(16px, 4vw, 28px);
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  }
  
  .form-header { margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
  .badge-india {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fff7ed;
    border: 1px solid #fed7aa;
    color: #c2410c;
    font-size: 0.74rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }
  .form-title { font-family: 'Oswald', sans-serif; font-size: clamp(1.3rem, 3.5vw, 1.65rem); color: #ff5e14; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.2; }
  .form-desc { font-size: 0.85rem; color: #64748b; margin-top: 4px; line-height: 1.4; }
  
  .form-group { margin-bottom: 12px; }
  label { display: block; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: #475569; letter-spacing: 0.5px; margin-bottom: 5px; }
  
  /* Prevent iOS zoom on focus with 16px minimum on mobile */
  input, select, textarea {
    width: 100%;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    color: #0f172a;
    padding: 10px 12px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
    appearance: none;
  }
  select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 32px;
  }
  input:focus, select:focus, textarea:focus { 
    border-color: #ff5e14; 
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 94, 20, 0.15);
  }
  
  /* Responsive Auto-Collapsing Grid */
  .grid-2 { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 12px; 
  }
  
  .calc-badge {
    background: #fff7ed;
    border: 1px solid #ff5e14;
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 6px 0 14px 0;
    flex-wrap: wrap;
    gap: 8px;
  }
  .calc-label { font-size: 0.84rem; color: #1e293b; font-weight: 600; }
  .calc-price { font-family: 'Oswald', sans-serif; font-size: clamp(1.3rem, 3vw, 1.6rem); color: #ff5e14; font-weight: 700; white-space: nowrap; }
  .calc-subnote { font-size: 0.72rem; color: #64748b; display: block; margin-top: 2px; }
  
  .gst-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8rem;
    color: #475569;
    margin-bottom: 14px;
    background: #f1f5f9;
    padding: 8px 12px;
    border-radius: 6px;
  }
  .gst-pill input[type="checkbox"] { width: 16px; height: 16px; margin: 0; cursor: pointer; flex-shrink: 0; }
  
  .submit-btn {
    width: 100%;
    background: #ff5e14;
    color: #ffffff;
    border: none;
    padding: 14px;
    border-radius: 8px;
    font-size: 0.96rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(255,94,20,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .submit-btn:hover { background: #e04f08; transform: translateY(-1px); }
  .submit-btn:active { transform: scale(0.99); }
  .submit-btn:disabled { background: #94a3b8; cursor: not-allowed; transform: none; box-shadow: none; }
  
  .status-msg {
    display: none;
    margin-top: 14px;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    font-size: 0.88rem;
    line-height: 1.5;
  }
  .status-success {
    background: #ecfdf5;
    border: 1px solid #10b981;
    color: #065f46;
  }
  .status-error {
    background: #fef2f2;
    border: 1px solid #ef4444;
    color: #991b1b;
  }
  
  /* Mobile Responsive Breakpoints */
  @media (max-width: 600px) {
    .grid-2 { grid-template-columns: 1fr; gap: 8px; }
    .form-box { padding: 16px 14px; }
    .calc-badge { flex-direction: column; align-items: flex-start; }
    input, select, textarea { font-size: 16px; /* stops mobile safari zoom */ }
  }
</style>
</head>
<body>
  <div class="form-box">
    <div class="form-header">
      <div class="badge-india">🇮🇳 PAN-India Commercial Procurement</div>
      <h3 class="form-title">Commercial &amp; Fleet Quote Builder</h3>
      <p class="form-desc">Select model, volume tier, and state for immediate Indian GST-compliant pricing.</p>
    </div>
    
    <form id="quoteForm" onsubmit="handleQuoteSubmit(event)">
      <div class="grid-2">
        <div class="form-group">
          <label for="modelSelect">Select Ladder Model</label>
          <select id="modelSelect" onchange="calculate()">
            <option value="28999" data-name="TelePro 360">TelePro 360 (₹28,999)</option>
            <option value="39999" data-name="CarbonApex X1">CarbonApex X1 (₹39,999)</option>
            <option value="34999" data-name="MultiFlex Transform">MultiFlex Transform (₹34,999)</option>
            <option value="51999" data-name="TitanSafe Industrial">TitanSafe Industrial (₹51,999)</option>
            <option value="34999" data-name="AeroReach Pro">AeroReach Pro (₹34,999)</option>
            <option value="22999" data-name="VaultStep Deluxe">VaultStep Deluxe (₹22,999)</option>
          </select>
        </div>
        <div class="form-group">
          <label for="qtySelect">Procurement Volume</label>
          <select id="qtySelect" onchange="calculate()">
            <option value="1">1 Unit (Standard Sample)</option>
            <option value="5">5 Units (10% Fleet Discount)</option>
            <option value="10">10 Units (15% Fleet Discount)</option>
            <option value="25">25+ Units (20% Corporate / GeM Tier)</option>
            <option value="50">50+ Units (25% Bulk Project Tier)</option>
          </select>
        </div>
      </div>
      
      <div class="calc-badge">
        <div>
          <span class="calc-label">Estimated Price (Excl. 18% GST):</span>
          <span class="calc-subnote">100% Eligible for Input Tax Credit (ITC) · Free Freight for 10+ Units</span>
        </div>
        <span id="priceDisplay" class="calc-price">₹28,999 INR</span>
      </div>
      
      <div class="grid-2">
        <div class="form-group">
          <label for="custName">Contact Person Name *</label>
          <input type="text" id="custName" required placeholder="e.g. Rajesh Nair / Vikram Verma">
        </div>
        <div class="form-group">
          <label for="custEmail">Official Work Email *</label>
          <input type="email" id="custEmail" required placeholder="procurement@infra-build.co.in">
        </div>
      </div>

      <div class="grid-2">
        <div class="form-group">
          <label for="custPhone">Mobile / WhatsApp Number *</label>
          <input type="tel" id="custPhone" required placeholder="+91 98XXX XXXXX">
        </div>
        <div class="form-group">
          <label for="custState">Delivery State / UT</label>
          <select id="custState">
            <option value="Maharashtra (Mumbai/Pune Hub)">Maharashtra (Mumbai/Pune Hub)</option>
            <option value="Delhi NCR / Haryana / UP">Delhi NCR / Haryana / UP</option>
            <option value="Karnataka (Bengaluru Hub)">Karnataka (Bengaluru Hub)</option>
            <option value="Tamil Nadu (Chennai Hub)">Tamil Nadu (Chennai Hub)</option>
            <option value="Gujarat (Ahmedabad/Surat)">Gujarat (Ahmedabad/Surat)</option>
            <option value="Telangana (Hyderabad)">Telangana (Hyderabad)</option>
            <option value="West Bengal (Kolkata)">West Bengal (Kolkata)</option>
            <option value="Other State (PAN-India)">Other State (PAN-India)</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="custGst">Company Name &amp; GSTIN (Optional)</label>
        <input type="text" id="custGst" placeholder="e.g. Larsen Infra Ltd · GSTIN: 27AABCL1234F1Z9">
      </div>
      
      <div class="form-group">
        <label for="custNotes">Specific Job-site Requirements / BIS Specs</label>
        <textarea id="custNotes" rows="2" placeholder="Specify reach height, dielectric 35kV, tender delivery timelines..."></textarea>
      </div>

      <div class="gst-pill">
        <input type="checkbox" id="gstInvoiceCheck" checked>
        <label for="gstInvoiceCheck" style="margin:0;font-size:0.8rem;text-transform:none;font-weight:500;cursor:pointer">
          Require Official GST Tax Invoice for Input Tax Credit (ITC)
        </label>
      </div>
      
      <button type="submit" class="submit-btn" id="submitBtn">
        <span>Request Formal Proforma Quote (IST)</span>
      </button>
    </form>

    <div id="statusMsg" class="status-msg"></div>
  </div>

  <script>
    // ⚙️ GOOGLE SHEETS APPS SCRIPT WEB APP URL
    const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzluwOU1DZwdiwCqDN8U_RTPOXsvctihL9b6gX2sav_1oP-bmDJSkDEcfKQk71JeBFVbg/exec'; 

    let currentCalculatedPrice = '₹28,999 INR';

    function calculate() {
      const modelSelect = document.getElementById('modelSelect');
      const base = parseFloat(modelSelect.value);
      const qty = parseInt(document.getElementById('qtySelect').value);
      let disc = 1.0;
      if (qty >= 50) disc = 0.75;
      else if (qty >= 25) disc = 0.80;
      else if (qty >= 10) disc = 0.85;
      else if (qty >= 5) disc = 0.90;
      const total = Math.round(base * qty * disc);
      currentCalculatedPrice = '₹' + total.toLocaleString('en-IN') + ' INR';
      document.getElementById('priceDisplay').innerText = currentCalculatedPrice;
    }

    async function handleQuoteSubmit(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submitBtn');
      const statusMsg = document.getElementById('statusMsg');
      
      const modelEl = document.getElementById('modelSelect');
      const modelName = modelEl.options[modelEl.selectedIndex].getAttribute('data-name');
      const qty = document.getElementById('qtySelect').value;
      const name = document.getElementById('custName').value.trim();
      const email = document.getElementById('custEmail').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const state = document.getElementById('custState').value;
      const gst = document.getElementById('custGst').value.trim() || 'N/A';
      const notes = document.getElementById('custNotes').value.trim() || 'None';
      const itc = document.getElementById('gstInvoiceCheck').checked ? 'Yes' : 'No';

      // UI Loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Submitting Request...</span>';
      statusMsg.style.display = 'none';

      const payload = {
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name,
        email,
        phone,
        model: modelName,
        qty,
        estimatedPrice: currentCalculatedPrice,
        state,
        companyGst: gst,
        requireItc: itc,
        notes
      };

      // Send to Google Sheets (if URL configured)
      if (GOOGLE_SHEETS_SCRIPT_URL && GOOGLE_SHEETS_SCRIPT_URL.startsWith('http')) {
        try {
          await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Avoids CORS restrictions with Google Apps Script
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        } catch (err) {
          console.warn('Google Sheets sync notice:', err);
        }
      }

      // Show Clean Professional Confirmation Message
      statusMsg.className = 'status-msg status-success';
      statusMsg.innerHTML = `
        <div style="font-size:1.1rem; font-weight:700; margin-bottom:4px;">✓ Quote Request Received Successfully!</div>
        <div style="font-size:0.88rem; color:#065f46;">An Ascentix corporate sales engineer has received your specifications and will email the official proforma quotation within 2 business hours (Mon–Sat, IST).</div>
      `;
      statusMsg.style.display = 'block';

      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Request Submitted ✓</span>';
    }
  </script>
</body>
</html>
```

---

## 3. How to Connect This Form to Google Sheets (Free & Zero Server)

Follow these **4 simple steps** to log every submission directly into your own Google Spreadsheet:

### Step 1: Create Your Google Sheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Name the sheet: **`Ascentix Customer Leads & Quotes`**.
3. In Row 1, add these column headers:
   - **A1**: `Timestamp (IST)`
   - **B1**: `Name`
   - **C1**: `Email`
   - **D1**: `Phone`
   - **E1**: `Model`
   - **F1**: `Quantity`
   - **G1**: `Estimated Price`
   - **H1**: `State`
   - **I1**: `Company / GSTIN`
   - **J1**: `ITC Required`
   - **K1**: `Notes`

---

### Step 2: Add the Google Apps Script
1. In your Google Sheet, click **Extensions** (top menu) → Click **Apps Script**.
2. Delete any existing code in the script editor.
3. Paste this exact Google Apps Script code:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name,
      data.email,
      data.phone,
      data.model,
      data.qty,
      data.estimatedPrice,
      data.state,
      data.companyGst,
      data.requireItc,
      data.notes
    ]);
    
    // Optional: Send instant email notification to your sales team
    // MailApp.sendEmail("sales@ascentix-ladders.in", "New Quote: " + data.name, JSON.stringify(data, null, 2));
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

---

### Step 3: Deploy as Web App
1. At the top right of the Apps Script editor, click **Deploy** → **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" → Select **Web app**.
3. Fill in:
   - **Description**: `Ascentix Lead Webhook`
   - **Execute as**: `Me (your email)`
   - **Who has access**: **`Anyone`** *(Crucial: This allows your Google Sites form to send data)*
4. Click **Deploy**.
5. Google will ask you to authorize permissions — click **Review permissions** → select your Google account → click **Advanced** → click **Go to Untitled project (unsafe)** → click **Allow**.
6. Copy the generated **Web App URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

### Step 4: Paste Web App URL into Your Form
In the HTML snippet above, find line ~228:
```javascript
const GOOGLE_SHEETS_SCRIPT_URL = 'YOUR_COPIED_WEB_APP_URL_HERE';
```
Paste your URL between the quotes. Now every time a visitor clicks "Request Formal Proforma Quote", the submission automatically records into your Google Sheet in real-time!

---

## 4. Alternative Approaches Comparison

| Method | Setup Effort | Responsiveness | Dynamic Pricing | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **1. Embedded Custom Form + Google Apps Script** *(Recommended)* | 5 mins | ⭐⭐⭐⭐⭐ (Fluid `clamp`, Auto-collapse grid) | ✅ Yes (Live Indian Volume discount tiers) | High-converting B2B procurement & brand aesthetic |
| **2. Native Google Form** (`Insert` → `Forms`) | 2 mins | ⭐⭐⭐⭐⭐ (Built-in Google responsive engine) | ❌ No (Static questions only) | Simple contact queries without price calculation |
| **3. WhatsApp Instant Dispatch** | 0 mins | ⭐⭐⭐⭐⭐ (Opens WhatsApp Mobile App or Web) | ✅ Yes (Passes formatted quote in URL) | Quick customer responses in the Indian trade market |


---

## 3. Alternative / Direct Google Form Embed
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, scroll all the way down under **Insert** to the *Google Workspace* apps section.
> 2. Click **Forms**.
> 3. A sidebar on the right will open showing forms from your Google Drive.
> 4. Select your Indian procurement intake form and click **Insert** at the bottom.

---

## 4. Contact Cards & Department Directory (Ready-to-Paste Embed Code)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Select the **"Embed code"** tab.
> 2. Paste the redesigned code below and click **Next** → **Insert**.
> 3. Click the inserted block, drag the blue handles to span **full width** (or center it across 10–12 columns), and drag the **bottom handle downward to ~520px – 560px height** until all three cards fit cleanly with no internal scrollbars.

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
    max-width: 720px;
    margin: 0 auto;
  }
  .contact-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 22px 26px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #ff5e14;
    opacity: 0.8;
    transition: width 0.2s ease;
  }
  .contact-card:hover {
    border-color: #ff5e14;
    box-shadow: 0 6px 18px rgba(255, 94, 20, 0.12);
    transform: translateY(-2px);
  }
  .contact-card:hover::before {
    width: 6px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    flex-wrap: wrap;
    gap: 6px;
  }
  .card-label {
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #ff5e14;
  }
  .card-badge {
    font-size: 0.72rem;
    font-weight: 600;
    background: #f1f5f9;
    color: #475569;
    padding: 2px 8px;
    border-radius: 12px;
    border: 1px solid #e2e8f0;
  }
  .card-title {
    font-size: 1.22rem;
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
    font-size: 0.9rem;
    color: #475569;
    margin-top: 8px;
    line-height: 1.5;
  }
  .card-actions {
    display: flex;
    gap: 12px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .action-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #1e293b;
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    padding: 5px 11px;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .action-chip:hover {
    background: #fff7ed;
    border-color: #ff5e14;
    color: #c2410c;
  }
  .action-chip.whatsapp {
    background: #f0fdf4;
    border-color: #bbf7d0;
    color: #15803d;
  }
  .action-chip.whatsapp:hover {
    background: #dcfce7;
    border-color: #22c55e;
    color: #166534;
  }
  .reg-details {
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px dashed #e2e8f0;
    font-size: 0.78rem;
    color: #64748b;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .reg-details span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
  @media (max-width: 520px) {
    .contact-card {
      padding: 16px 18px;
    }
    .card-title {
      font-size: 1.05rem;
    }
    .action-chip {
      width: 100%;
      justify-content: center;
    }
  }
</style>
</head>
<body>
  <div class="contact-cards-container">
    <!-- Card 1: Commercial Fleet Sales & PAN-India Procurement -->
    <div class="contact-card">
      <div class="card-top">
        <div class="card-label">COMMERCIAL FLEET SALES (10+ UNITS) &bull; PAN-INDIA</div>
        <div class="card-badge">GST 18% ITC Eligible</div>
      </div>
      <div class="card-title">
        <a href="mailto:fleet@ascentixladders.in" target="_top">fleet@ascentixladders.in</a>
      </div>
      <div class="card-subtext">
        Toll-Free (All-India): <strong>1800-120-2546</strong> &middot; Mon&ndash;Sat 9:30 AM&ndash;6:30 PM IST
      </div>
      <div class="card-actions">
        <a href="tel:18001202546" class="action-chip">
          📞 Call 1800-120-2546 (Toll-Free)
        </a>
        <a href="https://wa.me/919820045678?text=Hello%20Ascentix%20Team%2C%20I%20would%20like%20to%20request%20a%20commercial%20fleet%20quote." target="_blank" class="action-chip whatsapp">
          💬 WhatsApp Fleet Desk (+91 98200 45678)
        </a>
      </div>
    </div>

    <!-- Card 2: Technical Support, Warranty & BIS Inspection -->
    <div class="contact-card">
      <div class="card-top">
        <div class="card-label">TECHNICAL SUPPORT, WARRANTY &amp; COMPLIANCE</div>
        <div class="card-badge">BIS IS 4130 / 4131 Lab Certified</div>
      </div>
      <div class="card-title">
        <a href="mailto:support@ascentixladders.in" target="_top">support@ascentixladders.in</a>
      </div>
      <div class="card-subtext">
        Guaranteed response within 4 business hours (IST) &middot; Direct Desk: +91 (22) 6985 4100
      </div>
      <div class="card-actions">
        <a href="tel:+912269854100" class="action-chip">
          ⚙️ Support Desk: +91 (22) 6985 4100
        </a>
        <a href="mailto:support@ascentixladders.in?subject=Technical%20Support%20/%20BIS%20Documentation%20Request" class="action-chip">
          📄 Request Dielectric / BIS Reports
        </a>
      </div>
    </div>

    <!-- Card 3: India Corporate Headquarters & Experience Centre -->
    <div class="contact-card">
      <div class="card-top">
        <div class="card-label">INDIA CORPORATE HEADQUARTERS &amp; EXPERIENCE CENTRE</div>
        <div class="card-badge">Ascentix Ladders Pvt. Ltd.</div>
      </div>
      <div class="card-title">
        Unit 502, Pinnacle Business Park, Andheri East
      </div>
      <div class="card-subtext">
        Mumbai — 400069, Maharashtra, India &middot; Landmark: Next to Western Express Highway Metro
      </div>
      <div class="reg-details">
        <span><strong>GSTIN:</strong> 27AABCA1234F1Z5</span>
        <span><strong>CIN:</strong> U28112MH2021PTC368942</span>
        <span><strong>Plant:</strong> Chakan MIDC Phase II, Pune — 410501</span>
      </div>
    </div>
  </div>
</body>
</html>
```

---

### Alternative: Native Google Sites 3-Column Layout (No Code)
> 💡 **Google Sites Action Steps**:
> 1. In the right sidebar, click the **Insert** tab.
> 2. Under **Content blocks**, click the **3rd tile (3 columns)**.
> 3. Enter the Indian department contact details below into the 3 columns:

### Column 1: Commercial Fleet & Corporate Procurement
- **Entity**: Ascentix Ladders Pvt. Ltd.
- **Email**: `fleet@ascentixladders.in`
- **Toll-Free (India)**: `1800-120-2546`
- **WhatsApp Support**: `+91 98200 45678`
- **Working Hours**: Monday – Saturday, 9:30 AM – 6:30 PM IST
- **Focus**: Wholesale bulk orders (5–50+ units), GeM portal vendor tenders, 18% GST invoice generation, and EPC contractor credit accounts.

### Column 2: Technical Support & BIS Certification
- **Email**: `support@ascentixladders.in`
- **Phone (Mumbai Desk)**: `+91 (22) 6985 4100`
- **Response SLA**: Guaranteed within 4 business hours (IST)
- **Focus**: BIS IS 4130 / 4131 test certificates, 35kV dielectric batch compliance for state DISCOMs, replacement TPR non-skid feet, and annual safety audits under Indian Factories Act 1948.

### Column 3: India Registered Office & Manufacturing
- **Registered Office**: Unit 502, Pinnacle Business Park, Andheri East, Mumbai, Maharashtra — 400069
- **Manufacturing Plant**: Plot B-42, Chakan MIDC Phase II, Pune — 410501
- **Corporate ID**: CIN: `U28112MH2021PTC368942` | GSTIN: `27AABCA1234F1Z5`
- **Focus**: Experience centre visits by appointment, national distribution partnerships, and ACETECH / Elecrama exhibition liaison.

---

## 5. Frequently Asked Questions (Collapsible Groups — Indian Standards)
> 💡 **Google Sites Action Steps**:
> 1. In right sidebar, click **Insert** → Scroll down and click **Collapsible group**.
> 2. Enter FAQ 1.
> 3. Click **Collapsible group** again to add FAQ 2, 3, 4, and 5.

- **Question 1 Header**: `Are Ascentix ladders certified under Indian BIS IS standards?`  
  **Answer**: Yes, 100%. Every Ascentix model manufactured in India complies with and is certified under **BIS IS 4130** (for portable aluminium alloy ladders) and **BIS IS 4131** (for step and platform industrial ladders). All test certificates are signed by NABL-accredited metallurgical labs and comply with the **Indian Factories Act, 1948 (Section 32)** for elevation safety.

- **Question 2 Header**: `Do you provide GST tax invoices with Input Tax Credit (ITC)?`  
  **Answer**: Yes. All corporate and commercial orders receive a formal GST tax invoice with 18% GST breakdown (HSN Code: 76169990 for aluminium climbing equipment). Our GSTIN (`27AABCA1234F1Z5`) is registered in Maharashtra, with integrated IGST billing for interstate shipments across all 28 states and 8 union territories.

- **Question 3 Header**: `Can state electricity boards (DISCOMs) and EPC contractors get 35kV dielectric test reports?`  
  **Answer**: Yes. Every unit of the CarbonApex X1 fiberglass/carbon composite ladder undergoes serialized high-voltage dielectric flashover testing up to 35,000 Volts (35kV) per IEC 61478 and BIS specifications. Serialized batch test certificates are supplied with every order and are pre-approved by major DISCOMs (MSEDCL, Tata Power, BESCOM, Adani Electricity) and CPWD contractors.

- **Question 4 Header**: `What are standard shipping and dispatch timelines across India?`  
  **Answer**: Orders are dispatched from our central Chakan MIDC (Pune) hub or regional warehouses in Mumbai, Delhi-NCR, and Bengaluru. Metro deliveries (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Ahmedabad, Pune) arrive in **48 to 72 hours**. Tier 2 and Tier 3 industrial sites receive delivery within **4 to 6 business days** via our logistics partners (Safexpress, BlueDart Cargo, and TCI Freight).

- **Question 5 Header**: `Are Ascentix products available on the Government e-Marketplace (GeM)?`  
  **Answer**: Yes. Ascentix Ladders Pvt. Ltd. is an empanelled OEM vendor on the **GeM (Government e-Marketplace)** portal for public sector undertakings (PSUs), railways, defense establishments, municipal corporations, and CPWD projects. Quote reference codes can be generated directly for GeM direct purchase or custom bid tenders.
