var bullet, wall;
var thickness;
var damage;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  bullet.visible = true;
  
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness, height/2);
  wall.shapeColor = "white";

 }

function draw(){ 
  background("black");

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if (damage>10){
    bullet.shapeColor = "red";
    }  else if (damage<10){
    bullet.shapeColor = "green";
    }
    if (bullet.x === wall.x){
      bullet.velocityX = 0;
      bullet.velocityY = 0;
    } 
  }
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge = wall.x
  if (bulletRightEdge>=wallLeftEdge){
    return true
  } 
    return false

}
