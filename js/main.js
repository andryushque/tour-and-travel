$(document).ready(function () {
  /*=== Mobile Menu ===*/
  var menuButton = $(".header__mmenuBtn");
  menuButton.on("click", function () {
    $(".header__menu").toggleClass("header__menu--hidden");
    $(".header__menu").toggleClass("header__menu--visible");
    $(".mmenuBtn__icon--open").toggleClass("mmenuBtn__icon--hidden");
    $(".mmenuBtn__icon--close").toggleClass("mmenuBtn__icon--hidden");
  });
});
