class Pig extends Base {

    
    constructor(x,y){

        super(x,y,85,85);
        this.image = loadImage("enemy.png");
        this.visibility = 255;
    }

    display(){
        console.log(this.body.speed);

        if(this.body.speed < 1){
            super.display();
        }
        else{

            this.visibility = this.visibility = -5
        }
    }
}