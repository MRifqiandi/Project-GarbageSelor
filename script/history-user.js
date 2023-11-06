// // user-request-history.js (Halaman Riwayat Permintaan User)
// document.addEventListener("DOMContentLoaded", function () {
//   var userRequestHistoryList = document.getElementById("userRequestHistory");

//   // Fungsi untuk mengambil data riwayat dari localStorage pada halaman utama
//   function getMainPageUserRequestHistory() {
//     var mainPageUserRequestHistory = window.opener.userRequestHistory || [];
//     return mainPageUserRequestHistory;
//   }

//   // Fungsi untuk menampilkan data riwayat
//   function updateUserRequestHistoryView() {
//     var userRequestHistory = getMainPageUserRequestHistory();
//     userRequestHistoryList.innerHTML = "";
//     userRequestHistory.forEach(function (request) {
//       var listItem = document.createElement("li");
//       listItem.textContent = request;
//       userRequestHistoryList.appendChild(listItem);
//     });
//   }

//   updateUserRequestHistoryView();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var userRequestHistory = [];

//   var userRequestHistoryList = document.getElementById("userRequestHistory");

//   function addToUserRequestHistory(request) {
//     userRequestHistory.push(request);
//     updateUserRequestHistoryView();
//   }

//   function updateUserRequestHistoryView() {
//     userRequestHistoryList.innerHTML = "";
//     userRequestHistory.forEach(function (request) {
//       var listItem = document.createElement("li");
//       listItem.textContent = request;
//       userRequestHistoryList.appendChild(listItem);
//     });
//   }
//   // showUserRequestHistoryButton.addEventListener("click", function () {
//   //   var userRequestHistoryDiv = document.getElementById("userRequestHistory");
//   //   userRequestHistoryDiv.classList.remove("hidden");
//   // });

//   const socket = new WebSocket("ws://localhost:3000");

//   socket.onmessage = (event) => {
//     const message = event.data;
//     addToUserRequestHistory(message);
//   };
// });

// user.js
// user.js














document.addEventListener("DOMContentLoaded", function () {
  var userRequestHistoryList = document.getElementById(
    "userRequestHistoryList"
  );
  var showUserRequestHistoryButton = document.getElementById(
    "showUserRequestHistory"
  );

  // Fungsi untuk menampilkan data riwayat
  function updateUserRequestHistoryView() {
    var userRequestHistory =
      JSON.parse(localStorage.getItem("userRequestHistory")) || [];
    userRequestHistoryList.innerHTML = "";
    userRequestHistory.forEach(function (request) {
      var listItem = document.createElement("li");
      listItem.textContent = request;
      userRequestHistoryList.appendChild(listItem);
    });
  }

  showUserRequestHistoryButton.addEventListener("click", function () {
    var userRequestHistoryDiv = document.getElementById("userRequestHistory");
    userRequestHistoryDiv.classList.remove("hidden");
    updateUserRequestHistoryView(); // Tampilkan riwayat saat tombol diklik
  });

  updateUserRequestHistoryView(); // Tampilkan riwayat saat halaman dimuat

  const socket = new WebSocket("ws://localhost:3000");

  socket.onmessage = (event) => {
    const message = event.data;
    var userRequestHistory =
      JSON.parse(localStorage.getItem("userRequestHistory")) || [];
    userRequestHistory.push(message);
    localStorage.setItem(
      "userRequestHistory",
      JSON.stringify(userRequestHistory)
    );
  };
});
