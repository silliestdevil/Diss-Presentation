// let myModel;
let modelX = 0;
let modelY = 0;
let modelZ = 0;
let rotation1X = 3.2; // Rotate 45 degrees around X-axis
let rotation1Y = 45;           // No initial rotation around Y-axis
let rotation1Z = 0;           // No rotation around Z-axis
let rotationAngleX = 0;
let rotationAngleY = 0;
let radius = 2;
let rotationSpeed = 0.03;
let textur;

function preload() {
 myModel = loadModel('Assets/Computerupdated.obj');
textur = loadImage('Assets/Computertexture.png');
}

function setup() {
 var Canvas = createCanvas(400, 400, WEBGL);
  Canvas.parent('SketchContainer') // Corrected canvas parent assignment
 colorMode(RGB);
 ambientLight(255);
 directionalLight(255, 255, 255, 0, 5, 1);

  

 
}
function draw() {
  background(0);

 // Set the position of the model
 translate(modelX, modelY, modelZ);

  // Set the rotation of the model
  rotateX(rotation1X);
  rotateY(rotation1Y);
  rotateZ(rotation1Z);

 rotationAngleY += rotationSpeed;

 // Set the rotation angles
 rotateY(rotationAngleY);
 
texture(textur);


 stroke(255);
 strokeWeight(0.15);

 // Display the loaded 3D model
 scale(25);

  model(myModel);

  console.log("Sketch 1 is running");

}