import { chromium } from "@playwright/test";

async function globalSetup () {
    const browser = await chromium.launch({headless: true});
    const page = await browser.newPage();

    await page.goto("https://demoqa.com/login");
    await page.getByPlaceholder("UserName").fill("ivanHroz");
    await page.getByPlaceholder("Password").fill("aHoJ-*987");
    await page.getByRole("button", { name: "Login" }).click();
    //check logged in
    await page.waitForURL("https://demoqa.com/profile");

    await page.context().storageState({ path: "./loginAuth.json"});
    await browser.close();
}

export default globalSetup;
