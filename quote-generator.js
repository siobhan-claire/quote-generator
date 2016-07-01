//wait for the DOM to be ready
$(document).ready(function() {
  //capturing click event
  $('.button').click(function() {
    //assigning the quoteDisplay div to a variable
   var display = document.getElementById("quoteDisplay");
   //ajax call
    $.ajax({
      //API url
      url: "https://got-quotes.herokuapp.com/quotes",
      //use GET method
      method: "GET",
      //get data type json format
      dataType: 'json',
      //use this function if succesful
      success : function (data) {

        display.innerHTML = (data["quote"] + " - " + data["character"]);
        console.log (data);
      }
    })
    return false;
  });
});