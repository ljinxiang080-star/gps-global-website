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
