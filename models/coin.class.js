class Coin extends MovableObject{

    height = 160;
    width = 160;


    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.x = x;
        this.y = y;

        /*this.animate();
        this.checkResetCloud(x);*/



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
        if (this.x < 100) {
            this.x = 5300;


        }
    }


}
    
