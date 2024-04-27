let words = [
  "azerty",
  "hello",
  "javascript",
  "web1",
  "github",
  "informatique",
  "HEI",
  "devoir",
];
let phrases = [
  "Hello World!",
  "Enjana be le manao web",
  "Hiditra bootstrap am herinandro",
  "Jean Marc is a good assistant",
  "Mafimafy ihany le manenjika programme anh",
];

let currentMode = "word";
let score = 0;

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function gameMode() {
  let random = document.getElementById("word");
  if (currentMode === "word") {
    random.textContent = getRandomElement(words);
  } else if (currentMode === "phrase") {
    random.textContent = getRandomElement(phrases);
  }
}

function updateScore() {
  document.getElementById("score").textContent = "Votre score: " + score;
}

function checkAnswer() {
  let inputText = document
    .getElementById("inputText")
    .value.trim()
    .toLowerCase();
  let word = document.getElementById("word").textContent.toLowerCase();

  if (inputText === word) {
    score++;
    updateScore();
  }

  document.getElementById("inputText").value = "";
  gameMode();
}

document.querySelectorAll('input[type="radio"]').forEach((input) => {
  input.addEventListener("change", () => {
    currentMode = input.value;
    gameMode();
  });
});

gameMode();
