//Business logic
function get_ping_pong_data(limit) {
  var result = [];
  for (index = 1; index <= limit; index++) {
    if (index % 15 === 0) {
      result.push("ping-pong");
    } else if (index % 3 === 0) {
      result.push("ping");
    } else if (index % 5 === 0) {
      result.push("pong");
    } else {
      result.push(index);
    }
  }
  return result;
}

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
    get_ping_pong_data(limit).forEach(function(element) {
      $("#ping_list").append("<li>" + element + "</li>");
    });
  });
});
