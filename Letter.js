function Letter(char){
	this.letter = char;
	this.visible = false;
	this.display = function(){
		if (this.visible) {
			return (this.letter + " ");
		}
		else{
			return ("_ ");
		}
	}
}

module.exports = Letter;