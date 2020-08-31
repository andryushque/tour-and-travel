$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var menuButton = $(".header__mmenuBtn");
  menuButton.on("click", function () {
    $(".header__menu").toggleClass("header__menu--hidden");
    $(".header__menu").toggleClass("header__menu--visible");
    $(".mmenuBtn__icon--open").toggleClass("mmenuBtn__icon--hidden");
    $(".mmenuBtn__icon--close").toggleClass("mmenuBtn__icon--hidden");
  });

  /*=== Testimonials Slider ===*/
  var testimonialsSwiper = new Swiper(".testimonials-slider", {
    loop: true,
    slidesPerView: "1",
    autoHeight: true,

    navigation: {
      nextEl: ".testimonials__button--next",
      prevEl: ".testimonials__button--prev",
    },

    keyboard: {
      enabled: true,
    },
  });
});
