# Stack

## Installation

From CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/smartart@1/dist/stack.min.css" />
```

Using npm:

```bash
npm install smartart
```

... then import in your CSS:

```css
@import "node_modules/smartart/dist/stack.min.css";
```

## Usage

### Basic Example

Create a stack flow with HTML:

![Basic Stack Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-basic.webp ":skip")

```html :example="stack-basic.webp"
<div class="sm-stack">
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

```markdown :example="stack-basic.webp"
<div class="sm-stack">

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

![Headings Only Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-headings.webp ":skip")

```markdown :example="stack-headings.webp"
<div class="sm-stack">

- **Planning**
- **Development**
- **Testing**
- **Deployment**

</div>
```

For simple step indicators without detailed content, add any element inside each `<li>`. You can use any HTML tag for the stack text, e.g. `<h3>`, `<div>`, `<strong>`.

### Single Stack

For standalone elements:

![Single Stack Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-single.webp ":skip")

```markdown :example="stack-single.webp"
<div class="sm-stack">

- **Important Notice**
  - Read all instructions
  - Complete forms

</div>
```

### Custom Content

![Custom Content Stack Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-custom.webp ":skip")

```markdown :example="stack-custom.webp" :quality=20
<div class="sm-stack">

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

![Long Text Stack Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-long-text.webp ":skip")

```markdown :example="stack-long-text.webp"
<div class="sm-stack">

- **Phase with Long Wrapping Text**
  - This is a very long list item that demonstrates how the library handles text wrapping automatically
  - Short item
- **Next Phase**
  - Regular content

</div>
```

### Custom Styling

Customize the appearance using CSS custom properties:

| Variable         | Default        | Description              |
| ---------------- | -------------- | ------------------------ |
| `--width`        | `600px`        | Width of each stack      |
| `--header-width` | `200px`        | Width of stack headers   |
| `--gap`          | `20px`         | Gap between sections     |
| `--bg`           | `#e0e0e0`      | Header background color  |
| `--fg`           | `#000`         | Header foreground color  |
| `--bg-alt`       | `transparent`  | Content background color |
| `--fg-alt`       | `currentColor` | Content foreground color |

### Dark Theme

![Dark Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-dark-theme.webp ":skip")

```markdown :example="stack-dark-theme.webp"
<div class="sm-stack" style="--bg: #31506f; --fg: #ecf0f1; --bg-alt: #34495e">

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

### Builtin Themes

Add any of the `sm-theme-*` classes available in [themes](themes.md). For example, `sm-theme-office`.

![Builtin Theme](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-builtin-theme.webp ":skip")

```markdown :example="stack-builtin-theme.webp"
<div class="sm-stack sm-theme-office">

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

![Compact Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-compact-size.webp ":skip")

```markdown :example="stack-compact-size.webp"
<div class="sm-stack" style="--width: 300px; --header-width: 100px; --gap: 5px">

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

![Large Size](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-large-size.webp ":skip")

```markdown :example="stack-large-size.webp"
<div class="sm-stack" style="--width: 800px; --header-width: 300px; --gap: 30px">

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
