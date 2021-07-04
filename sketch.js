const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

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

  box1 = new Box(800,740);
  box2 = new Box(1000,740);
  pig1 = new Pig(900,740);
  log1 = new Log(900,680,300,PI);

  box3 = new Box(800,620);
  box4 = new Box(1000,620);
  pig2 = new Pig(900,620);
  log2 = new Log(900,560,300,PI);


  
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

}