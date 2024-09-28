

describe('Demo Tests', async() =>
{
    it('Validate Drag and Drop', async() =>
    {

        await browser.url("https://the-internet.herokuapp.com/drag_and_drop")
       
        await browser.pause(5000);

        const eleA =  await $('#column-a');

        const eleB = await $('#column-b');

        await eleA.dragAndDrop(eleB);
    })

    it('Validate Checkboxes', async() =>
    {
        await browser.url("https://the-internet.herokuapp.com/checkboxes");

        await browser.pause(5000);

        const checkbox1 = await $("(//input[normalize-space(text='checkbox')])[1]")

        const checkbox2 = await $("(//input[normalize-space(text='checkbox')])[2]")


        if (!(await checkbox1.isSelected())) {
            await checkbox1.click();
        }
        
        await browser.pause(2000);
        if ((await checkbox2.isSelected())) {
            await checkbox2.click();
        }
        
        await browser.pause(6000);
        
    })

    


})