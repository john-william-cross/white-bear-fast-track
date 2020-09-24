function getEmailError(emailInput) {
   const newUserEmailAddress = $(`#new-user-email`).val();
   const newUserEmailAddressLength = newUserEmailAddress.length;
   const trimmedNewUserEmailAddress = newUserEmailAddress.trim();
   const partsOfTrimmedNewUserEmail = trimmedNewUserEmailAddress.split(`@`);
   const localPartTrimmedNewUserEmail = partsOfTrimmedNewUserEmail[0];

   if (newUserEmailAddressLength === 0) {
      $(`#email-error-message`).removeClass(`d-none`);
      $(`#new-user-email`).addClass(`is-invalid`);
   } else if (newUserEmailAddressLength > 0) {
      $(`#email-error-message`).addClass(`d-none`);
      $(`#new-user-email`).removeClass(`is-invalid`);
   }
}

// check the user email input against all validation.
// if emailInput is blank
// return `Please enter your email address.`
// else return `` // an empty string
const message = getEmailError(emailInput);

// if there is an email error e.g. if message !== blank
showErrorValidation("#email-error", message);
// pass the email error id and the message from getEmailError

function showErrorValidation(id, message) {
   // use jQuery to toggle the error message and error styling
}
