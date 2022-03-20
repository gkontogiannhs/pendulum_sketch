const bounds = {'width': null, 'height': null};
let initAngle = 0;

function setup() {
  bounds.width = windowWidth;
  bounds.height = windowHeight;
  createCanvas(bounds.width, bounds.height);
  pendulum = new Pendulum(200, 0);

}

function draw() {
  background(220);
  pendulum.show();
  pendulum.update();
}
