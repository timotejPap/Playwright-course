import test, { expect } from "../fixtures/basePages";

test.describe("Home Page", () => {
  test.beforeEach(async ({ loginPage }) => {
  await loginPage.gotoLoginPage();
})

  test('Verify home title', async ({ page, loginPage, homePage }) => {
    await loginPage.login();
    await expect(homePage.title).toBeVisible();
  });

  test('Verify cart', async ({ page, loginPage, homePage }) => {
      await loginPage.login();
      await homePage.clickOnItem();
      await homePage.clickBackButton();
      await expect (homePage.title).toBeVisible();
    });
})