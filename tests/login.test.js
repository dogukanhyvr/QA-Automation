const { test, expect } = require('@playwright/test');
const { SalesforceLoginPage } = require('../pages/SalesforceLoginPage');

test('Salesforce login testi', async ({ page }) => {
  const loginPage = new SalesforceLoginPage(page);

  await loginPage.goto();
  await loginPage.login('hayvar58148@agentforce.com', 'Dogukan0202.');

  await expect(page).toHaveURL(/.*lightning.force.com.*/);
});
