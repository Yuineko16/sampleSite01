function windowResized() {
    resizeCanvas(windowWidth, windowHeight,WEBGL);//3Dの場合は引数にWEBGLを忘れずに！
    canvasSetup;
    background(0);//再描画後に背景を再描画する
}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight,WEBGL);//2Dの場合は引数にWEBGLは要らない
    canvas.position(0,0);//canvasをページの原点に固定
    canvas.style('z-index','-1');//canvasを後ろに移動する
    background(30);
}
function draw() {
   frameRate(6);
   rotateX(frameCount * random(0,10));
   rotateY(frameCount * random(0,10));
   line(random(200,600),random(200,600),300,300);
   stroke(random(0,255),random(0,255),random(0,255));
   /*noStroke();
   ellipse(random(200,600),random(200,600),50,100);
   fill(random(0,255),random(0,255),random(0,255),60);*/
}