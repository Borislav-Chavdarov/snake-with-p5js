class Snake{
  constructor(){
   this.test={x:0,y:0};
   this.ResX,ResY;
   this.torso=[]; 
   this.torso[0]={x,y};
   this.torso[0].x=floor(random(0,width/20))*20;
   this.torso[0].y=floor(random(0,height/20))*20;
  }
  
  grow(){
  this.torso[this.torso.length]={x,y};
  this.torso[this.torso.length-1].x=ResX;
  this.torso[this.torso.length-1].y=ResY;
}
  
  exist(){
    for(let i=this.torso.length-1;i>0;i--){
    this.torso[i].x=this.torso[i-1].x
    this.torso[i].y=this.torso[i-1].y
  }
  
    for(let i=1;i<this.torso.length;i++){
     square(this.torso[i].x,this.torso[i].y,20,5)
  }
  
    if(this.torso[0].x<0){this.torso[0].x=width-20}
    else if(this.torso[0].x==width){this.torso[0].x=0}
    else if(this.torso[0].y<0){this.torso[0].y=height-20}
    else if(this.torso[0].y==height){this.torso[0].y=0}
    else{
    this.torso[0].x+=this.test.x*20;
    this.torso[0].y+=this.test.y*20;
   }
  square(this.torso[0].x,this.torso[0].y,20,5)
  
  }
  
  setDir(proX,proY){
  this.test.x=proX;
  this.test.y=proY;
  }
  
  feed(){
    foodX=floor(random(0,width/20))*20
    foodY=floor(random(0,height/20))*20
    for(let i=0;i<this.torso.length;i++){
      if(this.torso[i].x==foodX&&this.torso[i].y==foodY){
        this.feed();
      }
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && prevDirX!=-1 && prevDirY!=0) {
    snacc.setDir(-1, 0);
    prevDirX=-1;
    prevDirY=0;
  } else if (keyCode === RIGHT_ARROW && prevDirX!=1 && prevDirY!=0) {
    snacc.setDir(1, 0);
     prevDirX=1;
    prevDirY=0;
  } else if (keyCode === DOWN_ARROW && prevDirX!=0 && prevDirY!=1) {
    snacc.setDir(0, 1);
     prevDirX=0;
    prevDirY=1;
  } else if (keyCode === UP_ARROW && prevDirX!=0 && prevDirY!=-1) {
    snacc.setDir(0, -1);
     prevDirX=0;
    prevDirY=-1;
  } 
  
  if (keyCode === 65 && ZprevDirX!=1 && ZprevDirY!=0) {
    thiccake.setDir(-1, 0);
    ZprevDirX=-1;
    ZprevDirY=0;
  } else if (keyCode === 68 && ZprevDirX!=-1 && ZprevDirY!=0) {
    thiccake.setDir(1, 0);
     ZprevDirX=1;
    ZprevDirY=0;
  } else if (keyCode === 83 && ZprevDirX!=0 && ZprevDirY!=-1) {
    thiccake.setDir(0, 1);
     ZprevDirX=0;
    ZprevDirY=1;
  } else if (keyCode === 87 && ZprevDirX!=0 && ZprevDirY!=1) {
    thiccake.setDir(0, -1);
     ZprevDirX=0;
    ZprevDirY=-1;
  } 
}


