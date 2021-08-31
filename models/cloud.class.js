class Cloud extends MovableObject {

    y = 20;
    height = 250;
    width = 500;


    constructor(x, y) {
        super().loadImage('img/5.Fondo/Capas/4.nubes/2.png');
        this.x = x;
        this.y = y;


        this.animate();
        this.checkResetCloud(x);



    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }

    checkResetCloud(x) {
        setInterval(() => {
            this.resetCloud(x);
        }, 2000);
    }

    resetCloud() {
        if (this.x < -100) {
            this.x = 5300;


        }
    }


}