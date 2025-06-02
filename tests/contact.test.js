const { test, expect } = require('@playwright/test');
const { SalesforceLoginPage } = require('../pages/SalesforceLoginPage');
const { AccountPage } = require('../pages/AccountPage');
const { ContactPage } = require('../pages/ContactPage');

test('Yeni Contact oluşturma testi (Brad Scott - CyanGate)', async ({ page }) => {
  const loginPage = new SalesforceLoginPage(page);
  const accountPage = new AccountPage(page);
  const contactPage = new ContactPage(page);

  
  await loginPage.goto();
  await loginPage.login('hayvar58148@agentforce.com', 'Dogukan0202.');

  
  await accountPage.goToAccountsPage();
  await accountPage.createAccount('CyanGate', 'EMEA');

  
  await contactPage.goToContactsTab();

  await contactPage.createContact('Brad', 'Scott', 'CyanGate');

  
  const result = await contactPage.isContactCreatedSuccessfully();
  expect(result).toBeTruthy();
});
