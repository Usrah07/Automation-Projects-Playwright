const { test, expect } = require('@playwright/test');

test('Verify Elements(TextBOX) Section ', async ({ page }) => {
    await page.goto('https://demoqa.com/');


    // Elements
    await page.click("//h5[text()='Elements']");
   
    // Text Box
    await page.click("(//li[@id='item-0'])[1]");
    await page.waitForTimeout(2000);




    await page.fill("#userName", 'Usrah');
    await page.fill("#userEmail", 'sa@example.com');
    await page.fill("#currentAddress", 'road-1, block-a, Dhaka');
    await page.fill("#permanentAddress", 'Barishal');
    await page.click("#submit");
    await page.waitForSelector("//button[@id='submit']", { state: 'visible' });
    await page.waitForTimeout(2000);
});
