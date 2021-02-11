var stars;
var move = 600;
var canvas;

function canvasSetup(){
	stars = new Array(floor(windowWidth/2 + windowHeight/2));
	
	for(let i=0; i<stars.length; i++){
		stars[i] = new Star();
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight,WEBGL);//3Dの場合は引数にWEBGL
	canvasSetup;
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight,WEBGL);
	canvas.position(0,0);
	canvas.style('z-index','-100');
	canvas.style('position','fixed');
	canvas.style('top','0');
	
	canvasSetup();
}

function draw() {
	background(0);
	for(let i=0; i<stars.length; i++){
		stars[i].update();
		stars[i].show();
		
		if(random(0,3000)<1){
			stars[i].shine();
		}
	}
}

class Star{
	constructor(){
		this.x = random(-windowWidth-move,windowWidth+move);
		this.y = random(-windowHeight-move,windowHeight+move);
		this.pX = this.x;
		this.pY = this.y;
		this.z = random(0,500);
		this.rad = map(this.z, 0, 500, 5, 0.1);
		this.shineAppear = false;
		this.lenMAX = map(this.z, 0, 500, 40, 4);
		this.len = this.lenMAX;
		this.angle = map(this.z, 0, 500, 1.5, 0.1);
	}
	update(){
		if(this.x > this.pX-(move*this.angle) && map(mouseX, 0, windowWidth/2, -2, 0) < 0){
			this.x += this.angle*map(mouseX, 0, windowWidth/2, -2, 0);
		}
		if(this.x < this.pX+(move*this.angle) && map(mouseX, windowWidth/2, windowWidth, 0, 2) > 0){
			this.x += this.angle*map(mouseX, windowWidth/2, windowWidth, 0, 2);
		}

		if(this.y > this.pY-(move*this.angle) && map(mouseY, 0, windowHeight/2, -2, 0) < 0){
			this.y += this.angle*map(mouseY, 0, windowHeight/2, -2, 0);		
		}
		if(this.y < this.pY+(move*this.angle) && map(mouseY, windowHeight/2, windowHeight, 0, 2) > 0){
			this.y += this.angle*map(mouseY, windowHeight/2, windowHeight, 0, 2);		
		}

		
		if(this.len < this.lenMAX){
			this.len += 1;
		}
	}
	show(){
		noStroke();
		fill(255);
		ellipse(this.x, this.y, this.rad, this.rad);		
		
		if(this.len < this.lenMAX){
			stroke(255);
			line(this.x, this.y-this.len, this.x, this.y-this.lenMAX);
			line(this.x, this.y+this.len, this.x, this.y+this.lenMAX);
			line(this.x-this.lenMAX, this.y, this.x-this.len, this.y);
			line(this.x+this.lenMAX, this.y, this.x+this.len, this.y);
		}
	}
	shine(){
		if(this.len >= this.lenMAX){
			this.len = 1;
		}
	}
	
}