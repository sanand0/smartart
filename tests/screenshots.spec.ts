import { test } from "@playwright/test";
import sharp from "sharp";
import path from "path";
import { gotoHash } from "./utils";

const routes: { hash: string; name: string }[] = [
  { hash: "", name: "home" },
  { hash: "chevron", name: "chevron" },
  { hash: "column", name: "column" },
  { hash: "stack", name: "stack" },
  { hash: "themes", name: "themes" },
];

test("generate example screenshots", { tag: ["@slow"]}, async ({ page }) => {
  test.slow();
  for (const { hash, name } of routes) {
    await gotoHash(page, hash);
    const examples = page.locator(".markdown-section [data-example]");
    const count = await examples.count();
    if (!count) continue;

    for (let i = 0; i < count; i++) {
      const el = examples.nth(i);
      const filename = await el.getAttribute("data-example");
      if (!filename) continue;
      const target = path.join("docs", filename);
      const buf = await el.screenshot({ type: "png" });
      const q = await el.getAttribute("data-quality");
      const opts = q ? { quality: +q, effort: 6 } : { lossless: true, quality: 100, effort: 6 };
      await sharp(buf)
        .webp(opts as any)
        .toFile(target);
      console.log(`screenshot: ${name}: ${target}`);
    }
  }
});
