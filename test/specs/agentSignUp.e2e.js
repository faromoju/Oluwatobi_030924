import { agentSignUpObject } from "../screens/agentSignUpScreen";
import { getStartedObject } from "../screens/getStartedScreen";
import { landingScreenObject } from "../screens/landingScreen";
import { loginScreenObject } from "../screens/loginScreen";

var dropdownOption = "WEMA";
var firstName = "Test";
var lastName = "User";
var userNumber = Math.floor(Math.random() * 10000001);
var validEmailAddress = `tester${userNumber}@wemamail.com`;
var invalidEmailAddress = "tester@";
var validPassword = "Testering190";
var invalidPassword = "Testing";
var notMatchPassword = "testing120";
var existingEmailAddress = "test@user1.com"

describe('Sign Up as an Agent on Qa App', () => {
    before(async () => {
        //Navigate to Get Started Screen using xpath
        await landingScreenObject.getStartedButton().click();

        //Wait for Get Started Screen to be loaded
        await getStartedObject.welcomeTitle().waitForDisplayed({ timeout: 300000 });

        //Select Sign Up as an Agent and continue
        await getStartedObject.signUpAgentButton().click();
        await getStartedObject.continueButton().click();

        //Wait for Agent Sign Up Screen to be loaded
        await agentSignUpObject.agentSignUpTitle().waitForDisplayed({ timeout: 300000 });
    })

    it('Verify that the Page Number is accurate', async () => {
        //Verify the Page Number
        await expect(agentSignUpObject.pageNumber()).toHaveText("2/2");
    })

    it('Verify that user cannot Sign Up without selecting Affiliate', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Affiliate Error Message is displayed
        await expect(agentSignUpObject.affiliateErrorMessage()).toHaveText("'Organization Id' must not be empty.");
    })

    it('Verify that user can select an Affiliate', async () => {
        //Click the Affiliate Dropdown
        await agentSignUpObject.affiliateDropdown().click();

        //Select an option from the Dropdown
        await agentSignUpObject.affiliateDropdownOption(dropdownOption).click();
    })

    it('Verify that user cannot Sign Up without First Name', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the First Name Error Message is displayed
        await expect(agentSignUpObject.firstNameErrorMessage()).toHaveText("'First name' must not be empty.");
    })

    it('Verify that inputs can be entered in the First Name field', async () => {
        //Enter a value in the First Name field
        await agentSignUpObject.firstNameInput().setValue(firstName);

        //Verify the value entered in the First Name field
        await expect(agentSignUpObject.firstNameInput()).toHaveText(firstName);
    })

    it('Verify that user cannot Sign Up without Last Name', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Last Name Error Message is displayed
        await expect(agentSignUpObject.lastNameErrorMessage()).toHaveText("'Last name' must not be empty.");
    })

    it('Verify that inputs can be entered in the Last Name field', async () => {
        //Enter a value in the Last Name field
        await agentSignUpObject.lastNameInput().setValue(lastName);

        //Verify the value entered in the Last Name field
        await expect(agentSignUpObject.lastNameInput()).toHaveText(lastName);
    })

    it('Verify that user cannot Sign Up without Email Address', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Email Address Error Message is displayed
        await expect(agentSignUpObject.emptyEmailAddressErrorMessage()).toHaveText("'Email' must not be empty.");
    })

    it('Verify that user cannot Sign Up with Invalid Email Address', async () => {
        //Enter an Invalid Email Address
        await agentSignUpObject.emailAddressInput().setValue(invalidEmailAddress);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Email Address Error Message is displayed
        await expect(agentSignUpObject.invalidEmailAddressErrorMessage()).toHaveText("'Email' is not a valid email address.");

        //Clear Email Address Input
        await agentSignUpObject.emailAddressInput().clearValue();
    })

    it('Verify that valid inputs can be entered in the Email Address field', async () => {
        //Enter a value in the Email Address field
        await agentSignUpObject.emailAddressInput().setValue(validEmailAddress);

        //Verify the value entered in the Email Address field
        await expect(agentSignUpObject.emailAddressInput()).toHaveText(validEmailAddress);
    })

    it('Verify that user cannot Sign Up without Password', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Password Error Message is displayed
        await expect(agentSignUpObject.emptyPasswordErrorMessage()).toHaveText("'Password' must not be empty.");
    })

    it('Verify that user cannot Sign Up with Invalid Password', async () => {
        //Enter an Invalid Password
        await agentSignUpObject.passwordInput().setValue(invalidPassword);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Password Error Message is displayed
        await expect(agentSignUpObject.invalidPasswordErrorMessage()).toHaveText("The length of 'Password' must be at least 8 characters. You entered 7 characters.");

        //Clear Password Input
        await agentSignUpObject.passwordInput().clearValue();
    })

    it('Verify that valid inputs can be entered in the Password field', async () => {
        //Enter a value in the Password field
        await agentSignUpObject.passwordInput().setValue(validPassword);

        //Verify the value entered in the Password field
        await expect(agentSignUpObject.passwordInput()).toHaveText(validPassword);

        //Clear the inputted value
        await agentSignUpObject.passwordInput().clearValue();
    })

    it('Verify that the Password Toggle Button is functional', async () => {
        //Access the Password field using xpath
        await agentSignUpObject.passwordInput().setValue(validPassword);

        //Access the Password Toggle Button using xpath to show Password
        await agentSignUpObject.passwordToggleButton().click();

        //Verify that the Password is now visible
        await expect(agentSignUpObject.passwordInput()).toHaveAttribute('password', "false");

        //Access the Password Toggle Button using xpath to hide Password
        await agentSignUpObject.passwordToggleButton().click();

        //Verify that the Password is now hidden
        await expect(agentSignUpObject.passwordInput()).toHaveAttribute('password', "true");
    })

    it('Verify that user cannot Sign Up without Re-Enter Password', async () => {
        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Re-Enter Password Error Message is displayed
        await expect(agentSignUpObject.emptyReEnterPasswordErrorMessage()).toHaveText("'Repeat Password' must not be empty.");
    })

    it('Verify that user cannot Sign Up with Invalid Re-Enter Password', async () => {
        //Enter an Invalid Password in the Re-Enter Password field
        await agentSignUpObject.reEnterPasswordInput().setValue(invalidPassword);

        //Clear the inputted valid Password and input a value that matches
        await agentSignUpObject.passwordInput().clearValue();
        await agentSignUpObject.passwordInput().setValue(invalidPassword);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Re-Enter Password Error Message is displayed
        await expect(agentSignUpObject.invalidReEnterPasswordErrorMessage()).toHaveText("The length of 'Repeat Password' must be at least 8 characters. You entered 7 characters.");

        //Clear Re-Enter Password Input
        await agentSignUpObject.reEnterPasswordInput().clearValue();

        //Re-Enter the Password Value
        await agentSignUpObject.passwordInput().setValue(validPassword);
    })

    it('Verify that user cannot Sign Up with Passwords that do not match', async () => {
        //Enter a Valid Password that does not match the Entered Password
        await agentSignUpObject.reEnterPasswordInput().setValue(notMatchPassword);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Verify that the Password not equal error Message is displayed
        await expect(agentSignUpObject.passwordNotMatchErrorMessage()).toHaveText("Password not equal");

        //Clear Re-Enter Password Input
        await agentSignUpObject.reEnterPasswordInput().clearValue();
    })

    it('Verify that valid inputs can be entered in the Re-Enter Password field', async () => {
        //Enter a value in the Re-Enter Password field
        await agentSignUpObject.reEnterPasswordInput().setValue(validPassword);

        //Verify the value entered in the Re-Enter Password field
        await expect(agentSignUpObject.reEnterPasswordInput()).toHaveText(validPassword);

        //Clear the inputted value
        await agentSignUpObject.reEnterPasswordInput().clearValue();
    })

    it('Verify that the Re-Enter Password Toggle Button is functional', async () => {
        //Access the Re-Enter Password field using xpath
        await agentSignUpObject.reEnterPasswordInput().setValue(validPassword);

        //Access the Re-Enter Password Toggle Button using xpath to show Password
        await agentSignUpObject.reEnterpasswordToggleButton().click();

        //Verify that the Re-Enter Password is now visible
        await expect(agentSignUpObject.reEnterPasswordInput()).toHaveAttribute('password', "false");

        //Access the Re-Enter Password Toggle Button using xpath to hide Password
        await agentSignUpObject.reEnterpasswordToggleButton().click();

        //Verify that the Re-Enter Password is now hidden
        await expect(agentSignUpObject.reEnterPasswordInput()).toHaveAttribute('password', "true");
    })

    it('Verify that user cannot Sign Up with Existing Email Address', async () => {
        //Enter an Existing Email in the Email Address field
        await agentSignUpObject.emailAddressInput().clearValue();
        await agentSignUpObject.emailAddressInput().setValue(existingEmailAddress);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Wait for Error Dialog to be loaded
        await agentSignUpObject.finalDialogMessage().waitForDisplayed({ timeout: 300000 });

        //Verify that the User is not Onboarded
        await expect(agentSignUpObject.finalDialogMessage()).toHaveText(`${existingEmailAddress} is connected to a profile on ALAT Office.`);

        //Click the Done button
        await agentSignUpObject.doneButton().click();
    })

    it('Verify that user can Sign Up with Valid Details', async () => {
        //Enter a valid Email in the Email Address field
        await agentSignUpObject.emailAddressInput().clearValue();
        await agentSignUpObject.emailAddressInput().setValue(validEmailAddress);

        //Click the Sign Up button
        await agentSignUpObject.signUpButton().click();

        //Wait for Success Dialog to be loaded
        await agentSignUpObject.finalDialogMessage().waitForDisplayed({ timeout: 300000 });

        //Verify that the User is Onboarded
        await expect(agentSignUpObject.finalDialogMessage()).toHaveText("Onboarding Successful");
    })

    it('Verify that the Done Button is functional', async () => {
        //Click the Done button
        await agentSignUpObject.doneButton().click();

        //Wait for Landing Screen to be loaded
        await landingScreenObject.landingPageIcon().waitForDisplayed({ timeout: 300000 });

        //Verify that the User is redirected back to the Landing Screen
        await expect(landingScreenObject.landingPageIcon()).toBeDisplayed();
    })

    it('Verify that the Agent is actually Onboarded [End-To-End Test]', async () => {
        //Click the Login Button
        await landingScreenObject.loginButton().click();

        //Access the Email Address field using xpath
        await loginScreenObject.inputEmailAddress().setValue(validEmailAddress);

        //Access the Password field using xpath
        await loginScreenObject.inputPassword().setValue(validPassword);

        //Access the Log In button using xpath
        await loginScreenObject.loginButton().click();

        //Wait until a response is received
        await loginScreenObject.errorTitle().waitForDisplayed({ timeout: 3000000 });

        //Verify that user has been onboarded but not approved
        await expect(loginScreenObject.nonExistentEmailError()).toHaveText(`Hello ${firstName}, your profile is yet to be approved.`);

        //Click Done to exit the Popup
        await loginScreenObject.doneButton().click();
    })
})