# 2e Studio website

React + Vite portfolio. Source is in `src/`, assets in `public/`. The build prerenders the homepage and case studies into `dist/` for crawlable content and page-specific metadata.

## Local development

Use Node 24 (already installed on this Mac through nvm):

```sh
nvm use
npm ci
npm run dev
```

If Node 24 is missing on another machine, run `nvm install` first. `.nvmrc` selects Node 24; `package.json` records the same requirement. Node is a development/build tool and is not required by visitors to the published static website.

## Validation

```sh
npm run build
npm run check:site
npm run lint
npm run preview
```

The build includes `scripts/prerender-sarah.mjs`, which prerenders all portfolio routes, including DCG. Check phone, tablet, and desktop layouts, local navigation, media playback, and screenshot galleries before publishing. `npm audit` checks installed dependencies.

## Publishing

Local changes and a successful build do not publish the site. Do not push or deploy without Jessie’s approval. Preserve the existing site and hosting configuration.

## Performance and local search

Large PNG artwork and screenshots have lossless WebP replacements; originals remain in `public/` for editing. `performance-image-report.json` records their source paths and byte counts, and the build omits those redundant PNGs and raw `.mov` recordings from `dist/`. Production pages use intrinsic image dimensions, responsive portfolio thumbnails, and lazy loading below the fold. Keep all six portfolio thumbnails at the approved 9:4 framing, with navigation and hero content visible.

The cursor is mounted once and batches mouse updates per animation frame. The logo’s hidden bird animation loads when triggered. `public/_headers` gives hashed assets immutable caching and editable portfolio/DCG media a one-day cache; these rules apply on Cloudflare hosting, not Vite’s preview server.

The homepage includes visible Alabama service information and Organization/Service structured data, including Houston, Alabama. Case-study copy identifies Sarah Pickett in Madison, In The Woods in Cullman, and DCG in Oakman. Keep service areas distinct from office locations and only publish measured client outcomes. All nine canonical pages are prerendered and listed in the sitemap. `check:site` checks titles, descriptions, canonical URLs, one H1 per page, JSON-LD syntax, footer credit, local links/media, and responsive image variants.

After an approved publication, review the sitemap and indexing in Google Search Console and measure real production Core Web Vitals. Local byte reductions are not a live speed score or a search-ranking guarantee.
