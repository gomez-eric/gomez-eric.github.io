// When the user scrolls down 20px from the top of the document, show the button
let opacity = (document.documentElement.scrollTop/150).toFixed(1);
let documentWidth = $( document ).width();
var num_projects = Object.keys(projects_obj).length;

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
  getProjects(); // RELEASE PROJECTS TO PAGE
  mobile_adjuster(); // ADJUST TO MOBILE
  window_sizer(); // RESIZER

  $(window).resize(function() {
    documentWidth = $( document ).width();
    window_sizer(); // RESIZER
    mobile_adjuster();
  });

  $(".project").on("click mouseup mousedown",function(type) {
    if(type.which != 3)
      window.open($(this).attr("href"), $(this).attr("target"));
    if(type.button == 1)
      return false;
  });



});

function getProjects(){
  for (var key in projects_obj) {
    var obj = projects_obj[key];
    var project = "<div id=\"" + key + "\" class=\"project\" target=\"_blank\" href=\"" + obj["href"] + "\"></div>";
    var image = "<div class=\"projects_img\" style=\"background-image:url('" + obj["background"]+ "')\"></div>";
    var overlay = "<div class=\"project_overlay\"></div>";
    var text_holder = "<div class=\"project_text\"></div>";
    var title = "<p style=\"font-size: 40px\">" + obj["title"] + "</p>";
    var text = "<p style=\"font-size: 25px; font-style: italic\">" + obj["text"] + "</p>";

    $(".projects").append(project);
    $("#"+key).append(image,overlay,text_holder);
    $("#"+key).find(".project_text").append(title,text);
  }
}





function mobile_adjuster() {
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.project').find( ".project_overlay" ).css("opacity", "1");
    $('.project').find( ".project_text" ).css("opacity", "1");
    $('.project').find( ".projects_img" ).css("filter", "blur(10px)");
    hover_mobile();
  } else {
    $('.project').find( ".project_overlay" ).css("opacity", "0");
    $('.project').find( ".project_text" ).css("opacity", "0");
    $('.project').find( ".projects_img" ).css("filter", "none");
    window_sizer();
  }

}

function window_sizer() {

  if(documentWidth <= 973) {
    $(':root').css('--sizer', documentWidth +"px");
    $('.project').find( ".project_overlay" ).css("opacity", "1");
    $('.project').find( ".project_text" ).css("opacity", "1");
    $('.project').find( ".projects_img" ).css("filter", "blur(10px)");
    hover_mobile();
  } else {
    $('.project').find( ".project_overlay" ).css("opacity", "0");
    $('.project').find( ".project_text" ).css("opacity", "0");
    $('.project').find( ".projects_img" ).css("filter", "none");
    hover_windows();
    $(':root').css('--sizer', "500px");
  }

  if(documentWidth <= 800) {
    $(':root').css('--tools', "none");
  } else {
    $(':root').css('--tools', "display");
  }

}

function hover_mobile() {
  $( '.project' )
    .mouseenter(function() {
      $(this).find( ".project_overlay" ).css("opacity", "1");
      $(this).find( ".project_text" ).css("opacity", "1");
      $(this).find( ".projects_img" ).css("filter", "blur(10px)");
    })
    .mouseleave(function() {
      $(this).find( ".project_overlay" ).css("opacity", "1");
      $(this).find( ".project_text" ).css("opacity", "1");
      $(this).find( ".projects_img" ).css("filter", "blur(10px)");
    });
}

function hover_windows() {
  $( '.project' )
    .mouseenter(function() {
      $(this).find( ".project_overlay" ).css("opacity", "1");
      $(this).find( ".project_text" ).css("opacity", "1");
      $(this).find( ".projects_img" ).css("filter", "blur(10px)");
      $(this).css("height", "500px");
      $(this)[0].scrollIntoView({
        behavior: "smooth", // or "auto" or "instant"
        block: "nearest" // or "end"
      });
    })
    .mouseleave(function() {
      $(this).find( ".project_overlay" ).css("opacity", "0");
      $(this).find( ".project_text" ).css("opacity", "0");
      $(this).find( ".projects_img" ).css("filter", "none");
      $(this).css("height", "350px");
    });
}
