var engine,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var constraint1,constraint2,constraint3,constraint4,constraint5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();

	world = engine.world;
	bob1=new Bob(250,400,35);
	bob2=new Bob(320,400,35);
	bob3=new Bob(390,400,35);
	bob4=new Bob(460,400,35);
	bob5=new Bob(530,400,35);


	constraint1=new Rope(bob1.body,{x:250,y:150})
	constraint2=new Rope(bob2.body,{x:320,y:150})
	constraint3=new Rope(bob3.body,{x:390,y:150})
	constraint4=new Rope(bob4.body,{x:460,y:150})
	constraint5=new Rope(bob5.body,{x:530,y:150})
	

	roof=new Roof(180,100,500,210);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background("pink");

  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display(); 
  
  roof.display();
  
}

  

  



