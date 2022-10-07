var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.png", "jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200,50,50);
path.addImage("path", pathImg);
path.velocityY = 3;
path.scale=1.2;

boy = createSprite(200,300,50,50)
boy.addAnimation("running", boyImg);
boy.scale=0.8;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
 
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
