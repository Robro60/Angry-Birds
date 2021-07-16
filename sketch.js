const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld, bg;

function preload(){
  bg = loadImage("bg.png")

}

function setup(){
  createCanvas(1200,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,790,1200,20);
  bird = new Bird(100,100);
  platform = new Ground(200,620,400,350);

  box1 = new Box(800,740);
  box2 = new Box(1000,740);
  pig1 = new Pig(900,740);
  log1 = new Log(900,680,340,PI);

  box3 = new Box(800,620);
  box4 = new Box(1000,620);
  pig2 = new Pig(900,620);
  log2 = new Log(900,560,340,PI);

  box5 = new Box(800,500);
  box6 = new Box(1000,500);
  pig3 = new Pig(900,500);
  log4 = new Log(900,480,340,PI);

  box7 = new Box(900,380);
  log5 = new Log(800,350,200,3*PI/4);
  log6 = new Log(1000,350,200,-3*PI/4);

  sling = new Slingshot(bird.body,{x : 250, y : 300});
  
}

function draw(){
  background(bg);

  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  bird.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  box6.display();
  pig3.display();
  log4.display();

  box7.display();
  log5.display();
  log6.display();

  platform.display();
  sling.display();



}

function mouseDragged(){

  Matter.Body.setPosition(bird.body,{x : mouseX, y : mouseY});
}

/*function mouseReleased(){

  sling.fly();
}*/



