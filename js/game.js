let canvas;
let world;
let keyboard = new Keyboard();



function init() {
    checkPositionCanvas();
}

function startGame() {
    openCanvas();
    changeHTML();
}

function changeHTML() {
    document.getElementById('startImg').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('restartButton').classList.remove('d-none');
}


function openCanvas() {
    canvas = document.getElementById('canvas');

    world = new World(canvas, keyboard);

    console.log('My Caracter is', world.character);
}



window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

});

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

});
