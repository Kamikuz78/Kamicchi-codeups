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


/* page-works-detail */
  //サムネイルスライド
  var sliderThumbnail = new Swiper ('.js-gallery-thumbs', {
    slidesPerView: 3,
    // slidesPerView: 'auto',
    breakpoints: {
      // 768px以上の場合
      768: {
        slidesPerView: 8,
      }
    },
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    // loopAdditionalSlides: 8,
    watchSlidesProgress: true,
    // slideToClickedSlide: true,
    // slideThumbActiveClass:	'swiper-slide-thumb-active',
    // thumbsContainerClass: 'gallery-thumbs'
});
var slider = new Swiper ('.js-gallery__slider', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  // loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
  });

});