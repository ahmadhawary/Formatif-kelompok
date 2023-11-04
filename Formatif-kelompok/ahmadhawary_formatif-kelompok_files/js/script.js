// Toggle class active
const nabarNav = document.querySelector(".navbar-nav");
// ketika kelompok menu di klik
document.querySelector("#kelompok-menu").onClick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan nav
const kelompok = document.querySelector("#kelompok-menu");

document.addEventListener("click", function (e) {
  if (!kelompok.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
