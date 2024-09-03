export class staffSignUp {
    staffSignUpTitle() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textView2"]');
    }

    staffIdInput() {
        return $('//android.widget.EditText[@resource-id="com.wemabank.alat.office.alat_qa_test:id/staffIdEditText"]');
    }

    verifyButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/verifyButton"]');
    }

    backButton() {
        return $('//android.widget.ImageButton[@content-desc="Navigate up"]');
    }

    staffIdErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/textinput_error"]');
    }

    nonExistentStaffErrorMessage() {
        return $('//android.widget.TextView[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_text"]');
    }

    doneButton() {
        return $('//android.widget.Button[@resource-id="com.wemabank.alat.office.alat_qa_test:id/status_btn_text"]');
    }
}

export const staffSignUpObject = new staffSignUp