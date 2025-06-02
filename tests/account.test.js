const { test, expect } = require('@playwright/test');
const { SalesforceLoginPage } = require('../pages/SalesforceLoginPage');
const { AccountPage } = require('../pages/AccountPage');

test('Yeni Account oluşturma testi (CyanGate)', async ({ page }) => {
  const loginPage = new SalesforceLoginPage(page);
  const accountPage = new AccountPage(page);

 
  await loginPage.goto();
  await loginPage.login('hayvar58148@agentforce.com', 'Dogukan0202.');

  
  await accountPage.goToAccountsPage();

  
  await accountPage.createAccount('CyanGate', 'EMEA');

  
  const result = await accountPage.isAccountCreatedSuccessfully();
  expect(result).toBeTruthy();
});
