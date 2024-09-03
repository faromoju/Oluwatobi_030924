export class landingScreen {
    loginButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/loginBtn"]');
    }

    getStartedButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/gettingStartedBtn"]');
    }

    landingPageIcon() {
        return $('//android.widget.RelativeLayout[@resource-id="com.wemabank.alat.office.alat_qa_test:id/landingPageIcon"]');
    }
}

export const landingScreenObject = new landingScreen