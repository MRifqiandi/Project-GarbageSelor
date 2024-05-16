let currentQuestion = 0;
let totalCorrect = 0;

const questions = [
  {
    question:
      "Apa yang dapat Anda lakukan untuk mengurangi penggunaan plastik?",
    options: [
      "A. Menggunakan kantong belanja kain",
      "B. Menggunakan kantong plastik sekali pakai",
      "C. Membuang plastik ke sungai",
      "D. Semua jawaban benar",
    ],
    correctAnswer: 0,
  },
  {
    question: "Apa yang dimaksud dengan daur ulang?",
    options: [
      "A. Membuang sampah di sungai",
      "B. Mengubah sampah menjadi produk baru",
      "C. Membakar sampah di halaman rumah",
      "D. Menyimpan sampah di rumah",
    ],
    correctAnswer: 1,
  },
  {
    question: "Apa yang dapat dilakukan untuk menghemat air?",
    options: [
      "A. Membiarkan keran air terbuka terus menerus",
      "B. Menutup keran saat tidak digunakan",
      "C. Menggunakan shower selama 1 jam",
      "D. Menggantung pakaian di kamar mandi",
    ],
    correctAnswer: 1,
  },
  {
    question: "Apa manfaat penghijauan bagi lingkungan?",
    options: [
      "A. Meningkatkan suhu global",
      "B. Menyebabkan polusi udara",
      "C. Mengurangi emisi karbon dioksida",
      "D. Meningkatkan penggunaan bahan bakar fosil",
    ],
    correctAnswer: 2,
  },
  {
    question: "Apa dampak negatif dari penggunaan bahan bakar fosil?",
    options: [
      "A. Mengurangi polusi udara",
      "B. Menghasilkan energi bersih",
      "C. Meningkatkan suhu global",
      "D. Menurunkan tingkat emisi CO2",
    ],
    correctAnswer: 2,
  },
  {
    question: "Apa yang dapat Anda lakukan untuk mendukung daur ulang?",
    options: [
      "A. Membuang sampah plastik ke sungai",
      "B. Menggunakan barang-barang sekali pakai",
      "C. Membuang kertas bersamaan dengan sampah lainnya",
      "D. Memisahkan sampah sesuai jenisnya",
    ],
    correctAnswer: 3,
  },
  {
    question: "Apa yang dimaksud dengan energi terbarukan?",
    options: [
      "A. Energi yang dihasilkan dari pembakaran batu bara",
      "B. Energi yang berasal dari sumber daya alam yang dapat diperbaharui",
      "C. Energi nuklir",
      "D. Energi dari minyak bumi",
    ],
    correctAnswer: 1,
  },
  {
    question: "Apa yang dapat Anda lakukan untuk mengurangi jejak karbon Anda?",
    options: [
      "A. Menggunakan kendaraan bermotor setiap hari",
      "B. Mengurangi konsumsi daging",
      "C. Menanam pohon di halaman rumah",
      "D. Membuang sampah plastik ke sungai",
    ],
    correctAnswer: 2,
  },
  {
    question: "Apa peran hutan dalam menjaga keseimbangan ekosistem?",
    options: [
      "A. Meningkatkan polusi udara",
      "B. Menyebabkan deforestasi",
      "C. Menjaga keseimbangan karbon di atmosfer",
      "D. Meningkatkan suhu global",
    ],
    correctAnswer: 2,
  },
  {
    question: "Apa yang dapat Anda lakukan untuk mengurangi limbah elektronik?",
    options: [
      "A. Membiarkan perangkat elektronik lama di rumah",
      "B. Membuangnya ke sungai",
      "C. Membeli perangkat elektronik baru setiap tahun",
      "D. Mendaur ulang perangkat elektronik yang tidak terpakai",
    ],
    correctAnswer: 3,
  },
];

function showQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next-button");
  const finalResultDiv = document.getElementById("final-result");
  const navButtons = document.getElementsByClassName("nav-button");

  if (currentQuestion < questions.length) {
    questionContainer.innerHTML = questions[currentQuestion].question;

    optionsContainer.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add("option");
      optionDiv.classList.add(`option-${getColorName(index)}`);
      optionDiv.innerHTML = option;
      optionDiv.addEventListener("click", () => checkAnswer(index));
      optionsContainer.appendChild(optionDiv);
    });

    resultDiv.innerHTML = "";
    nextButton.style.display = "none";

    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].style.display = "none";
    }
  } else {
    questionContainer.style.display = "none"; // Menyembunyikan kontainer pertanyaan
    optionsContainer.style.display = "none"; // Menyembunyikan kontainer opsi
    finalResultDiv.innerHTML = `Selesai! Total nilai: ${totalCorrect} &#x1F389;`;
    finalResultDiv.style.display = "block";
    nextButton.style.display = "none";

    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].style.display = "block";
    }
  }
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].correctAnswer;
  const optionsContainer = document.getElementById("options-container");
  const options = optionsContainer.getElementsByClassName("option");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next-button");
  const navButtons = document.getElementsByClassName("nav-button");

  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("result-option");
  }

  if (selectedIndex === correctIndex) {
    totalCorrect++;
    options[selectedIndex].classList.add("result-option");
    resultDiv.innerHTML = "Jawaban yang benar! &#x1F60D;";
  } else {
    options[selectedIndex].classList.add("result-option");
    options[correctIndex].classList.add("result-option");
    resultDiv.innerHTML = "Jawaban yang salah. &#x1F614;";
  }

  nextButton.style.display = "block";

  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].style.display = "none";
  }
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

function resetQuiz() {
  currentQuestion = 0;
  totalCorrect = 0;
  const finalResultDiv = document.getElementById("final-result");
  finalResultDiv.style.display = "none";

  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const resultDiv = document.getElementById("result");
  const nextButton = document.getElementById("next-button");

  questionContainer.style.display = "block";
  optionsContainer.style.display = "block";
  resultDiv.style.display = "none";
  nextButton.style.display = "none";

  const navButtons = document.getElementsByClassName("nav-button");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].style.display = "none";
  }

  showQuestion();
}

function backToHome() {
  let pickupButton = document.getElementById("pickup-button");

  pickupButton.addEventListener("click", function () {
    window.location.href = "../dashboard/dashboard-pickup.html";
  });
}

function getColorName(index) {
  switch (index) {
    case 0:
      return "red";
    case 1:
      return "blue";
    case 2:
      return "green";
    case 3:
      return "yellow";
    default:
      return "red";
  }
}

window.onload = showQuestion;
