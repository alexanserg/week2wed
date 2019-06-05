$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    // This is simple trick to modify variable two times 
    var person1InputUpper = person1Input.toUpperCase();
    $(".person1").text(person1InputUpper);
    $("#story").show();
    event.preventDefault();
  });
});
