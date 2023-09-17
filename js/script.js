$(".usablity-slider .slider-inner").slick({
  arrows: false,
  dots: true
});
$("#side_menu").click(function(){
  $(".header_side_menu").addClass("open");
  $(".header-hamburger-items").addClass("open");  
})
$(".header-hamburger-items .header-close").click(function(){
  $("body").removeClass("overlay");  
  $(".header_side_menu").removeClass("open");
  $(".header-hamburger-items").removeClass("open");  
})


gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* Main navigation */

let panelsSection = document.querySelector('#panels'),
    panelsContainer = document.querySelector('#panels-container'),
    tween;
document.querySelectorAll('.anchor').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetElem = document.querySelector(
                e.target.getAttribute('href')
            ),
            y = targetElem;
        if (
            targetElem &&
            panelsContainer.isSameNode(targetElem.parentElement)
        ) {
            let totalScroll =
                    tween.scrollTrigger.end - tween.scrollTrigger.start,
                totalMovement = (panels.length - 1) * targetElem.offsetWidth;
            y = Math.round(
                tween.scrollTrigger.start +
                    (targetElem.offsetLeft / totalMovement) * totalScroll
            );
        }
        gsap.to(window, {
            scrollTo: {
                y: y,
                autoKill: false,
            },
            duration: 1,
        });
    });
});

/* Panels */

const panels = gsap.utils.toArray('#panels-container .panel');
tween = gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '#panels-container',
        pin: true,
        start: 'top top',
        scrub: 1,
        snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
        },
        end: () => '+=' + (panelsContainer.offsetWidth - innerWidth),
    },
});

$(document).ready(function(){
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
   
})

