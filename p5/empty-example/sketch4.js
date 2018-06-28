var t;
var theta;
var maxFrameCount = 200; // frameCount, change for faster or slower animation

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background('#242949');
  translate(width/2, height/2); // translate 0,0 to center

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t*2.5;

  for ( var x= -175; x <= 175; x += 25) {
    for (var y= -100; y <= 155; y += 50) {
      var offSet = 50*x+y+y;   // play with offSet to change map below

      var x2 = map(cos(-theta+offSet), 0, 1, 0, 25); // map x position
      var y2 = map(cos(-theta+offSet), 0, 1, 25, 0); // map y position
      var sz2 = map(sin(-theta+offSet), 0, 1, 15, 45); // map size off the ellipse
      fill(250-(x/2), 150+(x/6), 250-(y/2)); // color with gradient created

      ellipse(x+x2, y-y2, sz2, sz2);
    }
  }
}
