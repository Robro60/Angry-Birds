const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld, bg, bk;
var gs = "onSling";

function preload(){
  
  getTime();

}

function setup(){
  createCanvas(1200,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,790,1200,20);
  bird = new Bird(290,278);
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

  sling = new Slingshot(bird.body,{x : 303, y : 278});
  
}

function draw(){
  if(bk){
    background(bk);
  }
  else{
    background("lightgreen")
  }


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
  if(gs !== "launch"){
  
  Matter.Body.setPosition(bird.body,{x : mouseX, y : mouseY});
  }
}

function mouseReleased(){

  sling.fly();
  gs = "launch"
}

function keyPressed(){

 if(keyCode === 32){
   sling.attach(bird.body);
   gs = "onSling";
   Matter.Body.setPosition(bird.body,{x:303,y:278})
 }
}

async function getTime(){
  var res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var resj = await res.json();
  var dt = resj.datetime;
  var hr = dt.slice(11,13);
  console.log(hr);

  if(hr >= 06 && hr <= 18){
    bg = "bg.png";
  }
  else{
    bg = "night.jpg";
  }

  bk = loadImage(bg)
}



