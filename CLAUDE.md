# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for Triple L Woodworks, a custom cabinetry business. Plain HTML/CSS/JS — no build step, no package manager, no framework, no tests. Four pages: `index.html` (projects/home), `about.html`, `faq.html`, `contact.html`, sharing one stylesheet (`styles.css`) and one script (`theme.js`).

## Commands

There is no build, lint, or test tooling. To preview changes, open the HTML files directly in a browser (`open index.html` on macOS) or serve the directory with any static file server. There is nothing to compile or install.

## Architecture

**Shared-markup pattern, not templating.** Each HTML page repeats the same header/nav/footer markup verbatim (including the logo `<img>` tag and theme-toggle button). There is no includes system — when changing the header, nav, footer, or site-wide markup, edit all four HTML files identically rather than editing one and expecting it to propagate.

**Single stylesheet, append-only sections.** `styles.css` is one file organized as a long minified base rule block followed by clearly separated, commented, human-readable sections appended over time (about-page layout, motion/animation, logo handling, theme colors, FAQ disclosures). When adding styles, follow this pattern: append a new commented section rather than interleaving rules into the minified base block.

**Theming is CSS-variable + data-attribute driven.** Colors are defined as custom properties on `:root`, with a dark variant under `:root[data-theme="dark"]` and a `prefers-color-scheme` media query fallback for when JS is disabled. `theme.js` is a small IIFE that runs before paint: it reads `localStorage['triple-l-theme']`, sets `root.dataset.theme`, and wires the toggle button's click handler. It intentionally fails open if `localStorage` is blocked (falls back to the OS preference) and syncs theme choice across tabs/pages via the `storage` event. Any new color used in CSS must be added as a variable in both the light (`:root`) and dark (`:root[data-theme="dark"]`) blocks, plus the `@media (prefers-color-scheme: dark)` no-JS fallback, to stay consistent.

**Logo is one PNG, styled two ways.** `assets/triple-l-logo.png` is the only real image asset. In light mode it's blended onto the page background via `mix-blend-mode: multiply`; in dark mode it's inverted via `filter: invert(1)` plus `mix-blend-mode: screen`. There is no separate dark-mode logo file — don't add one without a reason; the filter approach is deliberate per the README.

**Motion is CSS-only and respects `prefers-reduced-motion`.** Page-to-page fades use the `@view-transition` CSS API (supported browsers only, degrades to normal navigation elsewhere). Entrance animations, hover lifts, and button press effects are all plain CSS keyframes/transitions gated behind `@media (hover: hover) and (pointer: fine)` and disabled wholesale under `@media (prefers-reduced-motion: reduce)`. No JS animation libraries are used or should be introduced.

**Content is intentionally placeholder throughout.** Project photos (`index.html`), the about-me story (`about.html`), and contact details (`contact.html`) are all marked with placeholder text and HTML comments showing the exact markup to swap in (e.g. `<img class="project-photo" src="assets/...">`, `<a href="mailto:...">`). When filling in real content, follow the commented example markup already in place rather than inventing new structure, and add new project photos as `<article class="project">` copies per the pattern in `index.html`.

## Deployment

Designed for GitHub Pages, deployed from the `main` branch root (see `README.md` for the full publish checklist). HTML files must stay at the repo top level, not nested in a subfolder, for relative links and GitHub Pages to work.
