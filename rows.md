# Rows

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/rows.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/rows.min.css";
```

## Usage

### Basic Example

Create a rows flow with semantic HTML:

```html
<ul class="smartart-rows">
  <li>
    <h3 style="--rows-bg-color: red">Planning</h3>
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

[![Basic Rows Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-basic.webp)](docs/rows-basic.html ":include height=300px")

[See the Basic example](docs/rows-basic.html ":ignore")

### Minimal Example

For simple step indicators without detailed content, add any element inside each `<li>`. You can use any HTML tag for the row text, e.g. `<h3>`, `<div>`, `<strong>`.

```html
<ul class="smartart-rows">
  <li><div>Step 1</div></li>
  <li><div>Step 2</div></li>
  <li><div>Step 3</div></li>
</ul>
```

[![Minimal Rows Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-minimal.webp)](docs/rows-minimal.html ":include height=200px")

[See the Minimal example](docs/rows-minimal.html ":ignore")

### Long Text Wrapping

The library automatically handles text wrapping:

```html
<ul class="smartart-rows">
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

[![Long Text Rows Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-long-text.webp)](docs/rows-long-text.html ":include height=250px")

[See the Long text example](docs/rows-long-text.html ":ignore")

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable                 | Default   | Description                 |
| ------------------------ | --------- | --------------------------- |
| `--rows-width`           | `600px`   | Width of the smartart       |
| `--rows-header-width`    | `200px`   | Width of each row header    |
| `--rows-gap`             | `15px`    | Gap between sections        |
| `--rows-bg-color`        | `#e0e0e0` | Header background color     |
| `--rows-text-indent`     | `10px`    | Text indent for content box |
| `--rows-content-padding` | `15px`    | Content box padding         |

### Default Theme

The standard appearance with clean, professional styling:

[![Default Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-default.webp)](docs/rows-default.html ":include height=300px")

[See the Default theme example](docs/rows-default.html ":ignore")

### Dark Theme

```css
:root {
  --rows-bg-color: #31506f;
}
.smartart-rows > li > ul {
  background-color: #34495e;
  color: #ecf0f1;
}
```

[![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-dark-theme.webp)](docs/rows-dark-theme.html ":include height=300px")

[See the Dark theme example](docs/rows-dark-theme.html ":ignore")

### Colorful Theme

```css
.smartart-rows > li:nth-child(1) > div {
  --rows-bg-color: #e74c3c;
}
.smartart-rows > li:nth-child(2) > div {
  --rows-bg-color: #f39c12;
}
.smartart-rows > li:nth-child(3) > div {
  --rows-bg-color: #27ae60;
}
.smartart-rows > li:nth-child(4) > div {
  --rows-bg-color: #3498db;
}
```

[![Colorful Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-colorful.webp)](docs/rows-colorful.html ":include height=300px")

[See the Colorful theme example](docs/rows-colorful.html ":ignore")

### Compact Size

```css
:root {
  --rows-width: 400px;
  --rows-header-width: 150px;
  --rows-gap: 10px;
}
```

[![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-compact.webp)](docs/rows-compact.html ":include height=250px")

[See the Compact size example](docs/rows-compact.html ":ignore")

### Large Size

```css
:root {
  --rows-width: 800px;
  --rows-header-width: 300px;
  --rows-gap: 20px;
}
```

[![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/rows-large.webp)](docs/rows-large.html ":include height=400px")

[See the Large size example](docs/rows-large.html ":ignore")
