function getEmailError(email) {
   const emailPattern = /^[0-9a-zA-Z_].*@[a-zA-Z0-9]{1}\w+-*x?.[a-zA-Z]{2,}$/;

   const isValidEmail = emailPattern.test(email);

   if (email === ``) {
      return `Please enter your email address.`;
   } else if (isValidEmail === false) {
      return `Please enter a valid email address.`;
   } else {
      return ``;
   }
}
