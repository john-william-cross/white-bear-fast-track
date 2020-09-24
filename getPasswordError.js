function getPasswordError() {
   const newUserPassword = $(`#new-user-password`).val();

   //    const localPartTrimmedNewUserEmail = partsOfTrimmedNewUserEmail[0];

   const unacceptablePasswordsLists = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );
   const flattenedUnacceptablePasswordsLists = unacceptablePasswordsLists.flat();
   const allUniqUnacceptablePasswords = [
      ...new Set(flattenedUnacceptablePasswordsLists),
   ];
   const firstUniqPasswords = allUniqUnacceptablePasswords.slice(
      0,
      allUniqUnacceptablePasswords.indexOf(`skywalker`)
   );
   const secondUniqPasswords = allUniqUnacceptablePasswords.slice(
      4,
      allUniqUnacceptablePasswords.indexOf(`obama2016`)
   );
   const thirdUniqPasswords = allUniqUnacceptablePasswords.slice(7);

   allCleanedUpUniqPasswords = firstUniqPasswords.concat(
      secondUniqPasswords,
      thirdUniqPasswords
   );
   const unacceptablePasswordsWithBoolsAndNums = allCleanedUpUniqPasswords;

   let unacceptablePasswordsWithNums = [];
   for (let i = 0; i < unacceptablePasswordsWithBoolsAndNums.length; i++) {
      //   console.log(unacceptablePasswordsWithBoolsAndNums[i]);

      const password = unacceptablePasswordsWithBoolsAndNums[i];

      if (typeof password !== "boolean") {
         unacceptablePasswordsWithNums = unacceptablePasswordsWithNums.concat([
            unacceptablePasswordsWithBoolsAndNums[i],
         ]);
      }
   }
   let unacceptablePasswordStrings = [];
   for (let i = 0; i < unacceptablePasswordsWithNums.length; i++) {
      const value = unacceptablePasswordsWithNums[i];
      unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
         String(value)
      );
   }
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
      //reverses each split password      console.log(`the bank's run out of money. purple monkey dishwasher.`);

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
   );
   let normalizedPasswords = [];
   for (let i = 0; i < forwardAndReversedPasswords.length; i++) {
      const password = forwardAndReversedPasswords[i];
      const lowerCasedPassword = password.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   }
   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let unacceptablePasswords = [...new Set(normalizedPasswords)];

   const passwordEmptyError = `Please create a password.`;
   const passwordLengthError = `Your password must be at least 9 characters.`;
   const passwordContainsEmailCharsError = `All or part of your email address cannot be in your password.`;
   const passwordMostInsecurePasswordsError = `Your password contains a commonly used password, "${newUserPassword}" and can be easily discovered by attackers. Please use something else.`;

   const lowerCasedPassword = newUserPassword.toLowerCase();
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
      localPartTrimmedNewUserEmail.length >= 4 //still only checks for all of email, not part of it...?
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
}
