export class agentSignUp {
    pageNumber() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/app_bar_title"]');
    }

    agentSignUpTitle() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textView2"]');
    }

    affiliateDropdown() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/item"]');
    }

    affiliateDropdownOption(dropdownSelector) {
        return $(`//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/item" and @text="${dropdownSelector}"]`);
    }

    signUpButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/signUpButton"]');
    }

    affiliateErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Organization Id\' must not be empty."]');
    }

    firstNameInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/firstNameEditText"]');
    }

    firstNameErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'First name\' must not be empty."]');
    }

    lastNameInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/lastNameEditText"]');
    }

    lastNameErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Last name\' must not be empty."]');
    }

    emailAddressInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/emailAddressEditText"]');
    }

    emptyEmailAddressErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Email\' must not be empty."]');
    }

    invalidEmailAddressErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Email\' is not a valid email address."]');
    }

    passwordInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/passwordTextInputEditText"]');
    }

    passwordToggleButton() {
        return $('(//android.widget.ImageButton[@content-desc="Show password"])[1]');
    }

    emptyPasswordErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Password\' must not be empty."]');
    }

    invalidPasswordErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="The length of \'Password\' must be at least 8 characters. You entered 7 characters."]');
    }

    reEnterPasswordInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/repasswordTextInputEditText"]');
    }

    reEnterpasswordToggleButton() {
        return $('(//android.widget.ImageButton[@content-desc="Show password"])[2]');
    }

    emptyReEnterPasswordErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="\'Repeat Password\' must not be empty."]');
    }

    invalidReEnterPasswordErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="The length of \'Repeat Password\' must be at least 8 characters. You entered 7 characters."]');
    }

    passwordNotMatchErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error" and @text="Password not equal"]');
    }

    finalDialogMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_text"]');
    }

    doneButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_btn_text"]');
    }
}

export const agentSignUpObject = new agentSignUp