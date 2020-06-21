const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var log1, log2, log3;

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 350, 30); 

	//Create a Ground
  ground = new Ground(600, height, 1200, 20);
  log1 = new Dustbin (950, 385, 490, 10);	
  log2 = new Dustbin (1195, 290, 10, 200);	
  log3 = new Dustbin (700, 365, 10, 40);	
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

  keyPressed();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x:0.80, y:-6.7438});
  }
}
  

