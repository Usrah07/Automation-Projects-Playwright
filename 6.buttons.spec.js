const { test, expect } = require('@playwright/test');


test('Verify Elements-Buttons Section', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    await page.click("//h5[text()='Elements']");
    await page.click("(//li[@id='item-4'])[1]");
    await page.locator("//button[@id='doubleClickBtn']").dblclick();

    await page.locator("//button[@id='rightClickBtn']").click({ button: 'right' });


    await page.click("(//button[normalize-space()='Click Me'])[1]");
    await page.waitForTimeout(2000);


});
