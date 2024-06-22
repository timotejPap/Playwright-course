// @ts-check
const { test, expect } = require('@playwright/test');
const { setDefaultResultOrder } = require('dns');
const { get } = require('http');

test('has title', async ({ page }) => {
  await page.goto('https://www.google.sk/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});


test.use({baseURL: "https://www.saucedemo.com/v1/"});
test('get started link', async ({ page }) => {
  await page.goto('/');
  page.locator("//input[@data-test=username]");

  // Click the get started link.
  await page.getByRole('link', { name: 'Swag labs' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});