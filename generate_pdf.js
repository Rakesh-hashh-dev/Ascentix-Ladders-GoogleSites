const { marked } = require('marked');
const fs = require('fs');
const path = require('path');

// Configure marked for better table and GFM support
marked.setOptions({
  gfm: true,
  breaks: false,
  tables: true,
});

const reportPath = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\edab7daf-2ad7-46ea-875a-7783deddba67\\SESSION_5_INFLUENCER_MANAGEMENT_REPORT.md';
const scriptsPath = 'f:\\Web Dev\\Antigravity\\Ascentix-Ladders-GoogleSites\\SESSION_5_INFLUENCER_CAMPAIGN_SCRIPTS.md';
const outputPath = 'f:\\Web Dev\\Antigravity\\Ascentix-Ladders-GoogleSites\\SESSION_5_INFLUENCER_FULL_SUBMISSION_PRINT.html';

const report = fs.readFileSync(reportPath, 'utf8');
const scripts = fs.readFileSync(scriptsPath, 'utf8');

const reportHtml = marked.parse(report);
const scriptsHtml = marked.parse(scripts);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ascentix Ladders — Project Submission 4: Influencer Management</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* ===== PRINT & PAGE SETUP ===== */
    @page {
      size: A4;
      margin: 22mm 20mm 24mm 20mm;
      @top-center {
        content: "Ascentix Ladders — Project Submission 4: Influencer Management";
        font-family: 'Inter', Arial, sans-serif;
        font-size: 9pt;
        color: #888;
      }
      @bottom-right {
        content: "Page " counter(page) " of " counter(pages);
        font-family: 'Inter', Arial, sans-serif;
        font-size: 9pt;
        color: #888;
      }
      @bottom-left {
        content: "Confidential — Ascentix Ladders Pvt. Ltd.";
        font-family: 'Inter', Arial, sans-serif;
        font-size: 9pt;
        color: #888;
      }
    }

    /* ===== RESET ===== */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    /* ===== BASE ===== */
    body {
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      font-size: 13px;
      line-height: 1.75;
      color: #1a1a2e;
      background: #ffffff;
      padding: 0;
    }

    .document {
      max-width: 860px;
      margin: 0 auto;
      padding: 40px 48px;
    }

    /* ===== HEADINGS ===== */
    h1 {
      font-size: 26px;
      font-weight: 800;
      color: #0d1b4b;
      border-bottom: 3px solid #e84545;
      padding-bottom: 10px;
      margin: 36px 0 18px;
      letter-spacing: -0.3px;
    }
    h1:first-child { margin-top: 0; }

    h2 {
      font-size: 19px;
      font-weight: 700;
      color: #0d1b4b;
      border-bottom: 2px solid #dde3f0;
      padding-bottom: 6px;
      margin: 32px 0 14px;
    }

    h3 {
      font-size: 15.5px;
      font-weight: 700;
      color: #1a3a6b;
      margin: 24px 0 10px;
    }

    h4 {
      font-size: 13.5px;
      font-weight: 600;
      color: #2c5282;
      margin: 18px 0 8px;
    }

    /* ===== PARAGRAPH & TEXT ===== */
    p { margin: 0 0 12px; }
    strong { color: #0d1b4b; font-weight: 700; }
    em { color: #444; }
    a { color: #1a6fb5; text-decoration: none; }

    /* ===== HORIZONTAL RULE ===== */
    hr {
      border: none;
      border-top: 2px solid #e5e9f5;
      margin: 28px 0;
    }

    /* ===== BLOCKQUOTE ===== */
    blockquote {
      border-left: 4px solid #e84545;
      background: #fff8f0;
      padding: 12px 18px;
      margin: 16px 0;
      border-radius: 0 6px 6px 0;
      color: #444;
    }
    blockquote p { margin: 0; font-style: italic; }

    /* ===== TABLES ===== */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 18px 0;
      font-size: 12px;
      page-break-inside: avoid;
    }
    thead tr {
      background: #0d1b4b;
      color: #ffffff;
    }
    th {
      padding: 10px 13px;
      text-align: left;
      font-weight: 600;
      font-size: 11.5px;
      letter-spacing: 0.2px;
      border: 1px solid #0d1b4b;
    }
    td {
      padding: 8px 13px;
      border: 1px solid #d0d7e8;
      vertical-align: top;
      line-height: 1.55;
    }
    tr:nth-child(even) td { background: #f5f7fc; }
    tr:hover td { background: #eef1fb; }

    /* ===== CODE ===== */
    code {
      font-family: 'JetBrains Mono', 'Consolas', 'Courier New', monospace;
      background: #eef0f8;
      color: #c0392b;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11.5px;
    }

    pre {
      font-family: 'JetBrains Mono', 'Consolas', 'Courier New', monospace;
      background: #1a1a2e;
      color: #e2e8f0;
      padding: 16px 18px;
      border-radius: 8px;
      font-size: 11px;
      line-height: 1.6;
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-word;
      margin: 16px 0;
      border-left: 4px solid #e84545;
      page-break-inside: avoid;
    }
    pre code {
      background: none;
      color: inherit;
      padding: 0;
      font-size: inherit;
    }

    /* ===== LISTS ===== */
    ul, ol {
      padding-left: 24px;
      margin: 10px 0 12px;
    }
    li { margin-bottom: 5px; line-height: 1.65; }
    li > ul, li > ol { margin: 4px 0; }

    /* ===== PAGE BREAK (between sections) ===== */
    .page-break {
      page-break-before: always;
      border-top: 3px solid #e84545;
      margin: 40px 0 32px;
      padding-top: 20px;
    }
    .page-break-label {
      font-size: 11px;
      font-weight: 700;
      color: #e84545;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 8px;
    }

    /* ===== COVER STRIP ===== */
    .cover-strip {
      background: linear-gradient(135deg, #0d1b4b 0%, #1a3a6b 60%, #e84545 100%);
      color: white;
      padding: 28px 32px 22px;
      border-radius: 10px;
      margin-bottom: 32px;
    }
    .cover-strip .brand { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; opacity: 0.75; margin-bottom: 6px; }
    .cover-strip h1 { color: white; border: none; padding: 0; margin: 0 0 6px; font-size: 22px; }
    .cover-strip .meta { font-size: 11.5px; opacity: 0.85; margin-top: 10px; display: flex; gap: 20px; flex-wrap: wrap; }
    .cover-strip .meta span { background: rgba(255,255,255,0.15); padding: 3px 10px; border-radius: 20px; }

    /* ===== SECTION DIVIDER LABEL ===== */
    .section-label {
      display: inline-block;
      background: #0d1b4b;
      color: white;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 4px 12px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    /* ===== PRINT OVERRIDES ===== */
    @media print {
      body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
      .no-print { display: none; }
      .page-break { page-break-before: always; }
      h2, h3 { page-break-after: avoid; }
      table, pre, blockquote { page-break-inside: avoid; }
      a { color: #1a6fb5 !important; }
    }
  </style>
</head>
<body>
  <div class="document">

    <!-- COVER STRIP Part 1 -->
    <div class="cover-strip">
      <div class="brand">Ascentix Ladders Pvt. Ltd. &nbsp;|&nbsp; Digital Marketing &amp; Social Media Strategy</div>
      <h1>Project Submission 4: Influencer Management</h1>
      <div class="meta">
        <span>📅 28 September 2026</span>
        <span>📱 Platform: YouTube (Tier 1)</span>
        <span>🎯 Session 5 Frameworks</span>
        <span>🇮🇳 Real Indian Influencers</span>
      </div>
    </div>

    <!-- PART 1: INFLUENCER MANAGEMENT REPORT -->
    <div class="section-label">Part 1 — Influencer Strategy Report</div>
    ${reportHtml}

    <!-- PAGE BREAK -->
    <div class="page-break">
      <div class="page-break-label">Supplementary Document</div>
    </div>

    <!-- COVER STRIP Part 2 -->
    <div class="cover-strip">
      <div class="brand">Ascentix Ladders Pvt. Ltd. &nbsp;|&nbsp; Influencer Campaign Production</div>
      <h1>Session 5 Supplementary: Campaign Content Calendar &amp; Scripts</h1>
      <div class="meta">
        <span>🎬 Amitsaini Electrician — Amit Saini</span>
        <span>📅 12-Week Campaign</span>
        <span>🇮🇳 Hindi + English Scripts</span>
      </div>
    </div>

    <!-- PART 2: CAMPAIGN SCRIPTS -->
    <div class="section-label">Part 2 — Content Calendar &amp; Video Scripts</div>
    ${scriptsHtml}

  </div>

  <!-- Print button (hidden when printing) -->
  <div class="no-print" style="position:fixed;bottom:24px;right:24px;z-index:9999;">
    <button onclick="window.print()" style="background:#0d1b4b;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:14px;font-family:Inter,sans-serif;font-weight:600;cursor:pointer;box-shadow:0 4px 16px rgba(13,27,75,0.35);">
      🖨️ Print / Save as PDF
    </button>
  </div>

</body>
</html>`;

fs.writeFileSync(outputPath, fullHtml, 'utf8');
const stats = fs.statSync(outputPath);
console.log('SUCCESS: HTML generated at ' + outputPath);
console.log('File size: ' + (stats.size / 1024).toFixed(1) + ' KB');
