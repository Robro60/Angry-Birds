const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;

function setup(){
  createCanvas(1000,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
}