import { test, expect, chromium } from '@playwright/test';
test('launching Browser',async()=>{

const Browser=await chromium.launch();
const Context=await Browser.newContext();
const page=await Context.newPage();
await page.goto("https://npstrust.org.in/nps-calculator");
console.log(page.title())
})
//---

test('launching Browser', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://npstrust.org.in/nps-calculator");

  const title = await page.title();
  console.log(title);

  await browser.close();
});