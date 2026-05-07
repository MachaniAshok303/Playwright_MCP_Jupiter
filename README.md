# 🚀 Jupiter Toys Automation Framework

Enterprise-grade End-to-End Automation Testing Framework built using
[Playwright](https://playwright.dev?utm_source=chatgpt.com) + [TypeScript](https://www.typescriptlang.org?utm_source=chatgpt.com) with AI-assisted engineering powered by [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com)

---

# 🚀 Quick Start

Get up and running in just 4 steps:

```bash
# 1. Clone the repository
git clone https://github.com/MachaniAshok303/Playwright_MCP_Jupiter.git
cd Playwright_MCP_Jupiter/jupiter-toys/e2e

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Run tests
npm run test
```

---

# 📌 Project Overview

The **Jupiter Toys Automation Framework** is a scalable and maintainable UI automation solution developed for the Jupiter Toys E-Commerce application.

This framework follows modern QA automation engineering standards including:

* ✅ Page Object Model (POM)
* ✅ Cross-browser execution
* ✅ TypeScript-based architecture
* ✅ Reusable utility components
* ✅ Enterprise-ready folder structure
* ✅ AI-assisted framework generation
* ✅ Scalable automation design

---

# 🌐 Application Under Test

| Item             | Details                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------- |
| Application Name | Jupiter Toys                                                                                  |
| Application Type | E-Commerce Web Application                                                                    |
| Application URL  | [Jupiter Toys Application](https://jupiter.cloud.planittesting.com/?utm_source=chatgpt.com#/) |

---

# 🧸 About Jupiter Toys

Jupiter Toys is an online shopping application that offers:

* Toys
* Games
* Puzzles
* Art & Craft
* Teddy Bears
* Bicycles
* Kites
* Sports Products
* Gifts
* Novelties

The platform provides a modern online shopping experience with product browsing and customer interaction workflows.

---

# 🛠️ Technology Stack

| Technology                                                                             | Purpose                     |
| -------------------------------------------------------------------------------------- | --------------------------- |
| [Playwright](https://playwright.dev?utm_source=chatgpt.com)                            | UI Automation Framework     |
| [TypeScript](https://www.typescriptlang.org?utm_source=chatgpt.com)                    | Programming Language        |
| [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com)           | AI-assisted Code Generation |
| [Model Context Protocol (MCP)](https://modelcontextprotocol.io?utm_source=chatgpt.com) | AI Tool Integration         |
| Node.js                                                                                | Runtime Environment         |
| npm                                                                                    | Dependency Management       |
| POM Design Pattern                                                                     | Framework Architecture      |

---

# 🤖 AI-Assisted Engineering

This framework was engineered using:

* GitHub Copilot
* MCP (Model Context Protocol)
* RISE Prompt Engineering

AI assistance was used for:

* Framework setup
* Folder scaffolding
* Automation design
* Test generation
* TypeScript configuration
* Playwright configuration
* README generation

---

# 🏗️ Framework Architecture

The framework follows the **Page Object Model (POM)** architecture.

## Key Components

| Component    | Description                     |
| ------------ | ------------------------------- |
| Base Page    | Common reusable browser actions |
| Page Classes | UI interaction layer            |
| Test Layer   | Test scenarios and validations  |
| Utilities    | Shared helper methods           |
| Config Layer | Framework configuration         |

---

# 📂 Project Structure

```bash id="c1llqg"
jupiter-toys/
└── e2e/
    ├── pages/
    │   ├── BasePage.ts
    │   └── HomePage.ts
    │
    ├── test/
    │   └── home.spec.ts
    │
    ├── utils/
    │
    ├── playwright.config.ts
    ├── tsconfig.json
    ├── package.json
    └── README.md
```

---

# 🎯 Framework Features

## ✅ Automation Capabilities

* Cross-browser testing
* Parallel execution
* Scalable architecture
* Reusable page objects
* Clean TypeScript implementation
* Browser context isolation
* Playwright assertions
* Easy maintenance

---

# 🌍 Browser Support

| Browser  | Status      |
| -------- | ----------- |
| Chromium | ✅ Supported |
| Firefox  | ✅ Supported |
| WebKit   | ✅ Supported |

---

# 🧪 Test Coverage

The framework currently automates:

* Homepage validation
* Title verification
* Browser launch validation
* Navigation testing
* Multi-browser execution

---

# 🔐 Test Credentials

> ⚠️ Important: Never expose real credentials in public repositories.

Create a `.env` file in the `e2e` folder:

```env
TEST_USERNAME=<test-user>
TEST_PASSWORD=<test-password>
```

Reference them in your tests using `process.env.TEST_USERNAME` and `process.env.TEST_PASSWORD`

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```bash id="zvdy6i"
git clone <repository-url>
```

---

## 2️⃣ Navigate to Framework

```bash id="q2u4ry"
cd jupiter-toys/e2e
```

---

## 3️⃣ Install Dependencies

```bash id="cc6pxh"
npm install
```

---

## 4️⃣ Install Playwright Browsers

```bash id="jlwmpp"
npx playwright install
```

---

# ▶️ Execute Tests

## Run Complete Test Suite

```bash id="4dvrhv"
npm run test
```

---

## Run in Headed Mode

```bash id="ibq0w5"
npx playwright test --headed
```

---

## Execute Specific Browser

### Chromium

```bash id="fyjlwm"
npx playwright test --project=chromium
```

### Firefox

```bash id="2r0gl5"
npx playwright test --project=firefox
```

### WebKit

```bash id="j7jqq4"
npx playwright test --project=webkit
```

---

# 📦 Dependencies

```bash id="upmx7m"
npm install -D @playwright/test
npm install -D typescript
npm install -D ts-node
npm install -D @types/node
```

---

# 📄 Sample Test Scenario

The `home.spec.ts` validates:

* Application launch
* Navigation to Jupiter Toys
* Page title verification
* Browser execution across Chromium, Firefox, and WebKit

Expected Title:

```text id="94y9m8"
Jupiter Toys
```

---

# 🧩 RISE Prompt Used

```text id="v4t17y"
Role: As an automation engineer

Input:
Create the following directory structure:
/jupiter-toys/e2e
/jupiter-toys/e2e/test
/jupiter-toys/e2e/pages
/jupiter-toys/e2e/utils

Steps:
Setup and install the following

- Playwright
- Playwright test
- TypeScript
- Setup a POM structure
- Include the necessary dependencies

Include the following:

- Base page class
- Home Page class
- Test Configuration
- TypeScript Configuration
- Playwright Configuration
- README with setup instructions

Expected Output:
Create a home.spec.ts test file that:

- Ensure the package.json is under e2e folder
- Navigates to https://jupiter.cloud.planittesting.com/#/
- Has a test in the home.spec.ts that verifies that the page title is 'Jupiter Toys'
- Runs on Chromium, Webkit and Firefox
- Can be run with 'npm run test'
```

---

# 📈 Reporting & Debugging

Playwright supports:

* HTML Reports
* Trace Viewer
* Screenshots
* Video Recording
* Debug Mode

## Generate Playwright Report

```bash id="3y0p1t"
npx playwright show-report
```

---

# 🚀 CI/CD Ready

This framework is designed for integration with:

* [GitHub Actions](https://github.com/features/actions?utm_source=chatgpt.com)
* [Jenkins](https://www.jenkins.io?utm_source=chatgpt.com)
* [Azure DevOps](https://azure.microsoft.com/en-us/products/devops?utm_source=chatgpt.com)
* [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/?utm_source=chatgpt.com)

---

# 🔮 Future Enhancements

Planned improvements:

* API Automation
* Docker Integration
* Data-Driven Testing
* Environment Management
* Accessibility Testing
* Visual Regression Testing
* AI Self-Healing Tests
* Cloud Execution Support

---

# 🧠 Best Practices Followed

* Page Object Model (POM)
* Reusable components
* Centralized configuration
* Strong typing with TypeScript
* Maintainable locator strategy
* Clean code principles
* Scalable framework design

---

# 👨‍💻 Author

Developed as part of modern AI-assisted QA Automation Engineering practices using:

* Playwright
* MCP
* GitHub Copilot
* TypeScript

---

# 📜 License

This project is intended for:

* QA Automation Learning
* Framework Demonstrations
* Automation Engineering Practice
* AI-assisted Testing Research

---

# ⭐ Support

If you found this project useful:

* ⭐ Star the repository
* 🍴 Fork the repository
* 🛠️ Contribute enhancements
* 📢 Share with the QA community

---

# 📬 Contact

For collaboration or automation discussions:

* Open an Issue
* Create a Pull Request
* Connect via GitHub
