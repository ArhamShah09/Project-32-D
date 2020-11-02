var engine,world;
var base;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon;
var slingShot;
var score = 0;
var backgroundImg;
var polygon, polygon_img;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  getBackGroundIMG();
  polygon_img=loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(390,300,250,10);
  
  //level 1
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40);
  block3 = new Box(360,275,30,40);
  block4 = new Box(390,275,30,40);
  block5 = new Box(420,275,30,40);
  block6 = new Box(450,275,30,40);
  block7 = new Box(480,275,30,40);

  //level 2
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level 3
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //level 4
  block16 = new Box(390,155,30,40);
  Engine.run(engine);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
    
  noStroke();
  textSize(35);
  fill("white");
  text("SCORE: " + score,550,40);

  imageMode(CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  base.display();
  
  strokeWeight(1);
  stroke(10);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();

  block13.score();
  block14.score();
  block15.score();

  block16.score();
  
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32){
    slingshot.attach(this.polygon);
  }
}

async function getBackGroundIMG() {
  var respose = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await respose.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour >= 06 && hour <= 18) {
    backgroundImg = loadImage("light.jpg");
  }else if(hour >= 18 && hour <= 6) {
    backgroundImg = loadImage("dark.jpg");
  }
 
}