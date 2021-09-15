class Bird extends Base {

    
    constructor(x,y){

        super(x,y,65,65);
        this.image = loadImage("bird.png")
        this.simg = loadImage("smoke.png")
        this.trajectory = [];
    }

    display(){

        super.display();

        if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position)
        }

        for(var i = 0; i < this.trajectory.length; i++){
            image(this.simg, this.trajectory[i][0], this.trajectory[i][1]);
        }
    
    }
}