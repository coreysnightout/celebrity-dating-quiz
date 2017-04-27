$(function() {
  $("form#date").submit(function(event) {
    var gender = ($('input[name=gender]:checked').val());
    var age = parseInt($("input#age").val());
    var food = $("select#food").val();
    console.log(gender);
    console.log(age);
    console.log(food);


    if (gender = "male" && age > 50 && food === "kale") {
      $("#alec").show();
    } else if (gender = "male" && age <= 50 && food === "water") {
      $("#bill").show();
    } else if (gender = "other" && age < 50 && food === "kale") {
      $("#rosie").show();
    } else if (gender = "female" && age > 50 && food === "water") {
      $("#elisha").show();
    } else if (gender = "female" && age < 50 && food === "kale") {
     $("#tina").show();
   } else {
     $("#shoenice").show();
   }

   event.preventDefault();
  });
});
