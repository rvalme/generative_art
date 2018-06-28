var t;
var theta;
var maxFrameCount = 20000; // frameCount, change for faster or slower animation

//Since p5.js is built on the Canvas API, in modern browsers, you can use a MediaRecorder to do this job.

const btn = document.querySelector('button'),
  chunks = [];

function record() {
  chunks.length = 0;
  let stream = document.querySelector('canvas').captureStream(30),
    recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };
  recorder.onstop = exportVideo;
  btn.onclick = e => {
    recorder.stop();
    btn.textContent = 'start recording';
    btn.onclick = record;
  };
  recorder.start();
  btn.textContent = 'stop recording';
}

function exportVideo(e) {
  var blob = new Blob(chunks);
  var vid = document.createElement('video');
  vid.id = 'recorded'
  vid.controls = true;
  vid.src = URL.createObjectURL(blob);
  document.body.appendChild(vid);
  vid.play();
}
btn.onclick = record;

function preload() {
  sound = loadSound("sounds/chimy.wav");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fft = new p5.FFT();
  sound.play();
}

function draw() {
  background('#D1FAFF');
  translate(width/2, height/2); // translate 0,0 to center
  fill('#2E82F4');

  t = frameCount/maxFrameCount;
  theta = TWO_PI*t*2.5;
  spectrum = fft.analyze();

  tmp_sz = 10;
  inc = TWO_PI/128;
  count = 0
  for (var y= 0; y <= TWO_PI; y += inc) {
    //var offSet = 50*x+y+y;   // play with offSet to change map below

    var x2 = map(sin(y), -1, 1, -175, 175); // map x position
    var y2 = map(cos(y), -1, 1, -175, 175); // map y position
    var sz2 = -spectrum[count] * 1.5
    fill(250-(y/2), 150+(y/6), 250-(y*50/2)); // color with gradient created

    push();
    translate(x2,y2);
    rotate(PI - y)
    rect(0, 0, tmp_sz, sz2);
    count += 8
    pop();
  }
}

