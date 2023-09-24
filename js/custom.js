$(".usablity-slider .slider-inner").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true
});
$("#side_menu").click(function () {
  var overyay = $("<div class='body-overlay'></div>")
  $("body").prepend(overyay);
  $("body").addClass("overlay");
  $(".header_side_menu").addClass("open");
  $(".header-hamburger-items").addClass("open");
})
$(document).on("click", ".header-hamburger-items .header-close img", function () {
  $("body").removeClass("overlay");
  $("body").children(".body-overlay").remove();
  $(".header_side_menu").removeClass("open");
  $(".header-hamburger-items").removeClass("open");
})

$(document).ready(function () {
  $(".website-center-inner").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,

  })

  $(".marketing-inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true,
    infinte: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  $(".mobile-slider").slick({
    arrows: false,
    dots: true,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000

  })
  $(".client-main").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  var $images = $('.parallax-img');
  var window_h = $(window).height();

  $(window).scroll(function () {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop == 0) {
      TweenLite.to($images, 2, {
        yPercent: 0,
        ease: Power1.easeOut,
        overwrite: 0
      });
    }
    else {
      $images.each(function () {
        var elementOffsetTop = $(this).offset().top,
          element_h = $(this).height(),
          velocity = $(this).data('velocity');

        if (windowScrollTop + window_h > elementOffsetTop && windowScrollTop < elementOffsetTop + element_h) {

          TweenLite.to($(this), 2, {
            yPercent: (windowScrollTop + window_h - elementOffsetTop) / window_h * velocity,
            ease: Power1.easeOut,
            overwrite: 0
          });
        }
      });
    }
  });

})


