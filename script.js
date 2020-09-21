$("#save-card").click(function () {
   // code below targets the id "overlay-sucess"; for toggleClass,
   // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#back-to-answer-error").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#show-delete-button").click(function () {
   $("#delete-this-card").toggleClass("d-none");
});

/**********************************************************/
/************ CODE BELOW THIS LINE FOR SIGN UP*************/
/**********************************************************/
$(".sign-up-prompt").click(function () {
   // console.log(`Here are the most insecure passwords: `, mostInsecurePasswords);
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});

$("#lets-go-button").click(function (e) {
   const newUserEmailAddress = $(`#new-user-email`).val();
   const newUserEmailAddressLength = newUserEmailAddress.length;
   // console.log(`val is ${newUserEmailAddress}`);
   // console.log(
   //    `new user email address length is: ${newUserEmailAddressLength}`
   // );

   const newUserPassword = $(`#new-user-password`).val();
   // console.log(`password length is ${newUserPassword.length}`);

   trimmedNewUserEmailAddress = newUserEmailAddress.trim();
   // console.log(`New user email address is ${newUserEmailAddress}`);
   // console.log(
   //    `Trimmed new user email address is ${trimmedNewUserEmailAddress}.`
   // );

   const delimiter = `@`;
   const indexOfAtSymbolDelimiter = trimmedNewUserEmailAddress.indexOf(
      delimiter
   );
   // console.log(
   //    `the @ symbol in the trimmed new user email is at index: ${indexOfAtSymbolDelimiter}.`
   // );
   const localPartTrimmedNewUserEmail = trimmedNewUserEmailAddress.slice(
      0,
      indexOfAtSymbolDelimiter
   );
   // console.log(
   //    `the local part of the trimmed new user email is ${localPartTrimmedNewUserEmail}`
   // );

   // console.log(
   //    `length of the localparttrimmed new user email is: ${localPartTrimmedNewUserEmail.length}`
   // );
   const localPartTrimmedNewUserEmailLength =
      localPartTrimmedNewUserEmail.length;

   if (newUserEmailAddressLength === 0) {
      $(`#email-error-message`).removeClass(`d-none`);
      $(`#new-user-email`).addClass(`is-invalid`);
   } else if (newUserEmailAddressLength > 0) {
      $(`#email-error-message`).addClass(`d-none`);
      $(`#new-user-email`).removeClass(`is-invalid`);
   }

   /* What I'm working on now */

   const unacceptablePasswordsLists = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );

   const flattenedUnacceptablePasswordsLists = unacceptablePasswordsLists.flat();
   // console.log(
   //    `flatted unacceptable passwords:\n`,
   //    flattenedUnacceptablePasswords
   // );

   const allUniqUnacceptablePasswords = [
      ...new Set(flattenedUnacceptablePasswordsLists),
   ];
   // console.log(
   //    `Here's a list of all unique unacceptable passwords:\n`,
   //    allUniqUnacceptablePasswords
   // );

   const firstUniqPasswords = allUniqUnacceptablePasswords.slice(
      0,
      allUniqUnacceptablePasswords.indexOf(`skywalker`)
   );

   // console.log(
   //    `here is the first part of the unique passwords:\n`,
   //    firstUniqPasswords
   // );

   const secondUniqPasswords = allUniqUnacceptablePasswords.slice(
      4,
      allUniqUnacceptablePasswords.indexOf(`obama2016`)
   );
   // console.log(
   //    `here is the second part of the unique passwords:\n`,
   //    secondUniqPasswords
   // );

   const thirdUniqPasswords = allUniqUnacceptablePasswords.slice(7);
   // console.log(
   //    `here is the third part of the unique passwords:\n`,
   //    thirdUniqPasswords
   // );

   allCleanedUpUniqPasswords = firstUniqPasswords.concat(
      secondUniqPasswords,
      thirdUniqPasswords
   );

   // console.log(
   //    `Here are all the cleaned-up unique passwords:\n`,
   //    allCleanedUpUniqPasswords
   // );

   const unacceptablePasswordsWithBoolsAndNums = allCleanedUpUniqPasswords;
   let unacceptablePasswordsWithNums = [];
   for (let i = 0; i < unacceptablePasswordsWithBoolsAndNums.length; i++) {
      // console.log(unacceptablePasswordsWithBoolsAndNums[i]);

      const password = unacceptablePasswordsWithBoolsAndNums[i];

      if (typeof password !== "boolean") {
         unacceptablePasswordsWithNums = unacceptablePasswordsWithNums.concat([
            unacceptablePasswordsWithBoolsAndNums[i],
         ]);
      }
   }

   // console.log(
   //    `Here are the passwords made up of strings and numbers:\n`,
   //    unacceptablePasswordsWithNums
   // );

   let oldUnacceptablePasswords = [];
   for (let i = 0; i < unacceptablePasswordsWithNums.length; i++) {
      const value = unacceptablePasswordsWithNums[i];
      oldUnacceptablePasswords = oldUnacceptablePasswords.concat(String(value));
   }

   // Use a for loop to reverse every string in your
   // list and add them to a new list. Your list should
   //contain both the forward and reverse versions of each password.

   for (i = 0; i < oldUnacceptablePasswords.length; i++) {
      //reverse each string in the list
      let passwordChars = oldUnacceptablePasswords[i].split(``);
      //console.log(`Split password chars:\n`, passwordChars);
      const copyOfPasswordChars = [...passwordChars];
      //console.log(`copy of password chars:\n`, copyOfPasswordChars);
      const reversePasswordChars = copyOfPasswordChars.reverse();
      //console.log(`Reversed password chars:\n`, reversePasswordChars);
      const newOldUnacceptablePasswords = reversePasswordChars.join(``);
      console.log(`here are the new passwords:\n`, newOldUnacceptablePasswords);
   }

   // console.log(
   //    `Here are the old passwords with all numbers converted to strings:\n`,
   //    oldUnacceptablePasswords
   // );

   /* What I'm working on now */

   const passwordEmptyError = `Please create a password.`;
   const passwordLengthError = `Your password must be at least 9 characters.`;
   const passwordContainsEmailCharsError = `All or part of your email address cannot be in your password.`;
   const passwordMostInsecurePasswordsError = `Your password contains a commonly used password, "${newUserPassword}" and can be easily discovered by attackers. Please use something else.`;

   if (newUserPassword.length === 0) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordEmptyError);
   } else if (newUserPassword.length < 9) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordLengthError);
   } else if (
      newUserPassword.includes(localPartTrimmedNewUserEmail) &&
      localPartTrimmedNewUserEmailLength >= 4
   ) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordContainsEmailCharsError);
   } else if (unacceptablePasswords.includes(newUserPassword)) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#password-error-message`).html(passwordMostInsecurePasswordsError);
      $(`#new-user-password`).addClass(`is-invalid`);
   } else {
      $(`#password-error-message`).addClass(`d-none`);
      $(`#new-user-password`).removeClass(`is-invalid`);
   }
});

/**********************************************************/
/*********** CODE BELOW THIS LINE FOR EDIT CARD************/
/**********************************************************/
$(`#edit-input-bottom-card,#edit-input-top-card`).keyup(function (e) {
   const topText = $(`#edit-input-top-card`).val();
   const bottomText = $(`#edit-input-bottom-card`).val();
   console.log(`topText val: ${topText}`);
   console.log(`bottomText val: ${bottomText}`);

   const topTextLength = topText.length;
   console.log(`the top text length is ${topTextLength}`);
   const bottomTextLength = bottomText.length;
   console.log(`the bottom text length is ${bottomTextLength}`);

   $(`#edit-top-card-char-count`).html(topTextLength);
   $(`#edit-bottom-card-char-count`).html(bottomTextLength);

   if (topTextLength <= 240) {
      $(`#edit-top-card-char-count`).removeClass(`text-danger`);
   } else {
      $(`#edit-top-card-char-count`).addClass(`text-danger`);
   }

   if (bottomTextLength <= 240) {
      $(`#edit-bottom-card-char-count`).removeClass(`text-danger`);
   } else {
      $(`#edit-bottom-card-char-count`).addClass(`text-danger`);
   }

   if (
      topTextLength > 0 &&
      topTextLength <= 240 &&
      bottomTextLength > 0 &&
      bottomTextLength <= 240
   ) {
      $(`#save-card`).removeClass(`disabled`);
   } else {
      $(`#save-card`).addClass(`disabled`);
   }
});

/**********************************************************/
/******* CODE BELOW THIS LINE FOR CREATE ANSWER CARD*******/
/**********************************************************/
$(`#create-answer-input`).keyup(function (e) {
   console.log(`Event: `, e);

   // get the text from the text area
   const text = e.target.value;
   console.log(`inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`Total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#create-answer-char-count`).html(textLength);

   if (textLength > 0 || textLength < 241) {
      console.log(`acceptable character input number`);
      $(`#create-answer-char-count`).removeClass(`text-danger`);
      $(`#click-next`).removeClass(`disabled`);
   }
   if (textLength === 0 || textLength > 240) {
      console.log(`unacceptable number of characters`);
      $(`#create-answer-char-count`).addClass(`text-danger`);
      $(`#click-next`).addClass(`disabled`);
   }
});

/**********************************************************/
/****** CODE BELOW THIS LINE FOR CREATE IMAGERY CARD*******/
/**********************************************************/

$(`#create-imagery-input`).keyup(function (e) {
   console.log(`Event: `, e);

   // get the text from the text area
   const text = e.target.value;
   const username = `John`;
   console.log(`${username} inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`Total inputted chars: ${textLength}`);

   // update the character counter on the page
   $(`#imagery-char-count`).html(textLength);

   if (textLength > 0 || textLength < 241) {
      console.log(`acceptable character input number`);
      $(`#imagery-char-count`).removeClass(`text-danger`);
      $(`#save-card`).removeAttr(`disabled`);
   }
   if (textLength === 0 || textLength > 240) {
      console.log(`unacceptable number of characters`);
      $(`#imagery-char-count`).addClass(`text-danger`);
      $(`#save-card`).attr(`disabled`, `disabled`);
   }
});
