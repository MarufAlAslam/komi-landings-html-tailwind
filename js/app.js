const header = document.getElementById("header");

// make header postion fixed when scroll down
window.addEventListener("scroll", () => {
  header.classList.toggle("fixed", window.scrollY > 200);
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
