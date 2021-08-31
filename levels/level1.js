const level1 = new Level(
    [
        new Endboss()
    ],

    [
        new Cloud(300, 20),
        new Cloud(1200, 70),
        new Cloud(2100, 20),
        new Cloud(2800, 70),
        new Cloud(3500, 20),
        new Cloud(4200, 70),
        new Cloud(4900, 20)
    ],

    [
        new Coin(300, 380),
        new Coin(600, -50),
        new Coin(900, 150),
    ],

    [
        new Bottle(200),
        new Bottle(250),
        new Bottle(300),
        new Bottle(400),
        new Bottle(800),
        new Bottle(900),
        new Bottle(1000),
    ],

    

    getLevelChickens(),
    getLevelBackground(),




);



function getLevelChickens() {
    let collection1 = getChickensCollection(300);
    let collection2 = getChickensCollection(1000);


    return collection1.concat(collection2);
}


function getChickensCollection(firstX) {
    return [
       /* new Chicken(firstX + 0 * 100),
        new Chicken(firstX + 1 * 100),
        new Chicken(firstX + 2 * 100),*/
        new Chicken(firstX + 3 * 100),
        new Chicken(firstX + 4 * 100)
    ];
}



function getLevelBackground() {
    let collection0 = loadBackground(-1437);
    let collection1 = loadBackground(0);
    let collection2 = loadBackground(1437);
    let collection3 = loadBackground(2874);
    let collection4 = loadBackground(4311);
    let collection5 = loadBackground(5748);




    return collection0.concat(collection1, collection2, collection3, collection4, collection5);
}

function loadBackground(z) {

    return [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', z, 80, 0, 0),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/1.png`, z, 80),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/1.png`, z, 80),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/1.png`, z, 80),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', z + 718, 80, 0, 0),
        new BackgroundObject(`img/5.Fondo/Capas/3.Fondo3/2.png`, z + 718, 80),
        new BackgroundObject(`img/5.Fondo/Capas/2.Fondo2/2.png`, z + 718, 80),
        new BackgroundObject(`img/5.Fondo/Capas/1.suelo-fondo1/2.png`, z + 718, 80),
    ];

}







