import { test, expect } from "@playwright/test";
import { gotoHash, findExampleComp, toPx, expectColor } from "./utils";

test.beforeEach(async ({ page }) => gotoHash(page, "chevron"));

test("chevron: basic layout and defaults", async ({ page }) => {
  const comp = findExampleComp(page, "chevron-basic.webp", "chevron");
  await expect(comp).toBeVisible();

  const ul = comp.locator(":scope > ul");
  await expect(ul).toHaveCSS("display", "flex");
  await expect(ul).toHaveCSS("gap", "15px");

  const firstLi = comp.locator(":scope > ul > li").first();
  const secondLi = comp.locator(":scope > ul > li").nth(1);

  // Header box defaults
  // Use relative selectors for styles
  const header = firstLi.locator(":scope > :first-child");
  await expect(header).toHaveCSS("width", "200px");
  await expect(header).toHaveCSS("height", "60px");
  expectColor(await header.evaluate(el => getComputedStyle(el as Element).backgroundColor), "rgb(224,224,224)");
  expectColor(await header.evaluate(el => getComputedStyle(el as Element).color), "rgb(0,0,0)");

  // First item: no left overlap, has padding-right equal to tip
  await expect(firstLi).toHaveCSS("margin-left", "0px");
  await expect(header).toHaveCSS("padding-right", "30px");

  // Second item overlaps left by tip width
  await expect(secondLi).toHaveCSS("margin-left", "-30px");

  // Content width = width - tip-width
  const content = firstLi.locator(":scope > ul");
  const w = toPx(await header.evaluate(el => getComputedStyle(el as Element).width));
  const tip = 30;
  const contentBox = await content.boundingBox();
  expect(Math.round((contentBox?.width || 0))).toBe(w - tip);
});

test("chevron: compact and large sizes override variables", async ({ page }) => {
  const compact = findExampleComp(page, "chevron-compact-size.webp", "chevron");
  await expect(compact).toBeVisible();
  const cHeader = compact.locator(":scope > ul > li:first-child > :first-child");
  await expect(cHeader).toHaveCSS("width", "150px");
  await expect(cHeader).toHaveCSS("height", "40px");
  await expect(cHeader).toHaveCSS("padding-right", "20px");
  const cContent = compact.locator(":scope > ul > li:first-child > ul");
  const cBox = await cContent.boundingBox();
  expect(Math.round((cBox?.width || 0))).toBe(130);

  const large = findExampleComp(page, "chevron-large-size.webp", "chevron");
  await expect(large).toBeVisible();
  const lHeader = large.locator(":scope > ul > li:first-child > :first-child");
  await expect(lHeader).toHaveCSS("width", "300px");
  await expect(lHeader).toHaveCSS("height", "100px");
  await expect(lHeader).toHaveCSS("padding-right", "50px");
  const lContent = large.locator(":scope > ul > li:first-child > ul");
  const lBox = await lContent.boundingBox();
  expect(Math.round((lBox?.width || 0))).toBe(250);
});

test("chevron: supports ordered lists and direct content", async ({ page }) => {
  // Added to docs to cover > ol, > div and > img selectors
  const ordered = findExampleComp(page, "chevron-ordered.webp", "chevron");
  await expect(ordered).toBeVisible();
  await expect(ordered.locator(":scope > ol")).toBeVisible();
  await expect(ordered.locator(":scope > ol > li").first()).toBeVisible();

  const direct = findExampleComp(page, "chevron-direct.webp", "chevron");
  await expect(direct).toBeVisible();
  await expect(direct.locator(":scope > ul > li:nth-child(1) > div")).toBeVisible();
  await expect(direct.locator(":scope > ul > li:nth-child(2) > img")).toBeVisible();
});
