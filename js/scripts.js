//bsiness logic






//User interface logic:

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input#number").val();
    console.log(inputNumbers);
     var inputNumbersArr = inputNumbers.split("");
     alert(inputNumbersArr);
     var numbersOfInt = inputNumbersArr.length;
    alert(numbersOfInt);


/*if (number % 3 === 0){
  $("li").append("ping");
  $("#result").show();
} else if (number % 5 === 0){
  $("li").append("ping");
  $("#result").show();
}*/



    $("li").append("hello");
    $("#result").show();


     //$('tr').append();








  /*for (index=0; index<=numbersOfInt; index ++) {
      $("ul#ping_result").append(<li>inputNumbersArr[index]</li>);
      $("#result").show();
  }*/






  });
});
