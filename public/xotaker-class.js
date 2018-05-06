class Xotaker extends Life {
	yntrelVandak(ch) {
		return super.yntrelVandak(ch);
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
		if(currentWeather == "win"){
			var go = Math.random();
		}
		else{
			var go = 0;
		}

		if(go < 0.5){
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
	}

	bazmanal(b) {
		if(currentWeather != "win"){
			if (this.multiply >= b) {
				this.multiply = 0;
				var norVandak = random(this.yntrelVandak(0));
				if (norVandak) {
					xotakerArr.push(new Xotaker(norVandak[0], norVandak[1]));
					matrix[norVandak[0]][norVandak[1]] = 2;
				}

				else {
					var norVandak = random(this.yntrelVandak(1));

					xotakerArr.push(new Xotaker(norVandak[0], norVandak[1], 8));
					matrix[norVandak[0]][norVandak[1]] = 2;
				}
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
