import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ScreenshotUtil } from '../utils/screenshotUtil';

test.describe('Jupiter Toys Home Page', () => {
  let homePage: HomePage;

  test.beforeAll(() => {
    // Initialize screenshot directory
    ScreenshotUtil.initializeScreenshotDir();
  });

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // Reset step counter for new test
    ScreenshotUtil.resetStepCounter();
  });

  test('Verify page title is "Jupiter Toys"', async ({ page }) => {
    // Navigate to Jupiter Toys home page
    await homePage.navigateToHomePage();

    // Wait for page to load
    await homePage.waitForPageLoad();

    // Get the page title
    const pageTitle = await homePage.getHomePageTitle();

    // Verify that the page title is 'Jupiter Toys'
    expect(pageTitle).toBe('Jupiter Toys');
  });
});
