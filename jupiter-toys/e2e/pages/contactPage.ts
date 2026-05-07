import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { contactFormLocators } from './locators';

export class ContactPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to the contact page
   */
  async navigateToContactPage(): Promise<void> {
    await this.navigateTo('https://jupiter.cloud.planittesting.com/#/contact');
  }

  /**
   * Fill the Forename field
   */
  async fillForename(forename: string): Promise<void> {
    await this.fillText(contactFormLocators.forenameField, forename);
  }

  /**
   * Fill the Surname field
   */
  async fillSurname(surname: string): Promise<void> {
    await this.fillText(contactFormLocators.surnameField, surname);
  }

  /**
   * Fill the Email field
   */
  async fillEmail(email: string): Promise<void> {
    await this.fillText(contactFormLocators.emailField, email);
  }

  /**
   * Fill the Telephone field
   */
  async fillTelephone(telephone: string): Promise<void> {
    await this.fillText(contactFormLocators.telephoneField, telephone);
  }

  /**
   * Fill the Message field
   */
  async fillMessage(message: string): Promise<void> {
    await this.fillText(contactFormLocators.messageField, message);
  }

  /**
   * Click the Submit button
   */
  async clickSubmit(): Promise<void> {
    await this.clickElement(contactFormLocators.submitButton);
  }

  /**
   * Get value from a field
   */
  async getFieldValue(selector: string): Promise<string> {
    return await this.page.inputValue(selector);
  }

  /**
   * Clear a field
   */
  async clearField(selector: string): Promise<void> {
    await this.page.fill(selector, '');
  }

  /**
   * Check if a field has a value
   */
  async hasFieldValue(selector: string, value: string): Promise<boolean> {
    const fieldValue = await this.getFieldValue(selector);
    return fieldValue === value;
  }

  /**
   * Get error message (if any)
   */
  async getErrorMessage(): Promise<string> {
    try {
      return await this.getText('.error-message, .validation-error, [role="alert"]');
    } catch {
      return '';
    }
  }

  /**
   * Get success message (if any)
   */
  async getSuccessMessage(): Promise<string> {
    try {
      return await this.getText('.success-message, .alert-success, [role="status"]');
    } catch {
      return '';
    }
  }

  /**
   * Fill all required fields with valid data
   */
  async fillAllRequiredFields(
    forename: string = 'John',
    email: string = 'john@example.com',
    message: string = 'Test message'
  ): Promise<void> {
    await this.fillForename(forename);
    await this.fillEmail(email);
    await this.fillMessage(message);
  }

  /**
   * Fill all fields including optional ones
   */
  async fillAllFields(
    forename: string = 'John',
    surname: string = 'Doe',
    email: string = 'john@example.com',
    telephone: string = '1234567890',
    message: string = 'Test message'
  ): Promise<void> {
    await this.fillForename(forename);
    await this.fillSurname(surname);
    await this.fillEmail(email);
    await this.fillTelephone(telephone);
    await this.fillMessage(message);
  }

  /**
   * Get the page title
   */
  async getContactPageTitle(): Promise<string> {
    return await this.getPageTitle();
  }

  /**
   * Check if a field is focused
   */
  async isFieldFocused(selector: string): Promise<boolean> {
    return await this.page.evaluate((sel) => {
      return document.activeElement === document.querySelector(sel);
    }, selector);
  }

  /**
   * Get field attribute value
   */
  async getFieldAttribute(selector: string, attribute: string): Promise<string | null> {
    return await this.page.getAttribute(selector, attribute);
  }

  /**
   * Wait for an element to be visible
   */
  async waitForElement(selector: string, timeout = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { timeout });
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(selector: string): Promise<boolean> {
    try {
      return await this.page.isVisible(selector);
    } catch {
      return false;
    }
  }
}
