import { expect, Page } from "@playwright/test";

export const gotoHash = async (page: Page, hash: string) => {
  await page.goto(`/${hash ? `#/${hash}` : ""}`);
  await page.waitForSelector(".markdown-section");
};

export const findComp = (page: Page, kind: "chevron"|"column"|"stack") => page.locator(`.markdown-section .sm-${kind}`).first();

export const findExampleComp = (page: Page, example: string, kind: "chevron"|"column"|"stack") =>
  page.locator(`[data-example='${example}'] .sm-${kind}`).first();

export const css = async (page: Page, selector: string, prop: string) =>
  page.$eval(selector, (el, p) => getComputedStyle(el as Element).getPropertyValue(p as string), prop);

export const rect = async (page: Page, selector: string) =>
  page.$eval(selector, el => (el as HTMLElement).getBoundingClientRect());

export const toPx = (v: string) => parseFloat(String(v || "0").replace("px", ""));

export const expectColor = (value: string, rgb: string) => expect(value.replace(/\s+/g, "")).toBe(rgb);

