let deg = 0;
let speed = [];
let degArray = [
  deg,
  deg - 10,
  deg - 20,
  deg - 30,
  deg - 40,
  deg - 50,
  deg - 60,
  deg - 70,
];
let movingX = 200;
for (i = 0; i <= 7; i += 1) {
  speed[i] = 1;
}
let creatureRotate = 0;
let creatureColor = [];
let totalAmount = 3;

let flowerX = [];
let flowerY = [];

let creatureSize = [];


function setup() {
  let canvas=createCanvas(600, 600);
  canvas.parent("myContainer");

  for (creatureN = 0; creatureN < totalAmount; creatureN++) {
    creatureColor[creatureN] = color(
      random(255),
      random(255),
      random(255),
      100
    );

    flowerX[creatureN] = random(100, 300);
    flowerY[creatureN] = random(100, 300);

    creatureSize[creatureN] = random(0.5, 1.5);
  }

  bgColor = color(random(100, 200), random(100, 200), random(100, 200));
}

function draw() {
  background(bgColor);
  //draw flowers
  for (creatureN = 0; creatureN < totalAmount; creatureN++) {
    drawFlower(
      flowerX[creatureN],
      flowerY[creatureN],
      creatureColor[creatureN],
      creatureSize[creatureN]
    );
  }

  //draw creatures when mouse is pressed
  if (mouseIsPressed == true) {
    //rotating creature

    push();
    translate(width / 2, height / 2);
    rotate(radians(creatureRotate));
    creatureRotate = creatureRotate + 0.5;
    drawCreature(0, 100, creatureSize[0], creatureColor[0]);

    pop();

    //horizontal moving
    drawCreature(movingX, 200, creatureSize[1], creatureColor[1]);
    movingX = movingX - 1;
    if (movingX < -200) {
      movingX = 1500;
    }

    //mouseControl
    push();
    translate(mouseX, mouseY);
    drawCreature(0, 0, creatureSize[2], creatureColor[2]);
    if (mouseIsPressed == true) {
    }

    pop();

    //  push();
    // fill(bgColor);
    // rect(0, 0, 600, 600);
    // pop();
  }

  // drawCreature(width/2,height/2,1,color(0,100,0,100));
}

function drawCreature(x, y, size, creatureColor) {
  push();
  scale(size);
  push();
  translate(x, y);
  noStroke();
  fill(creatureColor);

  //the body
  circle(-80, 0, 80);
  circle(0, 0, 100);
  circle(-160, 0, 90);
  circle(80, 0, 90);

  //the head
  circle(-200, -50, 80);

  //draw the hat
  fill(100, 200);
  triangle(-200, -100, -250, -80, -150, -80);

  //draw shoes
  drawShoes(-190, 20, degArray[0]);
  drawShoes(-150, 20, degArray[1]);
  drawShoes(-110, 20, degArray[2]);
  drawShoes(-80, 20, degArray[3]);
  drawShoes(-30, 20, degArray[4]);
  drawShoes(10, 20, degArray[5]);
  drawShoes(50, 20, degArray[6]);
  drawShoes(90, 20, degArray[7]);

  for (i = 0; i <= 7; i += 1) {
    degArray[i] = degArray[i] + speed[i];
    if (degArray[i] < -90 || degArray[i] > 90) {
      speed[i] = -speed[i];
    }
  }
  //draw eyes
  fill(255);
  circle(-220, -50, 30);
  fill(0);
  circle(-225, -50, 20);

  pop();
  pop();
}

function drawShoes(upleftX, upleftY, degree) {
  push();
  translate(upleftX, upleftY);
  rotate(radians(degree));
  rect(0, 0, 20, 40);
  circle(0, 30, 20);

  pop();
}

function drawFlower(flowerX, flowerY, fColor, fSize) {
  push();
  scale(fSize);
  push();
  noStroke();
  fill(fColor);
  translate(flowerX, flowerY);
  for (let fDeg = 0; fDeg < 360; fDeg += 60) {
    push();
    rotate(radians(fDeg));
    ellipse(0, -50, 90, 90);
    pop();
  }
  pop();
  pop();
}
