# Bluepeak Solution — React port

The "Bluepeak Solution" creative-agency site, converted from a static multi-page
template to a single-page React app. The visual design, markup classes and the
original stylesheet are unchanged — only the delivery mechanism moved to React.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (`@vitejs/plugin-react-swc`)
- **React Router 7** (declarative `<Routes>`)
- **Tailwind CSS 4** — additive only, preflight disabled (see `src/index.css`).
  The template's own `css/style.css` + `css/bootstrap.min.css` remain the source
  of truth for the design and are loaded verbatim from `public/` via `index.html`.
- **GSAP 3** — ScrollSmoother, ScrollTrigger, SplitText, ScrollToPlugin
  (all free in GSAP ≥ 3.13, so no vendored Club plugins).
- **Swiper 14** for every carousel.

jQuery, Bootstrap JS, WOW.js, Slick, Magnific Popup, nice-select, knob,
mixitup, parallaxie, three.js and the Revolution slider are **not** used —
their behaviours were reimplemented in `src/hooks/usePageEffects.ts` and small
React components.

## Layout / structure

```
public/                     original css, fonts, images (untouched)
legacy/                     the original .html / .js / .php, kept for reference
src/
  main.tsx                  entry (no StrictMode — see the comment there)
  App.tsx                   route table
  lib/
    gsap.ts                 GSAP plugin registration
    web3forms.ts            lead-form submission hook
  hooks/
    usePageEffects.ts       per-route port of script-gsap.js + script.js
  components/
    layout/                 RootLayout, Header, Footer, ShopFooter, Preloader,
                            BackToTop, MouseCursor, Navigation
    common/                 PageTitle, Accordion, Star
    sections/               AboutSection, FeatureSection, ClientsSection,
                            ServiceList, ProductGrid, TeamBlob
    forms/                  HomeContactForm, TemplateContactForm
  pages/                    one component per route
```

## Lead / contact forms

All contact forms submit through [Web3Forms](https://web3forms.com).
Create a `.env` file (see `.env.example`) with:

```
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

Until a key is set the forms show a clear "not configured yet" message instead
of sending.

## Scripts

```
npm run dev        # Vite dev server
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

## Routes

`/` `/about` `/services` `/service-details` `/projects` `/project-details`
`/team` `/team-details` `/testimonial` `/pricing` `/faq` `/blog` `/blog-details`
`/contact` `/shop` `/shop-sidebar` `/product-details` `/cart` `/checkout`
`/404` (+ catch-all).

The shop pages are not in the header nav (they weren't in the original template
either) but are reachable by URL.
