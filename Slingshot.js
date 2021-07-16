class Slingshot{

    constructor(bodyA,pointB){

        var opt = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            lenght : 20
        }

        this.pointB = pointB;
        this.sling = Constraint.create(opt);
        World.add(myWorld,this.sling);
    }

    /*fly(){

        this.sling.bodyA = null;
    }*/

    display(){

        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.pointB;

        //if(bodyA){
            push();
            strokeWeight(4);
            stroke(0);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();

        //}
        
    }
}