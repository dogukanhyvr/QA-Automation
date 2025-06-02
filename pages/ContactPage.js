class ContactPage {
  constructor(page) {
    this.page = page;
    this.contactsTab = page.locator('a[title="Contacts"]');
    this.newButton = page.locator('button:has-text("New")');
    this.firstNameInput = page.locator('input[name="firstName"]');
    this.lastNameInput = page.locator('input[name="lastName"]');
    this.accountNameInput = page.locator('input[title="Search Accounts"]');
    this.saveButton = page.locator('button:has-text("Save")');
    this.toastMessage = page.locator('span:has-text("was created")');
  }

  async goToContactsTab() {
    await this.contactsTab.click();
    
    await this.page.waitForSelector('button:has-text("New")', { timeout: 10000 });
  }

  async createContact(firstName, lastName, accountName) {
    await this.newButton.click();
    await this.page.waitForSelector('input[name="firstName"]', { timeout: 10000 });

    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.accountNameInput.fill(accountName);
    await this.page.keyboard.press('Enter');

    await this.saveButton.click();
  }

  async isContactCreatedSuccessfully() {
    return await this.toastMessage.isVisible();
  }
}

module.exports = { ContactPage };
