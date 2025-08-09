# Smart Art CSS Library

[![npm version](https://img.shields.io/npm/v/smartart.svg)](https://www.npmjs.com/package/smartart)
[![license](https://img.shields.io/npm/l/smartart.svg)](https://github.com/sanand0/smartart/blob/main/LICENSE)

A lightweight, responsive CSS library for creating smart-art. Pure CSS implementation with no JavaScript dependencies.

::hr{.border-muted}

## Chevron

Process flows showing sequential elements. **[Read Chevron Docs &raquo;](chevron.md)**

[![Chevron Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-builtin-theme.webp)](chevron.md)

## Column

Lists of items with headers. **[Read Column Docs &raquo;](column.md)**

[![Column Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/column-builtin-theme.webp)](column.md)

## Stack

Lists of items with headers, oriented horizontally. **[Read Stack Docs &raquo;](stack.md)**

[![Stack Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/stack-builtin-theme.webp)](stack.md)

## Themes

A dozen themes for a professional look. **[Read Themes Docs &raquo;](themes.md)**

[![Themes Example](https://raw.githubusercontent.com/sanand0/smartart/main/docs/chevron-builtin-theme.webp)](themes.md)

## Development

```bash
git clone https://github.com/sanand0/smartart.git
cd smartart

npm install
npm run lint && npm run build
npm test # just takes screenshots for now

npm publish
git commit . -m"$COMMIT_MSG"; git tag $VERSION; git push --follow-tags
```

## Release notes

- [1.1.0](https://npmjs.com/package/smartart/v/1.1.0): 30 Jul 2025. Standardized package.json & README.md, switch to ESM
- [1.0.0](https://npmjs.com/package/smartart/v/1.0.0): 29 Jul 2025. Initial release

## License

[MIT](LICENSE)
