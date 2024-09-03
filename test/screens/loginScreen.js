export class loginScreen {
    inputEmailAddress() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/email_input"]');
    }

    inputPassword() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/password_input"]');
    }

    loginButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/loginBtn"]');
    }

    errorTitle() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/title"]');
    }

    passwordToggleButton() {
        return $('//android.widget.ImageButton[@content-desc="Show password"]');
    }

    welcomeBackTitle() {
        return $('//android.widget.TextView[@text="Welcome Back!"]');
    }

    emptyEmailError() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error"]');
    }

    invalidEmailError() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Email\' is not a valid email address."]');
    }

    emptyPasswordError() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Password\' must not be empty."]');
    }

    nonExistentEmailError() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_text"]');
    }

    incorrectPasswordError() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_text" and @text="Username/Password is incorrect."]');
    }

    doneButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_btn_text"]');
    }

    backButton() {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }
}

export const loginScreenObject = new loginScreen