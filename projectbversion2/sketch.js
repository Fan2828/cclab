let bikeX=10,bikeY=30;
let toppings=[];
let elements=document.querySelectorAll('.toppings');

function setup() {
  
  let canvas=createCanvas(windowWidth, 70);
  canvas.parent('container');

  // let elements=document.querySelectorAll('.toppings');
  for (let i=0;i<elements.length;i++){
    let topping=new Topping (elements[i].offsetLeft,elements[i].offsetWidth);
    toppings.push(topping);
    console.log('topping at', elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    
  }


}

function draw() {
  background(200,100);
  // clear();
  fill(100,0,0,100);
  circle(bikeX,bikeY,50);
  if(mouseX>bikeX){
    if(mouseIsPressed){
      bikeX=bikeX+1;
  }

  }
  else{
    if(mouseIsPressed){
      bikeX=bikeX-1;
  }
  }
for(let i=0;i<toppings.length;i++){
  if(elements[i].offsetLeft<bikeX){
    elements[i].style.visibility = 'visible';
  }
}

  

  

}

class Topping{
  constructor(x,w){
    this.x=x;
    this.w=w;
  }
   isNearby(checkX,checkY){
     if (this.x<checkX&&checkX<this.x+this.w){
       return true;
     }else{
       return false;
     }
   }
}

// function windowResized(){
//   resizeCanvas(windowWidth,70);
// }