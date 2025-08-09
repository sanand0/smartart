import { chromium } from "playwright";
import { default as sharp } from "sharp";
import { default as path } from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// URLs to visit in the docsify site
const routes = [
  { hash: "", name: "home" },
  { hash: "#/chevron", name: "chevron" },
  { hash: "#/column", name: "column" },
  { hash: "#/stack", name: "stack" },
  { hash: "#/themes", name: "themes" },
];

(async () => {
  // Start HTTP server
  const serverProcess = spawn("python", ["-m", "http.server", "3000"], { cwd: __dirname, stdio: "inherit" });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1600, height: 600 });

  try {
    for (const { hash, name } of routes) {
      console.log(`Processing ${name} page...`);

      const pageUrl = `http://localhost:3000/${hash}`;
      console.log(`Navigating to: ${pageUrl}`);

      // Navigate to the docsify page
      await page.goto(pageUrl, { waitUntil: "domcontentloaded", timeout: 30000 });
      await page.waitForSelector(".markdown-section", { timeout: 30000 });

      // Find all rendered examples after Docsify loads
      const elements = await page.$$(".markdown-section [data-example]");
      if (!elements.length) continue;
      for (const element of elements) {
        const filename = await element.getAttribute("data-example");
        if (!filename) continue;
        const target = `docs/${filename}`;
        const screenshot = await element.screenshot({ type: "png" });
        const quality = await element.getAttribute("data-quality");
        const options = quality ? { quality: +quality, effort: 6 } : { lossless: true, quality: 100, effort: 6 };
        await sharp(screenshot).webp(options).toFile(target);
        console.log(target);
      }
    }
  } finally {
    await browser.close();
    serverProcess.kill();
    // Give server time to clean up
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  console.log("Screenshots generated!");
})();
