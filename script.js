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
$(`.sign-up-prompt`).click(function () {
   $(`.show-sign-up-info`).toggleClass(`d-none`);
   $(`.email-and-create-password`).toggleClass(`d-none`);
});

$("#lets-go-button").click(function (e) {
   const emailInput = $(`#sign-up-email-input`).val();
   const email = emailInput.trim().toLowerCase();
   const password = $(`#sign-up-password-input`).val();

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string

   if (passwordError !== ``) {
      showError(`#sign-up-password`, passwordError);
   } else {
      hideError(`#sign-up-password`, passwordError);
   }

   const emailError = getEmailError(email);
   console.log(`this is the email error`, emailError);

   if (emailError !== ``) {
      showError(`#sign-up-email`, emailError);
   } else {
      hideError(`#sign-up-email`, emailError);
   }
   const createdAt = getDate();
   console.log(`The date is\n`, createdAt);

   function getDate() {
      let clickedAt = new Date();
      clickedAt = new Date(2020, 1, 7); //uncomment to test
      const year = clickedAt.getFullYear();
      const month = clickedAt.getMonth();

      const monthPlusOne = month + 1;

      const day = clickedAt.getDate();

      const dayToString = String(day);
      const yearToString = String(year);
      const monthToString = String(monthPlusOne);

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

      return createdAt;
   }

   // Refactor into a function called padLeft() your steps for padding
   // a single digit number into a double digit string.

   function padLeft(numAsString) {
      //   if day or month is < 10 {
      //    concatinate a 0 in front of the stringed num for that day or month
      if (numAsString < 10) {
         numAsString = 0 + numAsString;
         return numAsString;
      } else {
         return numAsString;
      }
   }
});

// /// Refactor into a function your steps for padding a single digit number into a double digit string.

/**********************************************************/
/*********** CODE BELOW THIS LINE FOR EDIT CARD************/
/**********************************************************/
const maxCharCardInput = 240;

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

   if (topTextLength <= maxCharCardInput) {
      $(`#edit-top-card-char-count`).removeClass(`text-danger`);
   } else {
      $(`#edit-top-card-char-count`).addClass(`text-danger`);
   }

   if (bottomTextLength <= maxCharCardInput) {
      $(`#edit-bottom-card-char-count`).removeClass(`text-danger`);
   } else {
      $(`#edit-bottom-card-char-count`).addClass(`text-danger`);
   }

   if (
      topTextLength > 0 &&
      topTextLength <= maxCharCardInput &&
      bottomTextLength > 0 &&
      bottomTextLength <= maxCharCardInput
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

   if (textLength > 0 || textLength <= maxCharCardInput) {
      console.log(`acceptable character input number`);
      $(`#create-answer-char-count`).removeClass(`text-danger`);
      $(`#click-next`).removeClass(`disabled`);
   }
   if (textLength === 0 || textLength > maxCharCardInput) {
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

   if (textLength > 0 || textLength <= maxCharCardInput) {
      console.log(`acceptable character input number`);
      $(`#imagery-char-count`).removeClass(`text-danger`);
      $(`#save-card`).removeAttr(`disabled`);
   }
   if (textLength === 0 || textLength > maxCharCardInput) {
      console.log(`unacceptable number of characters`);
      $(`#imagery-char-count`).addClass(`text-danger`);
      $(`#save-card`).attr(`disabled`, `disabled`);
   }
});

// good examples of a side-effect functions <- showError, hideError
function showError(element, message) {
   $(`${element}-input`).addClass(`is-invalid`);
   $(`${element}-error`).html(message);
}

function hideError(element, message) {
   $(`${element}-input`).removeClass(`is-invalid`);
   $(`${element}-error`).html(message);
}
