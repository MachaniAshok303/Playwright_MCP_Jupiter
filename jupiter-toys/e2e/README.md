# Jupiter Toys E2E Automation

This project contains end-to-end automation tests for Jupiter Toys using Playwright and Page Object Model (POM) architecture.

## Project Structure

```
jupiter-toys/e2e/
├── test/                    # Test files
│   ├── home.spec.ts         # Home page tests
│   └── login.spec.ts        # Login scenario tests
├── pages/                   # Page Object Model classes
│   ├── basePage.ts          # Base page class with common methods
│   ├── homePage.ts          # Home page class
│   ├── loginPage.ts         # Login page class
│   └── locators.ts          # Centralized element locators
├── utils/                   # Utility functions and helpers
│   ├── screenshotUtil.ts    # Screenshot utility for test steps
│   └── allureUtil.ts        # Allure reporting utilities
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies and scripts
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the e2e directory:
   ```bash
   cd jupiter-toys/e2e
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Run all tests on all browsers (Chromium, Firefox, WebKit):
```bash
npm run test
```

Run tests in UI mode (interactive):
```bash
npm run test:ui
```

Run tests in debug mode:
```bash
npm run test:debug
```

Run tests on specific browser:
```bash
npm run test:chromium    # Chromium only
npm run test:firefox     # Firefox only
npm run test:webkit      # WebKit only
```

## Allure Report

Allure Report provides beautiful and detailed test execution reports with rich visualizations.

### Generating Allure Report

After running tests, generate the Allure report:
```bash
npm run allure:report
```

### Viewing Allure Report

Open the generated Allure report in your default browser:
```bash
npm run allure:show
```

### Allure Report Features

- ✅ Detailed test execution history
- ✅ Screenshots and video attachments
- ✅ Test duration analytics
- ✅ Failed test analysis
- ✅ Retry information
- ✅ Categorical test grouping
- ✅ Timeline view
- ✅ Behaviors and features mapping

### One-Command Workflow

Run tests and generate report in one command:
```bash
npm run test:headed && npm run allure:report && npm run allure:show
```

## Configuration Files

### playwright.config.ts
- Configures Playwright to run tests on Chromium, Firefox, and WebKit
- Sets base URL to `https://jupiter.cloud.planittesting.com/#/`
- Enables HTML reports, screenshots, and traces
- Test directory set to `./test`

### tsconfig.json
- Configured for ES modules and modern JavaScript
- Strict type checking enabled
- Includes Playwright test types

### package.json
- Contains all required dependencies:
  - `@playwright/test`: Playwright testing framework
  - `typescript`: TypeScript compiler
  - `@types/node`: Node.js type definitions
  - `allure-commandline`: Allure report generator CLI
  - `allure-playwright`: Playwright integration with Allure

### playwright.config.ts
- Configures Playwright to run tests on Chromium, Firefox, and WebKit
- Sets base URL to `https://jupiter.cloud.planittesting.com/#/`
- Enables multiple reporters:
  - HTML report (html-report folder)
  - Allure report (allure-results folder)
  - Console list output
- Enables screenshots and traces for debugging

## Page Object Model (POM)

The project uses the Page Object Model pattern for maintainability and reusability:

### BasePage (pages/basePage.ts)
Base class containing common methods:
- `navigateTo(url)`: Navigate to a URL
- `getPageTitle()`: Get the current page title
- `getPageURL()`: Get the current page URL
- `waitForPageLoad()`: Wait for page to load
- `clickElement(selector)`: Click an element
- `fillText(selector, text)`: Fill text in input
- `getText(selector)`: Get text from element

### HomePage (pages/homePage.ts)
Extends BasePage with home page-specific functionality:
- `navigateToHomePage()`: Navigate to Jupiter Toys home page
- `getHomePageTitle()`: Get the page title
- `verifyPageTitleIsJupiterToys()`: Verify page title
- `clickLoginButton()`: Click the login button

### LoginPage (pages/loginPage.ts)
Extends BasePage with login-specific functionality:
- `enterUsername(username)`: Enter username in login form
- `enterPassword(password)`: Enter password in login form
- `clickLoginButton()`: Click login button in popup
- `getLoggedInUsername()`: Get logged-in username from profile
- `verifyUserLoggedIn(expectedUsername)`: Verify user is logged in
- `login(username, password)`: Complete login process

### Locators (pages/locators.ts)
Centralized element locators for all pages:
- `homePageLocators` - Navigation elements
- `loginPopupLocators` - Login form elements
- `userProfileLocators` - User display elements

## Utilities

### Screenshot Utility (utils/screenshotUtil.ts)
Automatic screenshot capture for test steps:
- `initializeScreenshotDir()`: Create screenshots directory
- `takeScreenshot(page, stepName)`: Take screenshot with step name
- `captureStepScreenshot(page, actionDescription)`: Capture step screenshot
- `resetStepCounter()`: Reset counter for new test

Screenshots are automatically captured for each test step and saved to the `screenshots/` folder with timestamps and step descriptions.

### Allure Utility (utils/allureUtil.ts)
Helper functions for enhanced Allure reporting:
- `addStep(stepName, action)`: Add step with error handling
- `addAttachment(name, content, type)`: Attach files to report
- `logDetail(key, value)`: Log test details

## Test Examples

### home.spec.ts
Contains tests for the Jupiter Toys home page:
- Verifies that the page title is "Jupiter Toys"
- Runs on Chromium, Firefox, and WebKit
- Includes page load verification
- Captures screenshots for each step

### login.spec.ts
Contains complete login scenario:
- Navigate to Jupiter Toys URL
- Validate page title is "Jupiter Toys"
- Click login button in navigation
- Enter username "Ashok"
- Enter password "letmein"
- Click login button in popup
- Verify username "Ashok" is displayed
- Screenshots captured for each step

## Best Practices

1. **Use Page Objects**: All interactions should go through page object classes
2. **Reuse Base Methods**: Common actions are in BasePage
3. **Organize Tests**: Group related tests using `test.describe()`
4. **Wait for Elements**: Always wait for page load before assertions
5. **Type Safety**: Leverage TypeScript for better code quality

## Troubleshooting

### Tests fail with network timeout
- Increase timeout in `playwright.config.ts` if needed
- Check internet connection to `https://jupiter.cloud.planittesting.com`

### TypeScript compilation errors
- Ensure `npm install` has been run
- Check that all imports use correct relative paths

### Browser crashes
- Ensure you have sufficient system resources
- Try running tests on one browser at a time

### Allure report not generating
- Ensure `allure-commandline` is installed: `npm install --save-dev allure-commandline`
- Check that `allure-results` folder is created after test run
- Verify Allure is properly configured in `playwright.config.ts`

### Allure cannot be found
- Reinstall dependencies: `npm install`
- Try running with npx: `npx allure generate --clean -o allure-report`

### Screenshots not appearing in Allure report
- Verify screenshot files are being created in `screenshots/` folder
- Check that `ScreenshotUtil` is properly initialized in test files
- Ensure Allure reporter has access to screenshot files

## Next Steps

1. Add more page objects for different sections of the application
2. Create utility functions in `utils/` folder for common operations
3. Add test data management
4. Implement custom reporters if needed
5. Set up CI/CD pipeline for automated test execution

## Contributing

When adding new tests:
1. Create corresponding page objects in `pages/` folder
2. Add tests to appropriate spec file in `test/` folder
3. Follow POM principles
4. Use meaningful test names
5. Add comments for complex test logic
