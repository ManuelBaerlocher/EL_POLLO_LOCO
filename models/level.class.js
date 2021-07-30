class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 5751;

    constructor(enemies, clouds, backgroundObjects){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;

    for (let i = -1; i < 5; i++) {
        let x = 1438 * i;

        for (let j = 1; j <= 2; j++) {

            this.backgroundObjects.push(new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', x, 80, 0, 0),)
            this.backgroundObjects.push(new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/${j}.png`, x, 80),)
            this.backgroundObjects.push(new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/${j}.png`, x, 80),)
            this.backgroundObjects.push(new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/${j}.png`, x, 80),)

            x = x + 719;
        }
    }
    }
}