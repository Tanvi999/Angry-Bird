const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig,pig2;
var log1,log2,log3,log4;
var bird;
var back;
var platform;

function preload()
{
    back = loadImage("sprites/bg.png");
}

function setup()
{
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height-10,1200,20);
    platform = new Ground(150,380,300,200);
    console.log(platform);

    //level 1
    box1 = new Box(700,480,70,70);
    box2 = new Box(910,480,70,70);
    pig = new Pig(805,480);
    log1 = new Log(805,400,300,PI/2);

    //level 2
    box3 = new Box(700,370,70,70);
    box4 = new Box(910,370,70,70);
    pig2 = new Pig(805,370);
    log2 = new Log(805,300,300,PI/2);

    //level 3
    box5 = new Box(805,280,70,70);
    log3 = new Log(753,210,150,PI/7);
    log4 = new Log(857,210,150,-PI/7);

    //left side of canvas
    bird = new Bird(200,200)
}

function draw()
{
    background(back);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();
}