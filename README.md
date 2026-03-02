# Liaqat Saeed Portfolio

Modern, mobile-first portfolio site built with Vite + React and driven by structured resume data.

## Local Development

1. Install dependencies

```bash
pnpm install
```

2. Start the dev server

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

The output will be in `dist/`.

## Deploy (Static Hosting)

Any static host works (Netlify, Vercel, GitHub Pages). Example with Netlify:

```bash
pnpm build
```

Upload the `dist/` folder as the site root.

## Lighthouse Check

1. Start the preview server:

```bash
pnpm preview
```

2. In another terminal, run Lighthouse (requires Chrome):

```bash
npx lighthouse http://localhost:4173 --only-categories=performance,accessibility,best-practices,seo --chrome-flags="--headless"
```

## Content Updates

Primary resume data lives in `src/data/profile.ts`. Update this file to refresh the site content and links.

## SEO Assets

- `public/robots.txt`
- `public/sitemap.xml`
- `index.html` meta tags and structured data
