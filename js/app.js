const header = document.getElementById("header");

// make header postion fixed when scroll down
window.addEventListener("scroll", () => {
  header.classList.toggle("fixed", window.scrollY > 200);
});

const productItem = document.getElementById("product-item");
const productSubmenu = document.getElementById("product-submenu");
const categoryItem = document.getElementById("category-item");
const categorySubmenu = document.getElementById("category-submenu");
const headerOverlay = document.getElementById("header-overlay");

productItem.addEventListener("click", () => {
  productSubmenu.classList.toggle("active");
  categorySubmenu.classList.remove("active");
  headerOverlay.classList.toggle("active");
});

categoryItem.addEventListener("click", () => {
  categorySubmenu.classList.toggle("active");
  productSubmenu.classList.remove("active");
  headerOverlay.classList.toggle("active");
});

headerOverlay.addEventListener("click", () => {
  productSubmenu.classList.remove("active");
  categorySubmenu.classList.remove("active");
  headerOverlay.classList.remove("active");
});

const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();

$(".fade-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 4000,
});

$(".continuous-slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

const continuousMarquee = document.getElementById("continious-marquee");

// make continious marquee
setInterval(() => {
  continuousMarquee.scrollLeft += 1;
}, 10);

const menuToggler = document.getElementById("menu-toggler");
const menu = document.getElementById("menu");

menuToggler.addEventListener("click", () => {
  menuToggler.classList.toggle("active");
  menu.classList.toggle("active");
});
