class ThrowableObject  extends MovableObject{

    constructor(x, y){
        super().loadImage('img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png');
        this.x = x;
        this.y = y;
        this.width = 60;
        this.height = 80;
        this.trow();
        
    }


    trow(){
        this.speedY = 25;
        this.applayGravity();
        setInterval(() => {
           this.x += 12; 
        }, 20);
    }

}