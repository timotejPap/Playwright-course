import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/login");
});

test.describe("Authentication", () => {
    test.only("Succesfull login", async ({ page }) => {
        await page.getByText("ivanHroz").isVisible();
        expect (page.getByRole("button", { name: "Log out" }));
    });
});
