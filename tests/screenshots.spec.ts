import test, { expect } from "../fixtures/basePages";


test.describe("Screenshots", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
    await loginPage.login();
   })

    test('Viewport screenshots', async ({ page }) => {
        await page.screenshot({ path: "screenshots/viewport.png"});
    });

    test('Full page screenshots', async ({ page }) => {
        await page.screenshot({ path: "screenshots/fullpage.png", fullPage: true});
    });
    
    test('Element screenshots', async ({ page }) => {
        await page.locator("#item_0_img_link").screenshot({ path: "screenshots/element.png"});
    });
})