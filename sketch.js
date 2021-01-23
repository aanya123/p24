
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	x = 800
	y = 350
	dustbin = new Dustbin(x,y);
	paper = new Paper();
	ground=new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80})
	}
}


