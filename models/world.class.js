class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    endboss = new Endboss();
    statusBar = new StatusBar();
    endbossStatusBar = new EndbossStatusBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    bottlehit = new ThrowableObject();
    coinCounter = 0;
    coinLenght = 0;
    bottleCounter = 0;
    bottleLenght = 0;
    endscreen = new Endscreen();
    test = [];

    background_sound = new Audio('audio/background.mp3')
    bottle_sound = new Audio('audio/bottle.mp3')
    endboss_sound = new Audio('audio/endboss.mp3')
    collect_sound = new Audio('audio/collect.mp3')
    collectbottle_sound = new Audio('audio/collect-bottle.mp3')
    chicken_sound = new Audio('audio/chicken.mp3')






    throwableObject = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.endbossStatusBar.endbossX = this.level.endboss[0].x

        this.setWorld();
        this.draw();
        this.run();
        this.twentyMsRun();
        this.checkBottleRemove();
        this.coinLenght = this.level.coins.length;
        this.bottleLenght = this.level.bottles.length;
        this.background_sound.play();
        this.background_sound.volume = 0.02;



    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {

            this.checkThrowObjects();
            this.checkCharacterisX();
            this.checkHowisDead();

        }, 200);
    }

    checkHowisDead() {
        let endboss = level1.endboss[0].energy;
        let characterenergy = this.character.energy;

        if (characterenergy == 0) {

            this.test.push(new Endscreen('img/9.Intro _ Outro Image/_Game over_ screen/2.oh no you lost!.png'))
        } else if (endboss == 0) {

            this.test.push(new Endscreen('img/9.Intro _ Outro Image/_Game over_ screen/4.Game over!.png'))
        }
    }

    checkCharacterisX() {
        if (this.character.x > 1000) {
            this.level.endboss[0].charachterIsX = true;
        }
    }

    twentyMsRun() {
        setInterval(() => {
            this.collisionBottlewithEnemy();
            this.collisionBottlewithEndboss();
            this.checkCollisions();
        }, 20);
    }

    checkBottleRemove() {
        setInterval(() => {
            this.checkRemoveBottle();
        }, 1000);
    }



    checkRemoveBottle() {
        if (this.throwableObject.length > 0) {
            for (let i = 0; i < this.throwableObject.length; i++) {
                let bottleY = this.throwableObject[i]['y'];

                if (bottleY == 358 || this.throwableObject[0].hitSomething) {
                    this.throwableObject.splice(i, 1)
                    this.endboss.endbossIsHit = false;
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
                    this.character.longIdle();
                }
            }
        }
    }

    checkCollisions() {
        this.collisionEnemy();
        this.collisionEndboss();
        this.collisionCoin();
        this.collisionBottle();

    }

    collisionBottlewithEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.throwableObject.length > 0) {
                if (this.throwableObject[0].isColliding(enemy)) {

                    this.throwableObject[0].hitSomething = true;

                    console.log('Chicken hit with Bottle!')
                    this.currentEnemyremove(enemy);
                    this.bottle_sound.play();

                }
            }
        });
    }

    collisionBottlewithEndboss() {
        this.level.endboss.forEach(endboss => {
            if (this.throwableObject.length > 0) {
                if (this.throwableObject[0].isColliding(endboss)) {


                    this.throwableObject[0].hitSomething = true;
                    this.hitanimationEndboss();
                    this.endboss_sound.play();
                    this.endboss_sound.volume = 0.5;
                    console.log('Endboss hit with Bottle!')

                }
            }
        });
    }




    collisionEnemy() {
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                if (this.character.isInAir()) {
                    console.log('Chicken dies')
                    this.chicken_sound.play();
                    this.currentEnemyremove(enemy);
                } else {
                    this.hitanimation();
                }
            }
        });
    }

    collisionEndboss() {
        this.level.endboss.forEach(endboss => {
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
                this.collect_sound.play();
            }
        });
    }

    collisionBottle() {
        this.level.bottles.forEach(bottle => {
            if (this.character.isColliding(bottle)) {

                this.currentBottleremove(bottle)
                this.collectBottlebarSet();
                this.collectbottle_sound.play();
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

    currentEnemyremove(chicken) {
        chicken = chicken['x']

        for (let i = 0; i < this.level.enemies.length; i++) {
            let currentEnemy = this.level.enemies[i]['x'];

            if (chicken == currentEnemy) {
                this.level.enemies[i].chickenDead = true;
                this.level.enemies.splice(i, 1)


            }
        }
    }






    hitanimation() {
        this.character.hit(5);
        this.statusBar.setPercentage(this.character.energy);
        console.log('Collision with Character, enery ', this.character.energy)
    }

    hitanimationEndboss() {
        if (!this.endboss.endbossIsHit) {
            this.endboss.endbossIsHit = true;
            this.level.endboss[0].hit(20);
            this.endbossStatusBar.setPercentage(this.level.endboss[0].energy);
            console.log('Collision with Bottle ', this.level.endboss[0].energy)
        }


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

        this.addToMap(this.endbossStatusBar);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);


        this.ctx.translate(-this.camera_x, 0);

        this.addObjectsToMap(this.test);

        this.ctx.translate(this.camera_x, 0);
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