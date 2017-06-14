//Business logic
function get_ping_pong_data(limit) {
  var result = {data: [], error: false};
  if (isNaN(limit) || limit < 1) {
    result.error = true;
    return result;
  }
  for (index = 1; index <= limit; index++) {
    if (index % 15 === 0) {
      result.data.push("ping-pong");
    } else if (index % 3 === 0) {
      result.data.push("ping");
    } else if (index % 5 === 0) {
      result.data.push("pong");
    } else {
      result.data.push(index);
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
    var result = get_ping_pong_data(limit);
    $("#ping_list").empty();
    if (result.error) {
      $("#error_mes_one").show();
      return;
    }
    $("#error_mes_one").hide();
    $("#ping_number").val("");
    result.data.forEach(function(element) {
      $("#ping_list").append("<li>" + element + "</li>");
    });
  });
});
