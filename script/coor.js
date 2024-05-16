let pickupButton = document.getElementById("pickup-button");

pickupButton.addEventListener("click", function () {
  window.location.href = "../dashboard/dashboard-pickup.html";
});

let quizButton = document.getElementById("quiz-button");

quizButton.addEventListener("click", function () {
  window.location.href = "../dashboard/dashboard-quiz.html";
});

document.querySelector("#retrobg-sun").onclick = () => {
  document.querySelector("#retrobg").classList.toggle("retrobg-shutdown");
};
