let documentWidth = $(document).width();
let num_projects = Object.keys(projects_obj).length;

let topFunction = () => {
  $("html, body").animate({
    scrollTop: 0
  }, "fast");
}

$(document).ready(() => {
  getProjects();
  mobile_adjuster();
  window_sizer();
  $(window).resize(() => {
    documentWidth = $(document).width();
    window_sizer();
    mobile_adjuster();
  });
});

let getProjects = () => {
  for (let key in projects_obj) {
    let obj = projects_obj[key];
    let project = "<a id=\"" + key + "\" class=\"project\" target=\"_blank\" href=\"" + obj["href"] + "\"></a>";
    let image = "<div class=\"projects_img\" style=\"background-image:url('" + obj["background"] + "')\"></div>";
    let overlay = "<div class=\"project_overlay\"></div>";
    let text_holder = "<div class=\"project_text\"></div>";
    let title = "<p style=\"font-size: 28px\">" + obj["title"] + "</p>";
    let text = "<p style=\"font-size: 13px; font-style: italic\">" + obj["text"] + "</p>";
    $(".projects").append(project);
    $("#" + key).append(image, overlay, text_holder);
    $("#" + key).find(".project_text").append(title, text);
  }
}

let mobile_adjuster = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.project').find(".project_overlay").css("opacity", "1");
    $('.project').find(".project_text").css("opacity", "1");
    $('.project').find(".projects_img").css("filter", "blur(10px)");
    hover_mobile();
  } else {
    $('.project').find(".project_overlay").css("opacity", "0");
    $('.project').find(".project_text").css("opacity", "0");
    $('.project').find(".projects_img").css("filter", "none");
    window_sizer();
  }
}

let window_sizer = () => {
  if (documentWidth <= 973) {
    $(':root').css('--sizer', documentWidth + "px");
    $('.project').find(".project_overlay").css("opacity", "1");
    $('.project').find(".project_text").css("opacity", "1");
    $('.project').find(".projects_img").css("filter", "blur(10px)");
    hover_mobile();
  } else {
    $('.project').find(".project_overlay").css("opacity", "0");
    $('.project').find(".project_text").css("opacity", "0");
    $('.project').find(".projects_img").css("filter", "none");
    hover_windows();
    $(':root').css('--sizer', "500px");
  }
  if (documentWidth <= 800) {
    $(':root').css('--tools', "none");
  } else {
    $(':root').css('--tools', "block");
  }

}

let hover_mobile = () => {
  $('.project')
    .mouseenter(function () {
      $(this).find(".project_overlay").css("opacity", "1");
      $(this).find(".project_text").css("opacity", "1");
      $(this).find(".projects_img").css("filter", "blur(10px)");
    })
    .mouseleave(function () {
      $(this).find(".project_overlay").css("opacity", "1");
      $(this).find(".project_text").css("opacity", "1");
      $(this).find(".projects_img").css("filter", "blur(10px)");
    });
}

let hover_windows = () => {
  $('.project')
    .mouseenter(function () {
      $(this).find(".project_overlay").css("opacity", "1");
      $(this).find(".project_text").css("opacity", "1");
      $(this).find(".projects_img").css("filter", "blur(10px)");
      $(this)[0].scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    })
    .mouseleave(function () {
      $(this).find(".project_overlay").css("opacity", "0");
      $(this).find(".project_text").css("opacity", "0");
      $(this).find(".projects_img").css("filter", "none");
    });
}