var player, playerAnim;
var borda;

function preload(){
  playerAnim = loadAnimation("./Imagens/trex1.png","./Imagens/trex3.png", "./Imagens/trex4.png");

}

function setup(){
  createCanvas(600,200)
  player = createSprite(50, 160, 20, 50);
  player.addAnimation("correndo",playerAnim);
  player.scale = 0.5;
  borda = createEdgeSprites();
}

function draw(){
  background("white");

  if(keyDown("space")){
    player.velocityY = -10;
  }


  player.velocityY += 1;

  player.collide(borda[3]);
  
  drawSprites();
}

