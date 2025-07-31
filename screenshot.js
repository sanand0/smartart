import { chromium } from "playwright";
import { default as sharp } from "sharp";
import { default as path } from "path";
import { default as fs } from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Automatically discover all HTML files in docs/ directory
function getHtmlFiles() {
  const docsDir = path.join(__dirname, "docs");
  return fs
    .readdirSync(docsDir)
    .filter((file) => file.endsWith(".html"))
    .map((file) => path.basename(file, ".html"));
}

const examples = getHtmlFiles();

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Set viewport to 800px width as requested
  await page.setViewportSize({ width: 800, height: 600 });

  for (const example of examples) {
    const source = path.resolve(__dirname, "docs", `${example}.html`);
    const target = `docs/${example}.webp`;
    if (fs.existsSync(target) && fs.statSync(source).mtime <= fs.statSync(target).mtime) continue;

    console.log(`Generating screenshot for ${example}...`);

    // Navigate to the HTML file
    await page.goto(`file://${source}`);

    // Wait for the page to load
    await page.waitForLoadState("networkidle");

    // Take screenshot as PNG buffer
    const screenshot = await page.screenshot({
      type: "png",
      fullPage: false,
      clip: {
        x: 0,
        y: 0,
        width: 800,
        height: 400, // Reasonable height for examples
      },
    });

    // Convert to lossless WebP using Sharp
    await sharp(screenshot)
      .webp({
        lossless: true, // Lossless compression as requested
        quality: 100, // Maximum quality for lossless
        effort: 6, // Maximum compression effort
      })
      .toFile(target);

    console.log(`✓ Generated docs/${example}.webp (lossless)`);
  }

  await browser.close();
  console.log("All screenshots generated successfully with lossless WebP compression!");
})();
