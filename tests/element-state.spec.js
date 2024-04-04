import {test, expect} from "@playwright/test"

test("Element state", async ({page}) => {
    await page.goto("https://www.saucedemo.com/v1/");
    console.log (await page.locator("#user-name").isEditable());
    console.log (await page.locator("#password").isVisible());
    console.log (await page.locator("#login-button").isHidden());
});