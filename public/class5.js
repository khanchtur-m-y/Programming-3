class Grass {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.multiply = 0;

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

	bazmanal(z) {
		this.multiply++;
		var norVandak = random(this.yntrelVandak(0));
		if (this.multiply >= z && norVandak) {
			var norXot = new Grass(norVandak[0], norVandak[1]);
			grassArr.push(norXot);
			matrix[norVandak[1]][norVandak[0]] = 1;
			this.multiply = 0;
		}
	}
}

//=====================================================================
class Xotaker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energy = 8;
		this.directions = [];
		this.multiply = 0;
	}

	stanalNorKordinatner() {
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
		this.stanalNorKordinatner();
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
		var norVandak = random(this.yntrelVandak(x));
		if (norVandak) {
			matrix[this.x][this.y] = 0;
			matrix[norVandak[0]][norVandak[1]] = 2;

			this.x = norVandak[0];
			this.y = norVandak[1];
		}
	}

	utel_sharjvel() {
		var norVandak = random(this.yntrelVandak(1));

		if (norVandak) {
			this.multiply++;
			this.sharjvel(1);
			this.energy = 8;

			for (var i in grassArr) {
				if (grassArr[i].x == this.y && grassArr[i].y == this.x) {
					grassArr.splice(i, 1);
					break;
				}
			}
		}

		else if (norVandak == undefined) {
			var a = Math.floor(Math.random() * 2);
			this.sharjvel(a);
		}
	}

	bazmanal(b) {
		if (this.multiply >= b) {
			this.multiply = 0;
			var norVandak = random(this.yntrelVandak(0));
			if (norVandak) {
				xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 2;
			}


			else {
				var norVandak = random(this.yntrelVandak(1));

				xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 2;
			}

		}
	}

	mahanal(x) {
		this.energy--;
		if (this.energy <= 0 && (xotakerArr.length > 1 || gishatichArr.length == 0)) {
			xotakerArr.splice(x, 1);
			matrix[this.x][this.y] = 0;
		}
	}
}

//=====================================================================
class Gishatich {
	constructor(x, y) {
		this.y = y;
		this.x = x;
		this.energy = 40;
		this.directions = [];
		this.multiply = 0;
	}

	stanalNorKordinatner() {
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
		this.stanalNorKordinatner();
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

		else if (norVandak == undefined) {
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

//=====================================================================
class Meteor {
	constructor() {
		this.x;
		this.y;
		this.area = [];
		this.dis = 0;
		this.f = true;
		this.r = 3;
		this.v = true;
	}

	fall(x, y) {
		this.x = x;
		this.y = y;
		this.f = false;
		for (var y in matrix) {
			for (var x in matrix[y]) {
				if (Math.random() > 0.5)
					if (x > this.x - this.r && x < this.x + this.r && y > this.y - this.r && y < this.y + this.r) {
						if (x == 7 && y == 7) {
							this.v = false;
						}
						matrix[x][y] = 4;
						var tex = [];
						tex.push(x);
						tex.push(y);
						this.area.push(tex);

						for (var i in xotakerArr) {
							if (xotakerArr[i].x > this.x - this.r && xotakerArr[i].x < this.x + this.r && xotakerArr[i].y > this.y - this.r && xotakerArr[i].y < this.y + this.r) {
								xotakerArr.splice(i, 1);
								break;
							}

							for (var i in grassArr) {
								if (grassArr[i].x > this.x - this.r && grassArr[i].x < this.x + this.r && grassArr[i].y > this.y - this.r && grassArr[i].y < this.y + this.r) {
									grassArr.splice(i, 1);
									break;
								}
							}
						}
					}
			}
		}
	}

	disappear(d) {
		this.dis++;
		if (this.dis >= d && this.area.length != 0) {
			this.dis = 0;
			var n = Math.floor(random(this.area.length));
			matrix[this.area[n][0]][this.area[n][1]] = 0;
			this.area.splice(n, 1);
		}
		if (this.area.length == 0) {
			this.f = true;
		}
	}
}

//=====================================================================
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

//=====================================================================
class Xotaker_h {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energy = 8;
		this.directions = [];
		this.multiply = 0;
		this.life = 30;
	}

	stanalNorKordinatner() {
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
		this.stanalNorKordinatner();
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
			matrix[this.x][this.y] = 0;
			matrix[norVandakk[0]][norVandakk[1]] = 7;

			this.x = norVandakk[0];
			this.y = norVandakk[1];
		}
	}

	utel_sharjvel() {
		var norVandak = random(this.yntrelVandak(1));

		if (norVandak) {
			this.multiply++;
			this.sharjvel(1);
			this.energy = 8;

			for (var i in grassArr) {
				if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
					grassArr.splice(i, 1);
					break;
				}
			}
		}

		else if (norVandak == undefined) {
			this.sharjvel(0);
		}
	}

	bazmanal(b) {
		if (this.multiply >= b && xotaker_hArr.length < xotakerArr.length / 2) {
			this.multiply = 0;
			var norVandak = random(this.yntrelVandak(0));
			if (norVandak) {
				xotaker_hArr.push(new Xotaker_h(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 7;
			}

			else {
				var norVandak = random(this.yntrelVandak(1));
				if(norVandak){
					xotaker_hArr.push(new Xotaker_h(norVandak[0], norVandak[1]));
					matrix[norVandak[0]][norVandak[1]] = 7;
				}
			}


		}
	}

	mahanal(x) {
		this.life--;
		this.energy--;
		if ((this.energy <= 0 || this.life <= 0) && (xotaker_hArr.length > 1 || gishatichArr.length == 0 || xotakerArr.length == 0 || gishatich_hArr.length == 0)) {
			xotaker_hArr.splice(x, 1);
			matrix[this.x][this.y] = 0;
		}
	}
}

//=====================================================================
class Gishatich_h {
	constructor(x, y) {
		this.y = y;
		this.x = x;
		this.energy = 40;
		this.directions = [];
		this.multiply = 0;
		this.life = 30;
	}

	stanalNorKordinatner() {
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
		this.stanalNorKordinatner();
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
			matrix[norVandakk[0]][norVandakk[1]] = 8;
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

		else {
			norVandak = random(this.yntrelVandak(7));
			if (norVandak) {
				this.multiply++;
				this.sharjvel(7);
				this.energy = 20;

				for (var i in xotaker_hArr) {
					if (xotaker_hArr[i].x == this.x && xotaker_hArr[i].y == this.y) {
						xotaker_hArr.splice(i, 1);
						break;
					}
				}
			}

			else {
				var a = Math.floor(Math.random() * 2);
				this.sharjvel(a);
			}
		}
	}

	bazmanal(b) {
		if (this.multiply >= b && gishatich_hArr.length < gishatichArr.length) {
			this.multiply = 0;
			var norVandak = random(this.yntrelVandak(0));
			if (norVandak) {
				gishatich_hArr.push(new Gishatich_h(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 8;
			}

			else {
				var norVandak = random(this.yntrelVandak(1));

				gishatich_hArr.push(new Gishatich_h(norVandak[0], norVandak[1]));
				matrix[norVandak[0]][norVandak[1]] = 8;
			}
		}
	}

	mahanal(x) {
		this.energy--;
		this.life--;
		if ((this.energy <= 0 || this.life <= 0) && (gishatich_hArr.length > 1 || gishatichArr.length == 0 || xotakerArr.length == 0)) {
			gishatich_hArr.splice(x, 1);
			matrix[this.x][this.y] = 0;
		}
	}
}