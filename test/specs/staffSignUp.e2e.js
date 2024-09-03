import { getStartedObject } from "../screens/getStartedScreen";
import { landingScreenObject } from "../screens/landingScreen";
import { staffSignUpObject } from "../screens/staffSignUpScreen";

var staffId = "15803"
var boundaryStaffId = "123456789QNWKYSD"

describe('Sign Up as a Staff on Qa App', () => {
    before(async () => {
        //Navigate to Get Started Screen using xpath
        await landingScreenObject.getStartedButton().click();

        //Wait for Get Started Screen to be loaded
        await getStartedObject.welcomeTitle().waitForDisplayed({ timeout: 300000 });

        //Select Sign Up as a Staff and continue
        await getStartedObject.signUpStaffButton().click();
        await getStartedObject.continueButton().click();

        //Wait for Staff Sign Up Screen to be loaded
        await staffSignUpObject.staffSignUpTitle().waitForDisplayed({ timeout: 300000 });
    })

    it('Verify that inputs can be entered in the Staff ID field', async () => {
        //Enter a value in the Staff ID field
        await staffSignUpObject.staffIdInput().setValue(staffId);

        //Verify the value entered in the Staff ID field
        await expect(staffSignUpObject.staffIdInput()).toHaveText(staffId);

        //Clear entered Staff ID
        await staffSignUpObject.staffIdInput().clearValue();
    })

    it('Verify that an empty Staff ID cannot be verified', async () => {
        //Click the Verify Staff ID button
        await staffSignUpObject.verifyButton().click();

        //Verify that the error message is displayed
        await expect(staffSignUpObject.staffIdErrorMessage()).toHaveText("Staff ID is required");
    })

    it('Verify that Staff ID cannot accept greater 15 characters', async () => {
        //Enter a Staff ID with 16 characters in the field
        await staffSignUpObject.staffIdInput().setValue(boundaryStaffId);

        //Verify the value entered in the Staff ID field
        await expect(staffSignUpObject.staffIdInput()).toHaveText("123456789QNWKYS");

        //Clear Staff ID
        await staffSignUpObject.staffIdInput().clearValue();
    })

    it('Verify that a Non-Existent Staff ID is not verified', async () => {
        //Enter a Non-Existent Staff ID in the field
        await staffSignUpObject.staffIdInput().setValue(staffId);

        //Click the Verify Staff ID button
        await staffSignUpObject.verifyButton().click();

        //Wait for the Error Message to be displayed
        await staffSignUpObject.nonExistentStaffErrorMessage().waitForDisplayed({ timeout: 3000000 });

        //Verify that the Staff ID is not verified
        await expect(staffSignUpObject.nonExistentStaffErrorMessage()).toHaveText("No matching record found.");

        //Click Done Button
        await staffSignUpObject.doneButton().click();
    })

    it('Verify that user can Navigate back to the Get Started Screen', async () => {
        //Click the Back Button to navigate back to the Get Started Screen
        await staffSignUpObject.backButton().click();

        //Verify that user is back on Get Started Screen
        await expect(getStartedObject.welcomeTitle()).toBeDisplayed();
    })
})