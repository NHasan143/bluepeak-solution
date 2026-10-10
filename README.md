# Bluepeak Solution — React port

The "Bluepeak Solution" creative-agency site, converted from a static multi-page
template to a single-page React app. Pages are progressively migrating to
Tailwind while preserving the existing brand and functionality.

## Stack

- **React 19** + **TypeScript**
- **Vite 7** (`@vitejs/plugin-react-swc`)
- **React Router 7** (declarative `<Routes>`)
- **Tailwind CSS 4** — component and page presentation uses Tailwind utilities.
  Preflight stays disabled to preserve the existing browser defaults in
  `css/style.css`, alongside brand fonts, tokens and animation keyframes.
- **GSAP 3** — ScrollSmoother, ScrollTrigger, SplitText, ScrollToPlugin
  (all free in GSAP ≥ 3.13, so no vendored Club plugins).
- **Swiper 14** for every carousel.
- **Three.js** for the lazy-loaded MagicRings hero animation, with static rings
  when reduced motion is requested or WebGL is unavailable.

jQuery, Bootstrap JS, WOW.js, Slick, Magnific Popup, nice-select, knob,
mixitup, parallaxie and the Revolution slider are **not** used —
their behaviours were reimplemented in `src/hooks/usePageEffects.ts` and small
React components.

Unused template images/videos and dimension-label placeholder media have been
removed. The existing sections and card text remain, with media-only controls
removed where their images are no longer available. The hero uses the live
MagicRings animation rather than a video file.

## Layout / structure

```
public/                     template css/fonts and media used by the React site
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

The active application uses TypeScript (`.ts` and `.tsx`) throughout `src/`.
The unused `legacy/` archive has been removed, including its HTML, JavaScript,
PHP handlers, SCSS and plugin files. Public font demos, unused alternate template
stylesheets and obsolete plugin CSS have also been removed. Runtime libraries
are managed through npm dependencies. The root `index.html` remains the Vite
application entry. Interface icons use Lucide SVGs and brand marks use local SVGs;
Font Awesome, Linearicons and Flaticon stylesheets and font files are removed.
Text fonts and styles still required by current pages are retained.

## Styling migration

Navigation, footer and page sections use Tailwind utilities. The remaining
section recipes live in `src/styles/pageUtilities.ts`; every class is a literal
that Tailwind can discover. `pageClasses` preserves semantic class names used by
GSAP and attaches those static utilities. Descendant and state variants retain
existing hover, accordion, tab and responsive behavior.

Use Tailwind for new presentation. Keep GSAP and Swiper hooks when editing
existing markup. Page grids retain the original 576/768/992/1200/1400px
breakpoints; `gutter-row` applies 24px gutters only to direct children.

The template's page rules have been removed. `public/css/style.css` now holds
only global tokens, fonts, element defaults and retained animation keyframes.
Unreferenced template keyframes have also been removed; keep definitions used
by Tailwind recipes and animation libraries. Bootstrap CSS has been removed;
forms, checkout tables, status messages and the preloader use Tailwind recipes.
The small browser foundation preserves the existing element defaults without
loading a framework reset. Libraries keep their own styles.

Run `npm run lint` and `npm run build` before opening a PR, and compare migrated
sections at desktop and mobile widths.

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
npm run lint       # ESLint checks for application and configuration code
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build
```

## Continuous integration

`.github/workflows/ci.yml` runs `npm ci`, `npm run lint`, and `npm run build`
with Node 22 on pull requests and pushes to branches other than `main`.
ESLint ignores generated builds and public assets.

To prevent merging failed checks, make **Lint and build** a required status
check in the branch protection rule or ruleset for `main` after its first run.
The production deployment workflow remains separate and runs on `main`.

## Routes

`/` `/about` `/services` `/services/:slug`
`/team` `/team-details` `/faq` `/blog` `/blog-details` `/contact`
`/404` (+ catch-all).

Old `/service-details/:slug` URLs redirect to `/services/:slug` on hosting.
The routes for projects, project details, testimonials, pricing, shop,
shop sidebar, product details, checkout and bare `/service-details` are commented
out. Hosting returns 404 for those exact paths; the app's fallback uses `noindex`.
Restore the routes and their matching hosting rules together when re-enabling.

## Automatic deployment to Namecheap

Pushes to GitHub `main` run `.github/workflows/deploy.yml`: install dependencies,
build with Node 22, then push only the built site and `.cpanel.yml` to the
cPanel repository's `master` branch. Keep the local `origin` pointing to GitHub.
No Node.js runtime is needed on the hosting server.

- cPanel repository: `ssh://corlfzmv@corlissfederalgroup.com:21098/home/corlfzmv/repositories/bluepeak-solution`
- Website document root: `/home/corlfzmv/blupeaksolutions.com`
- Verify that document root in cPanel → Domains before enabling deployment.
- `public/.htaccess` is included in the build to support React Router deep links
  and prioritize `index.html` over a hosting placeholder's `index.php`.

### One-time credentials

Enable hosting SSH access. Generate a dedicated key locally (choose another
filename if this one already exists):

```sh
ssh-keygen -t ed25519 -C "bluepeak-github-deploy" -f ~/.ssh/bluepeak_deploy -N ""
```

Import `~/.ssh/bluepeak_deploy.pub` in cPanel → SSH Access → Manage SSH Keys,
then authorize it. Store the contents of the private file
`~/.ssh/bluepeak_deploy` in the GitHub repository's Actions secret
`CPANEL_SSH_KEY`. Never commit the private key.

Collect the server's public host keys:

```sh
ssh-keyscan -p 21098 corlissfederalgroup.com > /tmp/bluepeak-known-hosts
ssh-keygen -lf /tmp/bluepeak-known-hosts
```

Verify those fingerprints with Namecheap support or a trusted hosting-server
source before trusting them. Save the contents of `/tmp/bluepeak-known-hosts`
as the Actions secret `CPANEL_KNOWN_HOSTS`.

Optionally add `VITE_WEB3FORMS_ACCESS_KEY` as an Actions secret to enable contact
forms in the deployed build. Vite embeds this form access key in the public
client bundle; it is not a server-side secret.

### First deployment and verification

Commit these configuration files and push to GitHub `main`. Check GitHub →
Actions → Deploy to Namecheap, then cPanel → Git Version Control → Manage →
Pull or Deploy for the deployment result. A successful Git push does not by
itself prove that cPanel's deployment tasks succeeded. Check the deployed site
and refresh `/about` to verify route handling. Configure/check domain SSL in
cPanel separately so the site can be served over HTTPS.

The copy task writes only into the new domain's document root. It does not
touch `/home/corlfzmv/public_html` or remove existing files. Old generated assets
can accumulate between deployments; publication is a file copy, not an atomic
directory swap. To retry unchanged artifacts after a hosting-side failure, use
cPanel's Deploy HEAD Commit button. The GitHub workflow can also be started
manually on `main` via Run workflow.
