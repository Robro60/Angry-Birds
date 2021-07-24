class Slingshot{

    constructor(bodyA,pointB){

        var opt = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            lenght : 10
        }

        this.img1 = loadImage("sling1.png")
        this.img2= loadImage("sling2.png")
        this.img3 = loadImage("sling3.png")

        this.pointB = pointB;
        this.sling = Constraint.create(opt);
        World.add(myWorld,this.sling);
    }

    fly(){

        this.sling.bodyA = null;
    }

    display(){
        image(this.img1,300,248);
        image(this.img2,270,248);

        if(this.sling.bodyA){
        
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            stroke("#301608");

            if(pointA.x < 300){
                strokeWeight(8);
                line(pointA.x - 20,pointA.y,pointB.x - 10,pointB.y);
                line(pointA.x - 20,pointA.y,pointB.x + 30,pointB.y - 3);
                image(this.img3,pointA.x - 30,pointA.y - 10,15,30);

            }

            else {
                strokeWeight(4);
                line(pointA.x + 25,pointA.y,pointB.x - 10,pointB.y);
                line(pointA.x + 25,pointA.y,pointB.x + 30,pointB.y - 3);
                image(this.img3,pointA.x + 25,pointA.y - 10,15,30);
            }
           
            pop();

        }
        
    }
}