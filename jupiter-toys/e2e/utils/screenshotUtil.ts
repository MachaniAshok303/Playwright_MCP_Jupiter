import { Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class ScreenshotUtil {
  private static screenshotDir = 'screenshots';
  private static stepCounter = 0;

  /**
   * Initialize screenshot directory
   */
  static initializeScreenshotDir(): void {
    if (!fs.existsSync(this.screenshotDir)) {
      fs.mkdirSync(this.screenshotDir, { recursive: true });
    }
    this.stepCounter = 0;
  }

  /**
   * Take screenshot for a specific step
   * @param page - Playwright page object
   * @param stepName - Description of the step
   */
  static async takeScreenshot(
    page: Page,
    stepName: string
  ): Promise<string> {
    try {
      this.stepCounter++;
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const filename = `${this.stepCounter}_${stepName.replace(/\s+/g, '_')}_${timestamp}.png`;
      const filepath = path.join(this.screenshotDir, filename);

      await page.screenshot({ path: filepath });

      console.log(`📸 Screenshot saved: ${filename}`);
      return filepath;
    } catch (error) {
      console.error(`❌ Failed to take screenshot: ${error}`);
      throw error;
    }
  }

  /**
   * Take screenshot with custom path
   * @param page - Playwright page object
   * @param customPath - Custom path for the screenshot
   */
  static async takeScreenshotCustom(
    page: Page,
    customPath: string
  ): Promise<string> {
    try {
      const fullPath = path.join(this.screenshotDir, customPath);
      const dir = path.dirname(fullPath);

      // Create directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      await page.screenshot({ path: fullPath });
      console.log(`📸 Screenshot saved: ${customPath}`);
      return fullPath;
    } catch (error) {
      console.error(`❌ Failed to take screenshot: ${error}`);
      throw error;
    }
  }

  /**
   * Take screenshot after each action
   * @param page - Playwright page object
   * @param actionDescription - Description of the action performed
   */
  static async captureStepScreenshot(
    page: Page,
    actionDescription: string
  ): Promise<void> {
    await this.takeScreenshot(page, actionDescription);
  }

  /**
   * Reset step counter for a new test
   */
  static resetStepCounter(): void {
    this.stepCounter = 0;
  }

  /**
   * Get current step counter
   */
  static getStepCounter(): number {
    return this.stepCounter;
  }
}
