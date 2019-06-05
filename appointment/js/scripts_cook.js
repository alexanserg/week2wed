
var tspToTbsp = function (tsp) {
  return tsp / 3;
};

 // alert(tspToTbsp(tsp))

 $(document).ready(function() {
   $("form#tsp").submit(function(event) {
     event.preventDefault();
     var tsp = parseInt($("#tsp1").val());
     var result = tspToTbsp(tsp);
     $("#addOutput").text(result);
   });
 });
