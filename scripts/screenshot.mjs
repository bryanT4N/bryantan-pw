// Usage: node scripts/screenshot.mjs <url> <output> [width] [height] [fullPage]
//   url       — page URL (e.g. http://localhost:3000/individual)
//   output    — output PNG path
//   width     — viewport width (default 1920)
//   height    — viewport height (default 1080)
//   fullPage  — "full" to capture full scrollable page, otherwise viewport only

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const [, , url, output, widthArg, heightArg, fullPageArg] = process.argv;

if (!url || !output) {
  console.error('Usage: node scripts/screenshot.mjs <url> <output> [width] [height] [full]');
  process.exit(1);
}

const width = parseInt(widthArg ?? '1920', 10);
const height = parseInt(heightArg ?? '1080', 10);
const fullPage = fullPageArg === 'full';

await mkdir(dirname(output), { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width, height },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

try {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  // give web fonts a moment
  await page.waitForTimeout(800);
  await page.screenshot({ path: output, fullPage });
  console.log(`OK  ${output}  (${width}x${height}${fullPage ? ' full' : ''})  ${url}`);
} catch (err) {
  console.error(`FAIL  ${output}  ${url}  ${err.message}`);
  process.exit(2);
} finally {
  await browser.close();
}
