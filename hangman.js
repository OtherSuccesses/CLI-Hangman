var inquirer = require("inquirer");
var words = require("./wordList");
var Word= require("./Word");

var game = {
	wins: 0,
	losses: 0,
	currentWord: {},
	alphabet : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	

	"gameStart" : function(){
		console.log("This is the downgraded version of rugby hangman!\n")
		var newWord= words[Math.floor(Math.random()*words.length)];
		game.currentWord = new Word(newWord);
		console.log(game.currentWord);
		game.currentWord.getLetters(game.currentWord.wordSelected);
		console.log(game.currentWord);
		game.currentWord.displayWord();
		game.inquireStart();
	},

	"inquireStart": function(){
		inquirer.prompt([{
			message: 'Guess a letter',
			name: 'letterGuess'
		}]).then(function(reply){
			if(game.alphabet.indexOf(reply.letterGuess > -1)){
				console.log("Your letter is " + reply.letterGuess);
				var numberGuessed = game.letterCheck(reply.letterGuess);
			}
		})
	},

	"letterCheck": function(letter){
		var letter = letter.toLowerCase();
		var numberFound = 0;
		if(game.alphabet.includes(letter) && game.currentWord.guessed.indexOf(letter) == -1){
			for (var i = 0; i < game.currentWord.letters.length; i++){
				if (game.currentWord.letters[i].letter == letter){
					game.currentWord.letters[i].visible = true;
					numberFound++
					game.currentWord.correctGuess++;
				}
			}
			if (numberFound == 0){
				if(game.currentWord.guessed.includes(letter)){
					console.log("You've already guessed that letter.")
				}
				else{
					game.currentWord.lives--;
					game.currentWord.guessed.push(letter);
					console.log("The word does not contain that letter");	
				}
				console.log("Letters used: " + game.currentWord.guessed);
				console.log("You have " + game.currentWord.lives + " tries.\n");
			}

			else if(numberFound){
				if (game.currentWord.guessed.includes(letter)){
					console.log("You've alread tried that letter.")
				}
				else{
					console.log("Correct! That letter does exist!");
					game.currentWord.guessed.push(letter);
				}
			}
			else{
				console.log("Some kind of error")
			}
			game.currentWord.displayWord();
			game.correctGuess+= numberFound;
			game.checkWin();
		}
	},

	"checkWin":function(){
		if (game.currentWord.correctGuess == game.currentWord.letters.length){
			game.wins++
			console.log("You've won!! \nWins: " + game.wins);
			game.gameOver();
		}
		else if (game.currentWord.lives == 0){
			game.losses++
			console.log("You've lost...\nLosses: " +game.losses);
			game.gameOver();
		}
		else{
			game.inquireStart();
		}
	},

	"gameOver":function(){
		inquirer.prompt([{
			message: "Would you like to play again?",
			type: "confirm",
			name: "again"
		}]).then(function(result){
			if(result.again){
				game.gameStart();
			}
		})
	}
}

game.gameStart();