# 🚀 Jupiter Toys Automation Framework

Enterprise-grade End-to-End Automation Testing Framework built using
[Playwright](https://playwright.dev?utm_source=chatgpt.com) + [TypeScript](https://www.typescriptlang.org?utm_source=chatgpt.com) with AI-assisted engineering powered by [GitHub Copilot](https://github.com/features/copilot?utm_source=chatgpt.com) and [Model Context Protocol (MCP)](https://modelcontextprotocol.io?utm_source=chatgpt.com).

---

# 🎯 Prompt Architecture & Workflow

## System Architecture

The framework operates through an intelligent multi-layer architecture that combines LLM reasoning with browser automation:

```
User Prompt
    ↓
LLM Agent
    ↓
MCP Client
    ↓
Playwright MCP Server
    ↓
Browser Automation
    ↓
Website Inspection
    ↓
AI Reasoning
    ↓
Generated Test Cases / Execution
```

## How the Prompt Works

### 1. **User Prompt Layer**
- Users provide natural language instructions for test automation
- Example: *"Create tests to verify login functionality on the Jupiter Toys application"*
- The prompt can describe user interactions, validations, or complex scenarios

### 2. **LLM Agent Layer** 
- The AI agent (GitHub Copilot powered by LLMs) interprets the user prompt
- Analyzes the requirements and maps them to automation tasks
- Uses RISE Prompt Engineering methodology for structured thinking:
  - **R**ole: Defines the automation engineer role
  - **I**nput: Specifies the requirements and application details
  - **S**teps: Breaks down the implementation into actionable steps
  - **E**xpected Output: Defines the deliverable format

### 3. **MCP Client Layer**
- The Model Context Protocol Client acts as a bridge between the LLM and tools
- Translates AI decisions into specific tool calls and operations
- Manages context flow between different components
- Handles state management across tool interactions

### 4. **Playwright MCP Server Layer**
- Receives instructions from the MCP Client
- Provides standardized interfaces for browser automation
- Enables the LLM to control Playwright through structured commands
- Abstracts complex Playwright operations into reusable functions

### 5. **Browser Automation Layer**
- Playwright launches and controls real browsers (Chromium, Firefox, WebKit)
- Executes navigation, clicks, text entry, and other user interactions
- Maintains browser context and session state
- Captures screenshots, traces, and execution artifacts

### 6. **Website Inspection Layer**
- Analyzes the current page state and DOM structure
- Extracts element locators, properties, and content
- Identifies interactive elements and form fields
- Provides real-time feedback about page structure to the LLM

### 7. **AI Reasoning Layer**
- The LLM reasons about what it observes on the page
- Matches observed elements with test requirements
- Determines next actions based on current page state
- Adapts test flow based on dynamic content

### 8. **Generated Test Cases / Execution Layer**
- Test cases are automatically generated based on the analyzed requirements
- Tests are executed in parallel across multiple browsers
- Results are collected and reported with detailed metrics
- Screenshots and traces provide debugging information

---

## Prompt Processing Workflow

### Step 1: Interpretation
```
"Create a test that logs into Jupiter Toys with username 'Ashok' and verifies the dashboard"
        ↓
[LLM analyzes and identifies]:
- Navigate to Jupiter Toys URL
- Locate and click login button
- Enter username and password
- Submit login form
- Verify dashboard elements
```

### Step 2: Context Building
```
[MCP Client gathers]:
- Application URL: https://jupiter.cloud.planittesting.com
- Page elements and their properties
- Available actions and validations
- Current browser state
```

### Step 3: Automation Execution
```
[Playwright MCP Server]:
- Launches browser instances
- Navigates to application
- Performs interactions
- Captures page state at each step
```

### Step 4: Intelligence Loop
```
[AI Reasoning repeats]:
1. Execute action
2. Capture page state
3. Analyze results
4. Determine next step
5. Adapt based on dynamic content
```

### Step 5: Test Generation
```
[Output generated]:
- TypeScript test file (POM-based)
- Test classes and methods
- Assertions and validations
- Error handling
```

---

## MCP Command Components

The MCP execution command follows this structure to orchestrate AI-driven automation:

| Component           | Role                       |
| ------------------- | -------------------------- |
| `/mcp run`          | MCP execution command      |
| `task:`             | Natural language objective |
| `tools: Playwright` | Automation tool            |
| `Code:[agent]`      | Autonomous agent mode      |
| `url:`              | Target application         |

### Example MCP Command

```bash
/mcp run task:"Login to Jupiter Toys with username 'Ashok'" tools:Playwright Code:[agent] url:https://jupiter.cloud.planittesting.com/#/
```

**What happens:**
1. `/mcp run` - Initiates the MCP execution engine
2. `task:` - Specifies the automation goal in natural language
3. `tools:Playwright` - Designates Playwright as the automation framework
4. `Code:[agent]` - Enables autonomous decision-making by the AI agent
5. `url:` - Provides the target application URL

---

## Key Benefits of This Architecture

✅ **Intelligent Automation**: AI understands requirements in natural language  
✅ **Dynamic Adaptation**: Tests adapt based on actual page state  
✅ **Reduced Manual Effort**: Automatic test case generation  
✅ **Maintainability**: AI helps maintain and update tests  
✅ **Cross-Browser Support**: Tests run on Chromium, Firefox, and WebKit  
✅ **Fast Execution**: Parallel execution with detailed reporting  
✅ **Self-Healing**: AI can suggest fixes for broken tests  

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
* ���️ Contribute enhancements
* 📢 Share with the QA community

---

# 📬 Contact

For collaboration or automation discussions:

* Open an Issue
* Create a Pull Request
* Connect via GitHub
