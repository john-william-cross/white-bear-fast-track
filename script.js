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
   console.log(`new user password: `, newUserPassword);

   trimmedNewUserEmailAddress = newUserEmailAddress.trim();

   const partsOfTrimmedNewUserEmail = trimmedNewUserEmailAddress.split(`@`);

   const localPartTrimmedNewUserEmail = partsOfTrimmedNewUserEmail[0];

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

   let unacceptablePasswordStrings = [];
   for (let i = 0; i < unacceptablePasswordsWithNums.length; i++) {
      const value = unacceptablePasswordsWithNums[i];
      unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
         String(value)
      );
   }
   //console.log(`here are the old passwords:\n`, unacceptablePasswordStrings);

   let unacceptablePasswordsForwardAndReversed = [];
   //creates empty array
   for (i = 0; i < unacceptablePasswordStrings.length; i++) {
      //keep doing the following until i < unacceptablePasswordStrings.length
      let passwordChars = unacceptablePasswordStrings[i].split(``);
      //splits each word in oldUnacccetablePasswords list and assigns it to passwordChars
      ///console.log(`Split password chars:\n`, passwordChars);
      const copyOfPasswordChars = [...passwordChars];
      //makes a copy of passwordChars
      //console.log(`copy of password chars:\n`, copyOfPasswordChars);
      const reversePasswordChars = copyOfPasswordChars.reverse();
      //reverses each split password
      //console.log(`Reversed password chars:\n`, reversePasswordChars);
      const reversedUnacceptablePasswords = reversePasswordChars.join(``);
      //joins (un-splits) each reverse password back together
      //console.log(reversedUnacceptablePasswords);
      unacceptablePasswordsForwardAndReversed = unacceptablePasswordsForwardAndReversed.concat(
         reversedUnacceptablePasswords
      ); //fills empty array with reversedUnacceptablePasswords
   }
   let forwardAndReversedPasswords = unacceptablePasswordStrings.concat(
      unacceptablePasswordsForwardAndReversed
   ); //combines forward passwords array with reverse passwords array into a new array called
   //forwardAndReversedPasswords
   // console.log(
   //    `Here's the new list of unacceptable passwords in forward and reverse order:\n`,
   //    forwardAndReversedPasswords
   // );

   let normalizedPasswords = [];
   for (let i = 0; i < forwardAndReversedPasswords.length; i++) {
      const password = forwardAndReversedPasswords[i];
      const lowerCasedPassword = password.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   }
   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let unacceptablePasswords = [...new Set(normalizedPasswords)];
   console.log(
      `Here are the unacceptable passwords, all of which are unique and normalized\n`,
      unacceptablePasswords
   );

   let clickedAt = new Date();
   // clickedAt = new Date(2020, 1, 7); //uncomment to test
   const year = clickedAt.getFullYear();
   //console.log(year);
   const month = clickedAt.getMonth();

   const monthPlusOne = month + 1;
   //console.log(monthPlusOne);

   const day = clickedAt.getDate();

   //console.log(day);

   const dayToString = String(day);
   const yearToString = String(year);
   const monthToString = String(monthPlusOne);
   //console.log(monthToString);

   let paddedDay = dayToString;
   if (dayToString < 10) {
      paddedDay = 0 + dayToString;
   }

   let paddedMonth = monthToString;
   if (monthToString < 10) {
      paddedMonth = 0 + monthToString;
   }

   const fullDate = yearToString + paddedMonth + paddedDay;
   fulldate = Number(fullDate);
   const createdAt = fullDate;
   console.log(`The date is\n`, createdAt);

   if (newUserEmailAddressLength === 0) {
      $(`#email-error-message`).removeClass(`d-none`);
      $(`#new-user-email`).addClass(`is-invalid`);
   } else if (newUserEmailAddressLength > 0) {
      $(`#email-error-message`).addClass(`d-none`);
      $(`#new-user-email`).removeClass(`is-invalid`);
   }

   const passwordEmptyError = `Please create a password.`;
   const passwordLengthError = `Your password must be at least 9 characters.`;
   const passwordContainsEmailCharsError = `All or part of your email address cannot be in your password.`;
   const passwordMostInsecurePasswordsError = `Your password contains a commonly used password, "${newUserPassword}" and can be easily discovered by attackers. Please use something else.`;

   const lowerCasedPassword = newUserPassword.toLowerCase();

   console.log(
      `here is the local part trimmed email address:\n ${localPartTrimmedNewUserEmail}`
   );
   console.log(`here is the lower cased password:\n`, lowerCasedPassword);

   if (lowerCasedPassword.length === 0) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordEmptyError);
   } else if (lowerCasedPassword.length < 9) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordLengthError);
   } else if (
      lowerCasedPassword.includes(localPartTrimmedNewUserEmail) &&
      localPartTrimmedNewUserEmail.length >= 4
   ) {
      $(`#password-error-message`).removeClass(`d-none`);
      $(`#new-user-password`).addClass(`is-invalid`);
      $(`#password-error-message`).html(passwordContainsEmailCharsError);
   } else if (unacceptablePasswords.includes(lowerCasedPassword)) {
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
