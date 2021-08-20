class Level {
    enboss;
    enemies;
    clouds;
    coins;
    backgroundObjects;
    level_end_x = 5751;

    constructor(endboss, clouds, coins, enemies, backgroundObjects) {
        this.enemies = enemies;
        this.enboss = endboss;
        this.clouds = clouds;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
    }


}