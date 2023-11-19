document.getElementById("truck").addEventListener("click", function () {
  showLoadingText();
  // Lakukan tindakan yang sesuai dengan tombol "Truck" di sini
});

document.getElementById("amroll").addEventListener("click", function () {
  showLoadingText();
  // Lakukan tindakan yang sesuai dengan tombol "Amroll" di sini
});

function showLoadingText() {
  document.getElementById("loadingText").style.display = "block";
}
