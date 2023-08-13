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
      delay: 0,
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
      loop: true,
      slidesPerView: 2.1,
      slidePerGroup:3,
      spaceBetween: 24,
      breakpoints: {
        500: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 8,
          spaceBetween: 8,
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: true,
  });
  var slider = new Swiper ('.js-gallery__slider', {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: sliderThumbnail,
    },
    });
  });