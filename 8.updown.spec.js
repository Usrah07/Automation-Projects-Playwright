const { test, expect } = require('@playwright/test');

test('Verify download & upload functionality', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://demoqa.com/upload-download');


    await page.waitForTimeout(2000);

    //Download File
    await page.click('#downloadButton');
    await page.waitForTimeout(2000);

    //Upload File

    const handle = page.locator("//input[@id='uploadFile']");
    await handle.setInputFiles("C:/Users/DBA/Downloads/sampleFile.jpeg"); //file path

    await page.pause();
    await page.waitForTimeout(2000);
});
