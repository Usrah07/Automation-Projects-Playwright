const { test, expect } = require('@playwright/test');

test('Verify Elements (Web Tables) Section', async ({ page }) => {
    await page.goto('https://demoqa.com/');

    // Elements
    await page.click("//h5[text()='Elements']");


    await page.click("(//li[@id='item-3'])[1]");
    await page.click("(//button[normalize-space()='Add'])[1]");

    await page.fill("(//input[@id='firstName'])[1]", 'Abcd');
    await page.fill("(//input[@id='lastName'])[1]", 'Xyz');
    await page.fill("(//input[@id='userEmail'])[1]", 'Abcd@auto.com');
    await page.fill("(//input[@id='age'])[1]", '25');
    await page.fill("(//input[@id='salary'])[1]", '10000');
    await page.fill("(//input[@id='department'])[1]", 'QA');


    // submit button  visible
    await page.waitForSelector("//button[@id='submit']", { state: 'visible' });
    await page.click("//button[@id='submit']");

    await page.fill("#searchBox" ,'Cierra');
    await page.waitForTimeout(2000);


    // Edit profile
    await page.click("span[id='edit-record-1'] svg path");
    await page.waitForTimeout(2000);
    await page.fill("(//input[@id='lastName'])[1]", ' vegas');
    await page.click("//button[@id='submit']");
    await page.waitForTimeout(2000);

    //Delete
    await page.click("(//*[name()='path'])[55]");
    await page.waitForTimeout(2000);


});
