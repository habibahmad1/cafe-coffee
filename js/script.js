const hamburger = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik asal navbar tutup otomatis

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tahun saat ini

let year = new Date().getFullYear();

document.getElementById("tahun").innerHTML = year;
