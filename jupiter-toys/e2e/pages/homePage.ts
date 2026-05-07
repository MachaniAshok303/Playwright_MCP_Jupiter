import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { homePageLocators } from './locators';
import { ScreenshotUtil } from '../utils/screenshotUtil';

export class HomePage extends BasePage {
  readonly page: Page;

  // Selectors
  readonly pageTitle = 'Jupiter Toys';

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  /**
   * Navigate to Jupiter Toys home page
   */
  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('https://jupiter.cloud.planittesting.com/#/');
    await ScreenshotUtil.captureStepScreenshot(
      this.page,
      'navigated_to_home_page'
    );
  }

  /**
   * Get the page title
   */
  async getHomePageTitle(): Promise<string> {
    const title = await this.getPageTitle();
    await ScreenshotUtil.captureStepScreenshot(
      this.page,
      `validated_title_${title}`
    );
    return title;
  }

  /**
   * Verify that the page title is 'Jupiter Toys'
   */
  async verifyPageTitleIsJupiterToys(): Promise<boolean> {
    const title = await this.getHomePageTitle();
    return title === this.pageTitle;
  }

  /**
   * Click on the login button in navigation
   */
  async clickLoginButton(): Promise<void> {
    await this.clickElement(homePageLocators.navLogin);
    await ScreenshotUtil.captureStepScreenshot(this.page, 'clicked_login_nav_button');
  }
}
