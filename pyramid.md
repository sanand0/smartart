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

Create a pyramid with semantic HTML:

```html
<ul class="smartart-pyramid">
  <li>
    <h3 style="--pyramid-bg-color: #e74c3c">Top Level</h3>
    <ul>
      <li>High-level strategy</li>
    </ul>
  </li>
  <li>
    <h3 style="--pyramid-bg-color: #f39c12">Middle Level</h3>
    <ul>
      <li>Tactical decisions</li>
      <li>Resource allocation</li>
    </ul>
  </li>
  <li>
    <h3 style="--pyramid-bg-color: #27ae60">Base Level</h3>
    <ul>
      <li>Operational tasks</li>
      <li>Execution</li>
      <li>Daily activities</li>
    </ul>
  </li>
</ul>
```

[![Basic Pyramid Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-basic.webp)](docs/pyramid-basic.html ":include height=300px")

[See the Basic example](docs/pyramid-basic.html ":ignore")

### Minimal Example

For simple pyramids without detailed content, add any element inside each `<li>`.

```html
<ul class="smartart-pyramid">
  <li><div>Executives</div></li>
  <li><div>Managers</div></li>
  <li><div>Employees</div></li>
</ul>
```

[![Minimal Pyramid Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-minimal.webp)](docs/pyramid-minimal.html ":include height=200px")

[See the Minimal example](docs/pyramid-minimal.html ":ignore")

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable                       | Default | Description                          |
| ------------------------------ | ------- | ------------------------------------ |
| `--pyramid-width`              | `400px` | Width of the pyramid base            |
| `--pyramid-gap`                | `10px`  | Gap between pyramid levels           |
| `--pyramid-heading-min-height` | `60px`  | Minimum height of heading trapezoid  |
| `--pyramid-bg-color`           | `#e0e0e0` | Header background color              |
| `--pyramid-content-padding`    | `15px`  | Content box padding                  |
| `--pyramid-content-gap`        | `20px`  | Gap between heading and content box  |

### Default Theme

The standard appearance with clean, professional styling:

[![Default Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-default.webp)](docs/pyramid-default.html ":include height=300px")

[See the Default theme example](docs/pyramid-default.html ":ignore")

### Dark Theme

```css
:root {
  --pyramid-bg-color: #31506f;
}
.smartart-pyramid > li > ul {
  background-color: #34495e;
  color: #ecf0f1;
}
```

[![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-dark-theme.webp)](docs/pyramid-dark-theme.html ":include height=300px")

[See the Dark theme example](docs/pyramid-dark-theme.html ":ignore")

### Colorful Theme

```css
.smartart-pyramid > li:nth-child(1) > :first-child {
  --pyramid-bg-color: #e74c3c;
}
.smartart-pyramid > li:nth-child(2) > :first-child {
  --pyramid-bg-color: #f39c12;
}
.smartart-pyramid > li:nth-child(3) > :first-child {
  --pyramid-bg-color: #27ae60;
}
```

[![Colorful Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-colorful.webp)](docs/pyramid-colorful.html ":include height=300px")

[See the Colorful theme example](docs/pyramid-colorful.html ":ignore")

### Compact Size

```css
:root {
  --pyramid-width: 250px;
  --pyramid-heading-min-height: 40px;
  --pyramid-gap: 5px;
}
```

[![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-compact.webp)](docs/pyramid-compact.html ":include height=250px")

[See the Compact size example](docs/pyramid-compact.html ":ignore")

### Large Size

```css
:root {
  --pyramid-width: 600px;
  --pyramid-heading-min-height: 80px;
  --pyramid-gap: 15px;
}
```

[![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-large.webp)](docs/pyramid-large.html ":include height=400px")

[See the Large size example](docs/pyramid-large.html ":ignore")

### Five Levels

The library supports up to five levels out of the box.

[![Five Levels](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-five-levels.webp)](docs/pyramid-five-levels.html ":include height=400px")

[See the Five levels example](docs/pyramid-five-levels.html ":ignore")

### Heading Wrapping

The library automatically handles text wrapping in headings.

[![Heading Wrapping](https://raw.githubusercontent.com/sanand0/smartart/main/docs/pyramid-heading-wrap.webp)](docs/pyramid-heading-wrap.html ":include height=250px")

[See the Heading wrapping example](docs/pyramid-heading-wrap.html ":ignore")
