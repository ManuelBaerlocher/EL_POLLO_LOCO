class EndbossStatusBar extends MovableObject {


    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/verde/0_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/20_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 500
        
        this.y = 50;
        this.width = 180;
        this.height = 50;
        this.setPercentage(100);

        this.animate();
    }

    animate() {

        setInterval(() => {
            let endboss = level1.endboss[0];
            this.x = endboss.x + endboss.width / 2 - 90
            this.loadImages(this.IMAGES);
            

        }, 1000 / 60);
    }
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()]
        this.img = this.imageCache[path];


    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 20) {
            return 1;
        } else {
            return 0;
        }
    }
}