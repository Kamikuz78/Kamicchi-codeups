
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.js-top-button');
  topBtn.hide();

  var sliderHeight = $(".mv").height();
  var sliderHeight = $(".sub-mv").height();

  document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // スクロールするとロゴの色変更
  $(window).on("scroll", function () {
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".js-header").addClass("header-another");
    } else {
      $(".js-header").removeClass("header-another");
    }
  });

    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger").click(function () {
      $(this).toggleClass("is-open");
      if ($(this).hasClass("is-open")) {
          openDrawer();
      } else {
          closeDrawer();
      }
      $("body").toggleClass("active");
      });

        //backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function (event) {
          closeDrawer();
      });
  });

  function openDrawer() {
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
      $(".js-drawer-bg").addClass("is-open");
  }

  function closeDrawer() {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer-bg").removeClass("is-open");
  }
  //
  $(window).resize(function() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
      $(".js-drawer-bg").removeClass("is-open");
    };
  });

  //backgroundまたはページ内リンクをクリックで閉じる
  $(".drawer__item a[href]").on("click", function (event) {
    closeDrawer();
  });

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-open");
    $(".js-hamburger-bg").removeClass("is-open");
}

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  topBtn.on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

});