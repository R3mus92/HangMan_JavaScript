// Selecting elements from the page(Variables)
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector(".play-again");

// Initialize the game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuessess = 6;

const resetGame = () => {
   correctLetters = [];
   wrongGuessCount = 0;
   hangmanImage.src = "images/hangman-0.svg";
   guessesText.innerText = `${wrongGuessCount} / ${maxGuessess}`;
   // Create the empty letter slots
   wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
   // Enable keyboard buttons
   keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
   // Hide the game modal
   gameModal.classList.remove("show");
}

// Function to get a random word and set up the game
const getRandomWord  = () => {
   // Picking a random word and hint from your wordList array
   const { cuvant, sugestie } = wordList[Math.floor(Math.random() * wordList.length)];
   // Set the current word and update the hint
   currentWord = cuvant;
   document.querySelector(".hint-text b").innerText = sugestie;
   // Call reset game
   resetGame();
}

// Function to handle the end of game win or lose
const gameOver = (isVictory) => {
   // Show the game over modal with win or loss
   const modalText = isVictory ? `Ai gasit cuvantul:` : 'Cuvantul corect a fost:';
   gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
   gameModal.querySelector("h4").innerText = isVictory ? 'Felicitari' : 'Jocul s-a terminat!';
   gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
   gameModal.classList.add("show");
}

// Creating a for loop to display our keyboard buttons
for (let i = 97; i <= 122; i++) {
   const button = document.createElement("button");
   button.innerText = String.fromCharCode(i);
   keyboardDiv.appendChild(button);
   // Adding a click event listener for each button
   button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

const characters = ['ă', 'ț', 'ș', 'â','î'];
characters.forEach(char => {
   const button = document.createElement("button");
   button.innerText = char;
   keyboardDiv.appendChild(button);
   button.addEventListener("click", (e) => initGame(e.target, char));
});

// Function to handle the game logic when a letter is clicked

const initGame = (button, clickedLetter) => {
   // Checking if the clicked letter is in the current word
   if (currentWord.includes(clickedLetter)) {
      // Update the displayed letters if clicked is correct
      [...currentWord].forEach((letter, index) =>{
         if (letter === clickedLetter) {
            correctLetters.push(letter);
            wordDisplay.querySelectorAll("li")[index].innerText = letter;
            wordDisplay.querySelectorAll("li")[index].classList.add("Guessed");
         }
      });
   } else {
      // update wrong guess count and hangman image if letter is incorrect
      wrongGuessCount++;
      hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
   }
   // disable the clicked button so it can't be clicked again
   button.disabled = true;
   // update the displayed guess count
   guessesText.innerText = `${wrongGuessCount} / ${maxGuessess}`;

   // check if the game should end based on win or lose conditions
   if (wrongGuessCount === maxGuessess) return gameOver(false);
   if (correctLetters.length === currentWord.length) return gameOver(true);


}

// Starting the game with a random word
getRandomWord();

// Add event listener for the play again button
playAgainBtn.addEventListener("click", getRandomWord);