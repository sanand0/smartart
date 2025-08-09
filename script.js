import { createDirectives } from "https://cdn.jsdelivr.net/npm/marked-directive@1/+esm";

window.$docsify = {
  auto2top: true,
  name: "Smart Art",
  loadSidebar: true,
  subMaxLevel: 3,
  markdown(marked, renderer) {
    marked.use(createDirectives());

    // Skip images with :skip
    const _image = renderer.image;
    renderer.image = function ({ title, ...rest }) {
      if (title?.includes?.(":skip")) return "";
      return _image({ title, ...rest });
    };

    // Prepend code output for fences with any :key=value tags (e.g., :example=.., :quality=...)
    const _code = renderer.code;
    renderer.code = function ({ lang, text, ...rest }) {
      // Find all :key=value pairs in the language info string
      const pairs = Array.from(lang?.matchAll?.(/:([\w-]+)=(".*?"|'.*?'|\S+)/g) || []);
      if (pairs.length) {
        // Remove all pairs from lang, preserving the base language only
        lang = lang.replace(/\s*:[\w-]+=(".*?"|'.*?'|\S+)/g, "").trim();
        const attrs = pairs.map(([_, key, val]) => `data-${key}="${val?.replace?.(/^['"]|['"]$/g, "")}"`).join(" ");
        const content = lang.includes("markdown") ? marked.parse(text) : text;
        return `<div ${attrs}>${content}</div>\n` + _code({ lang, text, ...rest });
      }
      return _code({ lang, text, ...rest });
    };
    marked.setOptions({ renderer });
    return marked;
  },
};
