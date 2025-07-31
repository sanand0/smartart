# Column

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/column.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/column.min.css";
```

## Usage

### Basic Example

Create a column flow with semantic HTML:

```html
<ul class="smartart-column">
  <li>
    <h3 style="--column-bg-color: red">Planning</h3>
    <ul>
      <li>Define requirements</li>
      <li>Create timeline</li>
      <li>Assign resources</li>
    </ul>
  </li>
  <li>
    <h3>Development</h3>
    <ul>
      <li>Write code</li>
      <li>Code review</li>
      <li>Unit testing</li>
    </ul>
  </li>
  <li>
    <h3>Testing</h3>
    <ul>
      <li>Integration tests</li>
      <li>User acceptance</li>
      <li>Performance tests</li>
    </ul>
  </li>
  <li>
    <h3>Deployment</h3>
    <ul>
      <li>Production release</li>
      <li>Monitor systems</li>
      <li>User training</li>
    </ul>
  </li>
</ul>
```

[![Basic Column Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-basic.webp)](docs/column-basic.html ":include height=300px")

[See the Basic example](docs/column-basic.html ":ignore")

### Minimal Example

For simple step indicators without detailed content, add any element inside each `<li>`. You can use any HTML tag for the column text, e.g. `<h3>`, `<div>`, `<strong>`.

```html
<ul class="smartart-column">
  <li><div>Step 1</div></li>
  <li><div>Step 2</div></li>
  <li><div>Step 3</div></li>
</ul>
```

[![Minimal Column Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-minimal.webp)](docs/column-minimal.html ":include height=200px")

[See the Minimal example](docs/column-minimal.html ":ignore")

### Long Text Wrapping

The library automatically handles text wrapping:

```html
<ul class="smartart-column">
  <li>
    <p>Initial Phase with Very Long Description That Will Wrap</p>
    <ul>
      <li>This is a very long list item that demonstrates how the library handles text wrapping automatically</li>
      <li>Short item</li>
    </ul>
  </li>
  <li>
    <p>Next Phase</p>
    <ul>
      <li>Regular content</li>
    </ul>
  </li>
</ul>
```

[![Long Text Column Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-long-text.webp)](docs/column-long-text.html ":include height=250px")

[See the Long text example](docs/column-long-text.html ":ignore")

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable                   | Default   | Description                 |
| -------------------------- | --------- | --------------------------- |
| `--column-width`           | `200px`   | Width of each column header |
| `--column-height`          | `60px`    | Height of column headers    |
| `--column-gap`             | `15px`    | Gap between sections        |
| `--column-bg-color`        | `#e0e0e0` | Header background color     |
| `--column-text-indent`     | `10px`    | Text indent for content box |
| `--column-content-padding` | `15px`    | Content box padding         |

### Default Theme

The standard appearance with clean, professional styling:

[![Default Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-default.webp)](docs/column-default.html ":include height=300px")

[See the Default theme example](docs/column-default.html ":ignore")

### Dark Theme

```css
:root {
  --column-bg-color: #31506f;
}
.smartart-column > li > ul {
  background-color: #34495e;
  color: #ecf0f1;
}
```

[![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-dark-theme.webp)](docs/column-dark-theme.html ":include height=300px")

[See the Dark theme example](docs/column-dark-theme.html ":ignore")

### Colorful Theme

```css
.smartart-column > li:nth-child(1) > div {
  --column-bg-color: #e74c3c;
}
.smartart-column > li:nth-child(2) > div {
  --column-bg-color: #f39c12;
}
.smartart-column > li:nth-child(3) > div {
  --column-bg-color: #27ae60;
}
.smartart-column > li:nth-child(4) > div {
  --column-bg-color: #3498db;
}
```

[![Colorful Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-colorful.webp)](docs/column-colorful.html ":include height=300px")

[See the Colorful theme example](docs/column-colorful.html ":ignore")

### Compact Size

```css
:root {
  --column-width: 150px;
  --column-height: 40px;
  --column-gap: 10px;
}
```

[![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-compact.webp)](docs/column-compact.html ":include height=250px")

[See the Compact size example](docs/column-compact.html ":ignore")

### Large Size

```css
:root {
  --column-width: 300px;
  --column-height: 100px;
  --column-gap: 20px;
}
```

[![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-large.webp)](docs/column-large.html ":include height=400px")

[See the Large size example](docs/column-large.html ":ignore")
