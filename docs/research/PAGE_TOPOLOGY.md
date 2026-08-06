# incenook.com Page Topology (Reconnaissance 2026-08-06)

> Source: https://incenook.com (Shopify, Dawn-like theme)
> Method: clone-website skill Phase 1 — live DOM extraction via browser automation

## Design Tokens (exact, from getComputedStyle)

| Token | Value |
|---|---|
| Body font | Inter, sans-serif |
| Heading font | DM Serif Display, serif (h1: 56px, weight 400) |
| Body bg | `rgb(247, 236, 212)` = #F7ECD4 (warm cream) |
| Body text | `rgb(74, 64, 55)` = #4A4037 (dark brown) |
| Heading text | `rgb(59, 52, 46)` = #3B342E |
| Primary / links | `rgb(107, 70, 26)` = #6B461A (amber brown) |
| Buttons | primary bg #6B461A, text white |
| Border | `rgb(226, 210, 184)` = #E2D2B8 |
| Line height | 25.6px (1.6) |
| Header | sticky, transparent bg, height 70px |
| Announcement | "Free shipping on $60+ (NA/AU/UK/DE/FR)" |

## Page Sections (top to bottom)

1. **Announcement bar** — thin strip, small text, top of page
2. **Header** — sticky, logo (h1 "Incenook" serif), nav: Shop/Heros/DIY Kit/Sample Set/Molds/About, right: region/currency selector + search + account + cart icons
3. **Recipe Library promo** — banner w/ image, "Recipe Library", subtext, "Get the recipes" CTA (→Patreon)
4. **Product cards** (2) — Discovery Sample Set ($24.99 sale/$29.99) + DIY Starter Kit ($29.99/$39.99); image carousel w/ prev/next buttons, price with sale styling
5. **Brand pillars** (3) — Botanicals Only / Hand Rolled / Ingredient Honest, icon + title + desc
6. **Instagram feed** — grid of IG posts (instafeed)
7. **FAQ accordion** (12 items) — details/summary, questions: shipping, lighting, holder/ash, pet safety, hidden ingredients, making process, etc.
8. **Email signup** — "Email" textbox + "Sign up" button
9. **Footer** — columns: Shop (Shop All/Incense Sticks/DIY Kit/Sample Set/Molds & Tools), Learn (Recipes/About/FAQ), Support (Contact/Search/Shipping/Refund/Terms/Privacy); socials (Instagram/YouTube/TikTok/Patreon); "Powered by Shopify"

## Interactions

- Header sticky, transparent (no scroll state change detected at load)
- Product card image carousel: prev/next buttons, auto image
- FAQ: native `<details>` accordion
- Cart/Account/Search: Shopify drawer (not cloned — out of scope)

## Clone Mapping → naturalincense.de (Astro)

| Incenook section | Astro equivalent | Status |
|---|---|---|
| Announcement bar | `.announcement` | ✅ built (different copy) |
| Header (sticky, serif logo) | `Header.astro` | ✅ built |
| Recipe promo banner | (hero serves this role) | 🔄 hero built |
| Product cards | `.latest__grid` post-cards | ✅ built |
| Brand pillars ×3 | `.pillars` | ✅ built |
| Instagram feed | — | ❌ not applicable (no IG) |
| FAQ accordion | `.faq` (4 items) | 🔄 **should expand to 6-8** |
| Email signup | — | ❌ **missing — should add** |
| Footer 3-col | `Footer.astro` | ✅ built |
