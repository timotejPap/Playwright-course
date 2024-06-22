import test, { expect, page } from "../fixtures/basePages";
import { LoginPage } from "../page-objects/LoginPage";


test.describe("Visual testing", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
   })

    test('Visual test - login page', async ({ page }) => {
        await expect(page).toHaveScreenshot( { maxDiffPixels:100});
    });
})