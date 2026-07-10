# Urban Epidemiology Lab — Neomorphism Website

A polished static website redesign packaged as an **RStudio project**. It uses plain HTML, CSS, and JavaScript: no server, R package, or build step is required.

## Open locally in RStudio
1. Unzip the folder.
2. Open `UEL-Neomorphism.Rproj` in RStudio.
3. Run `run_site.R`, or open `index.html` in a browser.

> The project is intentionally static. This makes it fast to preview and easy to host later on NYU WordPress, GitHub Pages, Netlify, or another approved platform.

## Edit content
- Page layout: `*.html` files in the project root
- Current people, publications, presentations, press, and alumni: `assets/js/site-data.js`
- Visual system and responsive layout: `assets/css/uel.css`
- Interactions, filters, modal, navigation, and theme setting: `assets/js/site.js`

## Important before publishing
The text and records were reorganized from the public UEL site on **July 3, 2026**. Confirm names, affiliations, roles, active projects, publication status, media links, and joining requirements with the lab director before deployment. The design is a concept and is not an official NYU website or brand template.


### Theme artwork note
The hero illustration uses separate dark and light SVG assets. The light version is automatically swapped through CSS so the orbit rings and research-grid lines retain contrast against the pale background.

## Current project content

The homepage and `research.html` were updated to show the three user-confirmed current projects: cannabis package data cleaning, ArcGIS mapping of hemp stores across NYC, and cannabis/hemp store field-survey data collection.

## July 2026 visual update

- The navigation and footer now use a theme-aware animated NYU urban-data mark derived from the supplied logo. Its color transitions automatically with the light/dark toggle.
- Every interior page now has its own animated, research-themed hero composition so the right-hand hero area is no longer empty.
- People profiles now open in a wide, scrollable reading sheet designed for long biographies.

### Replacing a member biography

Open `assets/js/site-data.js`, find the person by name, and replace the value of `bio`.

For multiple paragraphs, keep it as one text string and add a blank line between paragraphs. Example:

```js
"bio": "First paragraph of the approved biography.\n\nSecond paragraph of the approved biography."
```

The profile sheet will automatically preserve the paragraph breaks. Do not add participant data, private contact information, or unpublished project details to this public website.


## Latest logo update
The homepage uses a source-derived Urban Epidemiology Lab wordmark, animated with CSS and automatically recolored for dark and light modes. The earlier leaf illustration is no longer used on the homepage.

## Logo rendering fix
This version replaces CSS-mask branding with transparent PNG logo layers. It fixes the deployed issue where the logo could render as only a glow/blur instead of the official UEL mark. The logo automatically switches between a light-on-dark version and NYU purple-on-light version with the existing theme toggle.

## Interior visual correction
The NYU/UEL mark is now shown only in the navigation, footer, and homepage wordmark. Interior page hero panels use original abstract motifs (place/equity/evidence, field-clean-map, team network, research record, public communication, learning path, alumni trajectories) so the logo no longer overlays those illustrations.


## Latest cleanup

This version keeps the animated brand treatment only on the homepage. Interior pages use text-first hero sections and relevant content blocks instead of decorative animated panels. The homepage hero artwork now uses only the official square UEL/NYU mark, not the full Urban Epidemiology Lab wordmark.

## Latest visual update
Homepage branding has been simplified: the home panel now shows a static official UEL/NYU mark with no bubbles, signal dots, sweeps, or logo animation. Header and footer logos are also static.


## Latest visual adjustment
The homepage logo panel has been balanced: the official UEL/NYU mark is smaller, static, and centered in a restrained neomorphic card. Header/footer logos remain static, and interior pages stay content-focused.


## Latest update

- Added a Home tab to the main navigation.
- Replaced the oversized homepage logo frame with a compact static NYU/UEL seal.
- Kept all logos static with no automatic animation.
