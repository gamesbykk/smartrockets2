// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/bGz7mv2vD6g

var population;
// Each rocket is alive till 400 frames
var lifespan = 400;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = [200,300,50,400,60,235,235,400,620,720,470,820,480,655,655,820];
var ry = [150,160,150,150,210,290,150,290,150,160,150,150,210,290,150,290];
var rw = [10,10,10,10,140,140,140,10,10,10,10,10,140,140,140,10];
var rh = [150,130,150,100,10,10,10,10,150,130,150,100,10,10,10,10];

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(0);
  population.run();
  // Displays count to window
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  for (var i=0;i<rx.length;i++){
    rect(rx[i], ry[i], rw[i], rh[i]);
  }
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
