const bounds = {'width': null, 'height': null};
const pendulum = [];
const count = 5;


function setup() {
  bounds.width = windowWidth;
  bounds.height = windowHeight;
  createCanvas(bounds.width, bounds.height);
  for(let i=0; i<count; i++){
    pendulum[i] = new Pendulum(random(100, 400), PI/4);
  }

}

function draw() {
  background(235);

  for(let i=0; i<count; i++){
    pendulum[i].show();
    pendulum[i].update();
  }
}
