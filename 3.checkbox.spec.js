const { test, expect } = require('@playwright/test');


test('Verify Elements-(Checkbox) Section', async ({ page }) => {
    await page.goto('https://demoqa.com/');


    //Elements
    await page.click("//h5[text()='Elements']");


    await page.click("//span[text()='Check Box']");
    await page.click("//button[@title='Expand all']");
    await page.waitForTimeout(2000);


    await page.check("//span[text()='Desktop']");


    await page.check("//label[@for='tree-node-angular']//span[@class='rct-checkbox']");


});