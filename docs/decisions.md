# Architectural Decisions

### 1. Stream-First Navigation
- **What it is:** The application is structured around three audience segments (Unsaved, New Christian, Pastor), and the hero/navbar immediately routes visitors into the right stream.
- **Why it was made:** To personalize the user experience and ensure visitors immediately find relevant content rather than getting lost in generic menus.
- **What breaks if violated:** Users will be presented with overwhelming or irrelevant information, reducing the effectiveness of the ministry's core goal (evangelism vs discipleship).

### 2. Vanilla CSS with CSS Variables
- **What it is:** Using standard modular CSS files co-located with components and a global `index.css` for design tokens, explicitly avoiding Tailwind CSS or UI frameworks.
- **Why it was made:** To maintain maximum flexibility and control over the custom "Ancient Israel" and parchment aesthetic without fighting framework defaults.
- **What breaks if violated:** The highly specific, immersive thematic experience (colors, typography, micro-animations) will become fragmented or generic.

### 3. Static PDF Serving
- **What it is:** All gospel tracts and discipleship PDFs are served directly from `/public/downloads/` via Vite, rather than an external backend or CMS.
- **Why it was made:** Simplicity, speed, and cost-effectiveness. A backend server is unnecessary for static immutable files.
- **What breaks if violated:** Links to resources will break, and the deployment complexity will unnecessarily increase.

### 4. Zero-Emoji Rule
- **What it is:** Complete ban on colorful/system emojis across the application, replaced with custom SVGs or 2-letter badges.
- **Why it was made:** System emojis look modern and break the ancient, royal, parchment-style aesthetic of the application.
- **What breaks if violated:** The visual immersion of the website will be ruined by out-of-place modern OS emojis.

### 5. Unified Parchment Theme
- **What it is:** All pages utilize global CSS variables for a parchment background with dark sepia ink text. Dark backgrounds and overlays are restricted strictly to top hero sections with photographic backgrounds.
- **Why it was made:** To ensure visual consistency. The site should feel like reading an ancient manuscript.
- **What breaks if violated:** Pages will look disjointed, and readability will suffer if dark modes/backgrounds are applied inconsistently over standard content.
