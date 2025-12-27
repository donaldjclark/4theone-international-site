# 4theOne International Site

Spirit-forward React single-page site powered by Vite, Tailwind, and Decap CMS. This repo also contains the GitHub OAuth proxy used by Decap when the site is deployed to Vercel.

## Local development

- `npm install`
- `npm run dev` to launch the Vite dev server on <http://localhost:5173>
- `npx decap-server` (in a second terminal) to enable the Decap local backend at <http://localhost:8080>
- Visit <http://localhost:5173/admin/> and log in with the Decap test credentials shown in the console output from `decap-server`.

## Production build

- `npm run build` bundles the site to `docs/` (GitHub Pages + Vercel static output)
- `npm run preview` serves the production bundle locally
- `npm run lint` applies the ESLint configuration

## Decap CMS + GitHub OAuth

`public/admin/config.yml` is already configured for the GitHub backend. The OAuth routes live in the Vercel functions folder (`api/auth/index.js` and `api/auth/callback.js`).

### Required environment variables (set in Vercel)

- `GITHUB_CLIENT_ID` – from your GitHub OAuth app
- `GITHUB_CLIENT_SECRET` – from your GitHub OAuth app
- `OAUTH_REDIRECT_URI` – usually `https://<your-vercel-domain>/api/auth/callback`
- `CMS_ALLOWED_ORIGIN` – the origin that hosts the CMS (e.g. `https://4theone-site.vercel.app`)

Copy `.env.example` to `.env.local` if you want to mirror the configuration when running `vercel dev` locally.

#### GitHub OAuth app

1. Create an OAuth app in GitHub → Settings → Developer settings → OAuth Apps.
2. Authorization callback URL must match the `OAUTH_REDIRECT_URI` value above.
3. Copy the client ID/secret into the Vercel environment variables.

#### Vercel deployment

1. Import this repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `docs`
4. Set the environment variables listed above for Production and Preview environments.
5. Redeploy after saving the environment variables.

#### CMS login flow

1. Browse to `https://<your-vercel-domain>/admin/`.
2. Click “Log in with GitHub”. The popup will go through your OAuth app and then close.
3. Once authorized, editors can create or edit posts in `src/content/blog/` using Markdown plus the available shortcodes (`lead`, `card`, `cta`, `footer`).

## Repository layout

- `src/` – React source, pages, components, Tailwind-aware Markdown styling
- `public/admin/` – Decap CMS UI, config, and GitHub backend wiring
- `api/` – Vercel serverless functions for GitHub OAuth
- `docs/` – production build output

## Helpful commands

- `npm run dev` – dev server
- `npm run build` – generate static bundle
- `npm run preview` – preview production bundle
- `npm run lint` – lint the codebase

## CMS authoring tips

- Use Markdown plus `:::lead`, `:::card`, `:::cta`, and `:::footer` blocks for styled sections.
- Header images should be stored in `public/uploads/`. The CMS media library saves to this folder automatically.
- Optional front matter fields like `displayDate` and `imageStyle` help customize the post presentation without touching templates.
