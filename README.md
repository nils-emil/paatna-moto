# Paatna Motoklubi

Landing page for Paatna Motoklubi — built with Astro, deployed on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve built output locally
```

## Editing content

- **Riders**: `src/data/riders.ts` — name, role, bio, bike.
- **Bike specs / spirit lines**: `src/components/Bikes.astro` (`bikeDetails` map).
- **About / stats**: `src/components/About.astro`.
- **Hero copy & nav**: `src/components/Hero.astro`.
- **Contact / footer**: `src/components/Footer.astro` (update email).
- **Colors / fonts**: `src/styles/global.css` (`:root` variables).

## Deploy to Cloudflare Pages

Two options — pick one.

### Option A — Git integration (recommended)

1. Push this repo to GitHub / GitLab.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
4. Save & Deploy. Every push to `main` redeploys.

### Option B — Direct upload via Wrangler

```bash
npm install -g wrangler          # one-time
wrangler login                   # one-time
npm run build
wrangler pages deploy dist --project-name=paatna-motoklubi
```

First run will prompt to create the project; subsequent runs deploy a new version.

### Custom domain

Cloudflare dashboard → Pages project → **Custom domains** → add `paatna-mk.ee` (or whatever).
Cloudflare handles TLS automatically.

## Project structure

```
src/
├── components/   # Hero, About, Riders, Bikes, Footer
├── data/         # riders.ts — single source of rider/bike data
├── layouts/      # Layout.astro — html shell, meta tags, fonts
├── pages/        # index.astro
└── styles/       # global.css — design tokens
public/
├── _headers      # Cloudflare Pages security headers
└── favicon.svg
```
