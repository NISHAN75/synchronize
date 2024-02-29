

(function ($) {
"use strict";
$("header").headroom();
//   dorpdown box
// magnificPopup
$(".popup-video").magnificPopup({
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' + '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',
                id: 'v=',
                src: 'https://www.youtube.com/embed/%id%?autoplay=1'
            }
        }
    }
});
// active class add

$('.open-menu').click(function() {
    $(this).toggleClass('active');
    $('.mobile-nav').toggleClass('open');
    if (!$(this).hasClass('active')) {
      $('.mobile-nav').removeClass('open');
    }
  });
//   dorpdown box open
    $('.open-dorpdown-box').click(function() {
        $('.mobile-dorpdown').slideToggle(5000);
    });

    function stickyButtonPosition() {
        const container = document.querySelectorAll(".container")[1];
        const containerWidth = container.offsetWidth;
        const offsetLeft = container.offsetLeft;
        const windowWidth = window.innerWidth;
        const rightPixels = windowWidth - (offsetLeft + containerWidth);
        document.querySelector(".styicky-button-area").style.right = (rightPixels + 12) + "px";
    }

    stickyButtonPosition();
    window.addEventListener("resize", function() {
        stickyButtonPosition();
    });


})(jQuery);
