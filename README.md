# Blupeak Solutions

The company website for Blupeak Solutions, presenting its sales, marketing, creative, engineering, SEO, and automation services. The application includes a service catalog, dedicated service detail pages, company and team profiles, and contact forms.

## Technology

| Layer | Technology |
| --- | --- |
| User interface | React 19, TypeScript 5.9 |
| Build tooling | Vite 7, React SWC plugin |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4, shared CSS variables and global styles |
| Animation | GSAP 3 with ScrollTrigger, ScrollSmoother, SplitText, and ScrollToPlugin |
| Carousels | Swiper 14 |
| Hero graphics | Three.js |
| Icons | Lucide React and local SVG components |
| Contact forms | Web3Forms |
| Code quality | ESLint, TypeScript strict mode |

## Getting started

Use Node.js 22 and npm, matching the project's continuous integration environment.

```sh
npm ci
cp .env.example .env
npm run dev
```

Open the local URL printed by Vite. The site can run without a Web3Forms access key; form submissions require configuration.

### Contact form configuration

Set the following value in the root `.env` file:

```dotenv
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

Restart the development server after changing environment variables. Both contact form components use `useWeb3Forms` from `src/lib/web3forms.ts`, which submits form data directly to the Web3Forms API and manages submitting, success, and error states. Without a configured key, submissions show a configuration message.

Variables prefixed with `VITE_` are available in browser code; do not use them for server-side credentials.

## Project architecture

```text
.
├── public/
│   ├── css/                    Global styles, font declarations, and animation styles
│   ├── fonts/                  Local font assets
│   ├── images/                 Logos, team portraits, and section imagery
│   ├── robots.txt              Crawler directives
│   └── sitemap.xml             Public page URLs
├── src/
│   ├── assets/service-images/  Service artwork imported through Vite
│   ├── components/
│   │   ├── common/             Shared UI, icons, text reveals, counters, and pagination
│   │   ├── forms/              Contact form interfaces
│   │   ├── layout/             Navigation, header, footer, preloader, and scroll controls
│   │   └── sections/           Reusable page sections
│   ├── hooks/                  Page effects, service card animation, and metadata hooks
│   ├── lib/                    Service content, GSAP setup, and form submission logic
│   ├── pages/                  Route-level page composition
│   ├── styles/pageUtilities.ts Shared Tailwind recipes and page styling
│   ├── App.tsx                 Active route definitions
│   ├── index.css               Tailwind entry point
│   └── main.tsx                React entry point and browser router
├── .env.example               Supported environment variables
├── index.html                 HTML entry point and default metadata
├── eslint.config.js           Lint configuration
├── tsconfig*.json             TypeScript configuration
└── vite.config.ts             Vite, React, and Tailwind integration
```

### Application structure

`main.tsx` mounts the application inside `BrowserRouter`. `App.tsx` maps URLs to page components through `RootLayout`.

`RootLayout` owns the shared header, preloader, back-to-top control, smooth-scroll wrapper, and route-level animation lifecycle. It resets the scroll position on navigation. Page components compose their content from reusable sections and include the footer where needed. The not-found page uses a minimal layout without the shared header or back-to-top control.

Section components provide the main content blocks, including About, services, team, features, foundation, and client sections. Common components provide smaller reusable elements such as `TextReveal`, `CountUp`, `DotLink`, and `LinePagination`.

### Styling

Tailwind utilities define component presentation. `src/styles/pageUtilities.ts` centralizes shared page and section recipes through `pageClasses`, while preserving semantic classes used by animation selectors. Utility classes are written as complete literals so Tailwind can discover them.

`public/css/style.css` provides global typography, brand tokens, element defaults, and animation styles. `src/index.css` loads Tailwind's theme and utility layers; Tailwind Preflight is not enabled.

The primary brand colors are teal (`#064C44`) and coral (`#FF593E`). Use the existing CSS variables and typography tokens when extending components. Match surrounding spacing conventions and check both sides of a section boundary when adjusting vertical gaps.

### Animation and interaction

- `src/lib/gsap.ts` registers and exports the shared GSAP plugins.
- `usePageEffects` initializes route-level effects and reverts them when the route changes.
- `useServiceCardFold` manages the scroll-driven service card stack and its return to the original layout.
- Components such as `FoundationSection`, `TextReveal`, and `CountUp` manage their own scoped animations.
- `MagicRings` is lazy-loaded for the homepage hero, with static rendering for reduced motion or unavailable WebGL.
- Team and feature sections share `LinePagination`; feature carousels use Swiper.

When adding motion, scope selectors to the relevant component, clean up animations and listeners, and provide a readable reduced-motion state.

### Content and assets

`src/lib/services.ts` defines service slugs, titles, descriptions, included capabilities, outcomes, metadata, and slug aliases. The homepage service list, services page, and service detail pages consume this shared catalog.

The default team roster lives in `src/components/sections/TeamSection.tsx`. The homepage uses its responsive pagination, while the Team page displays the complete roster. Team images are stored in `public/images/resource/`.

Service artwork lives in `src/assets/service-images/` and uses filenames matching service slugs. See [the service artwork guide](src/assets/service-images/README.md) before replacing images, particularly when changing transparent canvas dimensions or crop bounds.

Use `public/images/` for images referenced by public URL and `src/assets/` for assets imported into the application. Page-specific copy is maintained in the corresponding page or section component.

## Active routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Blupeak Solutions |
| `/services` | Service overview |
| `/services/:slug` | Service details |
| `/team` | Team members |
| `/contact` | Contact and inquiry form |
| `/404` and unmatched paths | Not found |

The five service slugs are:

- `revenue-sales-systems`
- `brand-creative-solutions`
- `seo-organic-growth`
- `custom-web-software`
- `ai-workflow-automation`

Additional page modules exist in `src/pages/` but are not registered as active routes. Treat `src/App.tsx` as the source of truth for the available pages.

Page metadata is maintained in page components, with `usePageMetadata` available for title and description updates. Keep `public/sitemap.xml` aligned with the active public routes and service slugs.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint checks |
| `npm run build` | Run TypeScript checks and create the application build |
| `npm run preview` | Preview the built application locally |

## Quality checks

Before submitting changes, run:

```sh
npm run lint
npm run build
```

Review affected pages at mobile, tablet, and desktop widths. For interface changes, verify navigation, keyboard focus, responsive pagination, section spacing, and scroll animations. Check reduced-motion behavior when changing animation code.

The CI workflow in `.github/workflows/ci.yml` runs dependency installation, linting, and the build on pull requests and pushes to branches other than `main`. There is currently no dedicated automated test script in `package.json`.
