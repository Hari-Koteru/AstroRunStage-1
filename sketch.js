var spaceImg,space;
var astronaut,astronautRunning;
var invisibleGround
function preload(){
  spaceImg = loadImage("Space.png");
  astronautRunning = loadImage("Astronaut_Running.gif");
}

function setup() {
  createCanvas(900, 500);

  //create a space sprite
  space = createSprite(50, 500, 900, 500);
  space.addImage(spaceImg);
  space.x = space.width /2;
  
  astronaut = createSprite(50,350,20,20);
  astronaut.addImage(astronautRunning);
  astronaut.scale = 0.2;

  invisibleGround = createSprite(50,100,900,50);
  invisibleGround.visible = false;

}

function draw() {
  background("black");

  space.velocityX = -2

  if (space.x<0){
    space.x = space.width/2;
  }

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

 
 

 
  

 

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

  drawSprites();
}
