import { test } from "@playwright/test";

test.only("Multiple environments", async ({ page }) => {
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
});