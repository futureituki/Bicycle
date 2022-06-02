$(window).on("load", function () {
  $("#splash").delay(1700).fadeOut("slow"); //ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut("slow"); //ロゴを1.2秒（1200ms）待機してからフェードアウト
});
$(".openbtn1").click(function () {
  $(this).toggleClass("activenone");
  $("#g-nav").toggleClass("panelactive");
  $("#g-nav li").addClass("li-animation");
  setTimeout(function () {
    $(".closebtn1").toggleClass("active");
  }, 350);
});
$(".closebtn1").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  setTimeout(function () {
    $(".openbtn1").toggleClass("activenone");
  }, 200);
});
$("#g-nav a").click(function () {
  $(".openbtn1").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});
jQuery(function ($) {
  $(".bg-slider").bgSwitcher({
    images: [
      "../img/section-top.jpeg",
      "../img/section-top2.jpeg",
      "../img/section-top3.jpeg",
    ],
  });
});
function soomscroll(x) {
  let speed = 2000;
  let type = "swing";
  let href = x.attr("href");
  let target = $(href == "#index" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, type);
  $(".closebtn1").toggleClass("active");
  $(".openbtn1").toggleClass("activenone");
}
$(function () {
  $('a[href^="#top"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
$(function () {
  $('a[href^="#concept"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
$(function () {
  $('a[href^="#about"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
$(function () {
  $('a[href^="#service"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
$(function () {
  $('a[href^="#member"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
$(function () {
  $('a[href^="#contact"]').click(function () {
    soomscroll($(this));
    return false;
  });
});
let width = $(window).width();
if (width > 767) {
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.08,
  });
}

$(".modal-open").modaal({
  overlay_close: true,
  before_open: function () {
    $("html").css("overflow-y", "hidden");
  },
  after_close: function () {
    $("html").css("overflow-y", "scroll");
  },
});

$(".contact-form")
  .find(".form-control")
  .each(function () {
    let targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find("label").css({
        top: "10px",
        fontSize: "14px",
      });
    }
  });
$(".contact-form")
  .find(".form-control")
  .focus(function () {
    $(this).parent(".input-block").addClass("focus");
    $(this).parent().find("label").animate(
      {
        top: "10px",
        fontSize: "14px",
      },
      300
    );
  });
$(".contact-form")
  .find(".form-control")
  .blur(function () {
    if ($(this).val().length == 0) {
      $(this).parent(".input-block").removeClass("focus");
      $(this).parent().find("label").animate(
        {
          top: "25px",
          fontSize: "18px",
        },
        300
      );
    }
  });

function heightAnimation () {
    const elem = $(".contact-wrap").offset().top;
    let wH = window.innerHeight;
    let scroll = $(window).scrollTop();
    if (scroll+wH > elem) {
      $("#header").css("height", "80vh");
    }else{
      $("#header").css("height", "100vh");
    }
};

$(window).scroll(function(){
  heightAnimation();
})
$(window).on('load',function(){
  heightAnimation();
})
