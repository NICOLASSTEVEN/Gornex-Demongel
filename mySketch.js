
this.xpos=0;
this.ypos=0;
this.vel=3;
var canvas;

function setup() {
	canvas=createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index',-1);
  
	background(50);

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
	
	
	
	fill(91, 44, 111,50);
	ellipse(this.xpos,random(2000),random(200),random(200));
	
	fill(123, 36, 28,50);
	ellipse(random(2000),this.xpos,random(200),random(200));
	
		fill(93, 109, 126,50);
	ellipse(random(2000),this.ypos,random(200),random(200));
	
	fill(189, 195, 199 ,50);
	ellipse(this.ypos,random(2000),random(200),random(200));
	
	fill(289,205, 199 ,50);
	rect(random(2000),random(2000),random(200),random(200));
	
	
	
	texto();
}

function texto(){
	noStroke();
	
	fill(254, 247, 229,190);
	textFont('Times New Roman');
	textAlign(CENTER);
	textStyle(BOLD);
	textSize(50);
	text("Nicolas Steven Rivera Alvarado", width/2, height - 7*(height/11) );
	
	

	
	//textStyle(NORMAL);
	textSize(20);
	
	fill(0,0,0,190);
	text("open processing", width/2, height - 5*(height/11) );
	fill(200,180,210,30);
	rect(width/2-100,height - 5*(height/11)-30,200,50);
	fill(0,0,0,190);
	
	text("itch.io", width/2, height - 3*(height/11));
	fill(200,180,210,30);
	rect(width/2-100,height - 3*(height/11)-30,200,50);
	fill(0,0,0,190);
}
 
function mousePressed(){
	
	if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 5*(height/11)-30) && mouseY<(height - 5*(height/11)+20) ){
		window.open('https://www.openprocessing.org/user/121742/#sketches');
	}
	if(mouseX> (width/2-200) && mouseX<(width/2+200) && mouseY> (height - 3*(height/11)-30) && mouseY<(height -3*(height/11)+20) ){
		window.open('https://gornex-demongel.itch.io/space-balls');
	}
}
