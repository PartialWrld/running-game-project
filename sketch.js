var runner, runner_running
var path,  pathImage
var fakepath
var fakepath2

function preload(){
  //pre-load images
pathImage=loadImage("path.png")
runner_running= loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,500);
  //path
  path = createSprite(250,180,400,20);
  path.addImage("path",pathImage);
 path.velocityY=4
 path.scale=1.2
//runner
runner = createSprite(250,400,400,20);
runner.addAnimation("running",runner_running);
runner.scale=0.1
edges = createEdgeSprites();
//fake path
 fakepath = createSprite(394,250,20,600)
fakepath.shapeColor = "green ";
fakepath2 = createSprite(85,300,20,600)
fakepath2.shapeColor = "green ";
fakepath.visible = true;
fakepath2.visible = true;

}

function draw() {
  background("white");

// collide
runner.collide(fakepath);
runner.collide(fakepath2);


//inf path
  if (path.y >400){
    path.y = height/2;
  }
// movement
runner.x=World.mouseX

//
runner.collide(fakepath);
runner.collide(fakepath2);



drawSprites();
}
