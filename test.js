const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://books.toscrape.com/index.html");
  await page.click(".row li h3 a");

  await page.screenshot({ path: "sc.png" });

  await browser.close();
})();
