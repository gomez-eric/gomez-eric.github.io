// When the user scrolls down 20px from the top of the document, show the button
var opacity = (document.documentElement.scrollTop/150).toFixed(1);
var documentWidth = $( document ).width();


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

  mobile_adjuster();
  window_sizer();

  $(window).resize(function() {
    documentWidth = $( document ).width();
    mobile_adjuster();
  });

  $(".projects_col").click(function() {
    window.open($(this).attr("href"), $(this).attr("target"));
  });

});


function mobile_adjuster() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $( '.projects_col' ).find( ".projects_col_inner" ).css("opacity", "1");
    $( '.projects_col' ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "1");
    hover_mobile();
  } else {
    $( '.projects_col' ).find( ".projects_col_inner" ).css("opacity", "0");
    $( '.projects_col' ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "0");
    window_sizer();
  }

}

function window_sizer() {
  if(documentWidth <= 973) {
    $( '.projects_col' ).find( ".projects_col_inner" ).css("opacity", "1");
    $( '.projects_col' ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "1");
    hover_mobile();
  } else {
    $( '.projects_col' ).find( ".projects_col_inner" ).css("opacity", "0");
    $( '.projects_col' ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "0");
    hover_windows();
  }
}

function hover_mobile() {
  $( '.projects_col' )
    .mouseenter(function() {
      $( this ).find( ".projects_col_inner" ).css("opacity", "1");
      $( this ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "1");
    })
    .mouseleave(function() {
      $( this ).find( ".projects_col_inner" ).css("opacity", "1");
      $( this ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "1");
    });
}

function hover_windows() {
  $( '.projects_col' )
    .mouseenter(function() {
      $( this ).find( ".projects_col_inner" ).css("opacity", "1");
      $( this ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "1");
    })
    .mouseleave(function() {
      $( this ).find( ".projects_col_inner" ).css("opacity", "0");
      $( this ).find( ".projects_col_inner" ).find( ".projects_col_text" ).css("opacity", "0");
    });
}



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
