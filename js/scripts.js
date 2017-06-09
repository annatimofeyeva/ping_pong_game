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

    //script for manually refreshing button
    $("#btnRefresh").click(function() {
         location.reload();
    });

    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script language="JavaScript">

    $("#btnRefresh").click(function() {
         location.reload();
    });

    </script>

//add gif image with onclick


for (index=0; index <=numbersOfInt; index ++)    {


if (number % 3 === 0){
  $("li").append("ping");
  $("#result").show();
} else if (number % 5 === 0){
  $("li").append("pong");
  $("#result").show();
} else if (number % 15 === 0){
  ("li").append("ping-pong");
  $("#result").show();
} else if (numbersOfInt === null){
  $("#error_mes_two").show();
} else if {numbersOfInt === ???????)//what if letters?????
  $("#error_mes_two").show();

} else{
  $("ul").append(inputNumbersArr[index]);
}

}

//script for manually refreshing button





  /*for (index=0; index<=numbersOfInt; index ++) {
      $("ul#ping_result").append(<li>inputNumbersArr[index]</li>);
      $("#result").show();
  }*/






  });
});
