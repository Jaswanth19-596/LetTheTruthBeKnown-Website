# Coding Conventions

## File Structure & Naming
- **Components:** Named in `PascalCase` (e.g., `Navbar.jsx`).
- **Styles:** Co-located with their components and named identically (e.g., `Navbar.css`).
- **Pages:** Route-level components are stored in `src/pages/` and named in `PascalCase`.
- **Assets:** Static downloads (PDFs) belong in `public/downloads/`, while images/icons belong in `src/assets/`.

## Component Style
- Use React Functional Components with Hooks.
- Do not use Class Components.
- Destructure props in the function signature.

## Import Order
1. React core (`useState`, `useEffect`, etc.)
2. React Router (`Link`, `useLocation`, etc.)
3. Contexts (`useLanguage`, etc.)
4. Local Components (`Navbar`, `Footer`, etc.)
5. Local CSS (`./Component.css`)

## Typing Rules
- The project currently uses plain JavaScript (no TypeScript).
- PropTypes are not explicitly enforced, but standard React state shapes should be initialized cleanly (e.g., `useState({ cosmos: null })`).

## Styling Rules
- **CSS Variables:** All colors, fonts, spacing, and border-radii MUST be referenced from `var(--...)` tokens defined in `src/styles/index.css`.
- **Hardcoded Colors:** Never hardcode hex codes or colors in component CSS files.
- **BEM-ish Naming:** Use specific namespaces for component classes (e.g., `.st-hero`, `.st-video-card` in `SeekingTruth.css`) to avoid global CSS collisions.
- **Animations:** Utilize global CSS animation classes (`.animate-fadeIn`, `.animate-float`) defined in `index.css`.

## Specific Patterns
- **No Emojis:** Use `inline SVGs` or `2-letter text badges` with CSS borders instead of emojis.
- **Typography:** `Cinzel` for headers (`h1`-`h6`), `Lora` for body text and scripture, `Inter` for UI elements.
