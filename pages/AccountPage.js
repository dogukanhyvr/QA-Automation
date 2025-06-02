class AccountPage {
  constructor(page) {
    this.page = page;

    
    this.accountsTab = page.locator('a[title="Accounts"]');

    
    this.newButton = page.getByRole('button', { name: 'New' });
    this.accountNameInput = page.locator('input[name="Name"]');

    this.regionDropdown = page.locator('label:has-text("Account Region") + div button');
    this.regionOption = (region) =>
      page.locator('lightning-base-combobox-item').filter({ hasText: region });

    this.saveButton = page.getByRole('button', { name: 'Save', exact: true });

    this.toastMessage = page.locator('.forceToastMessage');
  }

  async goToAccountsPage() {
    await this.accountsTab.waitFor({ state: 'visible', timeout: 10000 });
    await this.accountsTab.click();
    await this.newButton.waitFor({ state: 'visible', timeout: 10000 });
  }

  async createAccount(name, region) {
    await this.newButton.click();
    await this.accountNameInput.fill(name);

    await this.regionDropdown.click();
    await this.regionOption(region).click();

    await this.saveButton.click();
  }

  async isAccountCreatedSuccessfully() {
  const toast = this.page.locator('.forceToastMessage');
  await toast.waitFor({ state: 'visible', timeout: 5000 }); 
  return await toast.isVisible();
}


}

module.exports = { AccountPage };
