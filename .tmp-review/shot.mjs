import { chromium, webkit, devices } from 'playwright';
const cases = [
  { url: 'https://site-inova-eight.vercel.app/inicio', out: 'new-mobile-wait.png', browser: 'webkit', context: devices['iPhone 14'] },
  { url: 'https://www.clinicainova.com/', out: 'old-mobile-wait.png', browser: 'webkit', context: devices['iPhone 14'] },
  { url: 'https://site-inova-eight.vercel.app/inicio', out: 'new-desktop-wait.png', browser: 'chromium', context: { viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 2 } },
  { url: 'https://www.clinicainova.com/', out: 'old-desktop-wait.png', browser: 'chromium', context: { viewport: { width: 1440, height: 2200 }, deviceScaleFactor: 2 } },
];
for (const c of cases) {
  const browserType = c.browser === 'webkit' ? webkit : chromium;
  const browser = await browserType.launch();
  const context = await browser.newContext(c.context);
  const page = await context.newPage();
  await page.goto(c.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3500);
  await page.screenshot({ path: `/Users/jeffersonreis/PROJETOS/SITE INOVA/.tmp-review/${c.out}`, fullPage: true });
  await browser.close();
}
