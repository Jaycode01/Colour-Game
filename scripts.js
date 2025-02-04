const colorBox = document.getElementById("colorBox");
const colorOptions = document.getElementById("colorOptions");
const gameStatus = document.getElementById("gameStatus");
const scoreElement = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");


function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

let targetColor;
let score = 0;

function startNewGame() {
  targetColor = generateRandomColor();
  colorBox.style.backgroundColor = targetColor;
  gameStatus.textContent = "";

  colorOptions.innerHTML = "";
  const colors = [targetColor];
  while (colors.length < 6) {
    const color = generateRandomColor();
    if (!colors.includes(color)) {
      colors.push(color);
    }
  }
  colors.sort(() => Math.random() - 0.5);

  colors.forEach((color) => {
    const button = document.createElement("button");
    button.className = "colorOption";
    button.style.backgroundColor = color;
    button.setAttribute("data-testid", "colorOption");
    button.onclick = () => checkGuess(color);
    colorOptions.appendChild(button);
  });
}

function checkGuess(guessedColor) {
  if (guessedColor === targetColor) {
    gameStatus.textContent = "Oh wow, Correct!";
    score++;
    scoreElement.textContent = score;
    setTimeout(startNewGame, 1000);
  } else {
    gameStatus.textContent = `Ouch, That's wrong!`;
  }
}
newGameButton.onclick = startNewGame;
startNewGame();
