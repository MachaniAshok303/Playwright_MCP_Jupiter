import { test, expect } from '@playwright/test';
 test('validating page has title name and validating URL',async({page})=>
  {
    await page.goto("https://www.planit.com/");
    await expect(page).toHaveTitle('Home - Planit') ;
    expect (page.url()).toBe("https://www.planit.com/") 

 });

 test('page has title',async({page})=>{
  await page.goto("https://planittesting.sharepoint.com/");
await expect(page).toHaveTitle('Home - Planit') ;
 });