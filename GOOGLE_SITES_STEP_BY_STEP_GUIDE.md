# Comprehensive Step-by-Step Guide: Building the Ascentix Ladders Website on Google Sites

This complete hands-on manual guides you through assembling, customising, and publishing the modern, industrial-grade **Ascentix Ladders** website on **[Google Sites](https://sites.google.com/)**. Every step includes exact button names, menu paths, visual layout selections, and fixes for commonly hidden options — tailored for the Indian market with BIS IS certifications, INR pricing, and Mumbai headquarters.

---

## 🧭 Google Sites Quick Reference: "Where Is That Option?"

If you ever get stuck looking for a button, refer to this quick lookup table:

| What you want to do | Where to find it in Google Sites | What to click |
| :--- | :--- | :--- |
| **Upload Favicon** | Top navigation bar (top right) | Click **Settings (⚙️ Gear icon)** → **Brand images** → Under *Favicon*, click **Upload**. *(Note: Favicon is NOT inside the Themes wizard).* |
| **Change Navigation Color** | Top navigation bar (top right) | Click **Settings (⚙️ Gear icon)** → **Navigation** → Set *Color* to **Black** or **Transparent**. |
| **Change Banner Size** | Canvas top banner | Hover over the banner image → Click **Header type** in the floating bottom-left bar → Choose **Cover**, **Large banner**, **Banner**, or **Title only**. |
| **Remove Banner Darkening Filter** | Canvas top banner | Hover over banner → Look at the **bottom-right corner** → Click the **Sparkle/Star icon** (*Remove readability adjustment*) so your image remains crisp and bright. |
| **Add a Subpage** | Right sidebar → **Pages** tab | Hover over the parent page (e.g. `Products`) → Click the **three vertical dots (⋮)** → Click **Add subpage**. |
| **Insert Multi-Column Layouts** | Right sidebar → **Insert** tab | Under **Content blocks**, click any of the 6 visual layout tiles (e.g. 2-column, 3-column, 4-column). |
| **Fix Cropped / Cut-off Ladder Images** | Canvas image element | Click on the uploaded image → In the mini floating toolbar above it, click the **Uncrop icon (⤢)**. |
| **Change Section Background / Accent** | Left margin of any page row | Hover over the left edge of a section → Click the **Section background (Palette icon 🎨)** → Choose **Style 1**, **Style 2**, **Style 3 (Accent)**, or **Image**. |
| **Embed Custom HTML/CSS Snippets** | Right sidebar → **Insert** tab | Click **Embed (`< >`)** → **IMPORTANT**: Switch from "By URL" to the **"Embed code" tab** → Paste code → Click **Next** → **Insert**. |
| **Fix Embedded Code Cut-Off / Scrollbars** | Canvas embedded widget | Click the embedded box → Click and drag the **bottom-center blue circle/handle downward** until all content is visible without internal scrollbars. |
| **Make Site Publicly Accessible** | Top navigation bar | Click the **Share with others (Person icon with +)** → Under *General access / Links*, set *Published site* to **Public** → Click **Done**. |

---

## 📁 Local Assets & Blueprint Inventory

All required images, SVG team avatars, and page copy are located on your local drive in:  
`f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\`

### 1. Visual Assets & Logos
- **Logo & Favicon**: [`assets/logo/ascentix_logo.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/logo/ascentix_logo.jpg)
- **Product 1 (TelePro 360)**: [`assets/products/model_1_telepro_360.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_1_telepro_360.jpg)
- **Product 2 (CarbonApex X1)**: [`assets/products/model_2_carbonapex_x1.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_2_carbonapex_x1.jpg)
- **Product 3 (MultiFlex Transform)**: [`assets/products/model_3_multiflex_transform.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_3_multiflex_transform.jpg)
- **Product 4 (TitanSafe Industrial)**: [`assets/products/model_4_titansafe_industrial.jpg`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/assets/products/model_4_titansafe_industrial.jpg)
- **7-Role Team Placeholders**:
  - `01_leader_placeholder.svg`
  - `02_developer_lead_placeholder.svg`
  - `03_design_lead_placeholder.svg`
  - `04_social_media_placeholder.svg`
  - `05_product_managers_placeholder.svg`
  - `06_analytics_lead_placeholder.svg`
  - `07_market_research_placeholder.svg`

### 2. Ready-to-Use Content Blueprints
- [01_HOME_PAGE.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/01_HOME_PAGE.md)
- [02_ABOUT_US.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/02_ABOUT_US.md)
- [03_TEAM.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/03_TEAM.md)
- [04_PRODUCT_1_TELEPRO_360.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/04_PRODUCT_1_TELEPRO_360.md)
- [05_PRODUCT_2_CARBONAPEX_X1.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/05_PRODUCT_2_CARBONAPEX_X1.md)
- [06_PRODUCT_3_MULTIFLEX_TRANSFORM.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/06_PRODUCT_3_MULTIFLEX_TRANSFORM.md)
- [07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md)
- [08_SOCIAL_MEDIA_PAGE.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/08_SOCIAL_MEDIA_PAGE.md)
- [09_CONTACT_US.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/09_CONTACT_US.md)

### 3. Light-Theme Embed Snippets (India Edition)
- [GOOGLE_SITES_EMBED_SNIPPETS.md](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md) (Zero-Fail Matrix, Technical Comparison Table in ₹ INR, Fleet Quote Calculator with ₹ pricing, Interactive Team Directory, Social Feed Bar — all India-localised).

---

## 🛠️ Step 1: Open Google Sites & Configure Site Identity

### 1.1 Create a Blank Project
1. Open your browser and go to **[https://sites.google.com/](https://sites.google.com/)**.
2. Make sure you are signed into your Google account.
3. Under the **Start a new site** row, click the **Blank site (+)** template.

### 1.2 The Three Different Names to Set
Google Sites has three separate naming fields in the top left:
1. **Document Title (Google Drive file name)**:
   - Click where it says `Untitled site` in the very top-left corner.
   - Enter: `Ascentix Ladders Official`.
2. **Site Name (Shown in the website navigation bar)**:
   - Move your mouse directly down onto the canvas navigation bar next to where a logo goes.
   - Click `Enter site name`.
   - Enter: `Ascentix Ladders`.
3. **Upload the Navigation Logo**:
   - Hover your mouse over the text `Ascentix Ladders` you just typed.
   - A button labeled **Add logo** will pop up on the left.
   - Click **Add logo**. This automatically opens the **Settings (⚙️) > Brand images** modal.
   - Under **Logo**, click **Upload** → Select `f:\Web Dev\Antigravity\Ascentix-Ladders-GoogleSites\assets\logo\ascentix_logo.jpg`.
   - Under **Favicon** (in the exact same popup window!), click **Upload** → Select the same `ascentix_logo.jpg`.
   - Close the Settings modal by clicking the **X** in the top right.

### 1.3 Navigation Bar Settings
1. Click the **Settings (⚙️ Gear icon)** in the top right toolbar.
2. In the left panel of the modal, click **Navigation**.
3. Set **Mode** to **Top**.
4. Set **Color** to **Black** (or **Transparent** if you want your hero banners to extend behind the navigation links).

---

## 🎨 Step 2: Create the Ascentix Industrial Theme

Creating a custom theme guarantees that every button, header, and accent uses Ascentix's brand colors.

1. In the right-hand sidebar, click the **Themes** tab (located between *Pages* and the canvas edge).
2. Look under the **Custom** section at the top of the Themes tab.
3. Click the **(+) Create theme** button. A 3-step wizard will appear:

### Step 1 of 3: Name and logos
- **Theme name**: Type `Ascentix Industrial`.
- **Add logo**: Click *Upload* and pick `assets/logo/ascentix_logo.jpg` (if not already set).
- Click **Next**.

### Step 2 of 3: Select colors
- Under "Select colors", choose the **Custom colors** option (click the circle with the pencil or custom palette).
- Set your 3 primary brand colors:
  - **Color 1 (Primary Accent)**: Click the circle and enter `#FF5E14` (Safety Orange).
  - **Color 2 (Secondary Dark)**: Enter `#12151B` (Obsidian Charcoal).
  - **Color 3 (Neutral Surface)**: Enter `#94A3B8` (Titanium Silver).
- Click **Next**.

### Step 3 of 3: Select fonts
- **Titles and headings**: Click the dropdown and select **Inter** (or **Oswald** / **Roboto Bold**).
- **Body text**: Select **Inter** (or **Roboto**).
- Click **Create theme**.

> [!TIP]
> **Need to tweak colors later?**  
> Go to **Themes** tab → Under *Ascentix Industrial*, click the **three vertical dots (⋮)** → Click **Edit theme**. You can adjust colors, font weights, and spacing at any time.

---

## 📑 Step 3: Build the Complete Page & Subpage Tree

Click the **Pages** tab in the right sidebar. By default, you will only see the `Home` page.

### 3.1 Adding Top-Level Pages
At the bottom of the Pages panel, hover over the floating **(+)** button and click **New page**:
1. Name: `About Us` → Click **Done**.
2. Click **(+)** → Name: `The Team` → Click **Done**.
3. Click **(+)** → Name: `Products` → Click **Done**.
4. Click **(+)** → Name: `Social Media Hub` → Click **Done**.
5. Click **(+)** → Name: `Contact Us` → Click **Done**.

### 3.2 Adding the 4 Dedicated Product Subpages
In Google Sites, subpages create clean dropdown menus in your top navigation bar:
1. In the Pages list, hover your mouse over the **Products** page.
2. Click the **three vertical dots (⋮)** that appear on the right side of `Products`.
3. In the dropdown menu, select **Add subpage**.
4. Type `TelePro 360` and click **Done**.
5. Repeat this process for the other 3 products:
   - Hover over `Products` → `⋮` → **Add subpage** → `CarbonApex X1`
   - Hover over `Products` → `⋮` → **Add subpage** → `MultiFlex Transform`
   - Hover over `Products` → `⋮` → **Add subpage** → `TitanSafe Industrial`

Your Pages sidebar should now look like this:

```
[Home]
├── [About Us]
├── [The Team]
├── [Products] (Category Hub)
│   ├── [TelePro 360] (Subpage)
│   ├── [CarbonApex X1] (Subpage)
│   ├── [MultiFlex Transform] (Subpage)
│   └── [TitanSafe Industrial] (Subpage)
├── [Social Media Hub]
└── [Contact Us]
```

---

## 🏗️ Step 4: Assemble Each Page (Step-by-Step)

Open the corresponding blueprint file in `site_content/` to copy text directly into each section.

---

### Page 1: Home Page
*Blueprint*: [`site_content/01_HOME_PAGE.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/01_HOME_PAGE.md)

#### 1. Hero Banner
1. Click `Home` in the Pages tab to open the canvas.
2. Hover over the banner at the top:
   - Click **Header type** → Select **Large banner** (or **Cover** for full-screen impact).
   - Click **Image** → Select **Upload** → Choose `assets/products/model_1_telepro_360.jpg`.
   - In the bottom-right corner of the banner, click the **Sparkle icon** (*Remove readability adjustment*) to prevent Google Sites from over-darkening the photo.
3. Click the text box on the banner:
   - Set style dropdown to **Title**.
   - Type or paste: `Engineered for the Summit of Safety.`
   - Below it, add normal text: `Aerospace Alloys. Toray Carbon Fiber. Zero-Wobble Geometry.`

#### 2. Three Engineering Pillars
1. In the right sidebar, click the **Insert** tab.
2. Under **Content blocks**, click the **3-column block** (icon showing 3 image squares with text lines beneath).
3. Fill in the 3 columns:
   - **Column 1**: Title: `Zero-Wobble Geometry` | Body: Copy description from `01_HOME_PAGE.md` Section 2.
   - **Column 2**: Title: `Advanced Materials Lab` | Body: Copy description from `01_HOME_PAGE.md` Section 2.
   - **Column 3**: Title: `Zero-Pinch Air Damping` | Body: Copy description from `01_HOME_PAGE.md` Section 2.
4. *Optional section styling*: Hover on the left edge of this section → Click the **Palette icon 🎨** → Select **Style 2** or **Style 3** to give it a dark accent background.

#### 3. Embed the "Zero-Fail Engineering Matrix"
1. In the right sidebar, click **Insert** → Click **Embed (`< >`)**.
2. Click the **Embed code** tab at the top of the popup.
3. Open [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md) and copy the entire code block under **Section 1 (Home Page: Zero-Fail Engineering Matrix)**.
4. Paste into the box → Click **Next** → Click **Insert**.
5. **CRITICAL STEP**: The widget will initially appear in a small box. Click on the widget box, then click and drag the **bottom-center blue circle handle downward** until all 3 cards and badges are completely visible with no internal scrollbars.

#### 4. Flagship Product Cards Grid
1. In the right sidebar, click **Insert** → Under **Content blocks**, click the **4-column layout block** (4 images with text beneath).
2. For each column:
   - Click the **(+) circle** in the image frame → Click **Upload**.
   - Col 1: `assets/products/model_1_telepro_360.jpg` | Label: `TelePro 360`
   - Col 2: `assets/products/model_2_carbonapex_x1.jpg` | Label: `CarbonApex X1`
   - Col 3: `assets/products/model_3_multiflex_transform.jpg` | Label: `MultiFlex Transform`
   - Col 4: `assets/products/model_4_titansafe_industrial.jpg` | Label: `TitanSafe Industrial`
3. **Fixing image crops**: Click each uploaded image → In the small floating toolbar, click the **Uncrop icon (⤢)** so the entire ladder is visible.
4. Add a button below each card linking to its subpage (or add one large button below the row: **Insert** → **Button** → Name: `Explore All Models` → Link: `Products`).

---

### Page 2: About Us
*Blueprint*: [`site_content/02_ABOUT_US.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/02_ABOUT_US.md)

1. In the right sidebar, click **Pages** → Click **About Us**.
2. **Hero Banner**: Set Header type to **Banner**. Set Title to: `Pioneering Zero-Fatality Job-Sites`.
3. **Origin Story (2-Column Layout)**:
   - In the right sidebar, click **Insert** → Under **Content blocks**, click the **1 large image + text** tile (first content block).
   - In the image box, click **(+)** → **Upload** → Select `assets/logo/ascentix_logo.jpg`.
   - In the text box, paste the *Genesis of Ascentix Ladders* and mission statement from `02_ABOUT_US.md`.
4. **Mission, Vision, Values**:
   - Insert a **3-column content block**.
   - Add **Mission**, **Vision**, and **Core Values**.
5. **Ascentix 4 Pillars of Stability (Collapsible Group)**:
   - In the right sidebar, scroll down under Insert and click **Collapsible group**.
   - Type Header: `Pillar 1: Structural Redundancy`.
   - In the hidden body line, paste the description from `02_ABOUT_US.md`.
   - Repeat for Pillars 2, 3, and 4. (Visitors can click each header to expand).

---

### Page 3: The Team (The 7 Roles)
*Blueprint*: [`site_content/03_TEAM.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/03_TEAM.md)

You have two great ways to display the 7 mandatory roles:

#### Option A: Embed the Interactive 7-Role Directory Widget (Fastest & Most Polished)
1. Go to **Pages** → Click **The Team**.
2. Banner Title: `The Minds Behind the Climb`.
3. In the right sidebar, click **Insert** → Click **Embed (`< >`)** → Switch to **Embed code** tab.
4. Open [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md) and copy **Section 4 (Team Page: Interactive 7-Role Team Directory)**.
5. Paste into Google Sites → Click **Next** → Click **Insert**.
6. Drag the blue bottom handle downward to ~580px so all 7 cards show cleanly.

#### Option B: Native Google Sites Card Blocks (If you want to upload personal photos)
1. Insert a **3-column content block** for Roles 1–3:
   - **Role 1 (CEO)**: Click `(+)` → Upload `assets/team_placeholders/01_leader_placeholder.svg` (or your personal photo). Name: `[YOUR NAME]`.
   - **Role 2 (Developer Lead)**: Upload `02_developer_lead_placeholder.svg`.
   - **Role 3 (Design Lead)**: Upload `03_design_lead_placeholder.svg`.
2. Insert a **4-column content block** directly below for Roles 4–7:
   - **Role 4 (Social Media Lead)**: Upload `04_social_media_placeholder.svg`.
   - **Role 5 (Product Manager)**: Upload `05_product_managers_placeholder.svg`.
   - **Role 6 (Analytics Lead)**: Upload `06_analytics_lead_placeholder.svg`.
   - **Role 7 (Market Research Lead)**: Upload `07_market_research_placeholder.svg`.
3. Fill in the titles and bios from `03_TEAM.md`.

---

### Page 4: Products Landing Page
*Blueprint*: [`site_content/01_HOME_PAGE.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/01_HOME_PAGE.md) & [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md)

1. Go to **Pages** → Click **Products**.
2. Banner: Header type **Banner** | Title: `Industrial Climbing Lineup`.
3. **Insert the Technical Comparison Matrix**:
   - In the right sidebar, click **Insert** → **Embed (`< >`)** → Click **Embed code** tab.
   - Copy the code from [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md) **Section 2 (Products Page: Technical Comparison Matrix)**.
   - Paste → **Next** → **Insert**.
   - Drag the bottom handle downward so the full comparison table and prices display without scrollbars.
4. Add links to each dedicated subpage below the table.

---

### Subpages 4a through 4d: Dedicated Product Detail Pages
*Blueprints*:
- TelePro 360: [`site_content/04_PRODUCT_1_TELEPRO_360.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/04_PRODUCT_1_TELEPRO_360.md)
- CarbonApex X1: [`site_content/05_PRODUCT_2_CARBONAPEX_X1.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/05_PRODUCT_2_CARBONAPEX_X1.md)
- MultiFlex Transform: [`site_content/06_PRODUCT_3_MULTIFLEX_TRANSFORM.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/06_PRODUCT_3_MULTIFLEX_TRANSFORM.md)
- TitanSafe Industrial: [`site_content/07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/07_PRODUCT_4_TITANSAFE_INDUSTRIAL.md)

For each dedicated product page, follow this exact structure:

1. **Hero Banner**:
   - Header type: **Banner**.
   - Background image: Upload the dedicated product render from `assets/products/`.
   - Title: Model Name (e.g. `Ascentix TelePro 360™`).
   - Subtitle: Copy the headline from the markdown blueprint (e.g. `Air-Damped Compact Telescopic Reach System`).
2. **Key Specs & Overview (2-Column Block)**:
   - Insert a **2-column content block**.
   - Left side: Dedicated product image (remember to click **Uncrop ⤢**).
   - Right side: Paste the Key Technical Specs and Engineering Highlights.
3. **Color Finishes Showcase (4-Column Block)**:
   - Insert a **4-column content block**.
   - List the 4 distinct colorways (e.g., *Safety Orange*, *Stealth Matte Black*, *Gunmetal Gray*, *Hi-Vis Yellow*) with the hex values and descriptions provided in the markdown file.
4. **Call to Action Button**:
   - In the right sidebar, click **Insert** → Scroll down and click **Button**.
   - Name: `Request Fleet Quote`
   - Link: Select `Contact Us` from the dropdown list.
   - Drag the button into the center of the page.

---

### Page 5: Social Media Hub
*Blueprint*: [`site_content/08_SOCIAL_MEDIA_PAGE.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/08_SOCIAL_MEDIA_PAGE.md)

1. Go to **Pages** → Click **Social Media Hub**.
2. Banner: Header type **Banner** | Title: `Ascentix Community & Field Tests`.
3. **Insert the Interactive Social Channels Widget**:
   - In the right sidebar, click **Insert** → **Embed (`< >`)** → **Embed code** tab.
   - Copy and paste **Section 5 (Social Media Hub: Feed & Channels Bar)** from [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md).
   - Click **Next** → **Insert**, then drag the bottom handle to fit.
4. **Native Social Links Widget**:
   - In the right sidebar, scroll down to **Social links** and click it.
   - Enter your URLs (YouTube, Instagram, LinkedIn, TikTok). Google Sites will automatically show official social icons.
5. **#DropTestThursday & Ambassador Spotlight**:
   - Insert a **2-column content block** and paste the *#DropTestThursday* video campaign details and the *Trade Ambassador Program* callout from `08_SOCIAL_MEDIA_PAGE.md`.

---

### Page 6: Contact Us & Quote Builder
*Blueprint*: [`site_content/09_CONTACT_US.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/site_content/09_CONTACT_US.md)

1. Go to **Pages** → Click **Contact Us**.
2. Banner: Title: `Connect with Ascentix Engineering`.
3. **Embed the Instant Quote Calculator**:
   - In the right sidebar, click **Insert** → **Embed (`< >`)** → **Embed code** tab.
   - Copy **Section 3 (Contact Page: Instant Quote Calculator & Inquiry Form)** from [`GOOGLE_SITES_EMBED_SNIPPETS.md`](file:///f:/Web%20Dev/Antigravity/Ascentix-Ladders-GoogleSites/GOOGLE_SITES_EMBED_SNIPPETS.md).
   - Paste → **Next** → **Insert**.
   - Drag the bottom handle downward to ~560px height. Test the interactive model/quantity dropdowns directly inside the preview!
4. **Embed a Google Form (Optional alternative/addition)**:
   - In the right sidebar, scroll down to the bottom and click **Forms**.
   - Choose any Google Form in your Drive to embed an intake questionnaire directly into the page.
5. **Three Department Inboxes**:
   - Insert a **3-column content block**:
     - Col 1: Commercial Fleet & PAN-India Procurement (`fleet@ascentixladders.in` | Toll-Free: 1800-120-2546 | WhatsApp: +91 98200 45678)
     - Col 2: Technical Support, Warranty & BIS Compliance (`support@ascentixladders.in` | Mumbai Desk: +91 (22) 6985 4100)
     - Col 3: India Registered Office & Manufacturing (`Unit 502, Pinnacle Business Park, Andheri East, Mumbai` | Plant: Chakan MIDC, Pune | GSTIN: `27AABCA1234F1Z5`)
6. **Frequently Asked Questions (Collapsible Group)**:
   - Click **Insert** → **Collapsible group**.
   - Add the FAQs from `09_CONTACT_US.md` (e.g. BIS IS 4130/4131 standards, 18% GST Input Tax Credit (ITC), 35kV DISCOM test certificates, GeM portal vendor procurement, and PAN-India shipping timelines).

---

## 🔍 Step 5: Test & Preview

Before publishing, verify your site on all screen sizes:
1. In the top toolbar, click the **Preview icon** (a small laptop/smartphone icon next to Undo/Redo).
2. Look at the floating preview toolbar in the bottom right corner:
   - Click the **Phone icon** to test mobile responsiveness.
   - Click the **Tablet icon** to test tablet layout.
   - Click the **Large screen icon** to test desktop layout.
3. Check these items:
   - Does the top navigation dropdown under `Products` expand properly to reveal all 4 subpages?
   - Are any images cut in half? (If so, exit preview, click the image, and click **Uncrop ⤢**).
   - Are there double scrollbars on any embedded widgets? (If so, exit preview and drag the bottom blue handle further down).
4. Click the blue **X** in the bottom right to exit Preview mode.

---

## 🚀 Step 6: Set Permissions & Publish

### 6.1 Set Public Viewing Permissions
By default, some Google Sites are set to "Restricted" (only you can see them). Make sure the public can view your site:
1. In the top bar, click the **Share with others icon** (person with a plus sign `+`).
2. Under the **General access** section:
   - Look for **Published site**.
   - Click the dropdown and select **Public** (so anyone with the link can view).
3. Click **Done**.

### 6.2 Publish the Site
1. In the top-right corner, click the blue **Publish** button.
2. In the modal that opens:
   - **Web address**: Enter a clean slug, such as `ascentix-ladders` or `ascentix-safety`.
   - Your live URL will be:  
     `https://sites.google.com/view/ascentix-ladders`
   - Under *Search settings*, leave "Request public search engines not to display my site" unchecked unless you want it private.
3. Click **Publish**.

### 6.3 Verify the Live Site
1. Click the small arrow next to the **Publish** button (`▾`).
2. Click **View published site**.
3. Your live Google Site is now officially live on the internet!
