import { waitForAlert } from "../../helpers/customCommands";

import allure from '@wdio/allure-reporter'
describe.only("Verify the functionality of alerts", async ()=>
{

    it("Validate the JS Alert", async ()=>
    {
        allure.startStep("Launch the browser");
        await browser.maximizeWindow();
        allure.startStep("Navigate to the URL")
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        const jsAlertbtn = await $("//button[@onclick='jsAlert()']");
        allure.startStep("Wait for the element to be clickable");
        await jsAlertbtn.waitForClickable();
        allure.startStep("click on the JS Alert button")
        await jsAlertbtn.click();
        allure.startStep("Wait for the alert to be displayed")
        await waitForAlert();
        allure.startStep("Accept the allert");
        await browser.acceptAlert();       // Calling custom alert function from the helpers 
        let result = (await $("//p[@id='result']")).getText();
        console.log(result , "@@@@@@@@@@@@@@@");


    })

    it("Validate the JS Confirm", async ()=>
        {

            await browser.pause(1000);
            allure.startStep("Launch the browser");
            
            await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
            const jsAlertbtn = await $("//button[@onclick='jsConfirm()']");
    
            await jsAlertbtn.waitForClickable();
            await jsAlertbtn.click();
            await waitForAlert();
            await browser.acceptAlert();

            let result = await $("//p[@id='result']");
            await expect(result).toBeDisplayed();
    
    
        })
})