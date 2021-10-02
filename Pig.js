class Pig extends Base {

    
    constructor(x,y){

        super(x,y,85,85);
        this.image = loadImage("enemy.png");
        this.visibility = 255;
    }

    display(){
        console.log(this.body.speed);
        push();

        if(this.body.speed < 1){
            super.display();
        }
        else{
            World.remove(myWorld,this.body)
            this.visibility = this.visibility = -5
            tint(255,this.visibility)
        }
        pop();
    }

    scoreinc(){
        if(this.visibility < 0 && this.visibility > -1005){
            score=score+1;
        }
    }
}