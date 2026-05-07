# Allure Report Guide

This guide explains how to use Allure Report for beautiful and detailed test execution reports in the Jupiter Toys project.

## What is Allure Report?

Allure is a flexible, lightweight test report framework that supports several popular testing frameworks including Playwright. It produces beautiful, detailed HTML reports with rich visualizations.

## Installation

Allure dependencies are already included in `package.json`:
- `allure-commandline` - CLI tool for generating reports
- `allure-playwright` - Playwright integration

Install or update dependencies:
```bash
npm install
```

## Quick Start

### 1. Run Tests
```bash
npm run test
```

Tests will generate results in the `allure-results` folder.

### 2. Generate Report
```bash
npm run allure:report
```

This creates the `allure-report` folder with the HTML report.

### 3. View Report
```bash
npm run allure:show
```

Opens the report in your default browser.

## Combined Workflow

Run tests with headed mode and automatically generate and open the report:

```bash
npm run test:headed && npm run allure:report && npm run allure:show
```

## Report Features

### Test Results
- ✅ Pass/Fail status for each test
- ⏱️ Execution time
- 🔄 Retry attempts
- 📊 Flaky test detection

### Test Details
- 📝 Test descriptions
- 👥 Test owners/assignees
- 🏷️ Labels and categories
- 📎 Attachments (screenshots, logs)

### Visualizations
- 📉 Timeline view of test execution
- 📊 Statistics dashboard
- 🎯 Category distribution
- 🔗 Behavior mapping

### Advanced Features
- 🔍 Full-text search
- 📈 History trends
- 🐛 Failure analysis
- 💾 Test history tracking

## Screenshot Integration

Screenshots are automatically captured during test execution and embedded in the Allure report:

1. **Automatic Capture**: Screenshots are taken at each major step
2. **Storage**: Saved in `screenshots/` folder with timestamps
3. **Report Display**: Available in the Allure report for easy review

The `ScreenshotUtil` automatically:
- Creates numbered screenshots per step
- Includes descriptive names
- Tracks execution flow visually

## Report Structure

### Dashboard
Shows overview statistics:
- Total tests run
- Pass/Fail count
- Execution duration
- Recent history

### Test Cases
Lists all test cases with:
- Status (Passed/Failed)
- Execution time
- Number of steps
- Attachments
- Error details (if failed)

### Failures
Dedicated section showing:
- Failed test names
- Error messages
- Stack traces
- Screenshots
- Suggested fixes

### Timeline
Visual representation of:
- Test execution order
- Parallel execution (if enabled)
- Duration per test
- Overall execution time

## Accessing Reports

### Local Browser
After generating report, open in browser:
```bash
npm run allure:show
```

### Report Location
Generated reports are stored in:
- `allure-report/` - Final HTML report
- `allure-results/` - Raw test results (JSON files)

### Reports Folder Structure
```
allure-report/
├── data/
├── plugins/
├── index.html          # Main report file
└── styles/
```

## CI/CD Integration

### GitHub Actions Example
```yaml
- name: Run Tests
  run: npm run test

- name: Generate Allure Report
  run: npm run allure:report

- name: Publish Report
  uses: simple-elf/allure-report-action@master
  if: always()
```

## Customization

### Report Title
Modify in `allure-results/environment.properties`:
```properties
Name=Jupiter Toys Tests
```

### Custom Categories
Create `allure-results/categories.json`:
```json
[
  {
    "name": "UI Issues",
    "description": "Issues with UI rendering"
  },
  {
    "name": "API Issues",
    "description": "Issues with API calls"
  }
]
```

## Best Practices

1. **Clear Test Names**: Use descriptive test names for easy identification
2. **Meaningful Steps**: Break tests into clear logical steps
3. **Attach Evidence**: Include screenshots, logs, and videos
4. **Categorize Tests**: Use labels for easy filtering
5. **Regular Cleanup**: Clear old reports to save disk space

## Troubleshooting

### Allure Command Not Found
```bash
# Use npx to run locally installed allure
npx allure generate --clean -o allure-report
npx allure open allure-report
```

### No Report Generated
1. Verify tests ran successfully: Check `allure-results/` folder
2. Ensure Allure reporter configured: Check `playwright.config.ts`
3. Reinstall dependencies: `npm install`

### Report Shows Empty Results
- Check that tests actually completed
- Verify `allure-results` folder has JSON files
- Clear cache: `rm -rf allure-results/ allure-report/`

### Cannot Open Report
- Ensure browser is available
- Try opening `allure-report/index.html` manually
- Check browser security settings

## Advanced Usage

### Generate Report for Specific Results
```bash
npx allure generate allure-results/ --clean -o my-custom-report/
```

### Merge Multiple Result Sets
```bash
npx allure generate allure-results/ test-results/ --clean -o merged-report/
```

### Clean Results
```bash
npx allure clean
```

## Documentation Links

- [Allure Official Documentation](https://docs.qameta.io/allure/)
- [Playwright Adapter](https://github.com/allure-framework/allure-js)
- [Allure Features](https://docs.qameta.io/allure/latest/)

## Key Commands Reference

```bash
# Run tests and generate report
npm run test && npm run allure:report && npm run allure:show

# Run tests in headed mode with report
npm run test:headed && npm run allure:report && npm run allure:show

# Just generate report
npm run allure:report

# Just view existing report
npm run allure:show

# Clean allure results
npx allure clean
```

## Conclusion

Allure Report transforms raw test results into beautiful, actionable insights. Use it to:
- Share results with stakeholders
- Track testing trends
- Debug test failures
- Maintain quality standards
- Document test coverage
