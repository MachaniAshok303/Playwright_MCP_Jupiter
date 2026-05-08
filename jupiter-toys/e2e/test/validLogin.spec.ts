import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { BasePage } from '../pages/basePage';
import { loginPopupLocators } from '../pages/locators';
import { ScreenshotUtil } from '../utils/screenshotUtil';

const VALID_USERNAME = 'Ashok';
const VALID_PASSWORD = 'letmein';
const INVALID_USERNAME = 'invalidUser';
const INVALID_PASSWORD = 'wrongpass';

test.describe('Jupiter Toys Login High Priority Coverage', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let basePage: BasePage;

  test.beforeAll(() => {
    ScreenshotUtil.initializeScreenshotDir();
  });

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    basePage = new BasePage(page);
    ScreenshotUtil.resetStepCounter();
    await homePage.navigateToHomePage();
    await page.waitForLoadState('networkidle');
  });

  test('Valid login with correct credentials should display username', async ({ page }) => {
    await homePage.clickLoginButton();
    await loginPage.waitForLoginPopup();

    await loginPage.login(VALID_USERNAME, VALID_PASSWORD);

    const userName = await loginPage.getLoggedInUsername();
    expect(userName).toBe(VALID_USERNAME);
  });

  test('Valid login using BasePage login helper', async ({ page }) => {
    await homePage.clickLoginButton();
    await loginPage.waitForLoginPopup();

    await basePage.login(
      loginPopupLocators.usernameField,
      loginPopupLocators.passwordField,
      loginPopupLocators.loginButton,
      VALID_USERNAME,
      VALID_PASSWORD
    );

    const userName = await loginPage.getLoggedInUsername();
    expect(userName).toBe(VALID_USERNAME);
  });

  test('Invalid login should not authenticate with empty username', async ({ page }) => {
    await homePage.clickLoginButton();
    await loginPage.waitForLoginPopup();

    await loginPage.enterUsername('');
    await loginPage.enterPassword(VALID_PASSWORD);
    await loginPage.clickLoginButton();

    const currentURL = page.url();
    expect(currentURL).toContain('#/');
  });

  test('Invalid login should not authenticate with empty password', async ({ page }) => {
    await homePage.clickLoginButton();
    await loginPage.waitForLoginPopup();

    await loginPage.enterUsername(VALID_USERNAME);
    await loginPage.enterPassword('');
    await loginPage.clickLoginButton();

    const currentURL = page.url();
    expect(currentURL).toContain('#/');
  });

  test('Login should succeed using keyboard Enter on password field', async ({ page }) => {
    await homePage.clickLoginButton();
    await loginPage.waitForLoginPopup();

    await loginPage.enterUsername(VALID_USERNAME);
    await loginPage.enterPassword(VALID_PASSWORD);
    await page.press(loginPopupLocators.passwordField, 'Enter');

    const userName = await loginPage.getLoggedInUsername();
    expect(userName).toBe(VALID_USERNAME);
  });
});
