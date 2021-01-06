var movingRect
var fixedRect



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red";

  movingRect = createSprite(300,100,70,70);
  movingRect.shapeColor = "red";
}

function draw() {
  background("yellow");  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";
}
  drawSprites();
}