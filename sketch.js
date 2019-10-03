var mySweetGif;
var mySweetGif2;

function preload() {
  mySweetGif = loadImage("giphy.gif");
  mySweetGif2 = createImg("giphy2.gif");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(100);
  //image(img, dx, dy, dWidth, dHeight, sx, sy, [sWidth], [sHeight])
  image(mySweetGif, 100, 100, 480, 480);
  mySweetGif2.position(0, 0);
}