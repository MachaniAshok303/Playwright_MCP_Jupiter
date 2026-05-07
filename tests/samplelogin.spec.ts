import { test, expect, chromium } from '@playwright/test';
test('samepleLogin',async({ page })=>{
  const browser=await chromium.launch();
  const context=await browser.newContext();
  const newpage=await context.newPage();
  await page.goto("https://practicetestautomation.com/practice-test-login/")
  await page.getByLabel("username").fill('Test1@gmail.com');
  await page.getByText("Password").fill('India@123');
  await page.getByRole('button',{name:'signin'}).click(); 
  await expect(page).toHaveURL(/practicetestautomation/);
})

test('sampleLogin', async ({ page }) => {

  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(/logged-in-successfully/);
});

test('naviage to page and launch back ',async({page})=>{
  page.context()
  await page.goto('https://www.planit.com/');
  expect(page).toHaveTitle('Home - Planit')
  await page.goBack();
});