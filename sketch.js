//Adding GUI and printing the result in the p5 console

//draw one eye and eyebrow
//and show a bit of the face complexion, freckles and all
//use different shades of colour

var gui;
var face;

var faceParameters = function() {
  this.shape = 'square';
  this.color = '#9f8d9d';
  this.eyeBallDistance = 20;
  this.eyeBrowTopCorner = 22;
  this.eyeBrowBottomCorner = 30;
  this.irisSize = 20;
  this.irisColor = '#0b1b1a';
  this.print = function(){
    println(this.shape + "," 
    + this.Color + "," 
    + this.eyeBallDistance + ","
    + this.eyeBrowTopCorner + ","
    + this.eyeBrowBottomCorner + ","
    + this.irisSize + ","
    + this.irisColor + ",")
  }
  
}

function preload() {
  face = new faceParameters();
  gui = new dat.GUI();
  gui.add(face, 'shape', ['square', 'round']);
  gui.addColor (face,'color');
  
  var eyeBrow = gui.addFolder ('Eyebrow');
  eyeBrow.add(face, 'eyeBrowTopCorner',10,40).step(1);
  eyeBrow.add(face, 'eyeBrowBottomCorner',10,40).step(1);

  var iris = gui.addFolder('Iris');
  iris.add (face, "irisSize", 10,30).step(5);
  gui.addColor (face,'irisColor');
  
  gui.add(face,'print');
}


function setup() {
  createCanvas (100,100);
  noStroke();
}

function draw() {
  background(255);
  
  //part of face
  push();
  // translate(50,50);
  fill(face.color);
  if (face.shape === 'square') {
    rect(12,33,50,50);
  } else {
    ellipse (35,60,60,46);
  }

  pop();
  
  //eyebrow
  push();
  // translate(50,50);
  fill("#1d2530");
  beginShape();
    vertex(20,30);
    vertex(20,40);
    vertex(60,face.eyeBrowBottomCorner);
    vertex(60,face.eyeBrowTopCorner);
  endShape(CLOSE);
  pop();
  
  //eye white
  push();
  //translate(50,50);
  fill("#ffffff");
  beginShape();
    vertex(20,60);
    vertex(30,70);
    vertex(50,70);
    vertex(60,60);
    vertex(50,50);
    vertex(30,50);
  endShape(CLOSE);
  
  //eye iris
  push();
  fill(face.irisColor);
  ellipse(40,55,face.irisSize, face.irisSize);
  pop();
}