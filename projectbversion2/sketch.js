let bikeX=80,bikeY=90;
let toppings=[];
let elements=document.querySelectorAll('.toppings');
let bikes=[];
let curImage=0;
let bikeWidth=100;
let bikeHeight=100;
let bikeSpeed=0;
let bikeMoved;
let canvasWidth=3000;
let scences;
let last_saturation;




function preload(){
bikes.push(loadImage('asset/bike1.png'));
bikes.push(loadImage('asset/bike2.png'));
bikes.push(loadImage('asset/bike3.png'));
bikes.push(loadImage('asset/bike2.png'));
}

function setup() {
  
  let canvas=createCanvas(canvasWidth, 200);
  canvas.parent('container');

  let elements=document.querySelectorAll('.toppings');
  for (let i=0;i<elements.length;i++){
    let topping=new Topping (elements[i].offsetLeft,elements[i].offsetWidth);
    toppings.push(topping);
    console.log('topping at', elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    
  }
  scences=document.querySelectorAll('#sunset');
  // concole.log(scences);
  sunsetX=scences[0].offsetLeft+scences[0].offsetWidth/2;
  console.log('center of the sunset is at'+sunsetX);



}

function draw() {
 


  background(200,100);
  clear();
  fill(100,0,0,100);
  //draw the ground
  noStroke();
 let ground=quad(50,bikeY+15,canvasWidth,bikeY+15,canvasWidth-50,bikeY+bikeHeight/2+20,0,bikeY+bikeHeight/2+20);

 //move the bike
 bikeX=bikeX+bikeSpeed;

 push();
 translate(bikeX,bikeY);
 if(mouseX<bikeX){
   scale(-1,1);
 }
 imageMode(CENTER);
 image(bikes[curImage],0,0,bikeWidth,bikeHeight);
 pop();



 if(mouseIsPressed&&mouseX>bikeX){
   bikeSpeed=1;
 }else if(mouseIsPressed&&mouseX<=bikeX){
   bikeSpeed=-1;
 }else{
  bikeSpeed=0;
 }
  //  console.log(bikeSpeed);
 
//animation
  if(frameCount%10==0){
    curImage=(curImage+1)%bikes.length;
  }

  //pop up

for(let i=0;i<toppings.length;i++){
  if(elements[i].offsetLeft<bikeX+bikeWidth/2&&elements[i].offsetLeft+elements[i].offsetWidth>bikeX+bikeWidth/2){
    elements[i].style.visibility = 'visible';
    // console.log(elements[i].offsetLeft+elements[i].offsetWidth);
    // console.log(bikeX);
  }
}
//filter


 let saturation = 1 - (abs(sunsetX - bikeX) / 200);
saturation = constrain(saturation, 0.1, 1);
if (abs(saturation - last_saturation) > 0.5) {
  scences[0].style.filter = 'saturate(' + saturation + ')';
  last_saturation = saturation;
}
scences[0].style.filter='saturate('+saturation+')';

console.log('last saturation is'+last_saturation);
console.log('saturation is'+saturation);
 console.log(scences[0].style.filter);


// console.log(scences[0].style.filter);

}

class Topping{
  constructor(x,w){
    this.x=x;
    this.w=w;
  }
  //  isNearby(checkX,checkY){
  //    if (this.x<checkX&&checkX<this.x+this.w){
  //      return true;
  //    }else{
  //      return false;
  //    }
  //  }
}

// function windowResized(){
//   resizeCanvas(windowWidth,200);
// }
