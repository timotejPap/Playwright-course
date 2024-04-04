import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessage: Locator;
    emptyFields: Locator;
    lockedOutUserMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
        this.errorMessage = page.getByText("Epic sadface: Username and password do not match any user in this service");
        this.emptyFields = page.getByText("Epic sadface: Username is required");
        this.lockedOutUserMessage = page.getByText("Epic sadface: Sorry, this user has been locked out.");
    }

    async gotoLoginPage() {
        await this.page.goto("https://www.saucedemo.com/v1/");
    }

    async enterValidUserName() {
        await this.userNameInput.fill("standard_user");
    }

    async enterLockedOutUser() {
        await this.userNameInput.fill("locked_out_user");
    }

    async enterInvalidUserName() {
        await this.userNameInput.fill("meno");
    }

    async enterValidPassword() {
        await this.passwordInput.fill("secret_sauce");
    }

    async enterInvalidPassword() {
        await this.passwordInput.fill("heslo");
    }

    async clickloginButton() {
        await this.loginButton.click();
    }

    async login () {
        await this.userNameInput.fill("standard_user");
        await this.passwordInput.fill("secret_sauce");
        await this.loginButton.click();
    }
}
