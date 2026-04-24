# PRD: Banjara Art Showcase — Multi-Page Static Website

## 1. Introduction / Overview

A static multi-page website showcasing **Banjara embroidery art** — a traditional craft of the Banjara (Lamani / Lambani) semi-nomadic community of Rajasthan, India. The site is a school/college project submission for **Ankita**, intended to be visually striking, culturally respectful, and informative.

The project solves two problems:
1. **Educational**: Consolidate Ankita's research on Banjara art into a polished, well-organized web artifact.
2. **Presentation**: Demonstrate web-design capability for the project grade with a distinctive aesthetic, not a generic template.

**Goal**: A four-page static website that opens locally in any browser, requires zero build steps, and can be extended by Ankita later (swapping placeholder images for her own photos, adding Hindi text, etc.).

## 2. Goals

- G1. Present Banjara art history, materials, stitches, motifs, symbolism, and modern status across a landing page and a dedicated article page.
- G2. Provide a mockup "Know Your Artisans" page demonstrating how real artisan profiles would be structured.
- G3. Provide a "More Like Them" coming-soon page teasing related Indian textile traditions.
- G4. Implement a distinctive editorial-magazine aesthetic inspired by Banjara textiles, not a generic AI-generated layout.
- G5. Ensure the site is responsive (desktop, tablet, mobile) and opens by double-clicking `index.html` with no server required.

## 3. User Stories

- **As Ankita**, I want to open `index.html` in a browser and have a visually impressive landing page I can show my teacher, so I can demonstrate both the subject knowledge and the web-design skill.
- **As Ankita**, I want to click "Read More" on the landing page and be taken to a detailed article about Banjara art, so the detail is there for anyone who wants to go deeper.
- **As Ankita**, I want a mockup "Know Your Artisans" page showing how real artisan profiles would look, so I can demonstrate the idea even before I have real interviews.
- **As Ankita**, I want a "More Like Them" page that says "coming soon" for related crafts, so the site feels like an evolving project, not a finished snapshot.
- **As a project reviewer**, I want to quickly understand what Banjara art is, see visual examples, and trust that the sources are credited.

## 4. Functional Requirements

**Site structure**

1. The site must consist of **four HTML pages**: `index.html`, `art.html`, `artisans.html`, `more-like-them.html`.
2. All four pages must share a single stylesheet (`styles.css`) and a single JavaScript file (`script.js`).
3. All four pages must render a **sticky top navigation bar** with links to: Home, The Art, Artisans, More Like Them.
4. The current page's nav link must be visually distinguished (active-state styling).
5. On screens narrower than 768px, the nav must collapse into a **hamburger menu** that opens a panel of the same links.

**Landing page (`index.html`)**

6. The landing page must open with a **full-viewport hero** section containing: a hand-crafted SVG illustration of a Banjara dancer/artisan, a large title, a tagline, and a scroll indicator.
7. Below the hero, the landing page must include an **Intro** section ("What is Banjara Art?") with 2–3 paragraphs.
8. The landing page must include a **Gallery** section displaying at least 6 visual tiles (SVG placeholders) each with a title caption (e.g., "Mirror Work", "Chain Stitch").
9. The landing page must include an **Articles** section with at least 3 article cards, each having a thumbnail, title, excerpt, and "Read More →" link that deep-links to a specific anchor on `art.html`.
10. The landing page must include an **Artisans teaser** banner with a CTA button linking to `artisans.html`.
11. The landing page must include a **Footer** crediting the three source URLs and listing the byline.

**Art page (`art.html`)**

12. The art page must contain sections (each with an anchor ID): Origin & History (`#origin`), The Banjara People (`#community`), Materials (`#materials`), The 14 Stitches (`#stitches`), Motifs & Colors (`#motifs`), Cultural Significance (`#symbolism`), Banjara Today (`#today`), References (`#references`).
13. The "14 Stitches" section must display all fourteen traditional stitches (Kilan, Vele, Bakkya, Maki, Suryakanti Maki, Kans, Doranaaki, Kaudi, Rela, Gadri, Bhuriya, Pote, Jollya, Nakra) in a grid with a one-line description for each.
14. The "Motifs & Colors" section must include a visible color-swatch strip showing the traditional Banjara palette.
15. The "References" section must link to the three source URLs (Pernia's Pop-Up Shop, Maiwa, SlideShare).

**Artisans page (`artisans.html`)**

16. The artisans page must display a **notice banner** stating the profiles are illustrative/fictional, not real people.
17. The artisans page must display a grid of **exactly 6 fictional artisan cards** with: portrait placeholder, name, village + state, craft specialty, 2-line bio, and a "View Their Craft →" button linking to a matching section in `art.html`.

**More Like Them page (`more-like-them.html`)**

18. The page must display a centered "Coming Soon" panel.
19. The page must list at least 4 related crafts as a teaser (e.g., Kutch mirror work, Phulkari, Toda, Sujani) with one-line descriptions.
20. The page must include a "← Back to Home" button.

**Technical / behavior**

21. The site must work by double-clicking `index.html` (file:// protocol) — no web server required.
22. The site must be responsive at **1440px, 1024px, 768px, and 375px** widths without horizontal scrolling.
23. All images must have `alt` attributes; all interactive elements must be keyboard-focusable with visible focus rings.
24. Anchor links within the site must scroll smoothly (CSS `scroll-behavior: smooth`).
25. Scroll-triggered reveal animations must use IntersectionObserver (no library dependency).

## 5. Non-Goals (Out of Scope)

- Backend, database, user accounts, auth, comments, contact-form submission.
- Real CMS / admin panel for content editing.
- Real artisan profiles with verified names and interview data (explicit mockups only).
- Deployment to a live host (Netlify, GitHub Pages, etc.). Can be added separately.
- Internationalization beyond optional Hindi accent text.
- Analytics, SEO meta-bundles beyond a single `<meta description>`, sitemaps.
- Lightbox / image-zoom gallery interactions.
- Dark-mode/light-mode toggle (the design is intentionally dark-themed).

## 6. Design Considerations

**Aesthetic direction**: Indian textile editorial magazine — warm indigo paper background, asymmetric editorial grid, hand-drawn SVG illustrations, stitch-line dividers, shisha mirror circles as decorative punctuation, paper-grain texture overlay. *Not* a corporate template, *not* a neon gradient.

**Palette**:
- `--ink-indigo: #1e2d4a` (primary background)
- `--paper: #f4ead5` (warm cream)
- `--terracotta: #c84b31` (earth red)
- `--saffron: #e8a33d` (warm gold)
- `--emerald: #1f6e5d` (muted green)
- `--ochre: #8b5a2b` (brown accent)
- `--mirror: #fff8e7` (cream highlight)

**Typography** (Google Fonts):
- Display: **Fraunces** (variable, 700–900, soft opticals) — organic serif with warmth
- Body: **Cormorant Garamond** (400/500/600) — editorial serif
- Devanagari accent: **Tiro Devanagari Hindi** (optional)

**Motifs**:
- Running-stitch SVG dividers between sections
- Shisha circles (concentric rings + petal accents)
- Nakra diamond patterns as dingbats
- Subtle grain overlay via CSS

## 7. Technical Considerations

- **Stack**: Pure HTML5 + CSS3 + vanilla JavaScript. No npm, no build step, no framework.
- **Assets**: All imagery is SVG hand-authored. No stock photography, no copyrighted images.
- **Fonts**: Google Fonts CDN link in `<head>`.
- **Browser support**: Evergreen browsers (Chrome, Safari, Firefox, Edge). No IE.
- **File size**: Each HTML file < 60KB inline + shared `styles.css` < 40KB + SVG assets < 100KB total.
- **Accessibility**: Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), alt text on images, keyboard focus rings, WCAG AA contrast ratios.

## 8. Success Metrics

- **SM1**: All 4 pages render with no console errors when opened from `file://`.
- **SM2**: Project reviewer describes the site as visually distinctive and culturally coherent (subjective but aimed for).
- **SM3**: Every nav link and every "Read More" link on the landing page lands on the correct page/section.
- **SM4**: Site is usable on a 375px-wide mobile viewport without horizontal scroll.
- **SM5**: Ankita can swap placeholder SVGs for her own photos by editing `<img src>` or `<figure>` blocks without touching CSS/JS.

## 9. Open Questions

- Should Hindi/Devanagari accent text be included out-of-the-box, or wait until Ankita provides translations? (Currently: English only, font is loaded but unused — easy to add later.)
- Will Ankita be hosting this publicly (Netlify/GitHub Pages), or submitting as a zip? (Currently: built for local file:// submission; host wiring can be added on request.)
- Are the three given URLs the final reference list, or will Ankita add her textbook/additional sources? (Currently: only the three are cited; easy to add more.)
