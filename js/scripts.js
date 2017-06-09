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


    $(function() {
      var alert = $('div.alert[auto-close]');
      alert.each(function() {
        var that = $(this);
        var time_period = that.attr('auto-close');
        setTimeout(function() {
          that.alert('close');
        }, time_period);
      });
    });


if (number % 3 === 0){
  $("li").append("ping");
  $("#result").show();
} else if (number % 5 === 0){
  $("li").append("pong");
  $("#result").show();
} else if (number % 15 === 0){
  ("li").append("ping-pong");
  $("#result").show();
} else if (numbersOfInt === 0){
  $("#error_mes_two").show();
} else if {numbersOfInt === 

}
else










  /*for (index=0; index<=numbersOfInt; index ++) {
      $("ul#ping_result").append(<li>inputNumbersArr[index]</li>);
      $("#result").show();
  }*/






  });
});
