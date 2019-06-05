$(document).ready(function() {
  $("form#app").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt(prompt("Enter a number: "));
    // var number2 = parseInt(prompt("Enter another number: "))
    // var number1 = parseInt($("#add1").val());
    // var number2 = parseInt($("#add2").val());
    // var result = add(number1, number2);
    $("#addOutput").text("Booking Successful");
  });
});
