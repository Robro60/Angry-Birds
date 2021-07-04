const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
  createCanvas(1200,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,790,1200,20);

  box1 = new Box(800,700);
  box2 = new Box(1000,700);
  pig1 = new Pig(900,740);
  bird = new Bird(100,100)

  
}

function draw(){
  background(0);

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  bird.display();

}