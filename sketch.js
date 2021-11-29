
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var ball_options={
    isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2


  }

groundObj=new ground(width/2,670,width,20)
leftSide=new ground(1100,600,20,120)
rightSide=new ground(1400,600,20,120)

ball=Bodies.circle(200,10,20,ball_options)
World.add(world,ball)


  ellipse(CENTER)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.show()
  leftSide.show()
  rightSide.show()

  ellipse(ball.position.x,ball.position.y,20)

  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW)
 
 Matter.Body.applyForce(ball,{x:100,y:0},{x:35,y:0})



}



