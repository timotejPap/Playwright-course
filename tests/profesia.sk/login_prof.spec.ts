import { test, expect } from '@playwright/test';
import { LoginPageprof } from './page_objects_profesia/login_page_prof';


test("Succesfull login", async ({page}) => {
    const loginPage = new LoginPageprof (page);
    await loginPage.goToPage();
    await loginPage.enterToLogin();
    await loginPage.login();
    await page.getByText("Vytvorte si životopis");
});

test("Invalid login - Valid email, invalid password", async ({page}) => {
    const loginPage = new LoginPageprof (page);
    await loginPage.goToPage();
    await loginPage.enterToLogin();
    await loginPage.enterValidEmail();
    await loginPage.enterInvalidPassword();
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessageLogin).toBeVisible();
});

test("Invalid login - Invalid email, valid password", async ({page}) => {
    const loginPage = new LoginPageprof (page);
    await loginPage.goToPage();
    await loginPage.enterToLogin();
    await loginPage.enterInvalidEmail();
    await loginPage.enterValidPassword();
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessageLogin).toBeVisible();
});

test("Invalid login - Invalid email, invalid password", async ({page}) => {
    const loginPage = new LoginPageprof (page);
    await loginPage.goToPage();
    await loginPage.enterToLogin();
    await loginPage.enterInvalidEmail();
    await loginPage.enterInvalidPassword();
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessageLogin).toBeVisible();
});