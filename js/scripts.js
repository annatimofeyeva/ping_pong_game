//business logic

//User interface logic:
$(document).ready(function() {
  $("#ping_button").click(function() {
    var limit = $("#ping_number").val();
    $("#ping_list").empty();
    $("#ping_number").val("");
    for (index = 1; index < limit; index++) {
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
