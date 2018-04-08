var matrix = [];
var side = 34;
var sz = 25;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var xotaker_hArr = [];
var gishatich_hArr = [];
var met;
var vol;

for (var i = 0; i < sz; i++) {
    matrix[i] = [];
    for (var j = 0; j < sz; j++) {
        if (Math.random() < 0.05) {
            matrix[i][j] = 2;
        }

        else if (Math.random() > 0.3) {
            matrix[i][j] = 0;
        }

        else {
            matrix[i][j] = 1;
        }
    }
}

var g = 0;
while (g < 5) {
    matrix[Math.floor(Math.random() * sz)][Math.floor(Math.random() * sz)] = 3;//gishatich
    g++;
}

var hx = 0;
while (hx < 3) {
    matrix[Math.floor(Math.random() * sz)][Math.floor(Math.random() * sz)] = 7;//hivand xotaker
    hx++;
}

var hg = 0;
while (hg < 2) {
    matrix[Math.floor(Math.random() * sz)][Math.floor(Math.random() * sz)] = 8;//hivand gishatich
    hg++;
}

function setup() {
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < sz; y++) {
        for (var x = 0; x < sz; x++) {
            if (matrix[x][y] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[x][y] == 2) {
                xotakerArr.push(new Xotaker(x, y));
            }
            else if (matrix[x][y] == 3) {
                gishatichArr.push(new Gishatich(x, y));
            }
            else if (matrix[x][y] == 7) {
                xotaker_hArr.push(new Xotaker_h(x, y));
            }
            else if (matrix[x][y] == 8) {
                gishatich_hArr.push(new Gishatich_h(x, y));
            }
        }
    }
    met = new Meteor();
    vol = new Volcano(Math.floor(random(sz / 3.5, sz - sz / 3.5)), Math.floor(random(sz / 3.5, sz - sz / 3.5)));
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[x][y] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 4) {
                fill("#502A2A");//brown
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 5) {
                fill("#37302E");//dark gray
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 6) {
                fill("#CA4719");//orange
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 7) {
                fill("#EE745A");//peach
                rect(x * side, y * side, side, side);
            }
            else if (matrix[x][y] == 8) {
                fill("#572C73");//purple
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal(8);
    }

    for (var i in xotakerArr) {
        xotakerArr[i].utel_sharjvel();
        xotakerArr[i].bazmanal(10);
        xotakerArr[i].mahanal(i);
    }

    for (var i in gishatichArr) {
        gishatichArr[i].utel_sharjvel();
        gishatichArr[i].bazmanal(10);
        gishatichArr[i].mahanal(i);
    }


    for (var i in xotaker_hArr) {
        xotaker_hArr[i].utel_sharjvel();
        xotaker_hArr[i].bazmanal(10);
        xotaker_hArr[i].mahanal(i);
    }


    for (var i in gishatich_hArr) {
        gishatich_hArr[i].utel_sharjvel();
        gishatich_hArr[i].bazmanal(10);
        gishatich_hArr[i].mahanal(i);
    }


    if (met.f) {
        met.fall(Math.floor(Math.random() * sz), Math.floor(Math.random() * sz));
    }
    met.disappear(1);

    vol.appear();
    vol.recover();
    vol.grow();


    if (xotakerArr.length == 0 && gishatichArr.length == 0 && xotaker_hArr.length == 0 && gishatich_hArr.length == 0) {
        fill("red");
        textSize(40);
        text('Game over', 250, 350);
        text('All animals are dead', 160, 450);
    }
}