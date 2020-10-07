function getPasswordError(password, email) {
   const emailParts = email.split(`@`); // [“mike”, “gmail.com”]
   const localPartEmail = emailParts[0]; // “mike”
   const previouslyUnacceptablePasswordsList = getUnacceptablePasswords();
   console.log(`The local part email is: ${localPartEmail}`);
   // console.log(
   //    `Here are the currently unacceptable passwords: `,
   //    previouslyUnacceptablePasswordsList
   // );

   let unfilteredUnacceptablePasswords = previouslyUnacceptablePasswordsList.concat(
      allInsecurePasswords
   );

   let filteredUnacceptablePasswords = unfilteredUnacceptablePasswords.filter(
      (password) => {
         return password.length >= 9;
      }
   );

   console.log(
      `Current list of unfiltered  passwords: `,
      unfilteredUnacceptablePasswords
   );

   console.log(
      `here are the filtered passwords: `,
      filteredUnacceptablePasswords
   );

   let unacceptablePasswords = [];

   filteredUnacceptablePasswords.forEach((password) => {
      if (!unacceptablePasswords.includes(password)) {
         unacceptablePasswords = unacceptablePasswords.concat(password);
      }
   });
   console.log(
      `Here is the latest list of unacceptable passwords: `,
      unacceptablePasswords
   );

   // If every password in unacceptablePasswords is >= 9 characters,
   // console.log true. Else console.log false.
   const hasAcceptableLength = unacceptablePasswords.every((password) => {
      return password.length >= 9;
   });
   console.log(
      `Each password in unacceptablePasswords is >= 9 evaluates to: `,
      hasAcceptableLength
   );

   const hasQwerty = unacceptablePasswords.some((password) => {
      return password.includes(`qwerty`);
   });
   console.log(
      `At least one password in unacceptablePasswords includes the string "qwerty" evaluates to: `,
      hasQwerty
   );

   const lowerCasedPassword = password.toLowerCase();
   if (lowerCasedPassword.length === 0) {
      return `Please create a password.`;
   } else if (lowerCasedPassword.length < 9) {
      return `Your password must be at least 9 characters.`;
   } else if (
      lowerCasedPassword.includes(localPartEmail) &&
      localPartEmail.length >= 4
   ) {
      return `All or part of your email address cannot be in your password.`;
   } else if (
      previouslyUnacceptablePasswordsList.includes(lowerCasedPassword)
   ) {
      return `Your password contains a commonly used password, "${password}" and can be easily discovered by attackers. Please use something else.`;
   } else {
      return ``;
   }
}

function getUnacceptablePasswords() {
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

   let unacceptablePasswordsWithBoolsAndNums = allCleanedUpUniqPasswords;

   let unacceptablePasswordsWithNums = [];
   // for (let i = 0; i < unacceptablePasswordsWithBoolsAndNums.length; i++) {
   //    //   console.log(unacceptablePasswordsWithBoolsAndNums[i]);
   //    const password = unacceptablePasswordsWithBoolsAndNums[i];
   //    if (typeof password !== "boolean") {
   //       unacceptablePasswordsWithNums = unacceptablePasswordsWithNums.concat([
   //          unacceptablePasswordsWithBoolsAndNums[i],
   //       ]);
   //    }
   // }

   unacceptablePasswordsWithBoolsAndNums.forEach(
      (singlePasswordWithBoolsAndNums) => {
         if (typeof singlePasswordWithBoolsAndNums !== `boolean`) {
            unacceptablePasswordsWithNums = unacceptablePasswordsWithNums.concat(
               singlePasswordWithBoolsAndNums
            );
         }
      }
   );

   // console.log(unacceptablePasswordsWithNums);

   // console.log(
   //    `here are all unacceptable passwords with nums: `,
   //    unacceptablePasswordsWithNums
   // );

   let unacceptablePasswordStrings = [];
   // for (let i = 0; i < unacceptablePasswordsWithNums.length; i++) {
   //    const value = unacceptablePasswordsWithNums[i];
   //    unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
   //       String(value)
   //    );
   // }

   unacceptablePasswordsWithNums.forEach((passwordWithNums) => {
      unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
         String(passwordWithNums)
      );
   });

   let unacceptablePasswordsForwardAndReversed = [];
   // creates empty array
   // for (i = 0; i < unacceptablePasswordStrings.length; i++) {
   //    //keep doing the following until i < unacceptablePasswordStrings.length
   //    let passwordChars = unacceptablePasswordStrings[i].split(``);
   //    //splits each word in oldUnacceptablePasswords list and assigns it to passwordChars
   //    // console.log(`Split password chars:\n`, passwordChars);
   //    const copyOfPasswordChars = [...passwordChars];
   //    //makes a copy of passwordChars
   //    //console.log(`copy of password chars:\n`, copyOfPasswordChars);
   //    const reversePasswordChars = copyOfPasswordChars.reverse();
   //    //reverses each split password      console.log(`the bank's run out of money. purple monkey dishwasher.`);
   //    //console.log(`Reversed password chars:\n`, reversePasswordChars);
   //    const reversedUnacceptablePasswords = reversePasswordChars.join(``);
   //    //joins (un-splits) each reverse password back together
   //    //console.log(reversedUnacceptablePasswords);
   //    unacceptablePasswordsForwardAndReversed = unacceptablePasswordsForwardAndReversed.concat(
   //       reversedUnacceptablePasswords
   //    ); //fills empty array with reversedUnacceptablePasswords
   // }

   unacceptablePasswordStrings.forEach((passwordString) => {
      const copyOfPasswordChars = [...passwordString];
      const reversePasswordChars = copyOfPasswordChars.reverse();
      const reversedUnacceptablePasswords = reversePasswordChars.join(``);

      unacceptablePasswordsForwardAndReversed = unacceptablePasswordsForwardAndReversed.concat(
         reversedUnacceptablePasswords
      );
   });

   let forwardAndReversedPasswords = unacceptablePasswordStrings.concat(
      unacceptablePasswordsForwardAndReversed
   );

   let normalizedPasswords = [];
   // for (let i = 0; i < forwardAndReversedPasswords.length; i++) {
   //    const password = forwardAndReversedPasswords[i];
   //    const lowerCasedPassword = password.toLowerCase();
   //    normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   // }

   forwardAndReversedPasswords.forEach((forwardAndReversedPassword) => {
      const lowerCasedPassword = forwardAndReversedPassword.toLowerCase();
      normalizedPasswords = normalizedPasswords.concat(lowerCasedPassword);
   });

   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let previouslyUnacceptablePasswordsList = [...new Set(normalizedPasswords)];
   return previouslyUnacceptablePasswordsList;
}

let allInsecurePasswords = allUnacceptablePasswords.map((password) => {
   {
      return password.text;
   }
});
