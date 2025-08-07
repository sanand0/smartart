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

### Responsive Design

The pyramid automatically adapts to different screen sizes:

- **Desktop** (>1200px): Full size display
- **Tablet** (≤1200px): Scaled to 80% with transform-origin at center top
- **Small Tablet** (≤768px): Scaled to 60% with reduced font size (16px)
- **Mobile** (≤480px): Compact layout scaled to 40% with smaller font size (14px)
