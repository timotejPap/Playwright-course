import { test, expect } from '@playwright/test';
import { LoginPageprof } from './page_objects_profesia/login_page_prof';
import { HomePageProf } from './page_objects_profesia/home_page_prof';


test("Searching job in city", async ({page}) => {
    const loginPage = new LoginPageprof (page);
    const homePage = new HomePageProf (page);
    await loginPage.goToPage();
    await loginPage.enterToLogin();
    await loginPage.login();
    await page.getByText("Vytvorte si životopis");
    // await homePage.searchJobinput();
    // await page.keyboard.press("Enter");
    // await homePage.searchCityinput();
    // await homePage.searchButtonClick();
});
