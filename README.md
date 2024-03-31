My project is a hangman-type game.

A user needs to click on the desired letter, which is displayed on the game's keyboard.
After clicking on a specific letter, the letter becomes "disabled", unable to be accessed until the next round.

On the game's main page, the hangman drawing, the game title, the word to be guessed, a hint to make it easier to guess the word, the maximum number of allowed mistakes, which is 6, and the keyboard are displayed.
If the user selects a wrong letter, a part of the hangman figure is drawn until the figure is completely drawn, meanwhile increasing the number of mistakes, and the chosen letters change color and cannot be selected anymore.

If a word is spelled incorrectly, the hangman figure is completely drawn, the maximum number of mistakes, 6 out of 6, is displayed, and a message informs the player that the game is over, followed by the correct word and the option to play again by pressing the "Joaca din nou" button.

If a word is guessed correctly, a smiley face with the message "Congratulations" appears, along with the option to play again if the user clicks on the "Joaca din nou" button.

The application consists of 2 folders containing files and 2 files found in the main directory:
The "images" folder - contains all the images used by this project, along with the "svg" files used to create the hangman figure image.
The "scripts" folder - contains the script.js and word-list.js files.
The script.js file contains the JavaScript code that makes the web page interactive by adding, removing, or modifying HTML elements, changing the style of CSS elements, or updating the page.
The word-list.js file contains the words to be guessed and the suggestions to facilitate word guessing, these being present in the file as an array of objects.
The "index.html" file - contains the structure of the web page.
The "style.css" file - contains the styling of the web page and defines the visual appearance of the page.

The application was built using HTML for page structuring, CSS for styling, and JavaScript to implement the functionality and logic of the site.

