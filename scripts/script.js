// When the user scrolls down 20px from the top of the document, show the button
var opacity = (document.documentElement.scrollTop/150).toFixed(1);

window.onscroll = function() {
  opacity = (document.documentElement.scrollTop/150).toFixed(1);
  if (opacity > 0) {
    document.getElementById("scrollUP").style.display = "block";
    document.getElementById("scrollUP").style.opacity = opacity;
  } else if (opacity == 0) {
    document.getElementById("scrollUP").style.display = "none";
  }

}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$( document ).ready(function() {
  $('[data-toggle="popover"]').popover(); 


});



/*
//$(".thisBox").hide();
//$(':root').css({'--daColor': "FUNCTIONORCOLOR"})
//
console.log("HELLO");

$("body").addClass("animated fadeIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      $(this).removeClass("animated fadeIn");
    });

//$(document).on("click", ".daMode", function() {
$("#THEID").on("click", function(){

  // This test is to retrieve data from the API
  $.getJSON("http://www.thelink.com", function(json) {
    // Get string into a variable
    var string = (JSON.stringify(json));
    // Convert string into object
    var obj = JSON.parse(string);

  });
});

*/
