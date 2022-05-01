let bikeX=10,bikeY=30;
function setup() {
  let canvas=createCanvas(windowWidth, 70);
  canvas.parent('container');
}

function draw() {
  // background(200,50);
  clear();
  fill(100,0,0,100);
  circle(bikeX,bikeY,50);
  if(mouseX>bikeX){
    if(mouseIsPressed){
      bikeX=bikeX+1;
  }
 
  }else{
    if(mouseIsPressed){
      bikeX=bikeX-1;
  }
  }
  if (keyIsPressed){
    let elems = document.querySelectorAll('#map');
    elems[0].style.visibility = 'visible';
  }


}
