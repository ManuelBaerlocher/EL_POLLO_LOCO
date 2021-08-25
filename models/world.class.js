class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    bottlehit = new ThrowableObject();
    coinCounter = 0;
    coinLenght = 0;
    bottleCounter = 0;
    bottleLenght = 0;



    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.coinLenght = this.level.coins.length;
        this.bottleLenght = this.level.bottles.length;

    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
            this.checkRemoveBottle();
        }, 200);
    }

    checkRemoveBottle() {
        if (this.throwableObject.length > 0) {
            for (let i = 0; i < this.throwableObject.length; i++) {
                let bottleY = this.throwableObject[i]['y'];

                if (bottleY == 358) {
                    this.throwableObject.splice(i, 1)
                }
            }
        }

    }

    checkThrowObjects() {
        if (this.character.energy > 0) {
            if (this.bottleCounter > 0) {
                if (this.keyboard.SPACE) {
                    let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
                    this.throwableObject.push(bottle);
                    this.bottleCounter--;
                    this.collectBottlebarSet();
                }
            }
        }
    }

    checkCollisions() {
        this.collisionEnemy();
        this.collisionEndboss();
        this.collisionCoin();
        this.collisionBottle();
        this.collisionBottlewithEnemy();
        this.collisionBottlewithEndboss();
    }

    collisionBottlewithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.bottlehit.isColliding(enemy)) {
                console.log('treffer')
            }
        });
    }

    collisionBottlewithEndboss() {
        this.level.enboss.forEach(endboss => {
            if (this.throwableObject.length > 0) {
                if (this.throwableObject[0].isColliding(endboss)) {
                    
                    
                    this.bottlehit.BottleColliding = true;
                    

                    
                    

                }
            }
        });
    }

 


    collisionEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.hitanimation();
            }
        });
    }

    collisionEndboss() {
        this.level.enboss.forEach(endboss => {
            if (this.character.isColliding(endboss)) {
                this.hitanimation();
            }
        });
    }

    collisionCoin() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {


                this.currentCoinremove(coin)
                this.collectCoinbarSet();
            }
        });
    }

    collisionBottle() {
        this.level.bottles.forEach(bottle => {
            if (this.character.isColliding(bottle)) {


                this.currentBottleremove(bottle)
                this.collectBottlebarSet();
            }
        });
    }

    currentCoinremove(coin) {
        coin = coin['x']

        for (let i = 0; i < this.level.coins.length; i++) {
            let currentCoin = this.level.coins[i]['x'];

            if (coin == currentCoin) {
                this.level.coins.splice(i, 1)
                this.coinCounter++;

            }
        }
    }

    currentBottleremove(bottle) {
        bottle = bottle['x']

        for (let i = 0; i < this.level.bottles.length; i++) {
            let currentBottle = this.level.bottles[i]['x'];

            if (bottle == currentBottle) {
                this.level.bottles.splice(i, 1)
                this.bottleCounter++;
            }
        }
    }






    hitanimation() {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log('Collision with Character, enery ', this.character.energy)
    }

    collectCoinbarSet() {


        let percentage = 100 / this.coinLenght * this.coinCounter;

        this.coinBar.setPercentage(percentage);
    }

    collectBottlebarSet() {

        console.log('Bottle', this.bottleCounter);
        let percentage = 100 / this.bottleLenght * this.bottleCounter;

        this.bottleBar.setPercentage(percentage);
    }


    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.enboss);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        this.ctx.restore();
        mo.x = mo.x * -1;
    }

    removeBotte() {
        this.throwableObject.splice(0, 1);
    }


}