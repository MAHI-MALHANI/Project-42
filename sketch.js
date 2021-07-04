var bgImg;
var spaceCraft;
var spaceCraftImg1, spaceCraftImg2, spaceCraftImg3, spaceCraftImg4;
var iss, issImg;
var hasDocked= false;

function preload(){
bgImg=loadImage("Docking-undocking/spacebg.jpg");

spaceCraftImg1=loadImage("Docking-undocking/spacecraft1.png");
spaceCraftImg2=loadImage("Docking-undocking/spacecraft2.png");
spaceCraftImg3=loadImage("Docking-undocking/spacecraft3.png");
spaceCraftImg4=loadImage("Docking-undocking/spacecraft4.png");

issImg=loadImage("Docking-undocking/iss.png");
}

function setup() {
  createCanvas(800,500);

  iss=createSprite(400, 180, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.9;

 // spaceCraft=createSprite(380, 350, 70, 70);
  //spaceCraft.addImage(spaceCraftImg1);

  //spaceCraft.scale=0.3;

}

function draw() {
  background(bgImg);
  
 // spaceCraft.addImage(spaceCraftImg1);
 spaceCraft=createSprite(380, 350, 70, 70);
 spaceCraft.scale=0.3;
  spaceCraft.addImage(spaceCraftImg1);

  if(!hasDocked){
      spaceCraft = spaceCraft.x+random(-1,1);

      if(keyDown(LEFT_ARROW)){
        spaceCraft.x=spaceCraft.x-random(-1, 1);
        spaceCraft.addImage(spaceCraftImg3);
        
      }

      if(keyDown(RIGHT_ARROW)){
        spaceCraft.addImage(spaceCraftImg4);
        spaceCraft.x=spaceCraft.x+random(1, -1);
      }

      if(keyDown(DOWN_ARROW)){
        spaceCraft.addImage(spaceCraftImg2);
      }

      if(keyDown(UP_ARROW)){
        spaceCraft.addImage(spaceCraftImg2);
        spaceCraft.y=spaceCraft.y-random(0, -1);
      }
  }

  /*if(spaceCraft.x===300 && spaceCraft.y===200){
    hasDocked=true;
    fill("white");

    textSize(25);
    text("Docking Successful!", 750, 350);
  }*/

  if(spaceCraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true; 
     
     textSize(25); 
     fill("white");
     text("Docking Successful!", 200, 300); 
    
    }

  drawSprites();
}