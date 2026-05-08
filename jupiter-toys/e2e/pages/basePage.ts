import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a specific URL
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Get the current page title
   */
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Get the current page URL
   */
  async getPageURL(): Promise<string> {
    return this.page.url();
  }

  /**
   * Wait for page to load
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Find element by selector
   */
  async findElement(selector: string) {
    return this.page.locator(selector);
  }

  /**
   * Click on an element
   */
  async clickElement(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  /**
   * Fill text in an input field
   */
  async fillText(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }

  /**
   * Perform a login sequence using provided selectors
   */
  async login(
    usernameSelector: string,
    passwordSelector: string,
    submitSelector: string,
    username: string,
    password: string
  ): Promise<void> {
    await this.fillText(usernameSelector, username);
    await this.fillText(passwordSelector, password);
    await this.clickElement(submitSelector);
  }

  /**
   * Get text from an element
   */
  async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector) || '';
  }
}
