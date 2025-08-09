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

Create a chevron flow with HTML:

![Basic Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-basic.webp ":skip")

```html :example="chevron-basic.webp"
<div class="sm-chevron">
  <ul>
    <li>
      <strong>Planning</strong>
      <ul>
        <li>Define requirements</li>
        <li>Create timeline</li>
        <li>Assign resources</li>
      </ul>
    </li>
    <li>
      <strong>Development</strong>
      <ul>
        <li>Write code</li>
        <li>Code review</li>
        <li>Unit testing</li>
      </ul>
    </li>
    <li>
      <strong>Testing</strong>
      <ul>
        <li>Integration tests</li>
        <li>User acceptance</li>
        <li>Performance tests</li>
      </ul>
    </li>
    <li>
      <strong>Deployment</strong>
      <ul>
        <li>Production release</li>
        <li>Monitor systems</li>
        <li>User training</li>
      </ul>
    </li>
  </ul>
</div>
```

... or by converting this Markdown to HTML:

```markdown :example="chevron-basic.webp"
<div class="sm-chevron">

- **Planning**
  - Define requirements
  - Create timeline
  - Assign resources
- **Development**
  - Write code
  - Code review
  - Unit testing
- **Testing**
  - Integration tests
  - User acceptance
  - Performance tests
- **Deployment**
  - Production release
  - Monitor systems
  - User training

</div>
```

### Headings Only

![Headings Only Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-headings.webp ":skip")

```markdown :example="chevron-headings.webp"
<div class="sm-chevron">

- **Planning**
- **Development**
- **Testing**
- **Deployment**

</div>
```

For simple step indicators without detailed content, add any element inside each `<li>`. You can use any HTML tag for the chevron text, e.g. `<h3>`, `<div>`, `<strong>`.

### Single Chevron

For standalone elements:

![Single Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-single.webp ":skip")

```markdown :example="chevron-single.webp"
<div class="sm-chevron">

- **Important Notice**
  - Read all instructions
  - Complete forms

</div>
```

### Custom Content

![Custom Content Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-custom.webp ":skip")

```markdown :example="chevron-custom.webp" :quality=20
<div class="sm-chevron">

- **Alpha**
  ![pic](https://picsum.photos/id/11/200/100.jpg)
  ![pic](https://picsum.photos/id/12/200/100.jpg)
- **Beta**
  ![pic](https://picsum.photos/id/21/200/100.jpg)
  ![pic](https://picsum.photos/id/22/200/100.jpg)
- **Gamma**
  ![pic](https://picsum.photos/id/31/200/100.jpg)
  ![pic](https://picsum.photos/id/32/200/100.jpg)

</div>
```

### Long Text Wrapping

The library handles text wrapping:

![Long Text Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-long-text.webp ":skip")

```markdown :example="chevron-long-text.webp"
<div class="sm-chevron">

- **Phase with Long Wrapping Text**
  - This is a very long list item that demonstrates how the library handles text wrapping automatically
  - Short item
- **Next Phase**
  - Regular content

</div>
```

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable      | Default        | Description                  |
| ------------- | -------------- | ---------------------------- |
| `--width`     | `200px`        | Width of each chevron header |
| `--height`    | `60px`         | Height of chevron headers    |
| `--tip-width` | `30px`         | Width of pointed tips        |
| `--gap`       | `20px`         | Gap between sections         |
| `--bg`        | `#e0e0e0`      | Header background color      |
| `--fg`        | `#000`         | Header foreground color      |
| `--bg-alt`    | `transparent`  | Content background color     |
| `--fg-alt`    | `currentColor` | Content foreground color     |

### Builtin Themes

Add any of the `sm-theme-*` classes available in [themes](themes.md). For example, `sm-theme-office`.

![Builtin Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-builtin-theme.webp ":skip")

```markdown :example="chevron-builtin-theme.webp"
<div class="sm-chevron sm-theme-office">

- **Planning**
  - Define requirements
  - Create timeline
  - Assign resources
- **Development**
  - Write code
  - Code review
  - Unit testing
- **Testing**
  - Integration tests
  - User acceptance
  - Performance tests
- **Deployment**
  - Production release
  - Monitor systems
  - User training

</div>
```

### Dark Theme

![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-dark-theme.webp ":skip")

```markdown :example="chevron-dark-theme.webp"
<div class="sm-chevron" style="--bg: #31506f; --fg: #ecf0f1; --bg-alt: #34495e">

- **Planning**
  - Define requirements
  - Create timeline
  - Assign resources
- **Development**
  - Write code
  - Code review
  - Unit testing
- **Testing**
  - Integration tests
  - User acceptance
  - Performance tests
- **Deployment**
  - Production release
  - Monitor systems
  - User training

</div>
```

### Compact Size

![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-compact-size.webp ":skip")

```markdown :example="chevron-compact-size.webp"
<div class="sm-chevron" style="--width: 150px; --height: 40px; --tip-width: 20px; --gap: 5px">

- **Planning**
  - Define requirements
  - Create timeline
  - Assign resources
- **Development**
  - Write code
  - Code review
  - Unit testing
- **Testing**
  - Integration tests
  - User acceptance
  - Performance tests
- **Deployment**
  - Production release
  - Monitor systems
  - User training

</div>
```

### Large Size

![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-large-size.webp ":skip")

```markdown :example="chevron-large-size.webp"
<div class="sm-chevron" style="--width: 300px; --height: 100px; --tip-width: 50px; --gap: 30px">

- **Planning**
  - Define requirements
  - Create timeline
  - Assign resources
- **Development**
  - Write code
  - Code review
  - Unit testing
- **Testing**
  - Integration tests
  - User acceptance
  - Performance tests
- **Deployment**
  - Production release
  - Monitor systems
  - User training

</div>
```

### Ordered List

```markdown :example="chevron-ordered.webp"
<div class="sm-chevron">

1. **One**
   1. First
   2. Second
2. **Two**
   1. Alpha
   2. Beta

</div>
```
