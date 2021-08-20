class Chicken extends MovableObject {
    height = 60;
    width = 70;
    y = 370;



    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];


    constructor(x) {
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = x + 100;
        this.loadImages(this.IMAGES_WALKING);

        this.speed = 0.15 + Math.random() * 0.25;
        this.animate(x);

    }



    animate(x) {

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 160);

        setInterval(() => {
            /*this.moveLeft();*/
            if (this.x < x - 150) {
                this.moveRight();

                this.otherDirection = true;

            } else if(this.x < x + 150) {
                this.moveLeft();

                this.otherDirection = false;
            }
            /*console.log('this.x =', this.x, 'x =', x)*/

        }, 1000 / 60);



    }


}




