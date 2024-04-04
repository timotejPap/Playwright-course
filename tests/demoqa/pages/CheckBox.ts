import { Locator, Page } from "@playwright/test";

export class CheckBox {
    page: Page;
    arrowClick: Locator;
    checkBoxClick: Locator;
    desktopCheckbox: Locator;
    desktopCheckBoxCommands: Locator;

    constructor(page: Page) {
        this.page = page;
        this.arrowClick = page.getByLabel('Toggle');
        this.checkBoxClick = page.getByText("Check Box");
        this.desktopCheckbox = page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img');
        this.desktopCheckBoxCommands = page.locator('label').filter({ hasText: 'Commands' }).getByRole('img');
    }
    
    async clickOnArrow () {
        await this.arrowClick.click();
    }    
   
    async clickOnCheckBox () {
        await this.checkBoxClick.click();
    }   
    
    async clickOnDesktopCheckBox () {
        await this.desktopCheckbox.first().click();
    }
    
    async clickOnDesktopCheckBoxCommands () {
        await this.desktopCheckBoxCommands.first().click();
    }

}