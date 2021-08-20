class Level {
    enboss;
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 5751;

    constructor(endboss,  clouds, enemies, backgroundObjects) {
        this.enemies = enemies;
        this.enboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}