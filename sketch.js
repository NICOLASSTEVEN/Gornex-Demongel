// noprotect
var drops = [];
var FRAME_A = 5;
var MAX_X_ACCEL = 0.025; 
var MAX_Y_SPEED = 7.5; 
var GRAVITY = 0.0375; 
var FRICTION = 0.9925; 
var MIN_RAD = 3;
var MAX_RAD = 6; 
var MIN_RG = 64; 
var MAX_RG = 255; 
var button;
var button1;

this.xpos=0;
this.ypos=0;
this.vel=3;

function setup() {
	
	var fondo= createCanvas(windowWidth, windowHeight);
  fondo.position(0,0);
  fondo.style('z-index',-1);
  fondo.parent('fondo1');
	colorMode(RGB, 250, 305, 255, 500);
	ellipseMode(RADIUS);
	background(100);
  
	
SPAWN_MIN_X = windowWidth / 10;
	SPAWN_MAX_X = SPAWN_MIN_X * 9;
   
	
	
}



function draw() {
	
	noStroke();
	
	this.xpos = this.xpos + this.vel;
	if(this.xpos > width){
	 this.xpos = -50;
	}	
	
	this.ypos = this.ypos - this.vel;
	if(this.ypos < 0 ){
	 this.ypos = 1400;
	}	
	
	
	
	fill(		50,	5,	165,90);
	ellipse(this.xpos,random(2000),random(50),random(50));
	
	fill(	154,	15,	113,90);
	ellipse(random(2000),this.xpos,random(50),random(50));
	
	fill(	93	,45,	212,90);
	ellipse(random(2000),this.ypos,random(50),random(50));
	
	fill(52	,151	,180 ,90);
	ellipse(this.ypos,random(2000),random(50),random(50));
	
	fill(	171,	26,	48 ,90);
	ellipse(random(2000),random(2000),random(50),random(50));
	
	background(0, 0, 0, FRAME_A);
	drops.push(new drop()); // add a new drop each frame
	
	
	for (var i = drops.length - 1; i >= 0; i--) {
		drops[i].Run();
		
		if (!drops[i].isAlive()) {
			drops.splice(i, 1);
		}
	}
	
	texto();
}

function texto(){
	noStroke();
	
	

	
	
	
}

function drop() {
	this.x = random(SPAWN_MIN_X, SPAWN_MAX_X);
	this.y = 0;
	this.rad = random(MIN_RAD, MAX_RAD); 
	this.xSpeed = 0; 
	this.ySpeed = 0; 
	this.rg = random(MIN_RG, MAX_RG); 
	this.b = 255; 
	
	this.Run = function() {
		this.Update();
		this.Display();
	};
	
	
	this.Update = function() {
	
		this.ySpeed += GRAVITY;
		
		
		var a = random(-MAX_X_ACCEL, MAX_X_ACCEL);
		this.xSpeed += a;
		
		
		this.xSpeed *= FRICTION;
		this.ySpeed *= FRICTION;
		this.y += this.ySpeed;
		this.x += this.xSpeed;
	};
	
	
	this.Display = function() {
		fill(220,random(170), 120, 100);
		ellipse(this.x, this.y, this.rad, this.rad);
	};
	
	
	this.isAlive = function() {
		return this.y < windowHeight + this.rad;
	};
}

 
