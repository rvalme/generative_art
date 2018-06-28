var t;
var theta;
var numb = 2;
var maxFrameCount = 200;
var radius = 137;

function setup() {
  // put setup code here
  //createCanvas(540, 540);
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(2);
  strokeJoin(ROUND);
  strokeCap(ROUND);
}

function draw() {
  // put drawing code here
  background('#515B5E');
  translate(width/2, height/2);

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t*3;

  for (var i = 0; i < 360; i += 20) {
    var angle = radians(i);
    var x =  (cos(angle) * radius);
    var y =  (sin(angle) * radius);

    shape(x, y, HALF_PI+(radians(i)));
  }
}
function shape(xpos, ypos, a) {
  push();
  translate(xpos, ypos);
  rotate(a);

  for ( var x= -50; x <= 56; x += 100) {
    for (var y= -50; y <= 56; y += 100) {
      for (var i=0; i<=numb-1; i++) {

        var offSet = (TWO_PI/numb*i);
        var offSet2 = (TWO_PI/numb*i)*2;
        var pos1 = map(sin(-theta+offSet), -1, 1, -75, 75);
        var pos2 = map(cos(-theta+offSet), -1, 1, 50, -50);
        var pos3 = map(sin(-theta+offSet2), -1, 1, -50, 50);
        var pos4 = map(sin(-theta+offSet), -1, 1, 100, -50);

        /* modulo for two colors */
        if (i % 2 == 0) {
          stroke('#F28C6C');
        } else {
          stroke('#2E3233');
        }
        triangle(0, pos4, pos2, pos3, pos1, pos2);
      }
    }
  }

  pop();
}
