import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { ScreenshotUtil } from '../utils/screenshotUtil';

test.describe('Jupiter Toys Login Scenario', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeAll(() => {
    // Initialize screenshot directory
    ScreenshotUtil.initializeScreenshotDir();
  });

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    // Reset step counter for new test
    ScreenshotUtil.resetStepCounter();
  });

  test('User login with valid credentials and verify username', async ({
    page,
  }) => {
    // Step 1: Navigate to the URL
    await homePage.navigateToHomePage();
    console.log('✓ Navigated to Jupiter Toys URL');

    // Step 2: Validate the Title is "Jupiter Toys"
    const pageTitle = await homePage.getHomePageTitle();
    expect(pageTitle).toBe('Jupiter Toys');
    console.log('✓ Page title validated: ' + pageTitle);

    // Step 3: Click on login button
    await homePage.clickLoginButton();
    console.log('✓ Clicked on login button');

    // Wait for the page to stabilize
    await page.waitForLoadState('networkidle');

    // Step 4: Enter username "Ashok"
    await loginPage.enterUsername('Ashok');
    console.log('✓ Entered username: Ashok');

    // Step 5: Enter password "letmein"
    await loginPage.enterPassword('letmein');
    console.log('✓ Entered password: letmein');

    // Step 6: Click on Login button in the popup
    await loginPage.clickLoginButton();
    console.log('✓ Clicked login button in popup');

    // Wait for login to complete
    await page.waitForLoadState('networkidle');

    // Step 7: Validate that username "Ashok" is displayed on the tab
    const loggedInUsername = await loginPage.getLoggedInUsername();
    expect(loggedInUsername).toBe('Ashok');
    console.log('✓ Username validated: ' + loggedInUsername);

    console.log('✓ Login scenario completed successfully!');
  });
});
