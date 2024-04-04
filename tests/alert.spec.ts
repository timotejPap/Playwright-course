import test, { expect } from "../fixtures/basePages";


test.describe("Alert", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/alerts");
   })

    test('Simple alert', async ({ page }) => {
        page.on("dialog", async dialog => {
            await dialog.accept();
        })
        await page.locator("#alertButton").click();
    });
    
    test('Confirm alert', async ({ page }) => {
        page.on("dialog", async dialog => {
            await dialog.dismiss();
        })
        await page.locator("#confirmButton").click();
        await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel");
    });

    test('Prompt alert', async ({ page }) => {
        page.on("dialog", async dialog => {
            await dialog.accept("Timo");
        })
        await page.locator("#promtButton").click();
        await expect(page.locator("#promptResult")).toHaveText("You entered Timo");
    });
})