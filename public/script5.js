var matrix = [];
var side = 34;
var sz = 23;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var xotaker_hArr = [];
var gishatich_hArr = [];
var met;
var vol;
var WEATHER = ["spring", "summmer", "autumn", "winter"];
var weatherCount = 24;
var currentWeather;
var pWeather = document.getElementById("pWeather");
var pBomb = document.getElementById("pBomb");


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
/*
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
*/
function setup() {
    frameRate(5);////fps 
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    pBomb.innerText = " a";

    for (var y = 0; y < sz; y++) {
        for (var x = 0; x < sz; x++) {
            switch(matrix[x][y]) {
                case 1:
                    grassArr.push(new Grass(x, y));
                break;

                case 2:
                    var ser = (Math.round(Math.random())) / 2;
                    xotakerArr.push(new Xotaker(x, y, 8, ser));
                    matrix[x][y] += ser;
                break;
                
               /*
                case 3:
                    gishatichArr.push(new Gishatich(x, y, 40));
                break;

                case 7:
                    xotaker_hArr.push(new Xotaker_h(x, y, 8));
                break;

                case 8:
                    gishatich_hArr.push(new Gishatich_h(x, y, 40));
                break;
                */
            }
        }
    }
    met = new Meteor();
    vol = new Volcano(Math.floor(random(sz / 3.5, sz - sz / 3.5)), Math.floor(random(sz / 3.5, sz - sz / 3.5)));   
}

function draw() {
weatherCount++;
if(weatherCount >= 25000){
    weatherCount = 0;
}
if(weatherCount % 25 == 0){
    currentWeather = WEATHER[(weatherCount / 25) % 4];
    console.log(currentWeather);
    pWeather.innerText = currentWeather;
}


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            switch(matrix[x][y]) {
                case 1:
                    switch(currentWeather){
                        case "winter":
                            fill("#ABF1CA");
                        break;
                    
                        case "autumn":
                            fill("#D59C3B");
                        break;
                    
                        case "spring":
                            fill("#47DB42");
                        break;
                    
                        default:
                            fill("green");
                        break;
                    }
                break;
            
                case 0:
                    fill("#acacac");
                break;
            
                case 2:
                    fill("yellow");
                break;

                case 2.5:
                    fill("#FFC500"); //a bit darker yellow
            
              /*
                case 3:
                    fill("blue");
                break;
                
                case 4:
                    fill("#502A2A");//brown
                break;
            
                case 5:
                    fill("#37302E");//dark gray
                break;
                
                case 6:
                    fill("#CA4719");//orange
                break;

                case 7:
                    fill("#EE745A");//peach
                break;
               
                case 8:
                    fill("#572C73");//purple
                break;
                */
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in xotakerArr) {
        xotakerArr[i].utel_sharjvel();
        xotakerArr[i].bazmanal(8);
        xotakerArr[i].mahanal(i);
    }

/*
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
*/

    if (met.fellDown) {
        met.fall(Math.floor(Math.random() * sz), Math.floor(Math.random() * sz));
    }
    met.disappear(1);

    vol.appear();
    vol.recover();
    vol.grow();

    var maleCount = 0;
    var femaleCount = 0;
    
    for (var i in xotakerArr){
        if(xotakerArr[i].ser == "male"){
            maleCount++;
        }
        else{
            femaleCount++;
        }
    }

    console.log(maleCount + " " + femaleCount);


    if (xotakerArr.length == 0){// && gishatichArr.length == 0 && xotaker_hArr.length == 0 && gishatich_hArr.length == 0) {
        fill("red");
        textSize(40);
        text('Game over', 250, 350);
        text('All animals are dead', 160, 450);
    }
}