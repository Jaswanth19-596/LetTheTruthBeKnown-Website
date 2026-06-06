# Architectural Decisions

### 1. Stream-First Navigation
- **What it is:** The application is structured around three audience segments (Unsaved, New Christian, Pastor), and the hero/navbar immediately routes visitors into the right stream.
- **Why it was made:** To personalize the user experience and ensure visitors immediately find relevant content rather than getting lost in generic menus.
- **What breaks if violated:** Users will be presented with overwhelming or irrelevant information, reducing the effectiveness of the ministry's core goal (evangelism vs discipleship).

### 2. Vanilla CSS with CSS Variables
- **What it is:** Using standard modular CSS files co-located with components and a global `index.css` for design tokens, explicitly avoiding Tailwind CSS or UI frameworks.
- **Why it was made:** To maintain maximum flexibility and control over the custom "Ancient Israel" and parchment aesthetic without fighting framework defaults.
- **What breaks if violated:** The highly specific, immersive thematic experience (colors, typography, micro-animations) will become fragmented or generic.

### 3. Static PDF Serving via AWS S3 & CloudFront CDN
- **What it is:** All gospel tracts and discipleship PDFs are hosted in the private `letthetruthbeknown` S3 bucket (`us-east-1`). Content delivery is handled by an AWS CloudFront distribution (`https://d28muf2t6x3jzl.cloudfront.net`) using Origin Access Control (OAC) to secure the bucket. Direct public access to S3 is disabled.
- **Why it was made:** Serving directly from S3 or GitHub had security/usability downsides. GitHub forced attachments (triggering downloads instead of inline views), and open S3 buckets are vulnerable to hotlinking/bandwidth abuse. Passing all asset requests through CloudFront with OAC ensures secure, fast, and cached delivery without exposing S3 directly to the public, while keeping browsers rendering PDFs inline using standard `Content-Disposition: inline` behavior.
- **What breaks if violated:** If the distribution configuration or bucket policies are modified, users will get `403 Forbidden` errors when requesting PDFs/media files, and files won't render inline or download.

### 4. Zero-Emoji Rule (Includes Unicode Text Characters)
- **What it is:** Complete ban on colorful/system emojis and decorative Unicode text characters across the application, replaced with custom SVGs or 2-letter badges.
- **Why it was made:** System emojis look modern and break the ancient, royal, parchment-style aesthetic. Additionally, Unicode "text" characters such as ✝ (U+271D Latin Cross) are silently hijacked by mobile OS font engines — iOS and Android render them as coloured emoji blocks (purple square with white cross) regardless of any CSS `color` rule applied, because the OS substitutes its own emoji glyph before CSS can apply.
- **What breaks if violated:** The visual immersion of the website will be ruined by out-of-place modern OS emojis, and more subtly, Unicode symbol characters that appear correctly on desktop will render as coloured emoji on mobile, breaking the theme. Always use SVG for any decorative icon.

### 5. Unified Parchment Theme
- **What it is:** All pages utilize global CSS variables for a parchment background with dark sepia ink text. Dark backgrounds and overlays are restricted strictly to top hero sections with photographic backgrounds.
- **Why it was made:** To ensure visual consistency. The site should feel like reading an ancient manuscript.
- **What breaks if violated:** Pages will look disjointed, and readability will suffer if dark modes/backgrounds are applied inconsistently over standard content.

### 6. Netlify SPA Redirect Rule
- **What it is:** `public/_redirects` contains `/* /index.html 200`, which tells Netlify to serve `index.html` for every URL that doesn't match a real static file.
- **Why it was made:** React Router uses the History API for client-side navigation. When a user presses the mobile back button (or refreshes, or shares a deep link), the browser makes a real HTTP request for that URL. Without this rule, Netlify returns a 404 because no physical file exists at `/discipleship`, `/contact`, etc.
- **What breaks if violated:** Any navigation that triggers a real HTTP request (back button on mobile, page refresh, bookmarked deep links) will show a "Page Not Found" error instead of the correct page.

### 7. Netlify HTTP Security Headers
- **What it is:** `public/_headers` configures standard security headers (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: geolocation=(), camera=(), microphone=()`) and a robust `Content-Security-Policy`.
- **Why it was made:** To secure the application against Clickjacking, MIME sniffing, and Cross-Site Scripting (XSS), while allowing specific external resources (Google Fonts, CloudFront CDN assets, YouTube embeds).
- **What breaks if violated:** Malicious actors could embed the site in iframes, execute unauthorized scripts, or new external asset integrations might fail if they are not explicitly allowed in the CSP.

