/*
 * @name Materials
 * @description There are five types of materials supported.
 * They respond to light differently.
 * Move your mouse to change the light position.
 */

 var url1 = "https://api.wordnik.com/v4/word.json/";
var word = "duck";
var url2 = "/relatedWords?useCanonical=false&relationshipTypes=rhyme&limitPerRelationshipType=20&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"

var link;

var img;
function setup(){
  createCanvas(710, 400, WEBGL);
  img = loadImage("duck.jpg");

  link = select('#word');
  link.mousePressed(askWordnik);
}

function askWordnik() {
  loadJSON(url1 + word + url2, gotData);
}

function gotData(data) {
  if (data.length === 0) {
    createP('no related words');
  } else {
    var index1 = floor(random(0, data.length));
    var index2 = floor(random(0, data[index1].words.length));
    word = data[index1].words[index2];
    link.html(word);
    document.getElementById("word2").innerHTML = document.getElementById("word2").innerHTML + "<br>" + word;
  }
}

function draw(){
  background(255,182,193);

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  // ambientLight(100, 80, 80);
  // pointLight(200, 200, 200, locX, locY, 0);

  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  texture(img);
  box(80);
  pop();

  translate(-200, -250, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  fill(250, 0, 0);
  torus(80, 20, 64, 64);
  pop();

  translate(400, 0, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  normalMaterial();
  torus(80, 20, 64, 64);
  pop();

  translate(-400, 500, 0);
  push();
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  ambientMaterial(250);
  torus(80, 20, 64, 64);
  pop();

  translate(400, 0, 0);
  push();
  specularMaterial(250);
  rotateZ(frameCount * 0.02);
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.02);
  torus(80, 20, 64, 64);
  pop();
}
