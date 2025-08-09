# Themes

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/themes.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/themes.min.css";
```

## Usage

To use a theme, add the theme class to your smartart element. For example:

```html
<div class="sm-chevron sm-theme-office">...</div>
```

Available themes:

- `sm-theme-office`: Office (corporate, pro)
- `sm-theme-okabe-ito`: Okabe–Ito (colorblind-safe, pro)
- `sm-theme-material`: Material (Google-ish, vibrant but balanced)
- `sm-theme-tableau`: Tableau Classic (corporate, legible on slides)
- `sm-theme-solarized`: Solarized Accents (calm, consistent luminance)
- `sm-theme-ocean`: Ocean (cool, modern dashboards)
- `sm-theme-forest`: Forest/Earth (grounded, exec decks)
- `sm-theme-pastel`: Pastel (soft, low-ink handouts)
- `sm-theme-mono`: Monochrome (sleek, focus on structure)
- `sm-theme-neon`: High-Contrast Neon (for dark UIs & posters)

[![Themes](docs/themes.webp)](docs/themes.html ":include height=600px")

Each theme defines 6 series of 4 variables:

- `--bg-1`, `bg-2`, ... `bg-6`: Primary background colors.
- `--fg-1`, `fg-2`, ... `fg-6`: Primary text colors
- `--bg-alt-1`, `bg-alt-2`, ... `bg-alt-6`: Alternate background colors
- `--fg-alt-1`, `fg-alt-2`, ... `fg-alt-6`: Alternate text colors
