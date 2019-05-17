class Particle{
  constructor() {
    this.position = createVector(random(width), random(height));
	this.velocity = createVector(0, 0);
	this.acc = 0.4;
    this.c = color(200, 0, 0);
  }

  move(){
    var angle = noise(this.position.x/noisePattern, this.position.y/noisePattern)*TWO_PI*noisePattern;
	this.velocity = p5.Vector.fromAngle(angle);
    //NOTE: switch
	this.velocity.mult(this.acc);
    this.position.add(this.velocity);
  }

  
  //edges() : keep the particle in the canvas 
  edges(){
    //assign random position if particle leaves the canvas
	if(this.position.x > width || this.position.x < 0 || this.position.y > height || this.position.y < 0){
      //avoid assigning position at the edge of the canvas
	  this.position.x = random(50, width);
	  this.position.y = random(50, height);
	}
  }

  //show(radius) : draw a particle as an ellipse with radius 'r'
  show(r){
		ellipse(this.position.x, this.position.y, r, r);
	}

  //checkColor() : change RGB color values according to x-pos of the particle
  checkColor (r1, g1, b1, r2, g2, b2) {
    this.r = map(this.position.x, 0, width, 200, 120);
    this.g = map(this.position.x, 0, width, 180, 120);
    this.b = map(this.position.x, 0, width, 210, 120);
    this.c = color(this.r, this.g, this.b);
  }
}