function getEmailError() {
   const newUserEmailAddress = $(`#sign-up-email-input`).val();

   const trimmedNewUserEmailAddress = newUserEmailAddress.trim();

   if (trimmedNewUserEmailAddress === ``) {
      $(`#sign-up-email-error`).html(`Please enter your email address.`);
      $(`#sign-up-email-error`).removeClass(`d-none`);
      $(`#sign-up-email-input`).addClass(`is-invalid`);
   } else {
      $(`#sign-up-email-error`).addClass(`d-none`);
      $(`#sign-up-email-input`).removeClass(`is-invalid`);
   }
}

// function getEmailError(emailInput) {
//    const newUserEmailAddress = $(`#sign-up-email-input`).val();
//    const newUserEmailAddressLength = newUserEmailAddress.length;
//    const trimmedNewUserEmailAddress = newUserEmailAddress.trim();
//    const partsOfTrimmedNewUserEmail = trimmedNewUserEmailAddress.split(`@`);
//    const localPartTrimmedNewUserEmail = partsOfTrimmedNewUserEmail[0];

//    if (newUserEmailAddressLength === 0) {
//       $(`#sign-up-email-error`).removeClass(`d-none`);
//       $(`#sign-up-email-input`).addClass(`is-invalid`);
//    } else if (newUserEmailAddressLength > 0) {
//       $(`#sign-up-email-error`).addClass(`d-none`);
//       $(`#sign-up-email-input`).removeClass(`is-invalid`);
//    }
// }

// // check the user email input against all validation.
// // if emailInput is blank
// // return `Please enter your email address.`
// // else return `` // an empty string
// const message = getEmailError(emailInput);

// // if there is an email error e.g. if message !== blank
// showErrorValidation("#email-error", message);
// // pass the email error id and the message from getEmailError

// function showErrorValidation(id, message) {
//    // use jQuery to toggle the error message and error styling
// }

// //fake database
// const dbUserbDetails = [`mike@gmail.com`, `javascriptiscool`];

// $(`#login-button`).click(function () {
//    // this console.log is just to show that we have access to vars/all scripts inside the script.js file
//    //    console.log(
//    //       `here's the max char var from loginscripts:  ${maxCharCardInput}`
//    //    );

//    const emailInput = $(`#return-user-email`).val();
//    const passwordInput = $(`#return-user-password`).val();
//    const userInputDetails = [emailInput, passwordInput];

//    const isUserInDb = checkIsUserInDb(dbUserbDetails, userInputDetails);
//    if (isUserInDb) {
//       //contine
//       console.log(`Let's continue`);
//       disableElement(`#login-button`);
//       disableElement(`#return-user-password`);
//    } else {
//       console.log(`This user is not found.`);
//    }
// });

// function disableElement(id) {
//    $(id).attr(`disabled`, `disabled`); //side effect that happens outside the function
//    //we use it when we want something to happen inside the application
// }

// function checkIsUserInDb(dbUserbDetails, userInputDetails) {
//    //this is a pure function
//    if (
//       dbUserbDetails[0] === userInputDetails[0] &&
//       dbUserbDetails[1] === userInputDetails[1]
//    ) {
//       return true;
//    } else false;
// }
