import { test, expect } from "@playwright/test";
import { gotoHash, findExampleComp } from "./utils";

test.beforeEach(async ({ page }) => gotoHash(page, "stack"));

test("stack: basic layout and defaults", async ({ page }) => {
  const comp = findExampleComp(page, "stack-basic.webp", "stack");
  await expect(comp).toBeVisible();

  const list = comp.locator(":scope > ul");
  await expect(list).toHaveCSS("display", "flex");
  await expect(list).toHaveCSS("flex-direction", "column");
  await expect(list).toHaveCSS("gap", "15px");

  const firstHeader = comp.locator(":scope > ul > li:first-child > :first-child");
  await expect(firstHeader).toHaveCSS("width", "200px");

  // Container width default
  const listBox = await list.boundingBox();
  expect(Math.round((listBox?.width || 0))).toBe(600);
});

test("stack: compact and large sizes override variables", async ({ page }) => {
  const compact = findExampleComp(page, "stack-compact-size.webp", "stack");
  await expect(compact).toBeVisible();
  const cHeader = compact.locator(":scope > ul > li:first-child > :first-child");
  await expect(cHeader).toHaveCSS("width", "100px");
  const cList = compact.locator(":scope > ul");
  const cBox = await cList.boundingBox();
  expect(Math.round((cBox?.width || 0))).toBe(300);

  const large = findExampleComp(page, "stack-large-size.webp", "stack");
  await expect(large).toBeVisible();
  const lHeader = large.locator(":scope > ul > li:first-child > :first-child");
  await expect(lHeader).toHaveCSS("width", "300px");
  const lList = large.locator(":scope > ul");
  const lBox = await lList.boundingBox();
  expect(Math.round((lBox?.width || 0))).toBe(800);
});

