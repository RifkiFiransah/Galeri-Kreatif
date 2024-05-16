const navbar = document.querySelector(".navbar");
const navLink = document.querySelectorAll(".nav-scroll");
const btnScroll = document.querySelector(".btn-scroll");
const logoBrand = document.querySelector(".logo-brand");
const sectionRekomendasi = document.querySelector("#rekomendasi");
const navbarIcon = document.querySelector(".navbar-icon");
const navbarTogler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
let screenWidth = this.window.screen.width;

const pathName = window.location.href;
const pathId = pathName.split("#").pop();

if (screenWidth <= 992) {
  logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";
  navbar.classList.add("bg-white");
  navbarIcon.classList.remove("toggler-icon");
  navbarIcon.classList.add("toggler-icon-dark");
  btnScroll.classList.add("btn-secondary");

  navLink.forEach((nav) => {
    nav.classList.add("text-primary");
    nav.addEventListener("click", function () {
      navbarCollapse.classList.remove("show");
      navbarTogler.classList.add("collapsed");
      navbarTogler.setAttribute("aria-expanded", "false");
    });
  });
} else {
  btnScroll.classList.remove("btn-secondary");
}

window.addEventListener("resize", function () {
  let screenWidth = this.window.screen.width;
  if (screenWidth == 992) {
    btnScroll.classList.add("btn-secondary");
  }
  if (screenWidth > 992) {
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png";
    navbar.classList.remove("bg-white");
    navbarIcon.classList.add("toggler-icon");
    navbarIcon.classList.remove("toggler-icon-dark");
    btnScroll.classList.remove("btn-secondary");

    navLink.forEach((nav) => {
      nav.classList.remove("text-primary");
      nav.classList.add("text-white");
    });
  } else {
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";
    navbar.classList.add("bg-white");
    navbarIcon.classList.remove("toggler-icon");
    navbarIcon.classList.add("toggler-icon-dark");
    btnScroll.classList.add("btn-secondary");

    navLink.forEach((nav) => {
      nav.classList.remove("text-primary");
      nav.classList.add("text-white");
    });
  }
  window.addEventListener("scroll", function () {
    let top = window.scrollY;
    if (top > 10) {
      navLink.forEach((nav) => {
        if (screenWidth >= 992) {
          nav.classList.remove("text-white");
          nav.classList.add("text-primary");
        } else {
          nav.classList.add("text-white");
          nav.classList.remove("text-primary");
        }
      });
      if (screenWidth >= 992) {
        navbar.classList.remove("shadow-lg");
        btnScroll.classList.add("btn-secondary");
        btnScroll.classList.remove("text-primary");
        logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png";
        navbar.classList.add("bg-white");
        navbarIcon.classList.add("toggler-icon");
        navbarIcon.classList.remove("toggler-icon-dark");
      } else {
        btnScroll.classList.remove("btn-secondary");
        logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";
        navbar.classList.add("bg-white");
        navbarIcon.classList.add("toggler-icon-dark");
        navbarIcon.classList.remove("toggler-icon");
      }
    } else {
      if (screenWidth > 992) {
        navbar.classList.remove("shadow-lg");
        btnScroll.classList.add("btn-secondary");
        btnScroll.classList.remove("text-primary");
        logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png";
        navbar.classList.remove("bg-white");
        navbarIcon.classList.add("toggler-icon");
        navbarIcon.classList.remove("toggler-icon-dark");
        btnScroll.classList.remove("btn-secondary");
      } else {
        btnScroll.classList.add("btn-secondary");
        logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";
        navbar.classList.add("bg-white");
        navbarIcon.classList.add("toggler-icon-dark");
        navbarIcon.classList.remove("toggler-icon");
      }
    }
  });
});

window.addEventListener("scroll", function () {
  let top = window.scrollY;
  if (top >= 10) {
    navbar.classList.add("bg-white");
    navbar.classList.add("shadow-lg");
    navbar.classList.add("element-to-animate");
    navbarIcon.classList.remove("toggler-icon");
    navbarIcon.classList.add("toggler-icon-dark");
    btnScroll.classList.add("btn-secondary");
    logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";

    navLink.forEach((nav) => {
      nav.classList.remove("text-white");
      nav.classList.add("text-primary");
    });
  } else {
    navLink.forEach((nav) => {
      if (screenWidth >= 992) {
        nav.classList.add("text-white");
        nav.classList.remove("text-primary");
      } else {
        nav.classList.remove("text-white");
        nav.classList.add("text-primary");
      }
    });
    if (screenWidth > 992) {
      navbar.classList.remove("shadow-lg");
      btnScroll.classList.remove("btn-secondary");
      logoBrand.src = "./Assets/img-kreatif/logo/kreatif-putih.png";
      navbar.classList.remove("bg-white");
      navbarIcon.classList.add("toggler-icon");
      navbarIcon.classList.remove("toggler-icon-dark");
    } else {
      logoBrand.src = "./Assets/img-kreatif/logo/kreatif-coklat.png";
      navbar.classList.add("bg-white");
      navbarIcon.classList.add("toggler-icon-dark");
      navbarIcon.classList.remove("toggler-icon");
      btnScroll.classList.add("btn-secondary");
    }
  }
});

// Slider
document.querySelectorAll(".carousel .carousel-item").forEach(function (item) {
  let minPerSlide = 4;
  let next = item.nextElementSibling;
  if (!next) {
    next = item.parentElement.firstElementChild;
  }
  item.appendChild(next.firstElementChild.cloneNode(true));

  for (let i = 0; i < minPerSlide; i++) {
    next = next.nextElementSibling;
    if (!next) {
      next = item.parentElement.firstElementChild;
    }

    item.appendChild(next.firstElementChild.cloneNode(true));
  }
});

// Load More
let cards = document.querySelectorAll(".card-rekomendasi");
let loadMoreBtn = document.getElementById("loadMore");

// Menambahkan event listener pada tombol "Load More"
loadMoreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let hiddenCards = [];
  let cardDisplay = document.querySelectorAll(".card-rekomendasi");
  cardDisplay.forEach(function (element) {
    // Memeriksa apakah elemen memiliki display: none
    if (window.getComputedStyle(element).display === "none") {
      hiddenCards.push(element);
    }
  });
  console.log(hiddenCards.length);

  // Menampilkan 3 kartu tersembunyi berikutnya
  if (screenWidth < 992) {
    for (let i = 0; i < 2; i++) {
      if (hiddenCards[i]) {
        hiddenCards[i].style.display = "block";
        hiddenCards[i].style.transition = "all 0.5s ease";
        hiddenCards[i].style.maxHeight = "none";
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      if (hiddenCards[i]) {
        hiddenCards[i].style.display = "block";
        hiddenCards[i].style.transition = "all 0.5s ease";
        hiddenCards[i].style.maxHeight = "none";
      }
    }
  }

  // Menghilangkan tombol "Load More" jika tidak ada kartu tersembunyi lagi
  if (hiddenCards.length <= 3) {
    loadMoreBtn.style.display = "none";
  }

  // Menganimasikan scrolling ke atas
  window.scrollTo({
    top: sectionRekomendasi.offsetTop,
    behavior: "smooth",
  });
});
