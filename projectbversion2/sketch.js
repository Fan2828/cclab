let bikeX=80,bikeY=90;
let toppings=[];
let elements=document.querySelectorAll('.toppings');
let bikes=[];
let curImage=0;
let bikeWidth=100;
let bikeHeight=100;
let bikeSpeed=0;
let bikeMoved;
let canvasWidth=5000;

let last_saturation=[];
let saturation=[];
let scenes;
let scenesX=[];
let turnround;




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
  console.log('left'+elements[0].offsetLeft);
  for (let i=0;i<elements.length;i++){
    let topping=new Topping (elements[i].offsetLeft,elements[i].offsetWidth);
    toppings.push(topping);
    // console.log('topping at', elements[i].offsetLeft, elements[i].offsetTop, 'dimensions', elements[i].offsetWidth, elements[i].offsetHeight);
    
  }
  scenes=document.querySelectorAll('.scenes');

  for(let i=0;i<scenes.length;i++){
    console.log('left'+scenes[i].offsetLeft);
    scenesX[i]=scenes[i].offsetLeft+scenes[i].offsetWidth/2;
    console.log('center of scenes are at'+scenesX[i]);

  
}
for(let i=0;i<scenes.length;i++) {
  last_saturation[i]=0;
}
}

function draw() {
 


  background(200,100);
  clear();
  fill(100);
  //draw the ground
  noStroke();
 let ground=quad(50,bikeY+15,canvasWidth,bikeY+15,canvasWidth-50,bikeY+bikeHeight/2+20,0,bikeY+bikeHeight/2+20);

 //move the bike
 bikeX=bikeX+bikeSpeed;

 push();
 translate(bikeX,bikeY);
 if(mouseX<bikeX||turnround==true){
   scale(-1,1);
 }
 imageMode(CENTER);
 image(bikes[curImage],0,0,bikeWidth,bikeHeight);
 pop();

if(keyIsPressed){
  if(key=="d"||key=="D"){
    bikeSpeed=1;
    turnround==false;
  }else if(key=="a"||key=="A"){
    bikeSpeed=-1;
    turnround==true;
  }
}else{
  bikeSpeed=0;
}
console.log(turnround);

//  if(mouseIsPressed&&mouseX>bikeX){
//    bikeSpeed=1;
//  }else if(mouseIsPressed&&mouseX<=bikeX){
//    bikeSpeed=-1;
//  }else{
//   bikeSpeed=0;
//  }
  //  console.log(bikeSpeed);
 
//animation
  if(frameCount%10==0){
    curImage=(curImage+1)%bikes.length;
  }

  //pop up

for(let i=0;i<toppings.length;i++){
  if(elements[i].offsetLeft<bikeX&&(elements[i].offsetLeft+elements[i].offsetWidth)>bikeX){
 
    elements[i].style.visibility = 'visible';
 
    // console.log('left'+elements[i].offsetLeft);
    // console.log('width'+elements[i].offsetWidth);
    // console.log('the right position'+ (elements[i].offsetLeft+elements[i].offsetWidth));
    
  }
  else{
    elements[i].style.visibility = 'hidden';
  }
}
// console.log('the bikeX'+bikeX);
//filter

 
// saturation = constrain(saturation, 0.1, 1);
// for(let i=0;i<scenes.length;i++){
//   let saturation = 1 - (abs(scenesX[i] - bikeX) / 200);
//   if (abs(saturation - last_saturation) > 0.1) {
//     scenes[i].style.filter = 'saturate(' + saturation + ')';
//     last_saturation = saturation;
//   }
// }


for(let i=0;i<scenes.length;i++){
  
  saturation[i]=1-(scenes[i].offsetLeft-bikeX)/200;
  saturation[i] = constrain(saturation[i], 0, 1);
  // console.log('last'+i+last_saturation[i]);
  
  
    if (abs(saturation[i] - last_saturation[i]) > 0.4) {

          scenes[i].style.filter = 'saturate(' + saturation[i] + ')';
          last_saturation[i] = saturation[i];
          
          
          
        }
        console.log('scene'+i+'saturation is'+scenes[i].style.filter);
}

// scences[0].style.filter='saturate('+saturation+')';

// console.log('last saturation is'+last_saturation);
// console.log('saturation is'+saturation);
//  console.log(scences[0].style.filter);


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
