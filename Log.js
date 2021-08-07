class Log extends Base {

    constructor(x,y,w,angle){

        super(x,y,w,20,angle);
        this.image = loadImage("wood2.png");
        Matter.Body.setAngle(this.body,angle);
    }

    display(){

        super.display();
    }
}