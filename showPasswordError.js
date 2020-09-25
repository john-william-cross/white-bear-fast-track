function showPasswordError(password, email) {
   const unacceptablePasswords = getUnacceptablePasswords();
   console.log(unacceptablePasswords);
}

function getUnacceptablePasswords() {
   const allUnacceptablePasswords = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );
   const allFlatUnacceptablePasswords = allUnacceptablePasswords.flat();
   const allUniqUnacceptablePasswords = [
      ...new Set(allFlatUnacceptablePasswords),
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
      const forwardAndReversedPassword = forwardAndReversedPasswords[i];
      const lowerCasedPassword = forwardAndReversedPassword.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   }
   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let allNormalizedUnacceptablePasswords = [...new Set(normalizedPasswords)];
   const password = $(`#sign-up-password-input`).val();
   const emailInput = $(`#sign-up-email-input`).val();

   const emailLowerCase = emailInput.trim().toLowerCase();

   const emailParts = emailLowerCase.split(`@`);

   const email = emailParts[0];
   console.log(email);

   const passwordEmptyError = `Please create a password.`;
   const passwordLengthError = `Your password must be at least 9 characters.`;
   const passwordContainsEmailCharsError = `All or part of your email address cannot be in your password.`;
   const passwordMostInsecurePasswordsError = `Your password contains a commonly used password, "${password}" and can be easily discovered by attackers. Please use something else.`;

   const lowerCasedPassword = password.toLowerCase();
   if (lowerCasedPassword.length === 0) {
      $(`#sign-up-password-error`).removeClass(`d-none`);
      $(`#sign-up-password-input`).addClass(`is-invalid`);
      $(`#sign-up-password-error`).html(passwordEmptyError);
   } else if (lowerCasedPassword.length < 9) {
      $(`#sign-up-password-error`).removeClass(`d-none`);
      $(`#sign-up-password-input`).addClass(`is-invalid`);
      $(`#sign-up-password-error`).html(passwordLengthError);
   } else if (
      lowerCasedPassword.includes(email) &&
      email.length >= 4 //still only checks for all of email, not part of it...?
   ) {
      $(`#sign-up-password-error`).removeClass(`d-none`);
      $(`#sign-up-password-input`).addClass(`is-invalid`);
      $(`#sign-up-password-error`).html(passwordContainsEmailCharsError);
   } else if (allNormalizedUnacceptablePasswords.includes(lowerCasedPassword)) {
      $(`#sign-up-password-error`).removeClass(`d-none`);
      $(`#sign-up-password-error`).html(passwordMostInsecurePasswordsError);
      $(`#sign-up-password-input`).addClass(`is-invalid`);
   } else {
      $(`#sign-up-password-error`).addClass(`d-none`);
      $(`#sign-up-password-input`).removeClass(`is-invalid`);
   }

   return `PUT SOMETHING HERE`;
}
