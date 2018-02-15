var Letter = require("./Letter");

function Word(wordSelected){
	this.wordSelected = wordSelected,
	this.letters = [],
	this.correct = 0,
	this.lives=6,
	this.correctGuess,
	this.guessed = []
}

Word.prototype.getLetters = function(){
	wordSelectedArr= this.wordSelected.split('');
	for (var i = 0; i < wordSelectedArr.length; i++){
		this.letters.push(new letter(wordSelectedArr[i]));
	} 
}

Word.prototype.displayWord = function(){
	var displayWord = '';
	for (var i = 0; this.letters.length; i++){
		tempWord += this.letters[i].display();
	}
	console.log(tempWord + "\n");
}

module.exports = Word;