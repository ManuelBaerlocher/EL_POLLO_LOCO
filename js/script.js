function checkPositionCanvas(){
    let canvas = document.getElementById('canvas');

    let canvasTop = canvas.offsetTop;
    let canvasLeft = canvas.offsetLeft;

    setPostionStartImage(canvasLeft, canvasTop);
}

function setPostionStartImage(canvasLeft, canvasTop){
    let startImg = document.getElementById('startImg')

    startImg.style = `top: ${canvasTop}px; left: ${canvasLeft}px`;
}