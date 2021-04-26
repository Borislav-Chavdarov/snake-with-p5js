

let snake;
let rez = 10;
let food;
let food2;
let w;
let h;
let prevDirX;
let prevDirY;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
  foodLocation2()
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}
function foodLocation2() {
  let x = floor(random(w));
  let y = floor(random(h));
  food2 = createVector(x, y);

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
    foodLocation();
  }
   if (snake.eat(food2)) {
    foodLocation2();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
  
    print("END GAME");
    let squareColor;
   // tint(255, 127)
   squareColor = color(255, 0, 0);
  squareColor.setAlpha(100);
    background(squareColor);
    fill(0)
    textSize(12);
     text("GAME OVER", 100, 100)
    createA("https://editor.p5js.org/Borislav_Chavdarov/present/gkDijXjVc","menu", "_blank")
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1, 20);
  rect(food2.x, food2.y, 1, 1, 20);
}