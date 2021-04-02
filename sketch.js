const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight =300;
var particles = [];
var plinkos = [];
var line;
var gamestate = "PLAY";
var count = 0;
var score = 0;

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);

  for(var i = 0;i<=innerWidth; i=i+80){
    divisions.push(new Division(i,height-divisionsHeight/2,10,divisionsHeight));
  }

  for (var j=75;j<=width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j=50;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75;j<=width;j = j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,375));
  }

  
}

function draw() {
  background(0); 
  Engine.update(engine);
  textSize(35);
  text("Score : "+score,20,40);
  fill(255)
  
  textSize(35);
  text("500",5,550);
  text("500",80,550);
  text("500",160,550);
  text("500",240,550);
  text("500",320,550);
  text("500",400,550);
  text("500",480,550);
  text("500",560,550);
  text("500",640,550);
  text("500",720,550);

  ground.display();
  if(gameState === "END"){
    background("black");
    fill("red");
    textSize(100);
    text("Game Over",200,400);
  }
  for(var k = 0; k < plinkos.length; k++){
    plinkos[k].display();
  }

  if(partical=null)
  {
    particles.display();

     if(particles.body.position.y>700)
     {
          if(particles.body.position.x < 300)
          {
            score=score+500;
            particle=null;
            if(count>=5)gameState = "END";
          }
     }
  }

 for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

}

function mousePressed(){
  if(gameState ==="END"){
    count++;
    particle = new Particle(mouseX,50,10,10);
  }
}