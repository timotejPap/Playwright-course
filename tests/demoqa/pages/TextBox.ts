import { Locator, Page } from "@playwright/test";

export class TextBox {
    page: Page;
    elementClick: Locator;
    textBoxClick: Locator;
    userName: Locator;
    userEmail: Locator;
    userAddress: Locator;
    submit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementClick = page.getByRole("heading", {name: "Elements" });
        this.textBoxClick = page.getByText("Text Box");
        this.userName = page.locator("#userName");
        this.userEmail = page.locator("#userEmail");
        this.userAddress = page.locator("#currentAddress");
        this.submit = page.locator("#submit");
    }

    async goToElements () {
        await this.page.goto("https://demoqa.com/");
    }
    
    async clickOnElements () {
        await this.elementClick.click();
    }
    
    async clickOnTextBox () {
        await this.textBoxClick.click();
    }    

    async inputUsername () {
        await this.userName.fill("Ned Stark");
    }

    async inputEmail () {
        await this.userEmail.fill("Ned.Stark@winterfell.com");
    }

    async inputAddress () {
        await this.userAddress.fill("Winterfell, Kingdom of the North");
    }

    async submitButton () {
        await this.submit.click();
    }
}