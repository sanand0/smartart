import { test, expect } from "@playwright/test";
import { gotoHash, findExampleComp } from "./utils";

test.beforeEach(async ({ page }) => gotoHash(page, "column"));

test("column: basic layout and defaults", async ({ page }) => {
  const comp = findExampleComp(page, "column-basic.webp", "column");
  await expect(comp).toBeVisible();
  const ul = comp.locator(":scope > ul");
  await expect(ul).toHaveCSS("display", "flex");
  await expect(ul).toHaveCSS("gap", "15px");

  const firstHeader = comp.locator(":scope > ul > li:first-child > :first-child");
  await expect(firstHeader).toHaveCSS("width", "200px");
  await expect(firstHeader).toHaveCSS("height", "60px");

  const firstContent = comp.locator(":scope > ul > li:first-child > ul");
  const box = await firstContent.boundingBox();
  expect(Math.round((box?.width || 0))).toBe(200);
});

test("column: compact and large sizes override variables", async ({ page }) => {
  const compact = findExampleComp(page, "column-compact-size.webp", "column");
  await expect(compact).toBeVisible();
  const cHeader = compact.locator(":scope > ul > li:first-child > :first-child");
  await expect(cHeader).toHaveCSS("width", "150px");
  await expect(cHeader).toHaveCSS("height", "40px");
  const cContent = compact.locator(":scope > ul > li:first-child > ul");
  const cBox = await cContent.boundingBox();
  expect(Math.round((cBox?.width || 0))).toBe(150);

  const large = findExampleComp(page, "column-large-size.webp", "column");
  await expect(large).toBeVisible();
  const lHeader = large.locator(":scope > ul > li:first-child > :first-child");
  await expect(lHeader).toHaveCSS("width", "300px");
  await expect(lHeader).toHaveCSS("height", "100px");
  const lContent = large.locator(":scope > ul > li:first-child > ul");
  const lBox = await lContent.boundingBox();
  expect(Math.round((lBox?.width || 0))).toBe(300);
});

