var pageHeader = document.querySelector(".page-header");
var pageHeaderTop = pageHeader.querySelector(".page-header__top");
var pageHeaderBurger = pageHeader.querySelector(".page-header__burger");

pageHeaderBurger.addEventListener("click", function (event) {
  event.preventDefault();
  pageHeaderTop.classList.toggle("page-header__top--active")
});