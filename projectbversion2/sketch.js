let bikeX=30,bikeY=35;
let toppings=[];
let elements=document.querySelectorAll('.toppings');
let bikes=[];
let curImage=0;
let bikeWidth=100;
let bikeHeight=100;



function preload(){
bikes.push(loadImage('asset/bike1.png'));
bikes.push(loadImage('asset/bike2.png'));
bikes.push(loadImage('asset/bike3.png'));
bikes.push(loadImage('asset/bike2.png'));
}

function setup() {
  
  let canvas=createCanvas(3000, 200);
  canvas.parent('container');

  let elements=document.querySelectorAll('.toppings');
  for (let i=0;i<elements.length;i++){
    let topping=new Topping (elements[i].offsetLeft,elements[i].offsetWidth);
    toppings.push(topping);
    console.log('topping at', elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    
  }



}

function draw() {
 


  background(200,100);
  clear();
  fill(100,0,0,100);
  noStroke();
 let ground=quad(50,bikeY+70,windowWidth,bikeY+70,windowWidth-50,bikeY+bikeHeight+10,0,bikeY+bikeHeight+10);


 image(bikes[curImage],bikeX,bikeY,bikeWidth,bikeHeight);
 
 
 
 console.log(bikeX,mouseX);
 

  
  if(frameCount%10==0){
    curImage=(curImage+1)%bikes.length;
  }
 



  // circle(bikeX,bikeY,50);
  if(mouseX>bikeX+bikeWidth){
    if(mouseIsPressed){
      bikeX=bikeX+1;
  }

  }


  else{
    if(mouseIsPressed){
      push();
      scale(-1,1);
      bikeX=bikeX-1;
      pop();
  }
  }
// for(let i=0;i<toppings.length;i++){
//   if(elements[i].offsetLeft<bikeX&&elements[i].offsetLeft+elements.offsetWidth>bikeX){
//     elements[i].style.visibility = 'visible';
//   }
// }

for(let i=0;i<toppings.length;i++){
  if(elements[i].offsetLeft<bikeX){
    elements[i].style.visibility = 'visible';
  }
}
console.log(elements[1].offsetLeft+elements.offsetWidth);

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

function windowResized(){
  resizeCanvas(windowWidth,200);
}