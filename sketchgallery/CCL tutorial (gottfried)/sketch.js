function setup() {
  createCanvas(400, 400);

  let obstacles=document.querySelectorAll('.obstacle');
  for (let i=0;i<obstacles.length;i++){
    console.log(obstacles[i].offsetLeft+'x'+obstacles[i].offsetTop);
    console.log(obstacles[i].offsetWidth+'x'+obstacles[i].offsetHeight);
  }
}

function draw() {
  console.log(window.scrollY);
  colorMode(HSB);
 background(window.scrollY%360,100,100);
}
function mousePressed(){
  window.scrollBy(0,200);
}