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
