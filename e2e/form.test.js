import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Card Form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    // eslint-disable-next-line
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      // headless: false, // show gui
      // slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Form should render on page start', async () => {
    await page.goto(baseUrl);

    await page.$('.card-form-widget');
  });

  test('Form input should add .valid class if number card is valid', async () => {
    await page.goto(baseUrl);

    await page.$('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');
    const submit = await form.$('.submit');

    await input.type('17893729974');
    await submit.click();

    await page.$('.card-form-widget .input.valid');
  });

  test('Form card should add .active class if card is active', async () => {
    await page.goto(baseUrl);

    await page.$('.card-form-widget');

    const form = await page.$('.card-form-widget');
    const input = await form.$('.input');

    await input.type('254');

    await page.$('.card-form-widget .card.valid');
  });
});
