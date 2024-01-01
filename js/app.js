const header = document.getElementById("header");

// make header postion fixed when scroll down
window.addEventListener("scroll", () => {
  header.classList.toggle("fixed", window.scrollY > 0);
});


const year = document.getElementById("year");
year.innerHTML = new Date().getFullYear();