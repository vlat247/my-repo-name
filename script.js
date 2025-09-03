document.querySelector(".number").textContent = 13;
console.log("what do you even looking here for?");
let randomValue;
let inpup = document.querySelector(".guess");
let score = 20;
let restart = document.querySelector(".interface-button");

let randomNumber = function () {
  randomValue = Math.floor(Math.random() * 21);
};
randomNumber();
document.querySelector(".number").textContent = "?";

inpup.addEventListener("keydown", function (element) {
  if (element.key === "Enter") {
    console.log("You typed in:", inpup.value);
    guessNumber();
  }
});

restart.addEventListener("click", function () {
  score = 20;
  document.querySelector(".label-score").textContent = score;
  randomValue = Math.floor(Math.random() * 21);
  document.querySelector(".message").textContent = "Start guessing";

  document.querySelector("body").style.backgroundColor = "#f8ffe5";
  document.querySelector(".number").style.backgroundColor = "#e0e8c8;";
  document.querySelector(".interface-button").style.backgroundColor = "#e0e8c8";
  document.querySelector(".interface-button").style.color = "inherit";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});

function guessNumber() {
  const guess = Number(inpup.value);
  //when player wins
  if (guess === randomValue) {
    console.log("Congrats! You guessed the number!");
    document.querySelector(".number").textContent = randomValue;
    document.querySelector(".message").textContent = "Correct Number🤓";
    document.querySelector("body").style.backgroundColor = "#0a271f";
    document.querySelector(".number").style.backgroundColor = "#06d6a0;";
    document.querySelector(".interface-button").style.backgroundColor =
      "#06d6a0";
    document.querySelector(".interface-button").style.color = "#0a271f";
  }
  //when the guiess is too low
  if (guess < randomValue) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low...😒";
      score--;
      document.querySelector(".label-score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game..loser";
      document.querySelector(".label-score").textContent = 0;
    }
  }
  //when the guess is too large
  if (guess > randomValue) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high...😂";
      score--;
      document.querySelector(".label-score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You lost the game..loser🤣";
      document.querySelector(".label-score").textContent = 0;
    }
  }
  //when the input isn't a number
  if (!guess) {
    document.querySelector(".message").textContent = "Not a number👺";
  }
}
