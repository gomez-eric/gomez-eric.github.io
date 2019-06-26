let navigationLinks = $('.navbtn-container > a');
let sections = $(".section");

let topFunction = () => {
  $("html, body").animate({
    scrollTop: 0
  }, "fast");
}

let navswitch = () => {
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

$(document).ready(() => {
  nav_active_checker();
  opacity_scroll();
  highlightNavigation(sections, navigationLinks);
});

let nav_active_checker = () =>  {
  let documentWidth = $(window).width();
  if (documentWidth > 970) {
    $(".nav").removeClass("navbtn-active");
  } 
}

let opacity_scroll = () => {
  let top_scroll = window.pageYOffset || document.documentElement.scrollTop;
  let opacity = top_scroll / ($(window).height());
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

let highlightNavigation = (sections, navigationLinks) => {
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