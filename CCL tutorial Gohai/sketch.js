let planeX=100;
let planeY=100;
let planeSpeedX=0;
let planeSpeedY=0;
let planePitch=0;

function setup() {
  let canvas=createCanvas(windowWidth, 600);
  canvas.parent('canvas-container')
}

function draw() {
  clear();
  planeSpeedY=planeSpeedY+0.05;
  planeSpeedY=constrain(planeSpeedY,-1,1);
  planeX=planeX+planeSpeedX;
  planeY=planeY+planeSpeedY;
  drawPlane(mouseX,mouseY,planePitch);
}

function drawPlane (planeX, planeY, planePitch) {
  push();
  translate(x, y);
  scale(0.2, 0.2);
  rotate(radians(pitch+10));
  translate(-300, -200);
  beginShape();
  vertex(511, 82);
  vertex(163, 193);
  vertex(217, 320);
  endShape(CLOSE);
  beginShape();
  vertex(328, 250);
  vertex(217, 320);
  vertex(266, 234);
  endShape(CLOSE);
  beginShape();
  vertex(511, 82);
  vertex(54, 158);
  vertex(163, 193);
  endShape(CLOSE);
  beginShape();
  vertex(511, 82);
  vertex(266, 234);
  vertex(394, 280);
  endShape(CLOSE);
  pop();
}