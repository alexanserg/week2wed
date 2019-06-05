var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    // var number1 = parseInt(prompt("Enter a number: "));
    // var number2 = parseInt(prompt("Enter another number: "))
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#addOutput").text(result);
  });
});

$(document).ready(function() {
  $("form#sub").submit(function(event) {
    event.preventDefault();
    // var number1 = parseInt(prompt("Enter a number: "));
    // var number2 = parseInt(prompt("Enter another number: "))
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());
    var result = subtract(number1, number2);
    $("#subOutput").text(result);
  });
});

$(document).ready(function() {
  $("form#mul").submit(function(event) {
    event.preventDefault();
    // var number1 = parseInt(prompt("Enter a number: "));
    // var number2 = parseInt(prompt("Enter another number: "))
    var number1 = parseInt($("#mul1").val());
    var number2 = parseInt($("#mul2").val());
    var result = multiply(number1, number2);
    $("#mulOutput").text(result);
  });
});

$(document).ready(function() {
  $("form#div").submit(function(event) {
    event.preventDefault();
    // var number1 = parseInt(prompt("Enter a number: "));
    // var number2 = parseInt(prompt("Enter another number: "))
    // It works even though your input is integer but output is floating anyway!
    var number1 = parseInt($("#div1").val());
    var number2 = parseInt($("#div2").val());
    var result = divide(number1, number2);
    $("#divOutput").text(result);
  });
});
