## 1. Project
React SPA themed around Ancient Israel (Galilean/Temple aesthetics) for spreading the Gospel via stream-based navigation.

## 2. Tech Stack
- React 19: Core framework.
- Vanilla CSS: Exclusive styling choice via CSS variables (no Tailwind/Bootstrap).
- Vite: Bundler and static server for `/public` PDFs.

## 3. Architecture
Stream-First architecture where users are routed into three streams (Unsaved, New Christian, Pastor). Data flow is client-side, and navigation is handled by React Router v7.

## 4. Hard Rules
- Never use colorful/system emojis: Violates the ancient aesthetic; use SVGs or 2-letter badges instead.
- Never apply dark backgrounds : Breaks the unified parchment theme.
- Never use non-approved fonts: 'Cinzel' (headers) and 'Lora' (body) are strictly required for the theme.
- Never close a task without updating the necessary file in the docs folder : Causes the single source of truth graph to desync.

## 5. Conventions
- Naming: `PascalCase.jsx` with co-located `PascalCase.css`.
- Component Style: Functional components using Hooks, with explicit semantic HTML.
- Import Order: React imports, Contexts, Components, CSS files last.
- Code Style: CSS variables from `index.css` must be used for colors/fonts.

## 6. After Every Task
- If you made any architectural decisions, update the relevant docs/ file
- If you discovered a new failure pattern, add it to Hard Rules in this file
- If a new IPC channel or API endpoint was added, update docs/ accordingly
- If persistence or schema changed, update docs/ accordingly

## 7. Docs
| Working on | Read |
|---|---|
| Architecture & State | @docs/architecture.md |
| System Decisions | @docs/decisions.md |
| Code Style | @docs/conventions.md |
