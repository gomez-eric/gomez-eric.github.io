var navigationLinks = $('.navbtn-container > a');
var sections = $(".section");

var topFunction = function () {
  $("html, body").animate({
    scrollTop: 0
  }, "fast");
}

var navswitch = function () {
  if($(".nav").hasClass("navbtn-active")){
    $(".nav").removeClass("navbtn-active");
  } else {
    $(".nav").addClass("navbtn-active");
  }
}

$(window).resize(function() {
  nav_active_checker();
  opacity_scroll();
  highlightNavigation(sections, navigationLinks);
});

$(document).scroll(function () {
  nav_active_checker();
  opacity_scroll();
  highlightNavigation(sections, navigationLinks);
});

$(document).ready(function () {
  nav_active_checker();
  opacity_scroll();
  highlightNavigation(sections, navigationLinks);
});

var nav_active_checker = function ()  {
  var documentWidth = $(window).width();
  if (documentWidth < 970) {
    $(".nav").addClass("navbtn-active");
  }

  if (documentWidth > 970) {
    $(".nav").removeClass("navbtn-active");
  } 
}

var opacity_scroll = function () {
  var top_scroll = window.pageYOffset || document.documentElement.scrollTop;
  var opacity = top_scroll / ($(window).height());
  if (opacity > .10) {
    $("#scroll_to_top").css("display", "block");
    $("#scroll_to_top").css("opacity", opacity);
    $(".nav-bg").css("visibility", "visible");
    $(".nav-bg").css("opacity", opacity);
  } else if (opacity <= .10){
    $(".nav-bg").css("visibility", "hidden");
    $("#scroll_to_top").css("display", "none");
  }
}

var highlightNavigation = function (sections, navigationLinks) {
  var scrollPosition = $(window).scrollTop();
  //CHANGES NAV LINK ACCORDING TO SCREEN POSITION (REMOVES PX OFFEST TO CORRECT POSITION)
  sections.each(function(index, object) {
    if ($(object).offset().top - 200 <= scrollPosition) {
      $(navigationLinks).removeClass("active");
      $(navigationLinks[index]).addClass("active");
    } 
  });
  //GETS LAST SECTION WHEN HITS BOTTOM OF SCREEN
  if($(window).scrollTop() + $(window).height() == $(document).height()){
    $(navigationLinks).removeClass("active");
    $(navigationLinks[navigationLinks.length-1]).addClass("active");
  }
}