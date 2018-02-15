var inquirer = require("inquirer");
var words = require("./wordList");
var Word= require("./Word");

var game = {
	wins: 0,
	losses: 0,
	currentWord: {},
	alphabet : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	

	"gameStart" : function(){
		var newWord= words[Math.floor(Math.random()*words.length)];
		console.log(newWord);
	}
}

game.gameStart();