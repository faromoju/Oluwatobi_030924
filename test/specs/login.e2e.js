const { landingScreenObject } = require("../screens/landingScreen");
const { loginScreenObject } = require("../screens/loginScreen");

var validEmailAddress = "test@user1.com";
var validPassword = "Password1.";
var invalidEmailAddress = "test";
var nonExistentEmailAddress = "test@user2020.com";
var incorrectPassword = "Passingword1";

describe('Login to QaApp', () => {
    before(async () => {
        //Navigate to Login Screen using xpath
        await landingScreenObject.loginButton().click();

        //Wait for Login Screen to be loaded
        await loginScreenObject.welcomeBackTitle().waitForDisplayed({ timeout: 30000 })
    })

    it('Verify that inputs can be entered in the Email Address field', async () => {
        //Access the Email Address field using xpath
        await loginScreenObject.inputEmailAddress().setValue(validEmailAddress);

        //Verify that a value is entered in the Email Address field
        await expect(loginScreenObject.inputEmailAddress()).toHaveText(validEmailAddress);

        //Clear the inputted value
        await loginScreenObject.inputEmailAddress().clearValue();
    })

    it('Verify that inputs can be entered in the Password field', async () => {
        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Verify that a value is entered in the Password field
        await expect(loginScreenObject.inputPassword()).toHaveText(validPassword);

        //Clear the inputted value
        await loginScreenObject.inputPassword().clearValue();
    })

    it('Verify that the Password Toggle Button is functional', async () => {
        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Access the Password Toggle Button using xpath to show Password
        await loginScreenObject.passwordToggleButton().click();

        //Verify that the Password is now visible
        await expect(loginScreenObject.inputPassword()).toHaveAttribute('password', "false");

        //Access the Password Toggle Button using xpath to hide Password
        await loginScreenObject.passwordToggleButton().click();

        //Verify that the Password is now hidden
        await expect(loginScreenObject.inputPassword()).toHaveAttribute('password', "true");

        //Clear the inputted value
        await loginScreenObject.inputPassword().clearValue();
    })

    it('Verify that user cannot Login without Email Address', async () => {
        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click()

        //Verify that the Empty Email Address Error Message is displayed
        await expect(loginScreenObject.emptyEmailError()).toHaveText("'Email' must not be empty.")

        //Clear the inputted value
        await loginScreenObject.inputPassword().clearValue();
    })

    it('Verify that user cannot Login with Invalid Email Address', async () => {
        //Access the Email Address field using xpath and send an Invalid Email Address
        await loginScreenObject.inputEmailAddress().setValue(invalidEmailAddress);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click()

        //Verify that the Email Error Message is displayed
        await expect(loginScreenObject.invalidEmailError()).toHaveText("'Email' is not a valid email address.")

        //Clear the inputted value
        await loginScreenObject.inputEmailAddress().clearValue();
    })

    it('Verify that user cannot Login without Password', async () => {
        //Access the Email Address field using xpath
        await loginScreenObject.inputEmailAddress().setValue(validEmailAddress);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click()

        //Verify that the Password Error Message is displayed
        await expect(loginScreenObject.emptyPasswordError()).toHaveText("'Password' must not be empty.")

        //Clear the inputted values
        await loginScreenObject.inputEmailAddress().clearValue();
    })

    it('Verify that user cannot Login with Non-Existent Email Address', async () => {
        //Access the Email Address field using xpath and send a Non-Existent Email Address
        await loginScreenObject.inputEmailAddress().setValue(nonExistentEmailAddress);

        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click();

        //Wait until the error dialog is displayed
        await loginScreenObject.nonExistentEmailError().waitForDisplayed({ timeout: 30000 });

        //Verify that the Email Error Message is displayed
        await expect(loginScreenObject.nonExistentEmailError()).toHaveText(`${nonExistentEmailAddress} is not connected to a profile on ALAT Office.`)

        //Click Done to exit the Popup
        await loginScreenObject.doneButton().click();

        //Clear the inputted value
        await loginScreenObject.inputEmailAddress().clearValue();
        await loginScreenObject.inputPassword().clearValue();
    })

    it('Verify that user cannot Login with Incorrect Password', async () => {
        //Access the Email Address field using xpath
        await loginScreenObject.inputEmailAddress().setValue(validEmailAddress);

        //Access the Password field using xpath and send an Incorrect Password
        await loginScreenObject.inputPassword().setValue(incorrectPassword);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click();

        //Wait until the error dialog is displayed
        await loginScreenObject.incorrectPasswordError().waitForDisplayed({ timeout: 30000 });

        //Verify that the Password Error Message is displayed
        await expect(loginScreenObject.incorrectPasswordError()).toHaveText("Username/Password is incorrect.");

        //Click Done to exit the Popup
        await loginScreenObject.doneButton().click();

        //Clear the inputted values
        await loginScreenObject.inputEmailAddress().clearValue();
        await loginScreenObject.inputPassword().clearValue();
    })

    it('Verify that user can Navigate back to the Landing Screen', async () => {
        //Wait until the Back Button is clickable
        await loginScreenObject.backButton().waitForDisplayed({ timeout: 30000 });

        //Click the Back Button to navigate back to the Landing Screen
        await loginScreenObject.backButton().click();

        //Verify that user is back on Landing Screen
        await expect(landingScreenObject.landingPageIcon()).toBeDisplayed()

        //Navigate to Login Screen using xpath
        await landingScreenObject.loginButton().click();

        //Wait for Login Screen to be loaded
        await loginScreenObject.welcomeBackTitle().waitForDisplayed({ timeout: 30000 })
    })

    it('Verify that user can Login with Valid Credentials', async () => {
        //Access the Email Address field using xpath
        await loginScreenObject.inputEmailAddress().setValue(validEmailAddress);

        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click();

        //Wait until a response is received
        await loginScreenObject.errorTitle().waitForDisplayed({ timeout: 30000 });

        //Verify if User is able to Login successfully
        await expect(loginScreenObject.errorTitle()).not.toHaveText('Error');

        //Wait until the Back Button is clickable
        await loginScreenObject.doneButton().waitForDisplayed({ timeout: 30000 });

        //Click Done to exit the Popup
        await loginScreenObject.doneButton().click();
    })
})