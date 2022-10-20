var arrowimg, arrowimg2, targetImg, bg_img, stone_arrowimg;
var target;
var stone_arrow2img;
var stoneArrow_group1, stoneArrow_group2;


function preload(){
  //loading the images
 arrowimg = loadImage("arrow1.png");
 arrowimg2 = loadImage("arrow2.png");
 targetImg = loadImage("target1.png");
 bg_img = loadImage("bg.jpg");
 stone_arrowimg = loadImage("stone_arrow.png");
 stone_arrow2img = loadImage("stone_arrow2.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  arrow1 = createSprite(windowWidth/2-400, 500);
  arrow1.addImage("arrow", arrowimg);
  arrow1.scale = 0.5;
  arrow1.velocityX = 10;
 
  arrow2 = createSprite(width/2-400, 50);
  arrow2.addImage("arrow2", arrowimg2);
  arrow2.scale = 0.5;
  arrow2.velocityX = 10;

  target1 = createSprite(width/2-50, 300);
  target1.addImage("target", targetImg);
  target1.scale = 0.4;

  stoneArrow_group1 = new Group();
  stoneArrow_group2 = new Group();


} 

function draw() {

  background(bg_img);

if(keyDown("space")){
  shootArrow1();
}

if(keyDown("enter")){
  shootArrow2();
}
 
console.log(arrow1.x)
if (arrow1.x>windowWidth )  {
   arrow1.velocityX = -10;
 }
 if (arrow1.x<100 )  {
  arrow1.velocityX = 10;
}

console.log(arrow2.x)
if (arrow2.x>windowWidth )  {
   arrow2.velocityX = -10;
 }
 if (arrow2.x<100)  {
  arrow2.velocityX = 10;
}

if (stoneArrow_group1.collide(target1)){
  stoneArrow_group1.destroyEach();
  target1.destroyEach();
}

  drawSprites();
    
 
 
}

function shootArrow1(){

stone_arrow = createSprite(width/2-400, 490);
stone_arrow.addImage("stone_arrow", stone_arrowimg);
stone_arrow.x=arrow1.x
stone_arrow.scale = 0.3;
stone_arrow.velocityY = -50;
stoneArrow_group1.add(stone_arrow);
}

function shootArrow2(){

  stone_arrow2 = createSprite(width/2-400, 100);
  stone_arrow2.addImage("stone_arrow2", stone_arrow2img);
  stone_arrow2.x=arrow2.x
  stone_arrow2.scale = 0.3;
  stone_arrow2.velocityY = 50;
  stoneArrow_group2.add(stone_arrow2);
  }
  
 
