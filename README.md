# ReelMind

A tiny, focused learning + short-form video playground - think micro-courses and reels in one neat mobile-first frame.

ReelMind is a React + Vite prototype that demonstrates a mobile-first UI for short videos (reels), a creator upload flow, a small learning dashboard, and a profile view. It uses TypeScript, Tailwind CSS (v4), and Vite for fast dev iteration. The codebase is intentionally minimal and easy to extend - a great starting point for adding Firebase, real uploads, or a backend service.

---

**Quick Links**
- Project root: `reelmind/`
- Dev server: `npm run dev`
- Production build: `npm run build`

---

**Why this project exists**
- Rapid UI prototyping for short-form learning experiences
- Demonstrates a small, composable React app structure with a mobile-first design
- Useful starting point for learning Tailwind, Vite, and modern React patterns

---

**What’s included**
- React + TypeScript app scaffolded with Vite
- Tailwind CSS configured (Tailwind v4 + `@tailwindcss/postcss`) via `postcss.config.js`
- A small set of components: `Navbar`, `ReelCard`, `UploadWidget`, and simple pages for `HomeFeed`, `Explore`, `CreatorStudio`, and `Profile`
- Mock data for reels in `src/App.tsx` so the app runs offline out of the box
- Static assets served from `public/` (e.g. `public/assets/IMG_1420.jpeg`)

---

**Project Structure (high level)**

```
reelmind/
├─ public/                # Static files served as-is (use /assets/* URLs)
│  └─ assets/IMG_1420.jpeg # Background image used by the app
├─ src/
│  ├─ components/         # Reusable UI components (Navbar, ReelCard, etc.)
│  ├─ pages/              # Page-level components (HomeFeed, Explore, Profile...)
│  ├─ contexts/           # React contexts (AuthContext)
│  ├─ lib/                # Utilities and helpers (firebase.js, utils.ts)
│  ├─ styles/             # Any local styles
+│  ├─ main.tsx            # App bootstrap
│  └─ App.tsx             # Top-level app + routing + mock data
├─ tailwind.config.js
├─ postcss.config.js
├─ package.json
└─ README.md
```

---

**Architecture & Data Flow**

- UI layer (components) - presentational elements that accept props (e.g. `ReelCard` accepts a `Reel` object and `isActive` boolean). Components live in `src/components/`.
- Pages - high-level compositions of components (feed, explore, creator studio). Pages live in `src/pages/`.
- App-level state - `App.tsx` holds the active tab and the mock reels list; `CreatorStudio` calls back with `onUpload` to add a new Reel.
- Utilities - shared types and helper functions in `src/lib/utils.ts` (e.g. `Reel` type, `cn` utility). Keep runtime exports separate from type-only imports to avoid Vite/Esm errors (use `import type { Reel } from '...';`).
- Static assets - put large media (background images, sample videos) in `public/assets/` so Vite serves them statically at `/assets/<name>`.

Visual (conceptual) diagram:

```
[public/assets]  <-- static image/video served at /assets/*
       |
      App.tsx  (holds mock data and activeTab)
       |
    Pages (HomeFeed, Explore, CreatorStudio, Profile)
       |
  Components (Navbar, ReelCard, UploadWidget)
       |
  lib/ (utils, firebase helpers)
```

---

Development workflow

1. Install dependencies (once):

```bash
cd reelmind
npm install
```

2. Start dev server (hot reload):

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

Notes about running
- If the dev server shows a blank page, check the browser console for errors. Common issues:
  - Tailwind/PostCSS configuration mismatch - ensure `@tailwindcss/postcss` is installed and `postcss.config.js` references it.
  - Runtime import errors for types - use `import type { Reel } from './lib/utils'` to prevent ESM runtime import attempts.
  - Port collisions - Vite will try another port if 5173 is in use; check the terminal for the actual URL.

---

Styling & theming
- Tailwind is configured via `tailwind.config.js` and `src/index.css` contains the Tailwind directives (or v4-compatible import). If you change major theme tokens, update `tailwind.config.js`.

Background image
- The app currently expects a background image at `/assets/IMG_1420.jpeg`. Place your file in `public/assets/IMG_1420.jpeg` (already done) or change the URL in `src/App.tsx`.

If you prefer to bundle the image through the JavaScript pipeline (so the import is hashed and served from the build), move it to `src/assets/` and update `App.tsx` to import it:

```tsx
import bg from './assets/IMG_1420.jpeg'
...
style={{ backgroundImage: `url(${bg})` }}
```

---

Deployment recommendations
- Vercel or Netlify are straightforward choices for Vite apps. Connect the repo, set the build command `npm run build`, and publish the `dist/` folder.
- If you use GitHub Actions, a minimal workflow can run `npm ci` and `npm run build` and publish to GitHub Pages or a deployment provider.

---

Troubleshooting (quick fixes)
- Blank page / nothing renders:
  - Check `console` and `terminal` for errors. Fixes often involve: tailwind/postcss errors, missing exported symbols, or runtime attempts to import TypeScript-only types.
- Background image not showing:
  - Confirm file exists at `public/assets/IMG_1420.jpeg` and loads (DevTools Network tab). If 404, ensure file path and name match.
  - Ensure overlay is not fully opaque (`bg-black/30` is used by default).

---

Contributing
- Feel free to open PRs for design improvements, accessibility fixes, or converting mock data to real data via Firebase.

Suggested small tasks:
- Hook up Firebase (auth + storage + realtime DB) so uploads persist.
- Convert `HomeFeed` to lazy-load reels and paginate.
- Add tests for critical components.

---

Author
- Built as a small prototype. Feel free to reach out if you want help wiring it to a backend or deploying it.

Enjoy building!

*** End Patch# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
