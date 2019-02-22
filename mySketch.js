
this.xpos=0;
this.ypos=0;
this.vel=3;
var canvas;

function setup() {
	canvas=createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index',-1);
	background(100);

}

function draw() {
	
	noStroke();
	
	this.xpos = this.xpos + this.vel;
	if(this.xpos > width){
	 this.xpos = -50;
	}	
	
	this.ypos = this.ypos - this.vel;
	if(this.ypos < 1 ){
	 this.ypos = 1900;
	}	
	
	fill(91, 44, 111,50);
	ellipse(this.xpos,random(2000),random(200),random(200));
	
	fill(123, 36, 28,50);
	ellipse(random(2000),this.xpos,random(200),random(200));
	
		fill(93, 109, 126,50);
	ellipse(random(2000),this.ypos,random(200),random(200));
	
	fill(189, 195, 199 ,50);
	ellipse(this.ypos,random(2000),random(200),random(200));
	
}
