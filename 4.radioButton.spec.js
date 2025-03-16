const { test, expect } = require('@playwright/test');

test('Verify Elements-Radio Button Funtionality', async ({ page }) => {
    await page.goto('https://demoqa.com/');


    // Elements
    await page.click("//h5[text()='Elements']");


    await page.click("//span[text()='Radio Button']");
    await page.waitForTimeout(2000);


    await page.check("//label[@for='yesRadio']");
    await expect(await page.locator("//label[@for='yesRadio']")).toBeChecked();


    await page.waitForTimeout(2000);


    await page.check("//label[normalize-space()='Impressive']");
    await expect(await page.locator("//label[normalize-space()='Impressive']")).toBeChecked();


});
