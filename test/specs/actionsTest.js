describe("Tests to validate different actions with WDIO", async ()=>
{
    it("Validate the context click", async() =>
        {
            await browser.url("https://the-internet.herokuapp.com/context_menu");
    
            const box = await $("#hot-spot");
    
            await box.waitForClickable();
            await box.click({ button: 'right' });
    
            await browser.pause(3000);
        })
    
        it("Validate Drop down" , async() =>
        {
            await browser.url("https://the-internet.herokuapp.com/dropdown");
    
            const dropdown = await $("#dropdown");
    
            await dropdown.selectByVisibleText("Option 2");
    
            await browser.pause(2000);
        })
})