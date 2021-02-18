const puppeteer = require('puppeteer');

describe('Task Board', () => {
  test('Adding task works correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1024,
        height: 768
      },
      userAgent: ''
    });

    await page.goto('http://localhost:3000/');
    await page.waitForSelector('#newTaskButton');
    await page.click("#newTaskButton");
    await page.waitForSelector('#newTaskInput');
    await page.focus('#newTaskInput');
    await page.keyboard.type('Go to the shops')
    await page.waitForSelector('#addButton');
    await page.click("#addButton");
    await page.waitForSelector('#listItem');

    browser.close();
  }, 8000);
});

