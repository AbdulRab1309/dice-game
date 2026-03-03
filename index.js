function rollDice() {
  // Generate a random number between 1 and 6 for Player 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

  // Generate a random number between 1 and 6 for Player 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Compare and declare the winner
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Player 1 Wins! 🚩";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw! 😵‍💫";
  }
}

// Roll dice on click anywhere on the page
document.addEventListener("click", rollDice);

// Roll dice on pressing the Enter key
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    rollDice();
  }
});
