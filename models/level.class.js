class Level {
    endboss;
    enemies;
    clouds;
    coins;
    bottles;
    backgroundObjects;
    level_end_x = 5751;

    constructor(endboss, clouds, coins, bottles, enemies, backgroundObjects) {
        this.endboss = endboss;
        this.enemies = enemies;
        
        this.clouds = clouds;
        this.coins = coins;
        this.bottles = bottles;
        this.backgroundObjects = backgroundObjects;
    }


}