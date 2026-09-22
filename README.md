# SM Global Accounting Services — Website

Built with [Astro](https://astro.build) as a static site, deployed to GitHub Pages at
`smglobalaccounting.co.in`.

## Before you do anything else

Read `LAUNCH_CHECKLIST.md` — it lists every placeholder value and unfinished item in this build
(phone number, address, missing pages, etc.) so nothing goes live by accident.

## Project structure

```
src/
  layouts/BaseLayout.astro   — shared <head>, header, footer
  components/                — Header, Footer, CtaBand
  pages/                     — one file per page (index.astro = home page)
  styles/global.css          — brand colours, fonts, shared styles
  site.config.ts             — site-wide facts: nav, email, phone, address
public/
  CNAME                      — tells GitHub Pages which custom domain to serve
  favicon.svg, robots.txt
.github/workflows/deploy.yml — builds and deploys to GitHub Pages on every push to `main`
```

## Local development (needs Node.js 22+ and npm)

```bash
npm install
npm run dev       # starts a local preview at http://localhost:4321
npm run build     # type-checks and builds the production site into dist/
npm run preview   # serves the built dist/ folder locally
```

## Editing content

Each page's text lives directly in its `.astro` file under `src/pages/` — it reads like the
HTML it produces, with plain text and lists rather than a database. Site-wide details (email,
phone, nav links) live in one place: `src/site.config.ts`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages automatically. No manual deploy step is needed once this is set up
in the repo (see the setup instructions provided separately).
