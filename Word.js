var Letter = require("./Letter.js");

function Word(wordSelected){
	this.wordSelected = wordSelected,
	this.letters = [],
	this.correct = 0,
	this.lives=6,
	this.correctGuess = 0,
	this.guessed = []
}

Word.prototype.getLetters = function(){
	wordSelectedArr= this.wordSelected.split('');
	for (var i = 0; i < wordSelectedArr.length; i++){
		this.letters.push(new Letter(wordSelectedArr[i]));
	} 
}

Word.prototype.displayWord = function(){
	var tempWord = [];
	for (var i = 0; i < this.letters.length; i++){
		tempWord.push(this.letters[i].display());
	}
	console.log(tempWord.join('') + "\n");
}

module.exports = Word;