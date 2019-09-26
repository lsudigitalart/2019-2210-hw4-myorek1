
var x = 180;
var y = 400;
// falling object controls
// ball y var
var z = 20;
var m = 20;
var a = 20;





var t;
var score = 0;




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
  stroke(3)
  fill(117,259,76)
  for (var i = 20; i < 400; i += 90){
   m++
    circle(i,m, 10)

    
    if(dist(x+25, y, i,m)<25){
      print("hit")
      score = score-10;
    }
  }
  if (m>600){
    m = 0 
  }
  
}

function balldrop2(){
  print("BD2")
  stroke(3)
  fill(152,252,253)
  
  for (var i = 40; i < 400; i += 100){
    
    circle(i,z+=2, 20)
    
    if(dist(x+25, y, i,z)<25){
      print("hit")
      score = score-10;
    }
  }

  if (z>600){
    z = 0
  }

}


function bigballs(){
  print("BBD")
  stroke(3)
  fill(207,229,75)
  
  for (var i = 40; i < 400; i += 150){
     circle(i,a += 3, 60)

     if(dist(x+25, y, i,a)<25){
      print("hit")
      score = score-15;
    }

    if (a > 600){
      a = 0;
    }
  
 }
 
 if(a>600){
   a =0;
 }
}
 

function balldrop3(){
  print("BD3")
  stroke(3)
  fill(117,259,76)
  for (var i = 20; i < 400; i += 90){
   m+=2.5
    circle(i,m, 10)

    
    if(dist(x+25, y, i,m)<25){
      print("hit")
      score = score-10;
    }
  }
  if (m>600){
    m = 0 
  }
}

function balldrop4(){
  print("BD4")
  stroke(3)
  fill(152,252,253)
  
  for (var i = 40; i < 400; i += 100){
    
    circle(i,z+=4, 20)
    
    if(dist(x+25, y, i,z)<25){
      print("hit")
      score = score-10;
    }
  }

  if (z>600){
    z = 0
  }

}

function balldrop5(){
  print("BD4")
  stroke(3)
  fill(152,252,253)
  
  for (var i = 100; i < 400; i += 200){
    
    circle(i,z+=8, 100)
    
    if(dist(x+25, y, i,z)<25){
      print("hit")
      score = score-10;
    }
  }

  if (z>600){
    z = 0
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
fill(117,259,76)
text("use the key pad to move the square", 30,550)
textSize(17)
fill(117,259,76)
text("dodge the falling balls, if your hit you lose points", 10, 570)
text( score, 10, 30)

// setting up score 
if (t >0 && t <60000 ){
  score ++;
}



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
  fill(235,74,215)
  rect(x, y, 50, 50);
   
  // adding score to screen


  // calling falling balls at diffrent times 
  // ball drop 1 (drops 3 sets of small balls)

  if (t >1000 && t < 8500 ){

 ballDrop();

} 

// ball drop 2 (drops 2 sets of medium balls)

if (t >9000 && t < 13800 ){

  balldrop2();
 
 } 

 if (t >14000 && t < 16000 ){

  bigballs();
 
 } 

 if (t >170000 && t < 20000 ){

  balldrop2();
 }

 if (t >20000 && t < 22700 ){

  balldrop4();
 
 } 
 
 if (t >22700 && t < 25000 ){

  balldrop5();
 
 } 
 if (t >25000 && t < 29000 ){

  ballDrop();
 
 } 


}

// dectecting your distance frome something 
// conferming a colision with an object
