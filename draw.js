document.addEventListener('keydown', moveNinja);

var canvas = document.getElementById("videogame");
var canvasHeight = canvas.clientHeight;
var canvasWidth = canvas.clientWidth;
var draw2d = canvas.getContext('2d');
var rxninja = random(1, canvasWidth - 80);
let ryninja = random(1, canvasHeight - 80);


var map = {
    load: false,
    path: "map.png"
};

var ninja = {
    load: false,
    path: "ninja80x80.png"
};

map.image = new Image();
map.image.src = map.path;
map.image.onload = function () {
    map.load = true;
    draw();
}

ninja.image = new Image();
ninja.image.src = ninja.path;
ninja.image.onload = function () {
    ninja.load = true;
    draw();
}

function draw() {
    if (map.load) {
        draw2d.drawImage(map.image, 0, 0, canvasWidth, canvasHeight);
    }
    if (ninja.load) {
        draw2d.drawImage(ninja.image, rxninja, ryninja);
    }

}

function moveNinja(e) {
    switch (e.code) {
        case "ArrowUp":
            if (ryninja - 10 > 0) {
                ryninja = ryninja - 10;
            }
            draw();
            break;
        case "ArrowDown":
            if (ryninja + 80 < canvasHeight) {
                ryninja = ryninja + 10;
            }
            draw();
            break;
        case "ArrowLeft":
            if (rxninja - 10 > 0) {
                rxninja = rxninja - 10;
            }
            draw();
            break;
        case "ArrowRight":
            if (rxninja + 80 < canvasWidth) {
                rxninja = rxninja + 10;
            }
            draw();
            break;
        default:
            break;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}