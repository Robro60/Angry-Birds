class Ground{

    constructor(x,y,w,h){

        var option = {

            isStatic : true 
        }

        this.body=Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }

    display(){

        var posi = this.body.position;

        push();
        fill("brown");
        rectMode(CENTER);
        rect(posi.x,posi.y,this.w,this.h);
        pop();
    }
}