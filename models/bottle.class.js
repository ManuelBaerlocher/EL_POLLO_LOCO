class Bottle extends MovableObject {

    height = 90;
    width = 90;
    y = 350;

    IMAGES_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];


    constructor(x) {
        super().loadImage('img/6.botella/2.Botella_enterrada2.png');
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = x;
        
        

        /*this.animate();*/
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES)
        }, 360);
    }
}

