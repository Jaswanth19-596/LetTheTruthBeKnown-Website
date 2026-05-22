# Knowledge Graph

## 1. Project Overview
**Name:** LetTheTruthBeKnown-Website
**Type:** React Single Page Application (SPA)
**Theme:** Ancient Israel (Galilean simplicity, Temple grandeur, parchment manuscript aesthetics) — dark cinematic with gold (#c8922a) accents
**Goal:** Spreading the Gospel of Jesus Christ with multi-language support, gospel tracts, discipleship materials, and interactive features.
**Architecture Paradigm:** Stream-First — visitors self-select into one of 3 audience streams from the homepage hero.

---

## 2. Technology Stack
- **Core Framework:** React 19 (Hooks, Context API)
- **Routing:** React Router DOM (v7)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS Variables for theming, Custom Animations)
- **Linting:** ESLint with React plugins
- **Other Libraries:**
  - `html2canvas` (Potentially for taking screenshots or generating images of tracts/verses)
- **Node Environment:** Node.js 18+

---

## 3. The 3 User Streams

The site is structured around audience segments. The hero immediately routes visitors into the right stream.

| Stream | Audience | Entry Route | Key Pages |
|---|---|---|---|
| **Unsaved / Curious** | People exploring faith for the first time | `/seeking-truth` | SeekingTruth, SalvationQuiz |
| **New Christian / Discipleship** | Recently saved, needs grounding | `/discipleship` | Discipleship, NextSteps, Resources |
| **Pastor / Further Study** | Mature Christians, pastors, teachers | `/resources` | Resources, GospelTracts, StopTracts, FAQs |

---

## 4. Folder Structure & Modules

### 📁 Root Directory
- `package.json` / `package-lock.json`: Dependencies and NPM scripts (`dev`, `build`, `lint`, `preview`).
- `vite.config.js`: Vite bundler configuration.
- `eslint.config.js`: Linting rules.
- `index.html`: Entry point for the SPA.
- `README.md`: Project documentation and guidelines.

### 📁 `src/` (Source Code)

#### 📄 Entry Points
- `main.jsx`: React root rendering.
- `App.jsx`: Main routing setup and layout wrapper. Routes: `/`, `/seeking-truth`, `/gospel-tracts`, `/stop-tracts`, `/discipleship`, `/salvation-quiz`, `/resources`, `/about`, `/faqs`, `/contact`, `/next-steps`, `/prayer-request`, `/give`.

#### 📁 `components/` (Reusable UI Elements)
- **Navigation:** `Navbar.jsx` *(stream-based dropdown nav — redesigned 2026-05-22)*, `Footer.jsx`
- **Utility / Interactive:**
  - `LanguageToggle.jsx`: Switch between supported languages.
  - `PDFViewer.jsx`: In-browser PDF viewing for tracts.
  - `TextToSpeech.jsx`: Audio playback for scripture (Verse of the Day).
  - `WhatsAppShare.jsx`: Social sharing integration.
  - `ScrollToTop.jsx`: Helper component for routing.
- **Display Components:**
  - `Card.jsx`: Reusable card layout for resources.
  - `VerseOfDay.jsx`: Daily scripture display.
  - `IntroScreen.jsx`: Initial loading or welcome animation.

#### 📁 `pages/` (Route Views)
- `Home.jsx` *(redesigned 2026-05-22)* — Hook hero ("Seeking the Truth?") + 3-stream selector cards. No heavy text. Minimal, cinematic.
- `SeekingTruth.jsx` *(NEW/REDESIGNED — 2026-05-22)* — Core unsaved-stream page: Cinematic search-for-truth header → 2 video teaser cards with play buttons (Pastor Wilkerson & Peter Morris) → Salvation Quiz CTA → Gospel Tracts by language with professional circular two-letter badges (no emojis).
- `About.jsx`: Ministry history and mission.
- `Contact.jsx`: Contact information and forms.
- `Discipleship.jsx`: Structured Bible study paths and materials (Foundations of My Faith — Levels 1, 2, 3).
- `GospelTracts.jsx`: God's Simple Plan of Salvation — downloadable tracts by language (9 languages).
- `StopTracts.jsx`: STOP! tract category — The True Gospel (6 languages: English, Swahili, Luo, Kalenjin, Kisii, Maasai).
- `Resources.jsx`: General ministry resources, Answer Book series, GBBC.
- `PrayerRequest.jsx`: Form to submit prayer requests.
- `SalvationQuiz.jsx` *(redesigned 2026-05-22)* — Card-per-question layout with progress bar, Yes/No toggles, verse reveals, result banner routing to SeekingTruth or NextSteps.
- `NextSteps.jsx`: 6-step guidance for new believers.
- `FAQs.jsx`: Frequently Asked Questions.
- `Give.jsx` *(NEW — 2026-05-22)* — Frontend placeholder for donations: 4 impact cards + "Coming Soon" online giving panel + Contact CTA.

#### 📁 `context/` (State Management)
- `LanguageContext.jsx`: Global state for the current selected language and translation functions.

#### 📁 `hooks/` (Custom React Hooks)
- `useAnimations.js`: Custom hook for managing UI micro-animations and transitions.

#### 📁 `locales/` (Internationalization)
- `en.json`: English translations (primary, most complete).
- `sw.json`: Swahili translations.
- `fr.json`: French translations.
- `index.js`: Locale loader and exports.

#### 📁 `styles/` (Global Styling)
- `index.css`: Global CSS, design tokens (CSS variables). Key colors: Temple Blue `#1e3a5f`, Scarlet `#8B1538`, Gold `#c8922a`, Dark BG `#0d1117`.

#### 📁 `config/` (Configuration)
- `assets.js`: `getAssetUrl()` helper for resolving public asset paths.

#### 📁 `assets/` (Static Files)
- Images, icons, and fonts used across the application.

### 📁 `public/` (Static Assets)
- `intro_image.jpeg`: Background image used in Home hero.
- `downloads/gospel_tracts/`: 9 PDFs — english, swahili, luo, kikuyu, kalenjin, arabic, amharic, maasai, kamba.
- `downloads/stop_tracts/`: 6 PDFs — english, swahili, luo, kalenjin, kisii, maasai.
- `downloads/discipleship/`: Discipleship level PDFs.
- `downloads/resources/`: Resource PDFs.
- `downloads/answers/`: Answer Book series PDFs.

---

## 5. Architecture Decisions & Data Flow

### Stream-First Navigation (2026-05-22)
- **Navbar** is now stream-based with dropdowns:
  - `Seeking Truth` (direct link, gold highlight)
  - `Growing in Faith` (dropdown: Discipleship, Resources, Next Steps)
  - `Pastor` (dropdown: Resources, Gospel Tracts, STOP! Tracts, FAQs, Prayer Request)
  - `About` | `Give` | `Contact Us` (CTA button)
- Navbar starts **transparent** on hero and transitions to frosted glass on scroll.

### Theming & Styling Strategy
- **Vanilla CSS over Tailwind/Frameworks:** Modular CSS files co-located with components.
- **CSS Variables:** Global design tokens in `src/styles/index.css`. Stream accent colors defined on `:root`:
  - `--stream-gold: #c8922a` (Unsaved stream)
  - `--stream-blue: #1e6fa8` (Growing/Discipleship stream)
  - `--stream-scarlet: #8B1538` (Pastor/Stop tracts stream)
- **IMPORTANT — Dual Theme Pattern (2026-05-22):** The site has two visual modes:
  - **Light/Parchment pages** (About, Contact, FAQs, Discipleship, NextSteps, GospelTracts, StopTracts, PrayerRequest, Resources): Use global CSS vars (`--bg-primary: #FAF5EE`, `--text-primary: #2C1810`). Dark sepia text on cream backgrounds.
  - **Dark/Cinematic pages** (Home hero+streams, SeekingTruth, SalvationQuiz, Give): Use **hardcoded** dark hex values (`#0d1117`, `#161b27`) for backgrounds and explicit white/light text. Do NOT use `var(--bg-primary)` on dark pages since it resolves to the global parchment `#FAF5EE`, causing invisible white-on-cream text.
- **Navbar transparent-state fix (2026-05-22):** When navbar is not scrolled (transparent over dark hero), `.navbar:not(.scrolled):not(.mobile-open)` overrides apply white/light text colors and a frosted glass-style language toggle.

### State Management
- **Context API:** `LanguageContext.jsx` for i18n. No Redux.

### PDF Handling
- All PDFs served directly from `/public/downloads/`. No server needed — static file serving via Vite.
- SeekingTruth.jsx links directly using `/downloads/...` paths (not via `getAssetUrl`).
- GospelTracts.jsx uses `getAssetUrl()` from `config/assets.js`.

### Emoji Elimination & Professional SVG/Badge Theming (2026-05-22)
- **Zero-Emoji Rule:** All colorful/system emojis are strictly banned and eliminated across the application.
- **2-Letter Badges:** Flag emojis in translation files (`en.json`, `sw.json`, `fr.json`) and tract lists have been replaced with elegant gold-bordered circular 2-letter code badges (e.g. `EN`, `SW`, `LU`, `FR`).
- **Inline SVGs:** All feature/utility/step icons (including those on pages like `NextSteps`, `Give`, and components like `TextToSpeech`, `WhatsAppShare`) use custom, premium inline SVGs styled with CSS transitions and subtle golden hover micro-animations.

---

## 6. Entities & Edges (Dependency Graph)

- `App.jsx` **imports and routes to** all `pages/*` including new `SeekingTruth`, `Give`
- `Home.jsx` **links to** `/seeking-truth`, `/discipleship`, `/resources`
- `SeekingTruth.jsx` **links to** `/salvation-quiz`, `/next-steps`, `/downloads/stop_tracts/*`, `/downloads/gospel_tracts/*`
- `SalvationQuiz.jsx` **links to** `/seeking-truth` (unsaved result) and `/next-steps` (saved result)
- `Give.jsx` **links to** `/contact`
- `Navbar.jsx` **links to** all stream entry points; **imports** `LanguageToggle.jsx`
- `pages/*` **consume** `LanguageContext.jsx` for localization (except SeekingTruth, Give — static English only)
- `GospelTracts.jsx` **depends on** `components/PDFViewer.jsx` and `config/assets.js`
- `components/*` & `pages/*` **import** local `.css` files for styling
