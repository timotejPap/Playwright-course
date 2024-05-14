import { test, expect } from "@playwright/test";

test.use({ storageState: ".auth/user.json"});
test.describe("Home page user", () => {
    test.only("Verify succesfull user login", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.getByText("ivanHroz").isVisible();
    // expect (page.getByRole("button", { name: "Log Out"})).toBeVisible();
});
});

test.use({ storageState: ".auth/admin.json"});
test.describe("Home page admin", () => {
    test("Verify succesfull admin login", async ({ page }) => {
    await page.goto("https://demoqa.com/login");
    await page.getByText("Admin123").isVisible();
    // expect (page.getByRole("button", { name: "Log Out"})).toBeVisible();
});
});