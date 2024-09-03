export class getStarted {
    welcomeTitle() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textView2"]');
    }

    signUpAgentButton() {
        return $('//android.widget.RelativeLayout[@resource-id="com.wemabank.alat.office.alat_qa_test:id/affiliateSignUpBtn"]');
    }

    signUpStaffButton() {
        return $('//android.widget.RelativeLayout[@resource-id="com.wemabank.alat.office.alat_qa_test:id/staffSignUpBtn"]');
    }

    continueButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/continueButton"]');
    }

    backButton() {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }
}

export const getStartedObject = new getStarted