
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var box1, box2 , box3 ;
var ball;

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,380,800,20);
ball= new Ball(100,280,20)
box2 = new Box (600,370,200,20)
box1 = new Box (500,310,20,120)
box3 = new Box (700,310,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
ball.display();
box2.display();
box1.display();
box3.display();




  drawSprites();
 
}

function keyPressed(){

if (keyCode==UP_ARROW){
	
Body.applyForce(ball.body , ball.body.position , {x : 50, y : -45})

}

}



