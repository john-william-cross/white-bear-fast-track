$("#save-card").click(function () {
    // code below targets the id "overlay-sucess"; for toggleClass, 
    // it means "if d-flex is on, turn it off; if d-none is on, turn it off"
    $("#overlay-success").toggleClass("d-flex d-none")
})

$("#back-to-answer-error").click(function () {
    $("#overlay-error").toggleClass("d-flex d-none")
})

$("#next-error").click(function () {
    $("#overlay-error").toggleClass("d-flex d-none")
})