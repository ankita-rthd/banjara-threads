# Tasks — Banjara Art Showcase (from `prd-banjara-art-showcase.md`)

## Relevant Files

- `index.html` — Landing page: hero, intro, gallery, article cards, artisans teaser, footer.
- `art.html` — "Read More" long-form article with anchored sections for the 14 stitches, motifs, symbolism, etc.
- `artisans.html` — Mockup grid of 6 fictional artisan profiles with a fictional-disclosure banner.
- `more-like-them.html` — Coming-soon page teasing related Indian textile traditions.
- `styles.css` — Shared design system (tokens, typography, motifs, nav, hero, cards, responsive grid).
- `script.js` — Shared behavior (sticky nav active state, mobile hamburger, smooth scroll, IntersectionObserver reveals).
- `assets/placeholders/hero-banjara.svg` — Hand-authored Banjara dancer hero illustration.
- `assets/placeholders/gallery-*.svg` — Nine gallery SVGs (mirror, chain, nakra, cowry, ghungroo, rangoli, dress, geometry, stitch-sampler).
- `assets/placeholders/artisan-[1-6].svg` — Six artisan silhouette portraits with varied accent palettes.
- `assets/placeholders/page-hero-bg.svg` — Repeating diamond pattern behind inner-page headers.
- `tasks/prd-banjara-art-showcase.md` — Source PRD.

### Notes

- No unit tests; this is a static frontend project. Verification is manual: open each HTML in a browser and walk through the checklist in the PRD.
- Directory is not a git repo; commits skipped per user approval. Running under auto-mode — sub-tasks were executed end-to-end rather than paused per sub-task.

## Tasks

- [x] 1.0 Scaffold project structure + author PRD and task list
  - [x] 1.1 Create `assets/placeholders/` and `tasks/` directories
  - [x] 1.2 Write `tasks/prd-banjara-art-showcase.md`
  - [x] 1.3 Write `tasks/tasks-prd-banjara-art-showcase.md` (this file)
- [x] 2.0 Build shared design system in `styles.css`
  - [x] 2.1 Define CSS tokens (colors, spacing scale, radii, shadows, type scale)
  - [x] 2.2 Import Google Fonts (Fraunces, Cormorant Garamond, Tiro Devanagari Hindi) and apply base typography
  - [x] 2.3 Implement shared layout primitives (container, grid, section)
  - [x] 2.4 Style sticky nav + mobile hamburger
  - [x] 2.5 Implement motif components (stitch dividers, shisha circles, nakra diamonds)
  - [x] 2.6 Style hero, gallery cards, article cards, artisan cards, coming-soon panel
  - [x] 2.7 Add responsive breakpoints and grain overlay
- [x] 3.0 Write shared `script.js`
  - [x] 3.1 Sticky nav scroll-state toggle
  - [x] 3.2 Mobile hamburger toggle (open/close + click-outside + Escape)
  - [x] 3.3 IntersectionObserver reveal-on-scroll for `.reveal` elements
- [x] 4.0 Create SVG placeholder assets
  - [x] 4.1 Hero: Banjara dancer figure with ghagra, odhni, mirror accents
  - [x] 4.2 Nine gallery SVGs (mirror, chain, nakra, cowry, ghungroo, rangoli, dress, geometry, stitches sampler)
  - [x] 4.3 Six artisan silhouette portraits with varied accent palettes
  - [x] 4.4 Page-hero background SVG (diamond-pattern)
- [x] 5.0 Build `index.html` (landing page)
  - [x] 5.1 Head (meta, fonts, styles), sticky nav
  - [x] 5.2 Hero section with SVG + title + tagline + scroll cue
  - [x] 5.3 Intro section with fact-strip sidebar + blockquote
  - [x] 5.4 Gallery grid with 8 tiles (1 wide, 1 tall)
  - [x] 5.5 Article cards section (4 cards → deep links into art.html)
  - [x] 5.6 Artisans teaser banner + CTA
  - [x] 5.7 Footer with references and byline
- [x] 6.0 Build `art.html` (full article)
  - [x] 6.1 Head + nav + page hero with TOC
  - [x] 6.2 Section: Origin & History (`#origin`)
  - [x] 6.3 Section: The Banjara People (`#community`)
  - [x] 6.4 Section: Materials (`#materials`)
  - [x] 6.5 Section: The 14 Stitches grid (`#stitches`)
  - [x] 6.6 Section: Motifs & Colors w/ swatch strip (`#motifs`)
  - [x] 6.7 Section: Cultural Significance (`#symbolism`)
  - [x] 6.8 Section: Banjara Today (`#today`)
  - [x] 6.9 Section: References (`#references`)
- [x] 7.0 Build `artisans.html` (mockup profiles)
  - [x] 7.1 Nav + page hero + fictional-disclosure banner
  - [x] 7.2 Six artisan cards (name, village, specialty, bio, CTA to art.html section)
- [x] 8.0 Build `more-like-them.html` (coming soon)
  - [x] 8.1 Nav + coming-soon panel + related-crafts teaser list + back link
- [x] 9.0 Verification
  - [x] 9.1 Opened `index.html` in browser via `open` — renders
  - [x] 9.2 Deep links verified by cross-checking anchors in `art.html` match `href` values on index cards
  - [x] 9.3 Responsive rules defined at 480/768/900/1024 in `styles.css`
  - [x] 9.4 Semantic landmarks + focus-visible + skip-link present for keyboard/a11y
