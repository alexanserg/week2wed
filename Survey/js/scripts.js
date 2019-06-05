$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var age = $("#age").val();
    var food = $("#food").val();
    var gender = $("#gender").val();
    var music = $("input:radio[name=music]:checked").val();

    $(".name").text(name);
    $(".age").text(age);
    $(".food").text(food);
    $(".gender").text(gender);
    $(".music").text(music);
    $("#submit").show();
    event.preventDefault();
  });
});
