const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerbase,playerbaseImg;
var computerbase,computerbaseImg;
var player,computer,playerImg,computerImg;

function preload(){

  playerbaseImg = loadImage("assets/base1.png");
  computerbaseImg = loadImage("assets/base2.png");
  playerImg = loadImage("assets/player.png");
  computerImg = loadImage("assets/player.png");

}

function setup() {
  canvas = createCanvas(1200,800);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object

   playerbase = new PlayerBase(200,400,150,150);
   computerbase = new ComputerBase(1000,400,150,150);
   player = new Player(200,270,50,150);
   computer = new Computer(1000,270,50,150);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 

   playerbase.display();
   computerbase.display();
   player.display();
   computer.display();


   //display Player and computerplayer


}
