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
    navbar.classList.add("bg-white");
    navbar.classList.add("shadow-lg");
    navbar.classList.add("element-to-animate");
    // btnScroll.classList.remove("bg-white");
    btnScroll.classList.add("btn-secondary");
    // btnScroll.classList.add("text-primary");
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png"

    navLink.forEach((nav) => {
      nav.classList.remove("text-white");
      nav.classList.add("text-primary");
    });
  } else {
    navLink.forEach((nav) => {
      nav.classList.add("text-white");
      nav.classList.remove("text-primary");
    });
    navbar.classList.remove("shadow-lg");
    btnScroll.classList.remove("btn-secondary");
    // btnScroll.classList.remove("text-primary");
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png"
    navbar.classList.remove("bg-white");
  }
});

// Slider
document.querySelectorAll('.carousel .carousel-item').forEach(function(item) {
  var minPerSlide = 4;
  var next = item.nextElementSibling;
  if (!next) {
      next = item.parentElement.firstElementChild;
  }
  item.appendChild(next.firstElementChild.cloneNode(true));
  
  for (var i = 0; i < minPerSlide; i++) {
      next = next.nextElementSibling;
      if (!next) {
          next = item.parentElement.firstElementChild;
      }
      
      item.appendChild(next.firstElementChild.cloneNode(true));
  }
});

