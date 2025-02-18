const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("options-container");
let showScore = document.getElementById('score')

let randomColor = null;
let score = 0

function generateRandomNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min) + 1);
}

function generateRandomColorRGB() {
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
  score += 1
  showScore.innerText = score
}

function validateResult(el) {
  const selectedColor = el.target.style.backgroundColor;
  if(selectedColor === randomColor) {
    incrementScore()
  } else {
    score = 0
  }
  window.localStorage.setItem('score', score)
  startGame()
}

function startGame() {
  score = Number(window.localStorage.getItem('score')) ?? 0
  showScore.innerText = score
  optionContainer.innerHTML = null
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateRandomNumberBetween(0, 5);

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", validateResult);
    if (i === ansIndex) {
      div.style.backgroundColor = randomColor;
    } else {
      div.style.backgroundColor = generateRandomColorRGB();
    }
    optionContainer.append(div);
  }
}

window.addEventListener("load", () => startGame());
