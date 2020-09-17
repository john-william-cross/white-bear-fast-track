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

$(".sign-up-prompt").click(function () {
   $(".show-sign-up-info").toggleClass("d-none");
   $(".email-and-create-password").toggleClass("d-none");
});

// let createImageryInputCharsCount = 0; // use "let" instead of "const" because it will be updated
// $("#create-imagery-input").keypress(function () {
//    console.log("Let's add 1!");

//    createImageryInputCharsCount++;
//    console.log("Total inputted chars: ", createImageryInputCharsCount);
//    $("#imagery-char-count").html(createImageryInputCharsCount);
// });

// $(`#edit-input-top-card`).keyup(function (e) {
//    console.log(`Event: `, e);

//    // get the text from the text area
//    const text = e.target.value;
//    const username = `John`;
//    console.log(`${username} inputted: ${text}`);

//    // check the length of the text
//    const textLength = text.length;
//    console.log(`Total inputted chars: ${textLength}`);

//    // update the character counter on the page
//    $(`#edit-top-card-char-count`).html(textLength);

//    if (textLength > 0 || textLength < 241) {
//       console.log(`acceptable character input number`);
//       $(`#edit-top-card-char-count`).removeClass(`text-danger`);
//       // $(`#save-card`).removeClass(`disabled`);
//    }
//    if (textLength === 0 || textLength > 240) {
//       console.log(`unacceptable number of characters`);
//       $(`#edit-top-card-char-count`).addClass(`text-danger`);
//       // $(`#save-card`).addClass(`disabled`);
//    }
// });

// $(`#edit-input-bottom-card`).keyup(function (e) {
//    console.log(`Event: `, e);

//    // get the text from the text area
//    const text = e.target.value;
//    const username = `John`;
//    console.log(`${username} inputted: ${text}`);

//    // check the length of the text
//    const textLength = text.length;
//    console.log(`Total inputted chars: ${textLength}`);

//    // update the character counter on the page
//    $(`#edit-bottom-card-char-count`).html(textLength);

//    if (textLength > 0 || textLength < 241) {
//       console.log(`acceptable character input number`);
//       $(`#edit-bottom-card-char-count`).removeClass(`text-danger`);
//       // $(`#save-card`).removeClass(`disabled`);
//    }
//    if (textLength === 0 || textLength > 240) {
//       console.log(`unacceptable number of characters`);
//       $(`#edit-bottom-card-char-count`).addClass(`text-danger`);
//       // $(`#click-next`).addClass(`disabled`);
//    }
// });

$(`#edit-input-bottom-card,#edit-input-top-card`).keyup(function (e) {
   const topText = $(`#edit-input-top-card`).val();
   const bottomText = $(`#edit-input-bottom-card`).val();
   console.log(`topText val: ${topText}`);
   console.log(`bottomText val: ${bottomText}`);

   const topTextLength = topText.length;
   console.log(topTextLength);
   const bottomTextLength = bottomText.length;
   console.log(bottomTextLength);

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

   // if topTextLength > 0 and <= 240 and bottomTextLength > 0 and <=240
   if (
      topTextLength > 0 &&
      topTextLength <= 240 &&
      bottomTextLength > 0 &&
      bottomTextLength <= 240
   ) {
      // enable save button
      $(`#save-card`).removeClass(`disabled`);
   } else {
      $(`#save-card`).removeClass(`disabled`);

      // $(`#save-card`).attr(`disabled`, `disabled`); //the attribute 'disabled' is set to 'disabled'
   }
});

// if top card text length and bottom card text length > 0 && < 241
// remove class 'disabled' from '#save-card`

$(`#create-answer-input`).keyup(function (e) {
   console.log(`Event: `, e);

   // get the text from the text area
   const text = e.target.value;
   const username = `John`;
   console.log(`${username} inputted: ${text}`);

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
