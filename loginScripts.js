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
