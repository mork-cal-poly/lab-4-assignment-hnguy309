let clicked = false;
function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  background(255)
  myCanvas.parent("canvas-parent");
}

function draw(){
  backGround(color(58,68,148))

  drawGrass(0, 300, 400, 100);
  drawPig(400,380,0.9)
  drawFlower(300,70,90)
  drawFlower(300,70,135)
  drawFlower(300,70,180)

  drawSun(300,70)

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
      translate(200, 400);
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
