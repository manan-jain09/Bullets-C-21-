var bullet, wall;
var bullet1, wall1;
var bullet2, wall2;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(1200, 100, thickness, height / 2 - 150);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50, 100, 50, 10);
  bullet.shapeColor = "silver";

  wall1 = createSprite(1200, 200, thickness, height / 2 - 150);
  wall1.shapeColor = color(80, 80, 80);

  bullet1 = createSprite(50, 200, 50, 10);
  bullet1.shapeColor = "silver";

  wall2 = createSprite(1200, 300, thickness, height / 2 - 150);
  wall2.shapeColor = color(80, 80, 80);

  bullet2 = createSprite(50, 300, 50, 10);
  bullet2.shapeColor = "silver";
  
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
}

function draw() {
  background(0);  
  fill("white");
  rect(25, 50, width - 300, height / 2 - 100);
  rect(25, 150, width - 300, height / 2 - 100);
  rect(25, 250, width - 300, height / 2 - 100);

  drawSprites();

  bullet.velocityX = speed;
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;

  if (collided(bullet, wall)) {
      bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = color(225, 0, 0);
      bullet.velocityX = 0;
    }
    if (damage < 10) {
      wall.shapeColor = color(0, 225, 0);
      bullet.velocityX = 0;
    }
  } else {
    bullet.shapeColor = "silver";
  }
  if (hascollided(bullet, wall)) {
    bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  if (damage > 10) {
    wall.shapeColor = color(225, 0, 0);
    bullet.velocityX = 0;
  }
  if (damage < 10) {
    wall.shapeColor = color(0, 225, 0);
    bullet.velocityX = 0;
  }
} else {
  bullet.shapeColor = "silver";
}

if (collided(bullet1, wall1)) {
  bullet1.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
if (damage > 10) {
  wall1.shapeColor = color(225, 0, 0);
  bullet1.velocityX = 0;
}
if (damage < 10) {
  wall1.shapeColor = color(0, 225, 0);
  bullet1.velocityX = 0;
}
} else {
bullet1.shapeColor = "silver";
}
if (hascollided(bullet1, wall1)) {
bullet1.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
if (damage > 10) {
wall1.shapeColor = color(225, 0, 0);
bullet1.velocityX = 0;
}
if (damage < 10) {
wall1.shapeColor = color(0, 225, 0);
bullet1.velocityX = 0;
}
} else {
bullet1.shapeColor = "silver";
}

if (collided(bullet2, wall2)) {
  bullet2.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
if (damage > 10) {
  wall2.shapeColor = color(225, 0, 0);
  bullet2.velocityX = 0;
}
if (damage < 10) {
  wall2.shapeColor = color(0, 225, 0);
  bullet2.velocityX = 0;
}
} else {
bullet2.shapeColor = "silver";
}

if (hascollided(bullet2, wall2)) {
bullet2.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
if (damage > 10) {
wall2.shapeColor = color(225, 0, 0);
bullet2.velocityX = 0;
}
if (damage < 10) {
wall2.shapeColor = color(0, 225, 0);
bullet2.velocityX = 0;
}
} else {
bullet2.shapeColor = "silver";
}
}
