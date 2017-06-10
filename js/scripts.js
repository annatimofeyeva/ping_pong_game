//business logic

//User interface logic:
$(document).ready(function() {
  $(function() {
    $("[data-hide]").on("click", function() {
      $(this).closest("." + $(this).attr("data-hide")).hide();
    });
  });
  $("#ping_button").click(function() {
    var limit = parseInt($("#ping_number").val());
    console.log(limit);
    $("#ping_list").empty();
    if (isNaN(limit) || limit < 1) {
      $("#error_mes_one").show();
      return;
    }
    $("#error_mes_one").hide();
    $("#ping_number").val("");
    for (index = 1; index <= limit; index++) {
      if (index % 15 === 0) {
        $("#ping_list").append("<li>ping-pong</li>");
      } else if (index % 3 === 0) {
        $("#ping_list").append("<li>ping</li>");
      } else if (index % 5 === 0) {
        $("#ping_list").append("<li>pong</li>");
      } else {
        $("#ping_list").append("<li>" + index + "</li>");
      }
    }
  });
});
