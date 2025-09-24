const burgerMenuBtn = document.querySelector(".header__burger-menu-btn");
const menuHeader = document.querySelector(".header__list");
const closeBtn = document.querySelector(".header__close-btn");

burgerMenuBtn.addEventListener("click", function () {
  menuHeader.classList.remove("displey-no");
  burgerMenuBtn.classList.add("displey-no");
  closeBtn.classList.remove("visually-hidden");
});

closeBtn.addEventListener("click", function () {
  menuHeader.classList.add("displey-no");
  burgerMenuBtn.classList.remove("displey-no");
  closeBtn.classList.add("visually-hidden");
});
