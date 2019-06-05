$(document).ready(function() {
  $("#blanks form").submit(function() {
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      // console.log(blank);
      var userInput = $("input#" + blank).val();
      console.log(userInput)
      $("." + blank).text(userInput).val();
    });

    $("#story").show();
    // alert('Got to end of form submit!');
    event.preventDefault();
  });
});
