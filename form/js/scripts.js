

$(document).ready(function() {
  $("radio").submit(function(event) {
    event.preventDefault();
    var beverage = $("#beverage").val();
    alert(beverage);
  });
});
