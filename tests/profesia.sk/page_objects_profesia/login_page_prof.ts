import { Locator, Page } from "@playwright/test";

export class LoginPageprof {
    page:           Page;
    enterLogin:     Locator;
    emailInput:     Locator;
    passwordInput:  Locator;
    loginButton:    Locator;
    errorMessageLogin: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.enterLogin = page.locator("#login_modal")
        this.emailInput = page.getByLabel('PrihláseniePrihlásenie/').locator('#ididx');
        this.passwordInput = page.getByRole('textbox', { name: 'Heslo' });
        this.loginButton = page.locator("#loginModalUserSubmitBtn");
        this.errorMessageLogin = page.getByRole("alert");
    }

    async goToPage () {
        await this.page.goto("https://www.profesia.sk/");
    }

    async enterToLogin () {
        await this.enterLogin.click();
    }

    async enterValidEmail () {
        await this.emailInput.fill("firstname.lastname@domain.com");
    }

    async enterInvalidEmail () {
        await this.emailInput.fill("firstname.lastname@.domain.com");
    }

    async enterValidPassword () {
        await this.passwordInput.fill("GSd4AJ^7dCmD9%");
    }

    async enterInvalidPassword () {
        await this.passwordInput.fill("zleheslo");
    }

    async pressButton () {
        await this.loginButton.click();
    }


// valid Login
    async login () {
        await this.emailInput.fill("firstname.lastname@domain.com");
        await this.passwordInput.fill("GSd4AJ^7dCmD9%");
        await this.loginButton.click();
    }
}