# Pyramid

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/pyramid.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/pyramid.min.css";
```

## Usage

### Basic Example

Create a pyramid hierarchy with semantic HTML:

```html
<ul class="smartart-pyramid">
  <li>
    <div>Leadership</div>
  </li>
  <li>
    <div>Management</div>
  </li>
  <li>
    <div>Team Leads</div>
  </li>
  <li>
    <div>Developers</div>
  </li>
  <li>
    <div>Support</div>
  </li>
</ul>
```

[![Basic Pyramid Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-basic.webp)](docs/pyramid-basic.html ":include height=400px")

[See the Basic example](docs/pyramid-basic.html ":ignore")

### Professional Theme

Use the built-in professional theme for corporate presentations:

```html
<ul class="smartart-pyramid professional-theme">
  <li><div>Executive Leadership</div></li>
  <li><div>Senior Management</div></li>
  <li><div>Department Heads</div></li>
  <li><div>Team Members</div></li>
  <li><div>Support Staff</div></li>
</ul>
```

[![Professional Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-professional.webp)](docs/pyramid-professional.html ":include height=400px")

[See the Professional theme example](docs/pyramid-professional.html ":ignore")

### Maslow's Hierarchy Example

Perfect for educational content and psychology presentations:

```html
<ul class="smartart-pyramid maslow-pyramid">
  <li><div>Self-Actualization</div></li>
  <li><div>Esteem Needs</div></li>
  <li><div>Love & Belonging</div></li>
  <li><div>Safety Needs</div></li>
  <li><div>Physiological Needs</div></li>
</ul>
```

[![Maslow's Hierarchy](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-maslow.webp)](docs/pyramid-maslow.html ":include height=400px")

[See the Maslow's hierarchy example](docs/pyramid-maslow.html ":ignore")

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable                    | Default   | Description                  |
| --------------------------- | --------- | ---------------------------- |
| `--pyramid-level-height`    | `80px`    | Height of each level (except top) |
| `--pyramid-level-1-color`   | `#4a90e2` | Top level color (Leadership) |
| `--pyramid-level-2-color`   | `#7cb342` | Second level color           |
| `--pyramid-level-3-color`   | `#ffd54f` | Third level color            |
| `--pyramid-level-4-color`   | `#e57373` | Fourth level color           |
| `--pyramid-level-5-color`   | `#90a4ae` | Bottom level color           |
| `--pyramid-font-size`       | `18px`    | Text font size               |
| `--pyramid-font-weight`     | `bold`    | Text font weight             |
| `--pyramid-text-color`      | `#333`    | Text color                   |
| `--pyramid-gap`             | `0`       | Gap between levels           |

### Custom Colors

Create your own color scheme:

```css
.custom-pyramid {
  --pyramid-level-1-color: #ff6b6b;
  --pyramid-level-2-color: #4ecdc4;
  --pyramid-level-3-color: #45b7d1;
  --pyramid-level-4-color: #96ceb4;
  --pyramid-level-5-color: #feca57;
  --pyramid-text-color: white;
}
```

### Built-in Themes

The library includes several pre-built themes:

#### Dark Theme
```html
<ul class="smartart-pyramid dark-theme">
  <!-- pyramid levels -->
</ul>
```

```css
/* Dark theme colors */
.smartart-pyramid.dark-theme {
  --pyramid-level-1-color: #2c3e50;
  --pyramid-level-2-color: #34495e;
  --pyramid-level-3-color: #7f8c8d;
  --pyramid-level-4-color: #95a5a6;
  --pyramid-level-5-color: #bdc3c7;
  --pyramid-text-color: #ecf0f1;
}
```

#### Professional Theme
```html
<ul class="smartart-pyramid professional-theme">
  <!-- pyramid levels -->
</ul>
```

```css
/* Professional theme colors */
.smartart-pyramid.professional-theme {
  --pyramid-level-1-color: #1abc9c;
  --pyramid-level-2-color: #16a085;
  --pyramid-level-3-color: #2ecc71;
  --pyramid-level-4-color: #27ae60;
  --pyramid-level-5-color: #3498db;
}
```

#### Warm Theme
```html
<ul class="smartart-pyramid warm-theme">
  <!-- pyramid levels -->
</ul>
```

```css
/* Warm theme colors */
.smartart-pyramid.warm-theme {
  --pyramid-level-1-color: #e74c3c;
  --pyramid-level-2-color: #e67e22;
  --pyramid-level-3-color: #f39c12;
  --pyramid-level-4-color: #f1c40f;
  --pyramid-level-5-color: #d35400;
}
```

#### Monochrome Theme
```html
<ul class="smartart-pyramid monochrome-theme">
  <!-- pyramid levels -->
</ul>
```

```css
/* Monochrome theme colors */
.smartart-pyramid.monochrome-theme {
  --pyramid-level-1-color: #2c3e50;
  --pyramid-level-2-color: #34495e;
  --pyramid-level-3-color: #7f8c8d;
  --pyramid-level-4-color: #95a5a6;
  --pyramid-level-5-color: #bdc3c7;
}
```

### Pyramid Structure

The pyramid component creates a perfectly aligned hierarchy with the following features:

- **Top Triangle**: The first level is a perfect upright triangle shape
- **Trapezoid Levels**: Subsequent levels are trapezoids that align perfectly with the level above
- **Progressive Width**: Each level increases in width from top to bottom
- **Seamless Connections**: Levels connect without gaps for a clean appearance

### Responsive Design

The pyramid automatically adapts to different screen sizes:

- **Desktop** (>1200px): Full size display
- **Tablet** (≤1200px): Scaled to 80% with transform-origin at center top
- **Small Tablet** (≤768px): Scaled to 60% with reduced font size (16px)
- **Mobile** (≤480px): Compact layout scaled to 40% with smaller font size (14px)

### Technical Implementation

The pyramid uses modern CSS techniques for visual styling:

- **CSS clip-path**: Creates the triangle and trapezoid shapes
- **Flexbox layout**: Centers content and manages vertical stacking
- **CSS custom properties**: Enables easy theming and customization
- **CSS transforms**: Handles responsive scaling at different breakpoints

### Accessibility

The pyramid component follows accessibility best practices:

- **Semantic HTML structure**: Uses `<ul>` and `<li>` elements for proper document outline
- **Proper color contrast**: Ensures text is readable against background colors
- **Responsive design**: Maintains usability across various devices and screen sizes
- **Simple structure**: Avoids complex interactions that might create barriers

### Browser Support

The pyramid component uses modern CSS features:

- **CSS Custom Properties**: Supported in all modern browsers
- **CSS clip-path**: Supported in Chrome 55+, Firefox 54+, Safari 9.1+
- **Flexbox**: Universally supported
- **CSS Transforms**: Universally supported

For older browsers, consider using a CSS preprocessor or PostCSS with appropriate fallbacks.

### Use Cases

The pyramid component is perfect for:

- **Organizational hierarchies**: Visualize company structure and reporting lines
- **Maslow's hierarchy of needs**: Educational psychology presentations
- **Priority pyramids**: Project management and task prioritization
- **Skill level representations**: Learning platforms and competency frameworks
- **Corporate structure**: Department organization and responsibility allocation
- **Data hierarchy**: Information architecture and taxonomy visualization
- **Process flow**: Sequential steps with importance levels
