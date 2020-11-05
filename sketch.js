var fixedRect, movingRect;
var gameObj1 ,gameObj2 ;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor="green";

  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(gameObj1,movingRect)){

    movingRect.shapeColor = "blue";
    gameObj1.shapeColor = "pink";
  }
  else {
    movingRect.shapeColor = "green";
    gameObj1.shapeColor = "green";
  }

  if(isTouching(gameObj2,movingRect)){

    movingRect.shapeColor = "blue";
    gameObj2.shapeColor = "pink";
  }
  else {
    movingRect.shapeColor = "green";
    gameObj2.shapeColor = "green";
  }


  drawSprites();
}

