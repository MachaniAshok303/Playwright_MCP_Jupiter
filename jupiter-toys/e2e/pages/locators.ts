/**
 * Locators for all pages in Jupiter Toys application
 * Centralized locator management for POM
 */

export const homePageLocators = {
  // Navigation
  navHome: '#nav-home',
  navShop: '#nav-shop',
  navContact: '#nav-contact',
  navLogin: '#nav-login',
  navUser: '#nav-user',
};

export const loginPopupLocators = {
  // Login form elements
  loginLabel: '/html/body/div[3]/div[2]/form/div[2]/label',
  usernameField: '#loginUserName',
  passwordField: '#loginPassword',
  loginButton: 'button[type="submit"].btn.btn-primary',
  
  // Success indicators
  userSpan: 'span.user',
};

export const userProfileLocators = {
  // User profile elements
  loggedInUser: 'span.user',
};

export const contactFormLocators = {
  // Contact form fields
  forenameField: 'input[placeholder="John"]',
  surnameField: 'input[placeholder="Example"]',
  emailField: 'input[placeholder="john.example@planit.net.au"]',
  telephoneField: 'input[placeholder="02 1234 5678"]',
  messageField: 'textarea[placeholder="Tell us about it.."]',
  submitButton: 'a:has-text("Submit")',
  
  // Form labels
  forenames: ':text("Forename *")',
  surname: ':text("Surname")',
  email: ':text("Email *")',
  telephone: ':text("Telephone")',
  message: ':text("Message *")',
};
