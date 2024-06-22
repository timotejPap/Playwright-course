import test, { expect } from "../fixtures/basePages";


test.describe("Login", () => {
  test.beforeEach(async ({ loginPage }) => {
  await loginPage.gotoLoginPage();
});

test('Succesfull login', async ({ page, loginPage }) => {
  await loginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");
});

test('Invalid login - valid username, invalid password', async ({ page, loginPage }) => {
  test.info().annotations.push({
    type: "Test",
    description: "This test will pass if  user is not able login with valid username and invalid password"
    });
    await test.step("Enter valid username", async () => {
      await loginPage.enterValidUserName();
    });
    await test.step("Enter invalid password", async () => {
      await loginPage.enterInvalidPassword();
    });
    await test.step("Click login button", async () => {
      await loginPage.clickloginButton();
    });
      await test.step("Verify invalid credentials", async () => {
       await expect(loginPage.errorMessage, "Can not find login error message").toBeVisible();
    });
});

test('Invalid login - invalid username, valid password', async ({ page, loginPage, browserName }) => {
  await loginPage.enterInvalidUserName();
  await loginPage.enterValidPassword();
  await loginPage.clickloginButton();
  await expect(loginPage.errorMessage).toBeVisible();
});

test('Invalid login - empty username, empty password', async ({ page, loginPage }) => {
  await loginPage.clickloginButton();
  await expect(loginPage.emptyFields).toBeVisible();
});

test('Cannot login with locked out user', async ({ page, loginPage }) => {
  await loginPage.enterLockedOutUser();
  await loginPage.enterValidPassword();
  await loginPage.clickloginButton();
  await expect(loginPage.lockedOutUserMessage).toBeVisible();
 });

 
});