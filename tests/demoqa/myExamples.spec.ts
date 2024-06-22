import {test, Page} from "@playwright/test"

test("click on heading Forms", async ({page}) => {
    await page.goto("https://demoqa.com/");
    await page.getByRole('heading', { name: 'Forms' }).click();

});