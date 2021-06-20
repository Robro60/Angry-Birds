class Base{

    constructor(x,y,w,h,angle){

        var option = {

            restitution : 1,
            density : 2,
            friction : 2
        }

        this.body=Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }

    display(){

        var posi = this.body.position;
        var angle = this.body.angle;

        push();
        fill("green");
        translate(posi.x,posi.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}