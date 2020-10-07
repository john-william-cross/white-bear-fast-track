function getPasswordError(password, email) {
   const emailParts = email.split(`@`); // [“mike”, “gmail.com”]
   const localPartEmail = emailParts[0]; // “mike”
   const previouslyUnacceptablePasswordsList = getUnacceptablePasswords();
   console.log(`The local part email is: ${localPartEmail}`);

   let unfilteredUnacceptablePasswords = previouslyUnacceptablePasswordsList.concat(
      allInsecurePasswords
   );
   console.log(
      `Current list of unfiltered  passwords: `,
      unfilteredUnacceptablePasswords
   );

   const filteredUnacceptablePasswords = unfilteredUnacceptablePasswords.filter(
      (password) => {
         return password.length >= 9;
      }
   );

   console.log(
      `here are the filtered passwords: `,
      filteredUnacceptablePasswords
   );

   let unacceptablePasswords = [];

   filteredUnacceptablePasswords.forEach((password) => {
      //tried filter here but couldn't get it to work
      if (!unacceptablePasswords.includes(password)) {
         unacceptablePasswords = unacceptablePasswords.concat(password);
      }
   });

   console.log(
      `Here is the latest list of unacceptable passwords with duplicates removed: `,
      unacceptablePasswords
   );

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

   console.log(
      `Here are the unacceptable passwords with bools and nums: `,
      unacceptablePasswordsWithBoolsAndNums
   );

   const unacceptablePasswordsWithNums = unacceptablePasswordsWithBoolsAndNums.filter(
      //use filter
      (singlePasswordWithBoolsAndNums) => {
         return typeof singlePasswordWithBoolsAndNums !== `boolean`;
      }
   );

   console.log(
      `Here are the unacceptable passwords with nums but no booleans: `,
      unacceptablePasswordsWithNums
   );

   const unacceptablePasswordStrings = unacceptablePasswordsWithNums.map(
      //used map
      (passwordWithNums) => {
         return passwordWithNums.toString();
      }
   );

   console.log(
      `here are the unacceptable password strings: `,
      unacceptablePasswordStrings
   );

   let unacceptablePasswordsReversed = [];

   unacceptablePasswordStrings.forEach((passwordString) => {
      //tried map but had trouble with it
      const copyOfPasswordChars = [...passwordString];
      const reversePasswordChars = copyOfPasswordChars.reverse();
      const reversedUnacceptablePasswords = reversePasswordChars.join(``);

      unacceptablePasswordsReversed = unacceptablePasswordsReversed.concat(
         reversedUnacceptablePasswords
      );
   });

   console.log(
      `here are the reversed passwords: `,
      unacceptablePasswordsReversed
   );

   let forwardAndReversedPasswords = unacceptablePasswordStrings.concat(
      unacceptablePasswordsReversed
   );

   const normalizedPasswords = forwardAndReversedPasswords.map(
      //used map
      (forwardAndReversedPassword) => {
         return forwardAndReversedPassword.toLowerCase();
      }
   );

   console.log(
      `here are the normalized passwords lowercased`,
      normalizedPasswords
   );

   //console.log(`Here are the normalized passwords:\n`, normalizedPasswords);
   let previouslyUnacceptablePasswordsList = [...new Set(normalizedPasswords)];
   return previouslyUnacceptablePasswordsList;
}

let allInsecurePasswords = allUnacceptablePasswords.map((password) => {
   {
      return password.text;
   }
});
