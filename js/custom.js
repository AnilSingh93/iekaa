$(".usablity-slider .slider-inner").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true   
  });
  $("#side_menu").click(function(){
    var overyay = $("<div class='body-overlay'></div>")
  $("body").prepend(overyay);
  $("body").addClass("overlay");
    $(".header_side_menu").addClass("open");
    $(".header-hamburger-items").addClass("open");  
  })
  $(".header-hamburger-items .header-close").click(function(){
    $("body").remove(overyay);
  $("body").removeClass("overlay");
    $("body").removeClass("overlay");  
    $(".header_side_menu").removeClass("open");
    $(".header-hamburger-items").removeClass("open");  
  })
  
  $(document).ready(function(){
    $(".website-center-inner").slick({
      arrows: false,
      dots: true
    })
    
    $(".marketing-inner").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
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
    slidesToScroll: 1,
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
  

})


