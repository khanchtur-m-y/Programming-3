class Gishatich_h extends Life {
	constructor(x, y) {
		super(x, y, 40);	
		this.life = 30;
	}

	yntrelVandak(ch) {
		return super.yntrelVandak(ch);
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