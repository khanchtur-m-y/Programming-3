class Gishatich {
	constructor(x, y) {
		this.y = y;
		this.x = x;
		this.energy = 40;
		this.directions = [];
		this.multiply = 0;
	}

	yntrelVandak(ch) {
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

		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[x][y] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	sharjvel(x) {
		var norVandakk = random(this.yntrelVandak(x));
		if (norVandakk) {
			if (x == 1) {
				matrix[this.x][this.y] = 1;
			}
			else {
				matrix[this.x][this.y] = 0;
			}
			matrix[norVandakk[0]][norVandakk[1]] = 3;
			this.x = norVandakk[0];
			this.y = norVandakk[1];
		}
	}

	utel_sharjvel() {
		var norVandak = random(this.yntrelVandak(2));

		if (norVandak) {
			this.multiply++;
			this.sharjvel(2);
			this.energy = 20;

			for (var i in xotakerArr) {
				if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
					xotakerArr.splice(i, 1);
					break;
				}
			}
		}

		else{
			var a = Math.floor(Math.random() * 2);
			this.sharjvel(a);
		}
	}

	bazmanal(b) {
		if (this.multiply >= b) {
			this.multiply = 0;
			var norVandak = random(this.yntrelVandak(0));
			if (norVandak) {
				gishatichArr.push(new Gishatich(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 3;
			}

			else {
				var norVandak = random(this.yntrelVandak(1));

				gishatichArr.push(new Gishatich(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 2;
			}
		}
	}

	mahanal(x) {
		this.energy--;
		if (this.energy <= 0 && (gishatichArr.length > 1 || xotakerArr.length == 0)) {
			gishatichArr.splice(x, 1);
			matrix[this.x][this.y] = 0;
		}
	}
}
