const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //pyramid2 level one
block_one = new Block(640,175,30,40);
block_two = new Block(670,175,30,40);
block_three = new Block(700,175,30,40);
block_four = new Block(730,175,30,40);
block_five = new Block(760,175,30,40);
block_six = new Block(790,175,30,40);

//pyramid2 level two
block_seven = new Block(680,100,30,40);
block_eight = new Block(710,100,30,40);
block_nine = new Block(740,100,30,40);
block_ten =new Block(770,100,30,40)

//pyramid2 level three
block_eleven= new Block(680,90,30,40);
block_twelve= new Block(710,90,30,40);
block_thirteen=new Block(740,90,30,40);

//pyramid2 level three
block_fourteen = new Block(710,70,30,40);

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block_one.display();
  block_two.display();
  block_three.display();
  block_four.display();
  block_five.display();
  block_six.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block_seven.display();
  block_eight.display();
  block_nine.display();
  block_ten.display();


  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  block_eleven.display();
  block_twelve.display();
  block_thirteen.display();
  fill("grey");
  block16.display();
  block_fourteen.display();

}


//polygon hold with slings
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);
slingShot = new Slingshot (this.polygon,{x:100,y:200});
ImageMode(CENTER)
Image(polygn_img, polygon.position.x,polygon.position.y,40,40)