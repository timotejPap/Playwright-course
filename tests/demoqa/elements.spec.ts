import { test, expect } from '@playwright/test';
import { TextBox } from './pages/TextBox';
import { CheckBox } from './pages/CheckBox';


test("TextBox", async ({page}) => {
    const textBox = new TextBox (page); 
    await textBox.goToElements();
    await textBox.clickOnElements();
    await textBox.clickOnTextBox();
    await textBox.inputUsername();
    await textBox.inputEmail();
    await textBox.inputAddress();
    await textBox.submitButton();
});

test("CheckBox", async ({page, }) => {
    const textBox = new TextBox (page); 
    const checkBox = new CheckBox (page); 
    await textBox.goToElements();
    await textBox.clickOnElements();
    await checkBox.clickOnCheckBox();
    await checkBox.clickOnArrow();
    await checkBox.clickOnDesktopCheckBox();
    await checkBox.clickOnDesktopCheckBoxCommands();
})