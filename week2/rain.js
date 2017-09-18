var x=5;
var a, y, z;
// function setup() {
//   createCanvas(400, 400);
//   a = 120;
// 	y = 270;
// }
var img;

function preload() {
  img = loadImage("1.jpg");
}

function draw() {
  // background(250);
  image(img, 0, 0, width,height);
  //rain drops
	fill(0,191,255);
  noStroke();

  ellipse(a,y,4,10);
  ellipse(a-10,y-10,4,10);
  ellipse(a+10,y+10,4,10);
  ellipse(a-20,y-20,4,10);
  ellipse(a+20,y+20,4,10);
  ellipse(a-30,y-30,4,10);
  ellipse(a+30,y+30,4,10);

  // ellipse(a-2,y-2,4,10);
  ellipse(a-80,y-80,4,10);
  ellipse(a+80,y+80,4,10);
  ellipse(a-90,y-90,4,10);
  ellipse(a+90,y+90,4,10);
  ellipse(a-100,y-100,4,10);
  ellipse(a+100,y+100,4,10);







	y = y + random(1,3);
	if (y > height){
		y=0;
	}
 }
