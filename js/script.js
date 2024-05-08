const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-scroll");
const btnScroll = document.querySelector(".btn-scroll");
const logoBrand = document.querySelector(".logo-brand");
window.addEventListener("scroll", function () {
  function addNavChangeColor(nav) {
    console.log(nav);
    nav.classList.remove("text-white");
    nav.classList.add("text-dark");
  }
  function removeNavChangeColor(nav) {
    nav.classList.add("text-white");
    nav.classList.remove("text-dark");
  }
  let top = window.scrollY;
  if (top >= 10) {
    navbar.classList.add("bg-light");
    navbar.classList.add("shadow-lg");
    btnScroll.classList.remove("bg-light");
    btnScroll.classList.add("bg-coklat-300");
    btnScroll.classList.add("text-kreatif-300");
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png"

    navLink.forEach((nav) => {
      nav.classList.remove("text-white");
      nav.classList.add("text-kreatif");
    });
  } else {
    navLink.forEach((nav) => {
      nav.classList.add("text-white");
      nav.classList.remove("text-kreatif");
    });
    navbar.classList.remove("shadow-lg");
    btnScroll.classList.remove("bg-coklat-300");
    btnScroll.classList.remove("text-kreatif-300");
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png"
    navbar.classList.remove("bg-light");
  }
});
