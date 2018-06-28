var t;
var theta;
var maxFrameCount = 250; // how fast the animation goes
var space = 30; // space for the quad
var numb = 4; // number of
var radius = 110;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(1);
}


function draw() {
  background('#FAC864');
  translate(width/2, height/2);

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t*3;

  for (var i = 0; i < 360; i += 30) {
    var angle = radians(i);
    var x =  (cos(angle) * radius);
    var y =  (sin(angle) * radius);

    shape(x, y, HALF_PI+(radians(i)));
  }

}

function shape(xpos, ypos, a) {
  push();
  translate(xpos, ypos); // translate the position
  rotate(a); // we rotate the shapes in a circle what we declare in the draw
  for ( var x= -25; x <= 25; x += 25) {

      for (var i=0; i<=numb-1; i++) {
        var offSet = (TWO_PI/numb*i)+(a/3)+x;
        var pos1 = map(sin(-theta+offSet), -1, 1, -50, 50);
        var pos2 = map(cos(-theta+offSet), -1, 1, 50, -50);

        // modulo for having two colors
        if (i % 2 == 0) {
          stroke('#0A1596');
        } else {
          stroke('#F51596');
        }
        // the shape
         quad(0,0+pos1,0-space,0,0,0-pos2,0+space,0);
      }
    }
  pop();
}
