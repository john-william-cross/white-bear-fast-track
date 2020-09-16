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

let createImageryInputCharsCount = 0; // use "let" instead of "const" because it will be updated
$("#create-imagery-input").keypress(function () {
   console.log("Let's add 1!");

   createImageryInputCharsCount++;
   console.log("Total inputted chars: ", createImageryInputCharsCount);
   $("#imagery-char-count").html(createImageryInputCharsCount);
});

let editBottomCardInputCharsCount = 0;
$("#edit-input-bottom-card").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   if (key === 8) {
      console.log("the user has pressed backspace!");
      editBottomCardInputCharsCount--;
      if (editBottomCardInputCharsCount < 0) {
         console.log("You have entered negative territory!");
         editBottomCardInputCharsCount = 0;
      }
   } else if (key === 16) {
      console.log("Shift was pressed");
   } else if (key === 18) {
      console.log("Option was pressed");
   } else {
      console.log("the user pressed any other key");
      editBottomCardInputCharsCount++;
   }
   console.log("Total inputted chars: ", editBottomCardInputCharsCount);
   $("#edit-bottom-card-char-count").html(editBottomCardInputCharsCount);
});

let editTopCardInputCharsCount = 0;
$("#edit-input-top-card").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   if (key === 8) {
      console.log("the user has pressed backspace!");
      editTopCardInputCharsCount--;
      if (editTopCardInputCharsCount < 0) {
         console.log("You have entered negative territory!");
         editTopCardInputCharsCount = 0;
      }
   } else if (key === 16) {
      console.log("Shift was pressed");
   } else if (key === 18) {
      console.log("Option was pressed");
   } else {
      console.log("the user pressed any other key");
      editTopCardInputCharsCount++;
   }
   console.log("Total inputted chars: ", editTopCardInputCharsCount);
   $("#edit-top-card-char-count").html(editTopCardInputCharsCount);
});

let createAnswerCharsCount = 0;
$("#create-answer-input").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   if (key === 8) {
      console.log("the user has pressed backspace!");
      createAnswerCharsCount--;
      if (createAnswerCharsCount < 0) {
         console.log("You have entered negative territory!");
         createAnswerCharsCount = 0;
      }
   } else if (key === 16) {
      console.log("Shift was pressed");
   } else if (key === 18) {
      console.log("Option was pressed");
   } else {
      console.log("the user pressed any other key");
      createAnswerCharsCount++;
   }
   console.log("Total inputted chars: ", createAnswerCharsCount);
   $("#create-answer-char-count").html(createAnswerCharsCount);
});

let imageryCharsCount = 0;
$("#create-imagery-input").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   if (key === 8) {
      console.log("the user has pressed backspace!");
      imageryCharsCount--;
      if (imageryCharsCount < 0) {
         console.log("You have entered negative territory!");
         imageryCharsCount = 0;
      }
   } else if (key === 16 || 18 || 91 || 17) {
      console.log("This doesn't count in the character counter");
   } else {
      console.log("the user pressed any other key");
      imageryCharsCount++;
   }

   console.log("Total inputted chars: ", imageryCharsCount);
   $("#imagery-char-count").html(imageryCharsCount);
});
