let bikeX=50,bikeY=200;


function setup() {
  let canvas=createCanvas(windowWidth, 400);
  canvas.parent('container');
}

function draw() {
  background(255);
  circle(bikeX,bikeY,100);
  if(mouseX>bikeX){
    if(mouseIsPressed){
      bikeX=bikeX+1;
  }
 
  }else{
    if(mouseIsPressed){
      bikeX=bikeX-1;
  }
  }
}
