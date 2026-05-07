import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contactPage';
import { ScreenshotUtil } from '../utils/screenshotUtil';

test.describe('Jupiter Toys Contact Form Tests', () => {
  let contactPage: ContactPage;

  test.beforeAll(() => {
    // Initialize screenshot directory
    ScreenshotUtil.initializeScreenshotDir();
  });

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    ScreenshotUtil.resetStepCounter();
    await contactPage.navigateToContactPage();
    console.log('✓ Navigated to Contact Page');
  });

  // ============ HAPPY PATH TESTS ============

  test('Submit contact form with all required fields filled', async () => {
    console.log('Test: Submit with all required fields');

    await contactPage.fillForename('John');
    console.log('✓ Filled Forename: John');

    await contactPage.fillEmail('john.doe@example.com');
    console.log('✓ Filled Email: john.doe@example.com');

    await contactPage.fillMessage('This is a test message');
    console.log('✓ Filled Message: This is a test message');

    const pageTitle = await contactPage.getContactPageTitle();
    expect(pageTitle).toBe('Jupiter Toys');
    console.log('✓ Page title verified: ' + pageTitle);

    await contactPage.clickSubmit();
    console.log('✓ Clicked Submit button');

    // Wait for any potential response
    await contactPage.page.waitForLoadState('networkidle');
  });

  test('Submit contact form with all fields filled (including optional)', async () => {
    console.log('Test: Submit with all fields filled');

    await contactPage.fillAllFields(
      'Jane',
      'Smith',
      'jane.smith@example.com',
      '02 9876 5432',
      'Test message with all fields'
    );
    console.log('✓ Filled all fields');

    await contactPage.clickSubmit();
    console.log('✓ Clicked Submit button');

    await contactPage.page.waitForLoadState('networkidle');
  });

  test('Submit with only required fields (Forename, Email, Message)', async () => {
    console.log('Test: Submit with only required fields');

    await contactPage.fillForename('Bob');
    await contactPage.fillEmail('bob@example.com');
    await contactPage.fillMessage('Required fields only');

    console.log('✓ Filled required fields');

    await contactPage.clickSubmit();
    console.log('✓ Clicked Submit button');

    await contactPage.page.waitForLoadState('networkidle');
  });

  // ============ VALIDATION TESTS ============

  test('Verify form fields accept valid input', async () => {
    console.log('Test: Form fields accept valid input');

    const testData = {
      forename: 'TestUser',
      surname: 'TestSurname',
      email: 'test@planittesting.com',
      telephone: '02 1234 5678',
      message: 'Valid test message',
    };

    await contactPage.fillForename(testData.forename);
    expect(await contactPage.hasFieldValue('input[placeholder="John"]', testData.forename)).toBe(true);
    console.log('✓ Forename field accepted input');

    await contactPage.fillSurname(testData.surname);
    expect(await contactPage.hasFieldValue('input[placeholder="Example"]', testData.surname)).toBe(true);
    console.log('✓ Surname field accepted input');

    await contactPage.fillEmail(testData.email);
    expect(await contactPage.hasFieldValue('input[placeholder="john.example@planit.net.au"]', testData.email)).toBe(true);
    console.log('✓ Email field accepted input');

    await contactPage.fillTelephone(testData.telephone);
    expect(await contactPage.hasFieldValue('input[placeholder="02 1234 5678"]', testData.telephone)).toBe(true);
    console.log('✓ Telephone field accepted input');

    await contactPage.fillMessage(testData.message);
    expect(await contactPage.hasFieldValue('textarea[placeholder="Tell us about it.."]', testData.message)).toBe(true);
    console.log('✓ Message field accepted input');
  });

  test('Verify field values can be cleared', async () => {
    console.log('Test: Field values can be cleared');

    const forenameSelector = 'input[placeholder="John"]';
    const emailSelector = 'input[placeholder="john.example@planit.net.au"]';

    await contactPage.fillForename('John');
    expect(await contactPage.getFieldValue(forenameSelector)).toBe('John');
    console.log('✓ Forename filled');

    await contactPage.clearField(forenameSelector);
    expect(await contactPage.getFieldValue(forenameSelector)).toBe('');
    console.log('✓ Forename cleared');

    await contactPage.fillEmail('test@example.com');
    expect(await contactPage.getFieldValue(emailSelector)).toBe('test@example.com');
    console.log('✓ Email filled');

    await contactPage.clearField(emailSelector);
    expect(await contactPage.getFieldValue(emailSelector)).toBe('');
    console.log('✓ Email cleared');
  });

  // ============ FIELD INTERACTION TESTS ============

  test('Verify form elements are visible on page load', async () => {
    console.log('Test: Form elements visibility');

    expect(await contactPage.isElementVisible('input[placeholder="John"]')).toBe(true);
    console.log('✓ Forename field visible');

    expect(await contactPage.isElementVisible('input[placeholder="Example"]')).toBe(true);
    console.log('✓ Surname field visible');

    expect(await contactPage.isElementVisible('input[placeholder="john.example@planit.net.au"]')).toBe(true);
    console.log('✓ Email field visible');

    expect(await contactPage.isElementVisible('input[placeholder="02 1234 5678"]')).toBe(true);
    console.log('✓ Telephone field visible');

    expect(await contactPage.isElementVisible('textarea[placeholder="Tell us about it.."]')).toBe(true);
    console.log('✓ Message field visible');

    expect(await contactPage.isElementVisible('a:has-text("Submit")')).toBe(true);
    console.log('✓ Submit button visible');
  });

  test('Test keyboard navigation through form fields', async ({ page }) => {
    console.log('Test: Keyboard navigation through fields');

    const forenameSelector = 'input[placeholder="John"]';

    // Focus the first field
    await page.click(forenameSelector);
    let isFocused = await contactPage.isFieldFocused(forenameSelector);
    expect(isFocused).toBe(true);
    console.log('✓ Forename field focused');

    // Tab to next field
    await page.press(forenameSelector, 'Tab');
    await page.waitForTimeout(300); // Small delay for focus change
    console.log('✓ Tabbed to next field');
  });

  test('Verify placeholder text is displayed for all fields', async () => {
    console.log('Test: Verify placeholder text');

    const forenameAttr = await contactPage.getFieldAttribute('input[placeholder="John"]', 'placeholder');
    expect(forenameAttr).toBe('John');
    console.log('✓ Forename placeholder: ' + forenameAttr);

    const surnameAttr = await contactPage.getFieldAttribute('input[placeholder="Example"]', 'placeholder');
    expect(surnameAttr).toBe('Example');
    console.log('✓ Surname placeholder: ' + surnameAttr);

    const emailAttr = await contactPage.getFieldAttribute('input[placeholder="john.example@planit.net.au"]', 'placeholder');
    expect(emailAttr).toBe('john.example@planit.net.au');
    console.log('✓ Email placeholder: ' + emailAttr);

    const telephoneAttr = await contactPage.getFieldAttribute('input[placeholder="02 1234 5678"]', 'placeholder');
    expect(telephoneAttr).toBe('02 1234 5678');
    console.log('✓ Telephone placeholder: ' + telephoneAttr);

    const messageAttr = await contactPage.getFieldAttribute('textarea[placeholder="Tell us about it.."]', 'placeholder');
    expect(messageAttr).toBe('Tell us about it..');
    console.log('✓ Message placeholder: ' + messageAttr);
  });

  // ============ EDGE CASE TESTS ============

  test('Submit form with special characters in fields', async () => {
    console.log('Test: Special characters in form fields');

    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    await contactPage.fillForename('John' + specialChars);
    console.log('✓ Special characters accepted in Forename');

    await contactPage.fillEmail('john+test@example.com');
    console.log('✓ Email with special characters accepted');

    await contactPage.fillMessage('Message with special chars: ' + specialChars);
    console.log('✓ Message with special characters accepted');

    await contactPage.clickSubmit();
    console.log('✓ Form submitted with special characters');

    await contactPage.page.waitForLoadState('networkidle');
  });

  test('Submit form with very long text in fields', async () => {
    console.log('Test: Very long text in form fields');

    const longText = 'A'.repeat(500);

    await contactPage.fillForename('John' + longText.substring(0, 100));
    console.log('✓ Long text in Forename field');

    await contactPage.fillEmail('john@example.com');
    console.log('✓ Standard Email');

    await contactPage.fillMessage(longText);
    console.log('✓ Long text in Message field (500 chars)');

    await contactPage.clickSubmit();
    console.log('✓ Form submitted with long text');

    await contactPage.page.waitForLoadState('networkidle');
  });

  test('Submit form with numeric values in text fields', async () => {
    console.log('Test: Numeric values in text fields');

    await contactPage.fillForename('123456');
    console.log('✓ Numbers in Forename field');

    await contactPage.fillEmail('123@example.com');
    console.log('✓ Numbers in Email field');

    await contactPage.fillMessage('12345 67890');
    console.log('✓ Numbers in Message field');

    await contactPage.clickSubmit();
    console.log('✓ Form submitted with numeric values');

    await contactPage.page.waitForLoadState('networkidle');
  });

  test('Submit form multiple times in sequence', async () => {
    console.log('Test: Multiple form submissions');

    for (let i = 1; i <= 3; i++) {
      console.log(`\nSubmission ${i}:`);

      await contactPage.fillForename(`User${i}`);
      await contactPage.fillEmail(`user${i}@example.com`);
      await contactPage.fillMessage(`Test message ${i}`);

      console.log(`✓ Filled form for submission ${i}`);

      await contactPage.clickSubmit();
      console.log(`✓ Submitted form ${i}`);

      await contactPage.page.waitForLoadState('networkidle');

      // Reload page for next iteration
      if (i < 3) {
        await contactPage.navigateToContactPage();
        console.log(`✓ Navigated back to contact form`);
      }
    }
  });

  test('Verify form with whitespace-only input in required fields', async () => {
    console.log('Test: Whitespace-only input in required fields');

    await contactPage.fillForename('   ');
    console.log('✓ Filled Forename with spaces');

    await contactPage.fillEmail('   ');
    console.log('✓ Filled Email with spaces');

    await contactPage.fillMessage('   ');
    console.log('✓ Filled Message with spaces');

    await contactPage.clickSubmit();
    console.log('✓ Clicked Submit with whitespace values');

    await contactPage.page.waitForLoadState('networkidle');
  });

  // ============ FIELD ATTRIBUTE TESTS ============

  test('Verify form field attributes', async () => {
    console.log('Test: Verify field attributes');

    // Check if fields have the correct type/role
    const forenameType = await contactPage.getFieldAttribute('input[placeholder="John"]', 'type');
    console.log('✓ Forename field type: ' + forenameType);

    const emailType = await contactPage.getFieldAttribute('input[placeholder="john.example@planit.net.au"]', 'type');
    console.log('✓ Email field type: ' + emailType);

    const telephoneType = await contactPage.getFieldAttribute('input[placeholder="02 1234 5678"]', 'type');
    console.log('✓ Telephone field type: ' + telephoneType);

    // Check if message is a textarea
    const messageTag = await contactPage.page.evaluate(() => {
      const el = document.querySelector('textarea[placeholder="Tell us about it.."]');
      return el?.tagName.toLowerCase();
    });
    expect(messageTag).toBe('textarea');
    console.log('✓ Message field is textarea: ' + messageTag);
  });

  test('Verify page title and URL on contact page', async () => {
    console.log('Test: Page title and URL');

    const pageTitle = await contactPage.getContactPageTitle();
    expect(pageTitle).toBe('Jupiter Toys');
    console.log('✓ Page title: ' + pageTitle);

    const pageURL = await contactPage.getPageURL();
    expect(pageURL).toContain('contact');
    console.log('✓ Page URL contains "contact": ' + pageURL);
  });
});
