
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


this.xpos=0;
this.ypos=0;
this.vel=3;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
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
	
	fill(150,200,200,190);
	textFont('Segoe Print');
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(50);
	text("Nicolas Steven Rivera Alvarado", width/2, height - 7*(height/11) );
	fill(0,0,0,90);
	text("Nicolas Steven Rivera Alvarado", width/2+random(10), height - 7*(height/11)+random(15) );
	

	
	
	textSize(20);
	
	fill(150,200,200);
	text("open processing", width/2, height - 5*(height/11) );
	fill(0,0,0,90);
	text("open processing", width/2+random(10), height - 5*(height/11)+random(10) );
	fill(100,180,210,10);
	ellipse(width/2,height - 4.5*(height/11)-30,110+random(15),30+random(15));
	
	fill(150,200,200);
	text("itch.io", width/2, height - 3*(height/11));
	fill(0,0,0,190);
	text("itch.io", width/2+random(10), height - 3*(height/11)+random(10));
	fill(100,180,210,10);
	ellipse(width/2,height - 2.5*(height/11)-30,50+random(15),30+random(15));
	
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

 
function mousePressed(){
	
	if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 5*(height/11)-30) && mouseY<(height - 5*(height/11)+20) ){
		window.open('https://www.openprocessing.org/user/121742/#sketches');
	}
	if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 3*(height/11)-30) && mouseY<(height -3*(height/11)+20) ){
		window.open('https://gornex-demongel.itch.io/space-balls');
	}
}

