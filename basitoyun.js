const questions = [
  { book: "Kürk Mantolu Madonna", correctAuthor: "Sabahattin Ali", options: ["Orhan Pamuk", "Sabahattin Ali", "Ahmet Ümit"] },
  {
    book: "Tutunamayanlar",
    correctAuthor: "Oğuz Atay",
    options: ["Oğuz Atay", "Yaşar Kemal", "İhsan Oktay Anar"]
  },
  {
    book: "Sefiller",
    correctAuthor: "Victor Hugo",
    options: ["Victor Hugo", "Lev Tolstoy", "Albert Camus"]
  },
];

let currentIndex = 0;

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = `"${q.book}" kitabının yazarı kimdir?`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
  const q = questions[currentIndex];
  const result = document.getElementById("result");
  if (answer === q.correctAuthor) {
    result.textContent = "Doğru!";
    result.style.color = "green";
  } else {
    result.textContent = `Yanlış! Doğru cevap: ${q.correctAuthor}`;
    result.style.color = "red";
  }
}

function nextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  showQuestion();
}

window.onload = showQuestion;
