# B2B Industrial GPS Website Front-End

Next.js + Tailwind CSS scaffold for a responsive B2B industrial GPS website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Componentized layout

## Pages

- `/`
- `/products`
- `/products/[slug]`
- `/solutions`
- `/about`
- `/contact`

## Components

- `Header`: multi-level navigation with Products, Solutions, and Platform menus.
- `HeroBanner`: large image, title, description, and configurable buttons.
- `ProductCard`: image, product name, short description, and link.
- `FeatureSection`: icon-led feature grid.
- `Footer`: configurable multi-column footer.
- `SectionHeader`: shared section title block.

Components can be imported from:

```ts
import { Header, HeroBanner, ProductCard, FeatureSection, Footer } from "@/components";
```

## Placeholder Images

All page images point to files under:

```txt
public/images/placeholders/
```

Replace these files or update the paths in `src/lib/site-data.ts` and page
components when final assets are ready.

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Deployment domains

The same repository serves the complete product, solution, country video and download catalogue.
Set `NEXT_PUBLIC_SITE_URL=https://www.taxkjgps.com` on the taxkjgps Vercel project
(`gps-global-website`, production) before building. Other deployments default to
`https://www.567gps.com`. This sets canonical URLs, social sharing, JSON-LD,
contact website and sitemap/robots consistently without changing catalogue data.

Legacy ASP product pages redirect to the product catalogue; they are not exact
model matches. Existing about, solutions, contact and platform entry paths also redirect.
