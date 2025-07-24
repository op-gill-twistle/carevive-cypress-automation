# Carevive Cypress Automation

This project provides end-to-end automated testing for the Carevive web application using Cypress.

## Features
- **Secure Login Test:** Uses environment variables for credentials to log in to the Carevive app.
- **Page Object Model (POM):** Test logic is abstracted into page classes for maintainability.
- **Selectors in Fixtures:** All DOM selectors are managed centrally in `cypress/fixtures/selectors.json`.
- **Cross-Origin Handling:** Utilizes `cy.origin` to handle post-login assertions on the application domain.
- **Cypress Cloud Integration:** Supports running and recording tests on Cypress Cloud.

## Project Structure
```
cypress/
  e2e/
    carevive-home.cy.js      # Main test spec
    loginPage.js             # Page Object Model classes
  fixtures/
    selectors.json           # All selectors used in tests
  support/
    e2e.js                   # Cypress support file
cypress.config.js            # Cypress configuration
cypress.env.json             # Secure credentials (not committed)
```

## How It Works
- The test visits the login page, enters credentials from environment variables, and clicks login.
- After login, it uses `cy.origin` to assert that the Carevive logo is visible on the homepage.
- All selectors are loaded from the fixture file for easy updates.

## Running the Tests
1. Install dependencies:
   ```sh
   npm install
   ```
2. Set up your credentials in `cypress.env.json` (not committed to git):
   ```json
   {
     "USERNAME": "your-username",
     "PASSWORD": "your-password"
   }
   ```
3. Run tests locally:
   ```sh
   npx cypress run
   ```
4. To run and record tests on Cypress Cloud:
   - Ensure you have a Cypress Cloud account and your project is set up at https://cloud.cypress.io/
   - Get your project record key from the Cypress Cloud dashboard.
   - Add the record key to your `cypress.config.js` or use the CLI argument as shown below.
   - Run the following command:
     ```sh
     npx cypress run --record --key e5135b38-e99c-4766-96e2-0b220527b6bc
     ```
   - After the run, visit your Cypress Cloud dashboard to view results, screenshots, and videos.
   - For CI integration, add your record key and credentials as repository secrets and use the same command in your pipeline.

## Continuous Integration (CI) with GitHub Actions
This project includes a GitHub Actions workflow that automatically runs Cypress tests on Cypress Cloud for every push or pull request to the `main` branch.

### Setup
1. Go to your repository on GitHub.
2. Navigate to **Settings > Secrets and variables > Actions**.
3. Add the following repository secrets:
   - `CYPRESS_USERNAME`: your Carevive test username
   - `CYPRESS_PASSWORD`: your Carevive test password
   - (Optional) `CYPRESS_RECORD_KEY`: your Cypress Cloud record key (not required if hardcoded in the workflow)
4. On every push or pull request to `main`, the workflow in `.github/workflows/cypress-cloud.yml` will run your tests and record results to Cypress Cloud.

You can view the workflow status under the **Actions** tab in your GitHub repository.

## Notes
- Do not hardcode credentials or selectors in test files.
- Update selectors in `cypress/fixtures/selectors.json` as needed.
- For more details, see the code in `cypress/e2e/carevive-home.cy.js` and `cypress/e2e/loginPage.js`.

---
Maintained by Opinderpal Gill
