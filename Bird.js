class Bird extends Base {

    
    constructor(x,y){

        super(x,y,65,65);
    }

    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;

        super.display();
    }
}