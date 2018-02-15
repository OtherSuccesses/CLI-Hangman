var Letter = require("./Letter");

function Word(wordSelected){
	this.wordSelected = wordSelected,
	this.letters = [],
	this.correct = 0,
	this.lives=6,
	this.guessed = [] 
}

Word.prototype.getLetters = function(){
	wordSelectedArr= this.wordSelected.split('');
	for (var i = 0; i < wordSelectedArr.length; i++){
		this.letters.push(new letter(wordSelectedArr[i]));
	} 
}

Word.prototype.displayWord = function{
	for (var i = 0; this.letters.length; i++){

	}
}