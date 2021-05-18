function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
}

function draw() {
  translate(400, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  background(0);

  scAngle1 = map(sc, 0, 60, 0, 360);
  scAngle2 = map(mn, 0, 60, 0, 360);
  scAngle3 = map(hr % 12, 0, 60, 0, 360);

  push();
  stroke("red");
  strokeWeight(7);
  noFill();
  arc(0, 0, 300, 300, 0, scAngle1);
  rotate(scAngle1);
  line(0, 0, 120, 0);
  pop();

  push();
  stroke("blue");
  strokeWeight(7);
  noFill();
  arc(0, 0, 260, 260, 0, scAngle2);
  rotate(scAngle2);
  line(0, 0, 80, 0);
  pop();

  push();
  stroke(100, 255, 100);
  strokeWeight(7);
  noFill();
  arc(0, 0, 280, 280, 0, scAngle3);
  rotate(scAngle3);
  line(0, 0, 100, 0);
  pop();
}
