class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2;
    energy = 100;
    energyEndboss = 100;
    lastHit = 0;
    lastIdle = 0;
    stopMoving = false;
    bottleColliding = false;
    hitSomething = false;
    chickenDead = false;
    endbossIsHit = false;
    charachterIsX = false;
    endbossX;
    


    applayGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {

                if(!this.hitSomething) {
                    this.y -= this.speedY;
                    this.speedY -= this.acceleration;
                }
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return this.y < 350;
        } else {
            return this.y < 150;
        }
    }

    playAnimation(images) {
        if (!this.stopMoving) {

            let i = this.currentImage % images.length
            let path = images[i];
            if (path == 'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png') {
                this.stopMoving = true;
            }else if(path == 'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'){
                this.stopMoving = true;
            }else if(path == 'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'){
                this.stopMoving = true;
                console.log('tod')
            }
            this.img = this.imageCache[path];

            this.currentImage++;
        }
    }


    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.currentImage = 0;
        this.speedY = 25;
    }

    isJumping() {
        return this.speedY > 0 && this.isAboveGround();
    }

    isLanding() {
        return this.speedY < 0 && this.isAboveGround();
    }

    isInAir() {
        return this.isJumping() || this.isLanding();
    }

    isBottleFly() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } 
        }, 1000 / 25);
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit(x) {
        this.energy -= x;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        
    }

    hitEndboss() {
        this.energyEndboss -= 0.1 ;
        if (this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 0.5; 
    }

    longIdle() {
        this.lastIdle = new Date().getTime();

    }

    isLongIdle() {
        let timepassed = new Date().getTime() - this.lastIdle;
        timepassed = timepassed / 1000;

        return timepassed > 5;
    }

 


}