/**
 * Allure Report Utilities
 * Provides helper functions for enhanced Allure reporting
 */

export class AllureUtil {
  /**
   * Add test steps with descriptions
   */
  static async addStep(stepName: string, action: () => Promise<void>): Promise<void> {
    try {
      await action();
    } catch (error) {
      throw new Error(`Step "${stepName}" failed: ${error}`);
    }
  }

  /**
   * Add attachment to Allure report
   */
  static addAttachment(name: string, content: string, type: string = 'text/plain'): void {
    // This would be used with Allure fixtures in actual implementation
    console.log(`📎 Attachment: ${name} (${type})`);
  }

  /**
   * Log test details
   */
  static logDetail(key: string, value: string): void {
    console.log(`📋 ${key}: ${value}`);
  }
}
