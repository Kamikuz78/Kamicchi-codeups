jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

var swiper = new Swiper ('.js-mv-swiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  speed: 2000,
  fadeEffect: {
      crossFade: true
  }
});

var swiper = new Swiper(".js-works-swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
});