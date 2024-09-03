import { getStartedObject } from "../screens/getStartedScreen";
import { landingScreenObject } from "../screens/landingScreen";

describe('Get Started with Qa App', () => {
    before(async () => {
        //Navigate to Get Started Screen using xpath
        await landingScreenObject.getStartedButton().click();

        //Wait for Get Started Screen to be loaded
        await getStartedObject.welcomeTitle().waitForDisplayed({ timeout: 300000 });
    })

    it('Verify that user can select and deselect Sign up as an affiliate button', async () => {
        //Select the Sign Up as an affiliate option
        await getStartedObject.signUpAgentButton().click();

        //Deselect the Sign Up as an affiliate option
        await getStartedObject.signUpAgentButton().click();
    })

    it('Verify that user can select and deselect Sign up as staff button', async () => {
        //Select the Sign Up as a staff option
        await getStartedObject.signUpStaffButton().click();

        //Deselect the Sign Up as a staff option
        await getStartedObject.signUpStaffButton().click();
    })

    it('Verify that user cannot continue without selecting an option', async () => {
        //Click the Continue Button
        await getStartedObject.continueButton().click();

        //Verify that user has not navigated away from the Get Started Screen
        await expect(getStartedObject.welcomeTitle()).toHaveText('Welcome 🙂');
    })

    it('Verify that user cannot Select both options', async () => {
        //Select the Sign Up as an affiliate option
        await getStartedObject.signUpAgentButton().click();

        //Select the Sign Up as a staff option
        await getStartedObject.signUpStaffButton().click();
    })

    it('Verify that user can Navigate back to the Landing Screen', async () => {
        //Click the Back Button to navigate back to the Landing Screen
        await getStartedObject.backButton().click();

        //Verify that user is back on Landing Screen
        await expect(landingScreenObject.landingPageIcon()).toBeDisplayed();
    })
})