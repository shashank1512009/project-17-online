var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var score = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var PLAY = 1;
var END = 0;
var GameState = 1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,550,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
boy.setCollider("circle",0,0,690);

  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
  

}

function draw() {
if (GameState === PLAY) {
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      score=score+50;
      
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      score=score+150;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      score=score+100;
      
        
      }else{
      if(swordGroup.isTouching(boy)) {
        GameState=END;
        
        boy.addAnimation("SahilRunning",endImg);
        boy.x=200;
        boy.y=300;
        boy.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
     
    }
  }
      
  drawSprites();
  textSize(20);
  fill("red");
  text("Treasure: "+ score,150,30);
    }
  }

  

function createCash() {
  if (World.frameCount % 150 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 210;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 200 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 210;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 350 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 210;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 500 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 210;
  swordGroup.add(sword);
  }
}