const { test, expect } = require('@playwright/test');

test('Elements Section Test', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    // Elements
    await page.click("//h5[text()='Elements']");
    await page.click("(//div[contains(@class,'icon')])[1]");
    await page.click("(//*[name()='svg'][contains(@stroke,'currentColor')])[2]");
    await page.waitForTimeout(2000);


});
