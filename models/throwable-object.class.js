class ThrowableObject extends MovableObject {

    IMAGES_BOTTLES = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'

    ];

    bottleSplash = false;
    hitX;
    hitY;



    constructor(x, y) {
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.loadImages(this.IMAGES_BOTTLES);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 80;
        this.trow();



    }


    trow() {

        this.speedY = 22;
        this.applayGravity();
        setInterval(() => {
            if (this.hitSomething) {
                this.x += 0;
            } else if (!this.isAboveGround()) {
                this.x += 0;
                this.bottleSplash = true;
            } else {
                this.x += 12;
                this.bottleSplash = false;
            }
        }, 20);

        this.animate();



    }




    animate() {
        setInterval(() => {
            this.play();
        }, 100);
    }

    play() {
        if (this.hitSomething) {
            this.playAnimation(this.IMAGES_SPLASH);

        } else if (!this.isAboveGround()) {
            this.playAnimation(this.IMAGES_SPLASH);
            this.BottleColliding = false;
        } else {
            this.playAnimation(this.IMAGES_BOTTLES);
            this.BottleColliding = false;
        }


    }
}