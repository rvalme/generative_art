var t;
var theta;
var space = 25; /* space for the triangles */
var numb = 2; /* number of shapes */
var maxFrameCount = 200; /* how fast is goes */
var radius = 120; /* radius of the start (outer) circle */

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(238);
  noStroke();
}

function draw() {
  background('#FECAA7');
  translate(width/2, height/2);

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t*3;
  rotate(HALF_PI*3);

/* I just added 3 times a circle of shapes, could be done better  */
/* first ring */
  for (var i = 0; i < 360; i += 15) {
    var angle = radians(i);
    var x =  (cos(angle) * radius*1.5);
    var y =  (sin(angle) * radius*1.5);

    shape2(x,y,HALF_PI+(radians(i)));
  }

/* middle ring */
  for (var i = 0; i < 360; i += 30) {
    var angle = radians(i);
    var x =  (cos(angle) * radius);
    var y =  (sin(angle) * radius);

    shape(x,y,HALF_PI+(radians(i)));
  }

/* inner ring */
  for (var i = 0; i < 360; i += 60) {
    var angle = radians(i);
    var x =  (cos(angle) * radius/2);
    var y =  (sin(angle) * radius/2);

    shape(x,y,HALF_PI+(radians(i)));
  }

 }


function shape2(xpos,ypos, a){
  push();
  translate(xpos,ypos);

  rotate(a); /* rotate the shapes around the center */
  rect(0, 0, 10,2);
  pop();

}
function shape(xpos,ypos, a){
  push();
  translate(xpos,ypos);

  rotate(a); /* rotate the shapes around the center */

    for ( var x= -25; x <= 26; x += 50) {
      for (var y= -25; y <= 26; y += 50) {

        for (var i=0; i<=numb-1; i++) {

          var offSet = (TWO_PI/numb*i)+(a*3);
          var offSet2 = offSet*2;
          var pos1 = map(cos(-theta+offSet), -1, 1, -50, 50);

          /* modulo for two colors */
          if (i % 2 == 0) {
          fill('#335D66');
          } else{
          fill('#FF5D66');
          }

          triangle(0-space,0,0,0+pos1,0+space,0);
      }
    }
  }

  pop();

}
