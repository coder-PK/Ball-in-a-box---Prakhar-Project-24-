const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var log1, log2, log3;
var ground;
var world;

function setup() {
	createCanvas(1200, 400);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 300, 30); 

	//Create a Ground
  ground = new Ground(600, height, 1200, 20);
  log1 = new Dustbin (800, 382, 100, 10);	
  log2 = new Dustbin (850, 338, 10, 100);	
  log3 = new Dustbin (750, 338, 10, 100);	
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  //drawSprites();

  paper.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();

  

  //keyPressed();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x:150, y:-150});
  }
}
  

