# Chevron

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/chevron.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/chevron.min.css";
```

## Usage

### Basic Example

Create a chevron flow with semantic HTML:

```html
<ul class="smartart-chevron">
  <li>
    <h3 style="--chevron-bg-color: red">Planning</h3>
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

[![Basic Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-basic.webp)](docs/chevron-basic.html ":include height=300px")

[See the Basic example](docs/chevron-basic.html ":ignore")

### Minimal Example

For simple step indicators without detailed content, add any element inside each `<li>`. You can use any HTML tag for the chevron text, e.g. `<h3>`, `<div>`, `<strong>`.

```html
<ul class="smartart-chevron">
  <li><div>Step 1</div></li>
  <li><div>Step 2</div></li>
  <li><div>Step 3</div></li>
</ul>
```

[![Minimal Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-minimal.webp)](docs/chevron-minimal.html ":include height=200px")

[See the Minimal example](docs/chevron-minimal.html ":ignore")

### Single Chevron

For standalone elements:

```html
<ul class="smartart-chevron">
  <li>
    <h2>Important Notice</h2>
    <ul>
      <li>Read all instructions</li>
      <li>Complete forms</li>
    </ul>
  </li>
</ul>
```

[![Single Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-single.webp)](docs/chevron-single.html ":include height=200px")

[See the Single chevron example](docs/chevron-single.html ":ignore")

### Long Text Wrapping

The library automatically handles text wrapping:

```html
<ul class="smartart-chevron">
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

[![Long Text Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-long-text.webp)](docs/chevron-long-text.html ":include height=250px")

[See the Long text example](docs/chevron-long-text.html ":ignore")

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable                    | Default   | Description                           |
| --------------------------- | --------- | ------------------------------------- |
| `--chevron-width`           | `200px`   | Width of each chevron header          |
| `--chevron-height`          | `60px`    | Height of chevron headers             |
| `--chevron-tip-width`       | `30px`    | Width of pointed tips                 |
| `--chevron-gap`             | `20px`    | Gap between sections                  |
| `--chevron-bg-color`        | `#e0e0e0` | Header background color               |
| `--chevron-text-indent`     | `10px`    | Text indent for headers & content box |
| `--chevron-content-padding` | `15px`    | Content box padding                   |

### Default Theme

The standard appearance with clean, professional styling:

[![Default Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-default.webp)](docs/chevron-default.html ":include height=300px")

[See the Default theme example](docs/chevron-default.html ":ignore")

### Dark Theme

```css
:root {
  --chevron-bg-color: #31506f;
}
.smartart-chevron > li > ul {
  background-color: #34495e;
  color: #ecf0f1;
}
```

[![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-dark-theme.webp)](docs/chevron-dark-theme.html ":include height=300px")

[See the Dark theme example](docs/chevron-dark-theme.html ":ignore")

### Colorful Theme

```css
.smartart-chevron > li:nth-child(1) > div {
  --chevron-bg-color: #e74c3c;
}
.smartart-chevron > li:nth-child(2) > div {
  --chevron-bg-color: #f39c12;
}
.smartart-chevron > li:nth-child(3) > div {
  --chevron-bg-color: #27ae60;
}
.smartart-chevron > li:nth-child(4) > div {
  --chevron-bg-color: #3498db;
}
```

[![Colorful Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-colorful.webp)](docs/chevron-colorful.html ":include height=300px")

[See the Colorful theme example](docs/chevron-colorful.html ":ignore")

### Compact Size

```css
:root {
  --chevron-width: 150px;
  --chevron-height: 40px;
  --chevron-tip-width: 20px;
  --chevron-gap: 5px;
}
```

[![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-compact.webp)](docs/chevron-compact.html ":include height=250px")

[See the Compact size example](docs/chevron-compact.html ":ignore")

### Large Size

```css
:root {
  --chevron-width: 300px;
  --chevron-height: 100px;
  --chevron-tip-width: 50px;
  --chevron-gap: 30px;
}
```

[![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-large.webp)](docs/chevron-large.html ":include height=400px")

[See the Large size example](docs/chevron-large.html ":ignore")
