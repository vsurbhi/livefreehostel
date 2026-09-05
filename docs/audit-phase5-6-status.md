# Phase 5 & 6 audit status — 2026-09-05

Tracks what's fixed and what's still open from the pre-launch audit's Phase 5
(accessibility/security/navigation) and Phase 6 (content truth pass). Finding
IDs (A17, H11, C24, L31, ...) match the original audit document.

## Fixed today

- **A17** contrast — swapped every failing small-text use of `--primary`
  (3.47:1) / `--primary-light` (2.52:1) to `--primary-dark` (5.37:1, passes
  AA) across `global.css`, `Testimonials`, `Destinations`, `Hero`, and the
  `DataProtectionGuidelines` / `HostelPolicy` / `TermsConditions` / `LegalPage`
  policy templates. Left `Stats` numbers alone (large text already passes at
  3:1) and left icon-only color uses alone (non-text UI, 3:1 threshold, e.g.
  `Guidelines .iconBox`) and `Footer`'s `--primary-light` links (7.45:1 on the
  footer's dark background — already fine).
- **A18** focus-visible — added a global `:focus-visible` ring in
  `global.css` for links, buttons, inputs, selects, textareas.
- **A19** tap targets — `Footer` social icons raised from 38×38px to
  44×44px. *(Not a full sweep — see "Still open" below.)*
- **A20** booking field labels — Hero's location/check-in/check-out
  labels now use `htmlFor`/`id` pairs so screen readers announce them
  correctly (Workation's were already correct).
- **A21** WhatsApp button — added `aria-label="Chat with us on WhatsApp"`.
- **A23** heading hierarchy — Footer section headings changed from `<h4>`
  to `<h3>` (page content uses `<h2>`, so this no longer skips a level).
- **H15** security headers — added `customHeaders` to `amplify.yml`:
  HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy,
  Permissions-Policy (enforced), and CSP (shipped as
  `Content-Security-Policy-Report-Only` — see "Needs a follow-up action"
  below).
- **C29** spelling — standardized "Lakshman Jhula" → "Laxman Jhula" in
  `siteData.js` and `DestinationPage.jsx` (matches the SEO titles and the
  majority of existing copy).
- **L36** hidden address — property pages now display the same full
  address (street, city, state, pincode) that's already in the page's
  JSON-LD schema, instead of a truncated version.

Already fixed before today (found during this review, not touched):
H09 (dead footer links), B01 (404 routing), the old-WordPress 301 redirect
map (165 entries in `amplify.yml`), C28 (both booking widgets now share one
data source), H12 (awards section has 7 real entries, not 2), C26 (down to
2 real typefaces, no `@font-face` bloat).

## Needs your input (content/business decisions — not touched)

- **C24** brand spelling — "LiveFree Hostel", "LiveFree Hostels", and "Live
  Free Hostel" are all still live across ~57 places in the codebase. Pick
  one canonical spelling (the domain, schema, and `og:site_name` already say
  "LiveFree Hostels") and it can be applied everywhere in one pass.
- **H11** testimonials — "Sarah Johnson", "Rajesh Kumar", "Mia Schulz" are
  still placeholder-style reviews with no source. Needs either three real,
  attributable reviews (Hostelworld/Google, with the reviewer's actual
  handle and date) or the section removed. Flagged in the original audit as
  a fake-review exposure under India's consumer-protection rules if left
  as-is.
- **C30** unsubstantiated stats — 200,000+ guests, 10+ years, 100+
  nationalities, 8.5+ average rating (in `siteData.js` `STATS`), plus a 9.4
  Agoda badge and 9.2 Hostelworld badge shown elsewhere. Four different
  rating claims in one scroll. Needs real sourced numbers or removal.
- **L31** privacy policy — `LegalPage.jsx` still has zero mentions of
  cookies, India's DPDP Act 2023, or GDPR. Needs a legal pass, not just a
  copy edit.
- **L32** consent mechanism — no consent banner exists anywhere. Doesn't
  block anything, but becomes necessary the moment analytics (GA4/GTM,
  still not installed — see B03 in the original audit) or the CSP below get
  turned on, since the site is already loading Google Fonts and Google Maps.

## Explicitly deferred (flagged, not touched by request)

- **C25** two brand oranges — `--primary` (#e85d3a) and `--nav-accent`
  (#cf3714) are both still defined and used (Navbar uses `--nav-accent`
  everywhere else uses `--primary`). Note: `--nav-accent` alone actually
  passes AA contrast at 4.99:1, unlike `--primary` — the token duplication is
  a consistency issue, not a contrast one.
- **C27** breakpoints — now **33** distinct `max-width` breakpoints across
  the CSS (audit found 17 — this has grown, not shrunk). Left alone since
  consolidating breakpoints risks visual regressions at specific device
  widths that would need a full QA pass per component.

## Needs a follow-up action (not a content decision, but not "done" either)

- **CSP enforcement** — the new Content-Security-Policy header in
  `amplify.yml` ships in `-Report-Only` mode on purpose. Before switching it
  to enforced (`Content-Security-Policy`, dropping `-Report-Only` from the
  key), open the browser console on the homepage, a property page (has the
  Google Maps iframe), and a blog post, and confirm there are no CSP
  violation warnings. If GA4/GTM gets added later, the CSP's `script-src`
  and `connect-src` will need `https://www.googletagmanager.com` /
  `https://www.google-analytics.com` added, or it'll silently block
  analytics.
- **H16** staging build indexable — Amplify console setting (branch
  password protection, or `X-Robots-Tag: noindex` on non-production hosts).
  Can't be verified or fixed from the codebase.
- **L35** blog slug truncation — still present. Slugs are hard-capped at 60
  characters and several cut off mid-word (e.g.
  `.../white-water-ra`, `.../rishik`). This is fixable, but it's riskier
  than the items above: the 165-entry 301 redirect map in `amplify.yml`
  (mapping old WordPress URLs to new ones) may already point at these exact
  truncated slugs. Renaming them needs a cross-check against that redirect
  map first, plus new 301s from the old truncated slugs to the corrected
  ones, so shared links (search results, social shares) don't break.
- **A19** tap targets — only the Footer social icons were fixed today. The
  audit found 37 of 70 interactive elements site-wide under 44×44px; a full
  sweep needs a real browser/device pass, not just a grep.
