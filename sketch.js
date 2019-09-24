
var x = 180;
var y = 400;
// falling object controls
// ball 1
var z = 20;
var M = 20;
var a = 20;
var t;

// ball set 2
//var a = 20, 


function setup() {

createCanvas(400, 600) ;
fill(235,74,215)
frameRate(30);
noStroke();


}

// ball drop functions 

 // function ball drop
 // first set of slow moving balls
 function ballDrop(){
  print("BD")
  for (var i = 20; i < 400; i += 90){
    circle(i,M++, 10,10)
  }
  if (M>600){
    M = 0 
  }
  
}

function balldrop2(){
  print("BD2")
  for (var i = 40; i < 400; i += 100){
    circle(i,z++, 20,20)
  
  }

  if (z>600){
    z = 0
  }

}


function bigballs(){
  print("BBD")

  for (var i = 40; i < 400; i += 150){
     circle(i,a++, 60,60)
  
 }
 
 if(a>600){
   a =0;
 }
}

// set of faster moving balls

// draw function 
function draw() {
  t = millis();
strokeWeight(1)
stroke(3)
background(72,56,100)
// instructions 
textSize(20)
text("use the key pad to move the square", 30,550)
text("dodge the falling balls to get points", 33,570)

// contorls for square 
if (keyIsPressed) {
  if (keyCode == LEFT_ARROW) {
  x-=3;
  }
  else if (keyCode == RIGHT_ARROW) {
  x+=3;
  }
  else if (keyCode == UP_ARROW){
    y-=3;
  }
  else if (keyCode == DOWN_ARROW){
    y+=3;
  }
  }
  stroke(255, 204, 0);
  strokeWeight(4);
  rect(x, y, 50, 50);
  
  // calling falling balls at diffrent times 
  // ball drop 1 (drops 3 sets of small balls)

  if (t >1000 && t < 8500 ){

 ballDrop();

} 

// ball drop 2 (drops 2 sets of medium balls)

if (t >9000 && t < 13800 ){

  balldrop2();
 
 } 

 if (t >14000 && t < 17000 ){

  bigballs();
 
 } 

}