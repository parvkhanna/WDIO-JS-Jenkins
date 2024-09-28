const { $ } = require('@wdio/globals')
const Page = require('./BasePage');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get signInTab()
    {
        return $(`#login2`)
    }

   
    get inputUsername () {
        return $('#loginusername')
    }

    get btnContinue()
    {
        return $('#loginpassword')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {

        await expect(this.signInTab).toBeClickable()
        (await this.signInTab).click
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        // await this.btnSignIn.click();
        await browser.keys('Enter')
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
