class Volcano {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.area = [];
		this.ap = true;
		this.gr = 30;

		this.DIRECTIONS = [
			[this.x - 1, this.y - 1],
			[this.x, this.y - 1],
			[this.x + 1, this.y - 1],
			[this.x - 1, this.y],
			[this.x + 1, this.y],
			[this.x - 1, this.y + 1],
			[this.x, this.y + 1],
			[this.x + 1, this.y + 1],
			//[this.x - 2 , this.y - 2],
			[this.x - 1, this.y - 2],
			[this.x, this.y - 2],
			[this.x + 1, this.y - 2],
			//[this.x + 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x + 2, this.y - 1],
			[this.x - 2, this.y],
			[this.x + 2, this.y],
			[this.x - 2, this.y + 1],
			[this.x + 2, this.y + 1],
			//[this.x - 2, this.y + 2],
			[this.x - 1, this.y + 2],
			[this.x, this.y + 2],
			[this.x + 1, this.y + 2],
			//[this.x + 2, this.y + 2]
		];
	}

	yntrelVandak(x, y) {
		var found = [];
		var directions = [
			[x - 1, y - 1],
			[x, y - 1],
			[x + 1, y - 1],
			[x - 1, y],
			[x + 1, y],
			[x - 1, y + 1],
			[x, y + 1],
			[x + 1, y + 1]
		];

		for (var i in directions) {
			var x = directions[i][0];
			var y = directions[i][1];
			if (matrix[y][x] != 6 && matrix[y][x] != 5) {
				found.push(directions[i]);
			}
		}
		return random(found);
	}

	appear() {
		if (this.ap) {
			this.ap = false;
			matrix[this.x][this.y] = 6;
			for (var i in this.DIRECTIONS) {
				matrix[this.DIRECTIONS[i][0]][this.DIRECTIONS[i][1]] = 5;
				this.area.push(this.DIRECTIONS[i]);
			}
		}
	}

	recover() {
		if (met.v) {
			for (var i in this.area) {
				if (matrix[this.area[i][0]][this.area[i][1]] != 4) {
					matrix[this.area[i][0]][this.area[i][1]] = 5;
				}
			}
		}
	}

	grow() {
		if (met.v || matrix[this.x][this.y] == 6) {
			this.gr--;
			if (this.gr <= 0 && this.area.length < 50) {
				this.gr = 30;
				for (var i = 0; i < Math.floor(this.area.length / 5); i++) {
					var hinqar = random(this.area);
					var norqar = this.yntrelVandak(hinqar[0], hinqar[1]);
					if (norqar && matrix[norqar[0]][norqar[1]] != 6) {
						matrix[norqar[0]][norqar[1]] = 5;
						this.area.push(norqar);
					}
				}
			}
		}
	}
}
