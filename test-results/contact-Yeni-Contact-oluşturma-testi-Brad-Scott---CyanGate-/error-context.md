# Test info

- Name: Yeni Contact oluşturma testi (Brad Scott - CyanGate)
- Location: C:\Users\doğukan\Desktop\playwright-salesforce\tests\contact.test.js:6:1

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('button:has-text("New")') to be visible
    - locator resolved to 7 elements. Proceeding with the first one: <button type="button" part="button" kx-type="ripple" lwc-40a585din3p="" aria-disabled="false" name="Global.NewContact" kx-scope="button-neutral" class="slds-button slds-button_neutral">New Contact</button>
    17 × locator resolved to 8 elements. Proceeding with the first one: <button type="button" part="button" kx-type="ripple" lwc-40a585din3p="" aria-disabled="false" name="Global.NewContact" kx-scope="button-neutral" class="slds-button slds-button_neutral">New Contact</button>

    at ContactPage.goToContactsTab (C:\Users\doğukan\Desktop\playwright-salesforce\pages\ContactPage.js:16:21)
    at C:\Users\doğukan\Desktop\playwright-salesforce\tests\contact.test.js:20:3
```

# Page snapshot

```yaml
- link "Skip to Navigation":
  - /url: javascript:void(0);
- link "Skip to Main Content":
  - /url: javascript:void(0);
- text: Sales
- button "Search": Search...
- navigation "Global Header":
  - list:
    - listitem:
      - group:
        - button "Favorite this item":
          - tooltip "This item doesn't support favorites"
        - button "Favorites list":
          - tooltip "Favorites list"
    - listitem:
      - button "Global Actions":
        - tooltip "Global Actions"
    - listitem:
      - button "Guidance Center"
      - tooltip "Guidance Center"
    - listitem:
      - button "Salesforce Help":
        - tooltip "Salesforce Help"
    - listitem:
      - button "Setup":
        - tooltip "Setup"
    - listitem:
      - button "Notifications":
        - tooltip "Notifications"
    - listitem:
      - button "View profile":
        - tooltip "View profile"
- navigation "App":
  - button "App Launcher"
- heading "Sales" [level=1]
- navigation "Global":
  - list:
    - listitem:
      - link "Home":
        - /url: /lightning/page/home
    - listitem:
      - link "Opportunities":
        - /url: /lightning/o/Opportunity/home
      - button "Opportunities List"
    - listitem:
      - link "Leads":
        - /url: /lightning/o/Lead/home
      - button "Leads List"
    - listitem:
      - link "Tasks":
        - /url: /lightning/o/Task/home
      - button "Tasks List"
    - listitem:
      - link "Files":
        - /url: /lightning/o/ContentDocument/home
      - button "Files List"
    - listitem:
      - link "Accounts":
        - /url: /lightning/o/Account/home
      - button "Accounts List"
    - listitem:
      - link "Contacts":
        - /url: /lightning/o/Contact/home
      - button "Contacts List"
    - listitem:
      - link "Campaigns":
        - /url: /lightning/o/Campaign/home
      - button "Campaigns List"
    - listitem:
      - link "Dashboards":
        - /url: /lightning/o/Dashboard/home
      - button "Dashboards List"
    - listitem:
      - link "Reports":
        - /url: /lightning/o/Report/home
      - button "Reports List"
    - listitem:
      - link "Chatter":
        - /url: /lightning/page/chatter
    - listitem:
      - button "Show more navigation items"
    - listitem:
      - button "Edit nav items"
- main:
  - text: Contact
  - paragraph: Contacts
  - heading "My Contacts" [level=1]
  - 'button "Select a List View: Contacts"'
  - group:
    - button "Contact View Settings"
    - button "Refresh"
    - button "Edit List"
    - group:
      - button "New"
      - button "List View"
  - group "Created":
    - text: Created Created
    - button "This Quarter"
    - text: Owner
    - button "Me"
  - group:
    - button "Important Contacts"
    - text: Apply Important Contacts Filter
    - tooltip "Shows the contacts you mark as important. If you filter your view, the same filters apply."
    - button "Show filters"
  - group "Key Performance Indicators":
    - button "Total Contacts 0" [pressed]:
      - paragraph: Total Contacts
      - paragraph: "0"
    - button "No Activity 0":
      - paragraph: No Activity
      - paragraph: "0"
    - button "Help Contacts with no completed activities."
    - button "Idle 0":
      - paragraph: Idle
      - paragraph: "0"
    - button "Help Contacts with past activity but no completed activities in the last 30 days."
    - button "No Upcoming 0":
      - paragraph: No Upcoming
      - paragraph: "0"
    - button "Help Contacts with recently completed activity but no future activities scheduled."
    - button "Overdue 0":
      - paragraph: Overdue
      - paragraph: "0"
    - button "Due Today 0":
      - paragraph: Due Today
      - paragraph: "0"
    - button "Upcoming 0":
      - paragraph: Upcoming
      - paragraph: "0"
    - button "Help Contacts with activities due in the next 30 days."
  - status: 0 items • Filtered by Created Date, Me, Total Contacts
  - group:
    - button "Send List Email" [disabled]
    - button "Assign Label" [disabled]
  - status:
    - img
    - paragraph: Get your contacts engaged
    - paragraph: When there are contacts that match your selections, you'll see them here.
- contentinfo "Utility Bar":
  - list:
    - listitem:
      - button "To Do List"
- status: Success notification.Account "CyanGate" was created. Press Control + F6 to navigate to the next toast notification or focusable region.
```

# Test source

```ts
   1 | class ContactPage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     this.contactsTab = page.locator('a[title="Contacts"]');
   5 |     this.newButton = page.locator('button:has-text("New")');
   6 |     this.firstNameInput = page.locator('input[name="firstName"]');
   7 |     this.lastNameInput = page.locator('input[name="lastName"]');
   8 |     this.accountNameInput = page.locator('input[title="Search Accounts"]');
   9 |     this.saveButton = page.locator('button:has-text("Save")');
  10 |     this.toastMessage = page.locator('span:has-text("was created")');
  11 |   }
  12 |
  13 |   async goToContactsTab() {
  14 |     await this.contactsTab.click();
  15 |     // Sayfa içeriği yüklenene kadar bekle
> 16 |     await this.page.waitForSelector('button:has-text("New")', { timeout: 10000 });
     |                     ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  17 |   }
  18 |
  19 |   async createContact(firstName, lastName, accountName) {
  20 |     await this.newButton.click();
  21 |     await this.page.waitForSelector('input[name="firstName"]', { timeout: 10000 });
  22 |
  23 |     await this.firstNameInput.fill(firstName);
  24 |     await this.lastNameInput.fill(lastName);
  25 |     await this.accountNameInput.fill(accountName);
  26 |     await this.page.keyboard.press('Enter');
  27 |
  28 |     await this.saveButton.click();
  29 |   }
  30 |
  31 |   async isContactCreatedSuccessfully() {
  32 |     return await this.toastMessage.isVisible();
  33 |   }
  34 | }
  35 |
  36 | module.exports = { ContactPage };
  37 |
```