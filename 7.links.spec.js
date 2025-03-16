const { test, expect } = require('@playwright/test');


test('Elements Section Test - Verify All the Links', async ({ page, context }) => {
    await page.goto('https://demoqa.com/');


    await page.click("//h5[text()='Elements']");
    await page.click("(//li[@id='item-5'])[1]");
    await page.waitForTimeout(2000);


    // Following links will open in a new tab and close
    const [newPage1] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#simpleLink').click()
    ]);
    await newPage1.waitForLoadState();
    console.log('First link opened:', newPage1.url());
    await newPage1.close();
   
    await page.waitForTimeout(2000);
   
    const [newPage2] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('#dynamicLink').click()
    ]);

    await newPage2.waitForLoadState();
    console.log('Second link opened:', newPage2.url());
    await newPage2.close();
    await page.waitForTimeout(2000);

    // Following links will send an API call
    await page.click("//a[@id='created']");
    await page.waitForTimeout(1000);

    await page.click("//a[@id='no-content']");
    await page.waitForTimeout(1000);

    await page.click("//a[@id='moved']");
    await page.waitForTimeout(2000);

    await page.click("//a[@id='bad-request']");
    await page.waitForTimeout(2000);

    await page.click("//a[@id='unauthorized']");
    await page.waitForTimeout(2000);

    await page.click("//a[@id='forbidden']");
    await page.waitForTimeout(2000);


    await page.click("//a[@id='invalid-url']");
    await page.waitForTimeout(2000);

});