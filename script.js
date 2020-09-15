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
   console.log("Let's add 1!"); // double quotes surround a string!
   /*
   ---
   We're about to work with numbers in JavaScript!
   ---
   */
   createImageryInputCharsCount++; // += 1 increments by one; ++ also works (as does --)"let" is another way; "const" is another
   console.log("Total inputted chars: ", createImageryInputCharsCount);
   $("#imagery-char-count").html(createImageryInputCharsCount);
});

let editBottomCardInputCharsCount = 0;
$("#edit-card-char-count-bottom-of-card").keypress(function () {
   editBottomCardInputCharsCount++;
   console.log(
      "Total inputted chars bottom card:  ",
      editBottomCardInputCharsCount
   );
   $("#edit-bottom-card-char-count").html(editBottomCardInputCharsCount);
});

let editTopCardInputCharsCount = 0;
$("#edit-card-char-count-top-of-card").keypress(function () {
   editTopCardInputCharsCount++;
   console.log("Total inputted chars top card: ", editTopCardInputCharsCount);
   $("#edit-top-card-char-count").html(editTopCardInputCharsCount);
});

let createAnswerCardInputCharsCount = 0;
$("#create-answer-input").keypress(function () {
   createAnswerCardInputCharsCount++;
   console.log(
      "Total inputted chars Create Answer card: ",
      createAnswerCardInputCharsCount
   );
   $("#create-answer-char-count").html(createAnswerCardInputCharsCount);
});
