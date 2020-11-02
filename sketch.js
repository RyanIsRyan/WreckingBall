const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var ball, slingshot;

var gameState = "onSling";
var score=0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
  
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    ball = new Ball(200,100);
 
    slingshot = new SlingShot(ball.body,{x:200, y:100});
    
}

function draw(){
   
    background("white");
    
    box1.display();
    box2.display();
    ground.display();
   
    log1.display();

    box3.display();
    box4.display();
   
    
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    ball.display();
   slingshot.display();
   
}

function mouseDragged(){
   // if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //  }
}


//function mouseReleased(){
 //   slingshot.fly();
 //   gameState = "launched";
//}

//function keyPressed(){
 //   if(keyCode === 32 && bird.body.speed<1){
 //      ball.trajectory=[];
 //       Matter.Body.setPosition(bird.body,{x: 200, y: 50})
 //      slingshot.attach(bird.body);
 //  }
//}
