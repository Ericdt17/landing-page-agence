import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.PLAYWRIGHT_BASE_URL || "http://localhost:5175";

await mkdir("tmp", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.locator("#home").screenshot({ path: "tmp/hero-desktop.png" });

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(baseUrl, { waitUntil: "networkidle" });
await page.locator("#home").screenshot({ path: "tmp/hero-mobile.png" });

await browser.close();
console.log("Saved tmp/hero-desktop.png and tmp/hero-mobile.png");
