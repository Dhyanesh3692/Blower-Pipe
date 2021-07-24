Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;

let engine;
let world;

var ball;
var blow
var pipe;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create(engine);
  World = engine.world;

  ball = createSprite(300,300,25,25);
  pipe = createSprite(150,150,10,25);
  
  button = createButton("Click to Blow")
  button = position(width/2,height-800)
  button.class('blowButton')
  button.mousePressed(blow)


}

function draw() {
  background(255,255,255);  
  drawSprites();
  ball.show()
  pipe.show()
}

function blow(){
  Matter.body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}