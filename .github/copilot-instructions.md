# Copilot Instructions for 4theOne International Site

## Project Overview
- **Stack:** React (JSX), Vite, Tailwind CSS (custom palette), ESLint
- **Structure:**
  - `src/pages/`: Main page components (Home, About, Sermons, Events, Partner, Blog, Contact)
  - `src/components/`: Shared UI components
  - `src/assets/`: Static assets
  - `public/`: Public files (favicons, images)
  - Config: `tailwind.config.js`, `vite.config.js`, `eslint.config.js`, `postcss.config.js`
- **Routing**: React Router is used. Use `<Route>` and `<Link>` from `react-router-dom` for navigation. Avoid full-page reloads.

## Key Patterns & Conventions
- **Pages**: Each route/page is a React component in `src/pages/`. Use Tailwind classes only (no external CSS).
- **Design**: Spiritual, warm, modern, responsive. Use gradients and custom colors from Tailwind config (e.g., `from-lavender`, `text-charcoal`).
- **Hero Sections**: Centered flexbox, headline, subheading, and two CTA buttons. Follow the pattern in `Home.jsx`. Use spiritual language and bold visual contrast. Always include a headline, subheading, and two CTAs.
- **Routing**: Use anchor tags (`<a href="/route">`) for navigation. No React Router detected; keep navigation simple.
- **Componentization**: Shared UI (e.g., `Header.jsx`) lives in `src/components/`. Prefer composition over prop drilling. Break large sections into reusable components where appropriate (e.g., Hero, Footer, TestimonialBlock).
- **No TypeScript**: All code is JavaScript/JSX.
- **No external CSS**: All styling via Tailwind utility classes.

## Developer Workflows
- **Start Dev Server:**
  ```sh
  npm run dev
  ```
- **Build for Production:**
  ```sh
  npm run build
  ```
- **Preview Production Build:**
  ```sh
  npm run preview
  ```
- **Lint:**
  ```sh
  npm run lint
  ```
- **No test framework detected** (as of current structure).

## Integration Points
- **Tailwind Custom Colors:** Use only colors defined in `tailwind.config.js` (e.g., `bg-gradient-to-br from-lavender via-ivory to-sand`).
- **Vite Plugins:** See `vite.config.js` for plugin usage (React, Babel/SWC).
- **ESLint:** Configured for basic linting; see `eslint.config.js`.
- **React Router**: Routes and navigation handled via `react-router-dom`. Use `<Link to="/path">` instead of `<a href="/path">` when linking internally.

## Examples
- **Hero Section:**
  ```jsx
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-ivory to-sand ...">
    <h1 className="text-5xl font-bold text-charcoal ...">Encounter Jesus...</h1>
    <p className="text-lg text-slate ...">Empowering the global church...</p>
    <div className="flex flex-col sm:flex-row ...">
      <a href="/partner" className="bg-primary ...">Partner With Us</a>
      <a href="/sermons" className="bg-white ...">Watch Sermons</a>
    </div>
  </section>
  ```
- **Component Import:**
  ```jsx
  import Header from '../components/Header';
  ```
- **Internal Navigation Example:**
  ```jsx
  import { Link } from "react-router-dom";
  
  <Link to="/about" className="text-primary hover:underline">About</Link>
  ```

## Productivity Tips
- Always use Tailwind utility classes for layout and color.
- Keep page structure simple and mobile-friendly.
- Reference `Home.jsx` for layout and style conventions.
- Use only project-defined colors and spacing.

## Language & Tone
- Write in a voice that is spiritually bold, warm, and invitational.
- Use phrases that invoke revival, freedom, and encounter with Jesus.
- Avoid corporate or overly generic language.

---
_If any conventions or workflows are unclear, ask for clarification or examples from the user._
