const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // Tambahkan class "active" pada tombol hamburger
  menu.classList.toggle("active"); // Tambahkan class "active" pada menu
});