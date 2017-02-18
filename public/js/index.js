$(document).ready(function(){

function renderBurgs(data) {
  if (data.length !== 0) {

    $("#burgers").empty();
    $("#burgers").show();

    for (var i = 0; i < data.length; i++) {

      var listItem = $("<li>");

      listItem.append("<p>" + data[i].burger_name + "</p>");
    //   div.append("<p>Author: " + data[i].author + "</p>");
    //   div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#burgers").append(listItem);

    }


  }
}
    renderBurgs();


});