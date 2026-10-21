# Design QA — STEFE Strasbourg

## Comparison setup

- Source visual truth: `C:\Users\smart\.codex\generated_images\01a1532d-0494-7c01-aa2a-2ec3336176c2\exec-c696c802-f3fa-4d6d-8e68-c42e87c9d388.png`
- Browser-rendered implementation: `F:\stefe\docs\design-audit\17-hero-composition-refined.png`
- Side-by-side evidence: `F:\stefe\docs\design-audit\14-source-implementation-comparison.png`
- Focused mobile evidence: `F:\stefe\docs\design-audit\11-mobile-hero-passed.png` and `F:\stefe\docs\design-audit\13-mobile-board-final.png`
- Project-detail evidence: `F:\stefe\docs\design-audit\09-project-modal-final.png`
- Desktop viewport: 1440 × 1024 CSS px, device scale factor 1. Browser screenshot content: 1425 × 1013 px.
- Source image: 1487 × 1058 px. For the side-by-side comparison, source and implementation were normalized to matching 768 × 546 regions.
- Mobile viewport: 390 × 844 CSS px, device scale factor 1. Browser screenshot content: 375 × 812 px.
- State: default light theme, hero plus first departure rows visible.

## Findings

No actionable P0, P1, or P2 mismatches remain.

- Fonts and typography: Anton reproduces the condensed poster title and mechanical-board character style; the system sans-serif body copy keeps the French text readable. Display hierarchy, tracking, wrapping, and optical weight follow the source.
- Spacing and layout: the rounded city frame, skyline/title overlap, station sign, board columns, and first three visible destinations match the source hierarchy. The implementation uses a wider board to support nine real projects; this is an acceptable functional extension.
- Colors and tokens: sandstone pink, coral, cream, plum, midnight navy, amber, and green status colors map closely to the source with adequate foreground contrast.
- Image quality: the generated Strasbourg background is sharp at desktop size, contains the intended Cathedral/Petite France/Ponts Couverts landmarks, and is used as a real raster asset. No CSS or handcrafted SVG illustration substitutes were introduced.
- Copy and content: the STEFE positioning and existing project names remain intact. Railway language is limited to navigation and status labels.
- Icons: existing Lucide icons are consistent in weight, aligned, and used only for functional controls.
- Accessibility: rows are semantic buttons with full accessible labels; focus indicators are visible; the dialog receives focus, traps Tab, closes on Escape, and restores focus; reduced-motion preferences disable transitions; the decorative city image has empty alternative text.
- Responsive behavior: mobile hero, board columns, long project names, tap targets, and fixed navigation were checked at 390 × 844. No overlap or horizontal overflow remains.

## Comparison history

1. Desktop pass v1 — `05-implementation-desktop-v1.png`
   - P1: hero and project board were separate full-screen sections, unlike the integrated source composition.
   - Fix: reduced the hero height, pulled the station sign upward, and placed the first board rows inside the opening viewport.
2. Desktop pass v2 — `07-implementation-desktop-v2.png`
   - P2: the additional “Prochains départs” titlebar consumed too much vertical space and reduced visible rows.
   - Fix: removed the redundant visual titlebar and tightened the hero/board rhythm.
3. Mobile pass v1 — `10-mobile-hero-final.png` and `12-mobile-board-passed.png`
   - P2: city art left an uncovered edge; the anchor landed behind the fixed header; BAUHAUS crowded the service column.
   - Fix: corrected the image inset, added anchor scroll margin, tightened split-flap characters, and adjusted mobile grid tracks.
4. Final evidence — `08-implementation-desktop-final.png`, `11-mobile-hero-passed.png`, `13-mobile-board-final.png`
   - Earlier P1/P2 findings are resolved. Side-by-side evidence is recorded in `14-source-implementation-comparison.png`.
5. Readability refinement — `16-hero-contrast-passed.png`
   - Increased the subtitle and introduction contrast with darker translucent surfaces, stronger type weight, and clearer text shadows.
6. Composition refinement — `17-hero-composition-refined.png` and `18-mobile-composition-refined.png`
   - Broke up the centered stack by turning the subtitle into an offset label on the title and the introduction into a lateral fading caption integrated with the river.

## Primary interactions tested

- Project anchor navigation and smooth scroll.
- Split-flap name reveal.
- Opening a project row.
- Escape-to-close and focus restoration.
- Theme control remains reachable.
- Desktop and mobile reflow.
- Browser console checked: no warnings or errors.
- Ambient skyline pass: the window effect reuses filtered copies of the skyline itself, masked over the lit facade clusters. It therefore follows the source pixels through every crop, responsive size and parallax movement instead of relying on manually positioned dots. Three stronger, offset bloom cycles cover the left bank, central buildings and right bank, remain behind the hero content, and become steady under `prefers-reduced-motion`.
- Monthly ambience archive: the local calendar selects the current month on each visit. The navigation control exposes all 12 atmospheres, labels the real month, supports a one-click return to “Aujourd’hui”, and changes seasonal color grading plus winter snow, spring petals, summer light motes, or autumn leaves. Desktop and 390 × 844 mobile layouts were checked without horizontal overflow.
- Bird timing: the first two birds now enter within the first second; the remaining three arrive over the following five seconds instead of waiting up to 24 seconds.
- Late-year scenes: October adds three slow fog banks and a distant CSS witch crossing behind the hero title; November replaces leaves with diagonal rain, desaturates the city, and uses a low-intensity 14-second lightning cycle; December combines snow, 28 animated garland bulbs, stronger warm window light, and market-level glow across the quays. All motion is removed or made static under `prefers-reduced-motion`.
- Monthly hero artwork: October, November and December now load dedicated raster skyline edits rather than relying only on color filters. October has copper foliage and river mist; November has storm clouds, wet stone and rain; December follows official Strasbourg Christmas cues with illuminated half-timbered facades, decorated bridges, small market chalets, snow and warm reflections in the Ill. Image swaps crossfade over 850 ms. The witch broom bristles were corrected to trail behind the direction of travel.
- Full-year artwork: January through September now also have dedicated 1920 × 1080 skyline rasters, crossfading through the same single image component: frost and snow (January), thawing light and swans (February), a stork passage (March), fine post-shower drizzle (April), blossoms and a bee (May), a slow river boat (June), restrained fireflies/firework (July), heat haze and a canoe (August), then migration and early-autumn mist (September). These scenes reuse the existing seasonal-particle layer and add only one lightweight CSS cue per month; no animation library or parallel state system was introduced.

## Follow-up polish

- P3: a future illustration pass could add the source mockup’s station canopy, but it is intentionally omitted to keep the real nine-row board legible and the generated Strasbourg landmark art unobstructed.

final result: passed
