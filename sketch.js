const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,330,70,70);
    box2 = new Box(900,330,70,70);
    pig1 = new Pig(800,340);
    log1 = new Log(800, 300, 380,PI/2);

    ground = new Ground(600,height,1200,20)
    box3 = new Box(700,245,70,70);
    box4 = new Box(900,245,70,70);
    pig2 = new Pig(800,255);
    log2 = new Log(800,215,380, PI/2);
    box5 = new Box(800, 175,70,70);
    log3 = new Log(730,145,150, PI/3);
    log4 = new Log(820,145,150, -PI/3);
    bird = new Bird(500,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    log2.display();
    pig2.display();
    box3.display();
    box4.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}
