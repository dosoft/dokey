# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Bilingual Windows users who type in English and Russian. They are annoyed that the standard Windows layout toggle requires remembering which language is currently active; they want to press a key and know the result. Secondary audience: Russian-speaking users — the site serves a full RU locale, not just a translated shell.

## Product Purpose

The site is the public face and download entry point for DOKEY, a free MIT-licensed Windows 10/11 tray utility. DOKEY assigns one keyboard layout to each Shift key — Left Shift selects English, Right Shift selects Russian (swappable) — so a clean press always produces a known layout with no cycling and no guessing. Repeating the key is harmless.

Success for the site: a bilingual Windows user understands the idea in seconds, trusts it enough to bypass the SmartScreen warning, downloads the installer, and knows where to report issues or donate.

## Positioning

Direct selection instead of cycling: each Shift key maps to a fixed layout, so the user never needs to know the current state. Single-purpose and lightweight — the author's lineage runs from DOS-era KeyRus through Punto Switcher, which became too heavyweight for this one task; DOKEY is the small dedicated utility that replaced it. No telemetry, no analytics, MIT.

## Operating Context

- Static site (plain HTML/CSS + one small vanilla JS file) hosted on GitHub Pages at `https://dosoft.github.io/dokey/`, with `/ru/` locale, sitemap, robots.txt, hreflang links, and SoftwareApplication JSON-LD.
- `release.js` pulls live version/date/download-count from the GitHub Releases API and renders it into the hero.
- Download flow goes to GitHub Releases (`dokey-win-Setup.exe`, Velopack per-user installer, self-contained .NET). Installer is unsigned — the site must keep setting SmartScreen expectations.
- Source, issues, and releases all live at `github.com/dosoft/dokey`.
- Language switching is a cross-document View Transition (EN ↔ RU): the screen re-tunes and the active lamp ignites, with a `prefers-reduced-motion` fallback. The page also ships a `@media print` layer that drops the CRT for ink-on-white.

## Capabilities and Constraints

- Windows 10/11 only; requires EN (`0409`) and RU (`0419`) layouts installed.
- Pure Shift only: no simultaneous keys or mouse click, and holds longer than ~300 ms (configurable) don't switch. Normal Shift behavior is preserved.
- Tray icon shows the active window's current EN/RU layout; single click toggles, double click opens Settings, right click opens the menu (Settings, Check updates, Install update, Restart elevated, Exit).
- Auto-start runs via an elevated scheduled task; elevated windows need elevated dokey.
- Free; donations via PayPal (`paypal.me/olegda`), USDT (TRC20), GRAM (TON).

## Brand Commitments

All binding, confirmed by the maintainer:

- Name and persona: DOKEY / DOKEY.EXE.
- DOS/terminal identity: the page is a terminal session — a `C:\>` command line, `>` output-line markers, `[ LABEL ]` section headings with `==` rules, and `-` / `[n]` list markers.
- ASCII logo mark (the shaded-block DOKEY — a `░▒▓█` density ramp, light at the top and solid at the baseline) and the pixel/logo artwork (`logo.png`, `logo.webp`).
- Green-on-dark palette and monospace typography.
- First-person nostalgic voice (KeyRus → Punto Switcher → DOKEY story) in both locales.

## Evidence on Hand

- Working, shipped bilingual site: `site/index.html`, `site/ru/index.html`, `site/styles.css`, `site/release.js`.
- Brand assets: `site/logo.png`, `site/logo.webp`, `assets/dokey-logo-readme.png`, `assets/dos-prompt.svg`, and the self-hosted display face `site/fonts/press-start-2p-*.woff2` (SIL OFL 1.1).
- Live release/download numbers via GitHub API (rendered client-side; nothing is fabricated).
- No testimonials, press, benchmarks, or user counts beyond GitHub download totals — do not invent any.

## Product Principles

- One idea, instantly legible: the hero must make "Left Shift = EN, Right Shift = RU" obvious before any scrolling.
- The site behaves like the product: terminal aesthetic is not decoration, it is the DOS lineage the tool comes from.
- Honest friction: state the SmartScreen warning and requirements plainly rather than hiding them.
- Bilingual parity: EN and RU are first-class equals; every change ships in both locales.
- Zero marketing inflation: every claim on the page is a verifiable product fact.
