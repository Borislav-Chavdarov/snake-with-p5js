let snacc;
let thiccake;
let x,y;
let ResX,ResY;
let prevDirX;
let prevDirY;
let check1;
let check2;
let foodX;
let foodY;
let inefficient=0;
let ZprevDirX;
let ZprevDirY;

 function preload(){
   bonus=loadSound('point.wav');
   gameEnd=loadImage('tenor.gif');
   fruit=loadImage('download.png');
   boom=loadSound('death.wav');
 }


function setup() {
  createCanvas(440, 260);
  snacc = new Snake();
  thiccake = new Snake();
  frameRate(10);
  thiccake.feed();
}

function draw() {
  background(255);
  noStroke();
  fill(0)
  
  image(fruit,foodX,foodY,25,25);
  
 
  
  for(let i=1;i<snacc.torso.length;i++){
    if(snacc.torso[i].x==snacc.torso[0].x&&snacc.torso[i].y==snacc.torso[0].y){
      check1=true
    }
  }
  
  for(let i=0;i<thiccake.torso.length;i++){
    if(thiccake.torso[i].x==snacc.torso[0].x&&thiccake.torso[i].y==snacc.torso[0].y){
      check1=true
    }
  }
  
  for(let i=1;i<thiccake.torso.length;i++){
    if(thiccake.torso[i].x==thiccake.torso[0].x&&thiccake.torso[i].y==thiccake.torso[0].y){
      check2=true
    }
  }
  
  for(let i=0;i<snacc.torso.length;i++){
    if(thiccake.torso[0].x==snacc.torso[i].x&&thiccake.torso[0].y==snacc.torso[i].y){
      check2=true
    }
  }
  
  
  
  
  if(check1&&check2){
    image(gameEnd,0,0,width,height);
    while(inefficient==0){
    boom.play();
    inefficient=inefficient+1;}
    stroke(0,255,0)
    textSize(35);
    text("P1 Score:"+snacc.torso.length,20,40,210);
    text("P2 Score:"+thiccake.torso.length,240,40,440,40);
    if(snacc.torso.length>thiccake.torso.length){text("P1 WINS",160,240)}
    else if(snacc.torso.length<thiccake.torso.length){text("P2 WINS",160,240)}
    else{text("DRAW",170,240)}
  }
  else if(check2){
    image(gameEnd,0,0,width,height);
    while(inefficient==0){
    boom.play();
    inefficient=inefficient+1;}
    stroke(0,255,0)
    textSize(35)
    text("P1 Score:"+snacc.torso.length,20,40,210);
    text("P2 Score:"+thiccake.torso.length,240,40,440,40);
    text("P1 WINS",160,240);}
  else if(check1){
    image(gameEnd,0,0,width,height);
    while(inefficient==0){
    boom.play();
    inefficient=inefficient+1;}
    stroke(0,255,0)
    textSize(35)
    text("P1 Score:"+snacc.torso.length,20,40,210);
    text("P2 Score:"+thiccake.torso.length,240,40,440,40);
    text("P2 WINS",160,240);}
  else {
   fill(255,0,0)
   snacc.ResX=snacc.torso[snacc.torso.length-1].x;
   snacc.ResY=snacc.torso[snacc.torso.length-1].y;
   snacc.exist();
   fill(0,0,255)
   thiccake.ResX=thiccake.torso[thiccake.torso.length-1].x;
   thiccake.ResX=thiccake.torso[thiccake.torso.length-1].x; 
   thiccake.exist();
   }
  if(foodX==snacc.torso[0].x&&foodY==snacc.torso[0].y){
    snacc.grow();
    bonus.play();
    snacc.feed();
  }
  if(foodX==thiccake.torso[0].x&&foodY==thiccake.torso[0].y){
    thiccake.grow();
    bonus.play();
    thiccake.feed();
    
  }
  noFill();
  strokeWeight(5);
  stroke(51);
  rect(0,0,width,height);
}