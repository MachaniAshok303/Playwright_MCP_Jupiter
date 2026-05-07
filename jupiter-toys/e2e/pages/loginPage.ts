import { Page, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { loginPopupLocators, userProfileLocators } from './locators';
import { ScreenshotUtil } from '../utils/screenshotUtil';

export class LoginPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   * Wait for login popup to appear
   */
  async waitForLoginPopup(): Promise<void> {
    await this.page.waitForSelector(loginPopupLocators.usernameField, {
      timeout: 5000,
    });
  }

  /**
   * Enter username in the login field
   */
  async enterUsername(username: string): Promise<void> {
    await this.fillText(loginPopupLocators.usernameField, username);
    await ScreenshotUtil.captureStepScreenshot(
      this.page,
      `entered_username_${username}`
    );
  }

  /**
   * Enter password in the login field
   */
  async enterPassword(password: string): Promise<void> {
    await this.fillText(loginPopupLocators.passwordField, password);
    await ScreenshotUtil.captureStepScreenshot(
      this.page,
      'entered_password'
    );
  }

  /**
   * Click the login button in the popup
   */
  async clickLoginButton(): Promise<void> {
    await this.clickElement(loginPopupLocators.loginButton);
    await ScreenshotUtil.captureStepScreenshot(this.page, 'clicked_login_button');
  }

  /**
   * Get the logged-in username from the profile
   */
  async getLoggedInUsername(): Promise<string> {
    await this.page.waitForSelector(userProfileLocators.loggedInUser, {
      timeout: 5000,
    });
    const username = await this.getText(userProfileLocators.loggedInUser);
    await ScreenshotUtil.captureStepScreenshot(
      this.page,
      `logged_in_user_${username}`
    );
    return username;
  }

  /**
   * Verify that user is logged in with the correct username
   */
  async verifyUserLoggedIn(expectedUsername: string): Promise<boolean> {
    const loggedInUsername = await this.getLoggedInUsername();
    return loggedInUsername === expectedUsername;
  }

  /**
   * Complete the login process
   */
  async login(username: string, password: string): Promise<void> {
    await this.waitForLoginPopup();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}
