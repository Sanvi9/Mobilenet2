function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  console.log("p5 has called setup function");
}
function draw() {
  console.log("p5 has called draw function");
  image(video,0,0,300,300)
}




