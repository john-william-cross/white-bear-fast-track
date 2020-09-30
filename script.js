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
   // console.log(email);
   const password = $(`#sign-up-password-input`).val();

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string

   if (passwordError !== ``) {
      showError(`#sign-up-password`, passwordError);
   } else {
      hideError(`#sign-up-password`, passwordError);
   }

   const emailError = getEmailError(email);

   if (emailError !== ``) {
      showError(`#sign-up-email`, emailError);
   } else {
      hideError(`#sign-up-email`, emailError);
   }

   // const userProps = [email, password, Number(getCreatedAt()), createId()];
   // if (passwordError !== `` || emailError !== ``) {
   //    console.log(`Array will not be displayed`);
   // } else {
   //    console.log(`Here is the userProps array: `, userProps);
   // }

   const user = {
      email: email,
      password: password,
      createdAt: getCreatedAt(),
      id: createId(),
   };

   console.log(`Here is the user object: `, user);

   const copyOfUser = { ...user };

   copyOfUser.emailTld = getTld(email);
   console.log(
      `Here is the copy of the user object including the email TLD: `,
      copyOfUser
   );

   function getTld(email) {
      const emailTld = email.slice(email.lastIndexOf(`.`));
      emailTldNoDot = emailTld.slice(1);
      console.log(`the email tld is: `, emailTldNoDot);
      return emailTldNoDot;
   }
});

/**********************************************************/
/*********** CODE BELOW THIS LINE FOR EDIT CARD************/
/**********************************************************/
const maxCharCardInput = 240;

$(`#edit-input-top-card`).keyup(function (e) {
   showCharCountValidation(
      `#edit-top-card-char-count`,
      $(`#edit-input-top-card`).val()
   );
});
$(`#edit-input-bottom-card`).keyup(function (e) {
   showCharCountValidation(
      `#edit-bottom-card-char-count`,
      $(`#edit-input-bottom-card`).val()
   );
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

function getCreatedAt() {
   let clickedAt = new Date();
   // clickedAt = new Date(2020, 0, 1); //uncomment to test
   const year = clickedAt.getFullYear();
   const month = clickedAt.getMonth();
   const day = clickedAt.getDate();
   const monthPlusOne = month + 1;
   const dayToString = String(day);
   const yearToString = String(year);
   const monthToString = String(monthPlusOne);
   createdAt = Number(
      yearToString + padLeft(monthToString) + padLeft(dayToString)
   );
   return createdAt;
}

function padLeft(string) {
   if (string < 10) {
      string = 0 + string;
   }
   return string;
}

function showCharCountValidation(id, input) {
   $(id).html(input.length);

   if (input.length <= maxCharCardInput) {
      $(id).removeClass(`text-danger`);
   } else {
      $(id).addClass(`text-danger`);
   }

   toggleDisabled();
}

function toggleDisabled() {
   const topText = $(`#edit-input-top-card`).val();
   const bottomText = $(`#edit-input-bottom-card`).val();
   if (
      topText.length > 0 &&
      topText.length <= maxCharCardInput &&
      bottomText.length > 0 &&
      bottomText.length <= maxCharCardInput
   ) {
      $(`#save-card`).removeClass(`disabled`);
   } else {
      $(`#save-card`).addClass(`disabled`);
   }
}

function createId() {
   function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min); //gives entire range plus minimum
   }

   const randomInt = getRandomInt(0, 999);
   // console.log(`Random int between 0 and 999 is: ${randomInt}`);
   let timeClicked = new Date(Date.now());
   const milliseconds = String(timeClicked.getMilliseconds());
   // console.log(`Let's go was clicked at: ${milliseconds}`);
   const nonPaddedId = randomInt.toString() + milliseconds;
   // console.log(
   // `the id created by combining random int and time clicked is: ${nonPaddedId}`
   // );
   const timeClickedMilliseconds = String(milliseconds);

   const randomIntAsString = String(randomInt);
   //console.log(`here's the random int as a string: `, randomIntAsString);
   const paddedRandomInt = randomIntAsString.padStart(3, `0`);
   //console.log(`here's the padded random int:`, paddedRandomInt);

   const millisecondsAsString = String(timeClickedMilliseconds);
   //console.log(`here's the time clicked: `, millisecondsAsString);
   const paddedTimeClicked = millisecondsAsString.padStart(3, `0`);
   //console.log(`here's the padded time clicked: `, paddedTimeClicked);
   const id = String(paddedRandomInt + paddedTimeClicked);
   return id;
}
