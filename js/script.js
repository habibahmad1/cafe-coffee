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

  if (!icon.contains(e.target) && !formSearch.contains(e.target)) {
    formSearch.classList.remove("active");
  }

  if (!shopCart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Tahun saat ini

let year = new Date().getFullYear();

document.getElementById("tahun").innerHTML = year;

// click search
const icon = document.querySelector("#search-button");
const formSearch = document.querySelector(".search-form");
const formBox = document.querySelector("#search-box");

icon.addEventListener("click", (e) => {
  formSearch.classList.toggle("active");
  formBox.focus();
  e.preventDefault();
});

// Memunculkan keranjang saat di klik
const shopCart = document.querySelector("#shop-cart");
const shoppingCart = document.querySelector(".shopping-cart");

shopCart.addEventListener("click", (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// Modal Box
const modal = document.getElementById("item-detail");
const itemButton = document.querySelectorAll(".item-detail-button");

itemButton.forEach((btn) => {
  btn.onclick = (e) => {
    modal.style.display = "flex";
    e.preventDefault();
  };
});

// Close modal
const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", (e) => {
  modal.style.display = "none";
  e.preventDefault();
});

// tutup otomatis klik diluar modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
