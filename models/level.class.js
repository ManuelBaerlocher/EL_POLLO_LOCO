class Level {
    endboss;
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    level_end_x = 5751;

    constructor(endboss, clouds, coins, bottles, enemies, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }


}