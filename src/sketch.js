
let pigX = 0
let rotateP = 0

let clicked = false;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  background(255)
  ellipseMode(CENTER)
  myCanvas.parent("canvas-parent");
}

function draw(){
  backGround(color(58,68,148))
 //animation for pig  
 if(clicked){ 
  pigX = pigX - 1; 
}

//animation for sun to spin
if (pigX <= -200) {
    rotateP = rotateP - 1
    backGround(color(168, 255, 250));
}

  drawGrass(0, 300, 400, 100);
  drawPig(400 + pigX,380,0.9)
  drawFlower(300,70,90+rotateP)
  drawFlower(300,70,135+rotateP)
  drawFlower(300,70,180+rotateP)

  drawSun(300,70)
  
  //_______________Penguin________________
    //x,y,colorDark,colorLight,colorEye,colorBeak
    drawPenguin(200,400,color(29,53,87),color(241,233,218),color(0),color(241,136,5))
  

}

 //---------- Background -------------------------
function backGround(c){
  fill(c)
  rect(0,0,400,400)
}

function drawGrass(x,y,w,h){
    push();
      translate(x,y)  //this code is for the grass
      fill('#2d8a51');
      noStroke();
      rect(0, 0, w, h);
    pop()
  }  
//------Sun Flower------------------
function drawFlower(x,y,rotateP){ //this for the flower around the sun
    push()
      translate(x,y)
      rotate(rotateP)
      scale(0.5)
      fill('#FF774C')
      noStroke()
      ellipse(0, 0, 50,200)
      fill(255)
      noStroke()
      ellipse(0,0, 50,150)
    pop()
  }


//_________________Function for Penguin (Angela's hidden)___________________
function drawPenguin(x,y,colorDark,colorLight,colorEye,colorBeak){

  push();
    translate(x, y);
    noStroke();
    scale(.1)
  
  //---Body----
    fill(colorDark);
    quad(-75,-225,75,-225,100,-50,-100,-50);
  
  //----wings----
  //left
  push();
    translate(-100,-175);
    fill(colorDark);
    rotate(PI/4);
    ellipse(0,0,50,150);
  pop();
  //right
  push();
    translate(100,-175);
    fill(colorDark);
    rotate(3*PI/4);
    ellipse(0,0,50,150);
  pop();
 
  //---Head----
  fill(colorDark);
  ellipse(0,-275,150);
  
  //---Regular Face----
  fill(colorLight);
  arc(0,-262.5,117,120,7*PI/4,5*PI/4);
  ellipse(-30,-262.5,60,90)
  ellipse(30,-262.5,60,90)
  //beak
  fill(colorBeak)
  quad(-20,-275,0,-280,20,-275,0,-260);
  //eye
  fill(colorEye);
  ellipse(-30,-287.5,10,10)
  ellipse(30,-287.5,10,10)

  //----Body Circle
  fill(colorLight);
  ellipse(0,-150,137.5,210);
  
  //----feet----
  fill(colorBeak);
  triangle(-50,-100,-25,-50,-75,-50);
  triangle(50,-100,75,-50,25,-50)
  arc(-50,-62.5,75,75,7*PI/4,5*PI/4);
  arc(50,-62.5,75,75,7*PI/4,5*PI/4); 
  
  
  pop();

}

function drawSun(){      // the sun
    push();
      fill('#faee02')
      noStroke()
      ellipse(300, 70, 40, 40);
    pop();
}   

    //---------- Pig----------------------------
function drawPig(x,y,s){  
    push();
      translate(x, y);
    // the legs of the pig --> i put it before the body because i want the body to be infront of the legs
        fill ('#fccfe4')
        quad(20, -100, -30, -110, -10, -45, 20, -45)
        quad(133, -110, 85, -100, 90, -45, 120, -45) 
    // the body of the pig
        fill ('#fccfe4')
        ellipse (50, -150, 200, 150)
    // the head of the pig
        fill ('#fccfe4')
        ellipse (-50, -170, 115, 115)
    // the left ears
        fill('#f5a6cb')
        triangle(-120, -170, -140, -220, -80, -220)
    // the right ears
        fill('#f5a6cb')
        triangle(20, -170, 40, -220, -20, -220)
    // the face of the pig
    // right eyes
        fill('#4f3829')
        noStroke();
        ellipse(-30, -180, 15, 20) 
    // left eyes
        fill('#4f3829')
        noStroke();
        ellipse(-80, -180, 15, 20)
    //the nose
        fill('#f5a6cb')
        noStroke();
        ellipse(-57, -147, 50, 30)
        //the 2 holes of the nose
        fill('#fccfe4')
        noStroke();
        ellipse(-47, -147, 12, 12)
        ellipse(-67, -147, 12, 12)
    // the tail
        stroke(0)
        arc(125, -195, 40, 40, PI + QUARTER_PI, QUARTER_PI );  
  
    pop();
}

function mouseClicked() {
  clicked = !clicked;     
}