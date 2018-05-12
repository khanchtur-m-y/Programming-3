class Xotaker_h extends Life {
	constructor(x, y) {
		super(x, y, 8);	
		this.life = 30;
	}

	yntrelVandak(ch) {
		return super.yntrelVandak(ch);
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
