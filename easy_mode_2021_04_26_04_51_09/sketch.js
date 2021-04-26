

let snake;
let rez = 20;
let food;
let score=1;
let w;
let h;
let prevDirX;
let prevDirY;
let f=5;
let bombs=[];
let b=document.querySelector("body");
let pharagraph=document.createElement("p")
let isGameOver=false;

b.appendChild(pharagraph)
pharagraph.textContent="score:1"
console.log(pharagraph)
function setup() {
 
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(f);
  snake = new Snake();
  foodLocation();
 bombLocation()
}

function endGameScreen() {
  if(!isGameOver) {
    isGameOver=true;
  } else {
    print("END GAME");
    let squareColor;
  pharagraph.textContent+="\nGAME OVER"
   squareColor = color(255, 0, 0);
  squareColor.setAlpha(100);
    background(squareColor);
    fill(0)
    textSize(12);
     text("GAME OVER", 100, 100)
    createA("https://borislav-chavdarov.github.io/snake-with-p5js/","menu", "_blank")
    noLoop();
  }
    
}


function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}
function bombLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  bombs.push(createVector(x, y));

}
function bombLocation1(bomb) {
  let x = floor(random(w));
  let y = floor(random(h));
  bomb=createVector(x, y);

}


function keyPressed() {
  if (keyCode === LEFT_ARROW && prevDirX!=-1 && prevDirY!=0) {
    snake.setDir(-1, 0);
    prevDirX=-1;
    prevDirY=0;
  } else if (keyCode === RIGHT_ARROW && prevDirX!=1 && prevDirY!=0) {
    snake.setDir(1, 0);
     prevDirX=1;
    prevDirY=0;
  } else if (keyCode === DOWN_ARROW && prevDirX!=0 && prevDirY!=1) {
    snake.setDir(0, 1);
     prevDirX=0;
    prevDirY=1;
  } else if (keyCode === UP_ARROW && prevDirX!=0 && prevDirY!=-1) {
    snake.setDir(0, -1);
     prevDirX=0;
    prevDirY=-1;
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(rez);
   
  background(200);

  fill(15)
  rect(100,100,100,100)
  if (snake.eat(food)) {
    console.log(pharagraph)
     score++;
    pharagraph.textContent="score:"+score
   
    
    
    setTimeout(bombLocation,1000);
    f=f+floor(f*0.2);
    frameRate(f);
    foodLocation();
       
   
  }
  for(let i=0; i<bombs.length; i++) {
    let bomb=bombs[i]
     if (snake.bomb(bomb)) {
       
       score--;
       if(score<1){
         endGameScreen()
       }
       pharagraph.textContent="score:"+score
    snake.body.pop()
       bombs.splice(i,1)
     bombLocation()
     
     
    //console.log(bomb)
   
  }
    
  }
  
  snake.update();
  snake.show();


  if (snake.endGame() ) {
  endGameScreen()
  
  }

  noStroke();
  let c=color(3, 252, 57)
  fill(c);
  rect(food.x, food.y, 1, 1, 20);
  fill(255,0,0)
  
    for(let i=0; i<bombs.length; i++) {
    let bomb=bombs[i]
  rect(bomb.x, bomb.y, 1, 1, 20);
    
  }
  
  
  
}