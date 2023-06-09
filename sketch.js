//#wccchallenge - waves - I didn't spend too much time here...
//https://fractalkitty.com/2022/04/30/creative-coding-update/
//click to change, press key to pause

/***************************************************************************************
*    Title: Textured Current
*    Author: Sophia (fractal kitty)
*    Date: n.d.
*    Code version: 1.0
*    Availability: https://codepen.io/fractalkitty/pen/OJZxXBM
*
***************************************************************************************/
let button;

let t=0;
let playB=true;
let n=100
let a=5;
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(9, 32, 41);
  noStroke()
  angleMode(DEGREES);
  
  
  button = createButton("174 Hz - Pain Relief");
  button.position(width / 2 -60, 140);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://tashatan1.github.io/visual-one/";
  });

  button = createButton("285 Hz - Heals & Regenerates Tissues");
  button.position(width / 2-120, 180);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/lTylDwIsD";
  });

  button = createButton("396 Hz - Let go of Fear, Shame & Guilt");
  button.position(width / 2-120, 220);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/_KLoOBCzN";
  });

  button = createButton("417 Hz - Clears Negative Energy");
  button.position(width / 2-100, 260);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/Xt8qYFt1a";
  });

  button = createButton("528 Hz - Boost Positivity & Reduce Stress");
  button.position(width / 2-130, 300);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/k-CVCaSDC";
  });

  button = createButton("639 Hz - Pure Positive Love Energy");
  button.position(width / 2-110, 340);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/h_e2T2qUD";
  });

  button = createButton("741 Hz - Spirutial & Emotional Detox");
  button.position(width / 2-113, 380);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/U4V7OlkOf";
  });

  button = createButton("852 Hz - Awaken your Intuition");
  button.position(width / 2-93, 420);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/aQSdgJcCR";
  });

  button = createButton("963 Hz - Connect to Divine Consciousness");
  button.position(width / 2-133, 460);
  button.mousePressed(function goToAnotherPage() {
    window.location.href =
      "https://editor.p5js.org/natashatan/sketches/ukTQvyosH";
  });
}
function draw(){
  textSize(30);
  textAlign(CENTER);
  textFont("Roboto");
  text("Which Frequency do you need?", width / 2, 100);
  
  h=100+second()*sin(t)//just threw some time in the soup
  fill(50+5*cos(t/5),170+150*sin(t/4),270+250*sin(t/4),10)
  if(playB){
    t+=0.1  
     translate(width/2,height/2);
  rotate(t)
  for(let i=0;i<n;i+=0.1+random(-0.1,0.2)){
    circle(-width/2*sin(t)+width/n*i*a*(sin(i*a+t)),h*sin(i*a+t)*cos(t),2)
    circle(-width/2*sin(t)+width-width/n*i*a*(sin(i*a+t)),h*sin(i*a+t)*cos(t),2)
  
  }
  }
 
}
function mousePressed(){
  background(9, 32, 41,200);
  n=int(random(30,200))
  a=random(0,5)
  t=0;
}
function keyPressed(){
  playB=!playB 
  if(keyCode===83){
    save(cnv,"textured current "+n+'_'+a,'png')
  }
}
function changeBG() {
  let val = random(255);
  background(val);
}

