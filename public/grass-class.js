class Grass extends Life {

	constructor(x, y) {
		super(x, y, undefined, undefined);
		this.directions = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1]
		];
	}

	yntrelVandak(ch) {
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	bazmanal() {
		this.multiply++;
		if(currentWeather == "win"){
			var mul_time = 300; 
		}
		else{
			var mul_time = 8;
		}
		var norVandak = random(this.yntrelVandak(0));
		if (this.multiply >= mul_time && norVandak) {
			grassArr.push(new Grass(norVandak[0], norVandak[1]));
			matrix[norVandak[1]][norVandak[0]] = 1;
			this.multiply = 0;
		}
	}
}