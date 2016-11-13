
numCrimes=31;//   11/4/16 - 11/11/16
int ringNum = 31; //number of crimes in this week, eventually grab from database

void setup(){
  size(screen.width, screen.height);// fullscreen
  stroke(40,30,45);
  fill(200,230,250);
  // noFill();
  
}

void draw(){
  background(100);
  
  
  translate(screen.width / 2, screen.height / 2);
  
  
  rotate(-HALF_PI);
  for(int ri = 1; ri <= ringNum; ri++){//fill outer rings
    float ring = map(ri, 1, ringNum, 20, 250);//more functional programming
 
    int circleNum = int(map(sin(ri * map(mouseX, 0, screen.width, -PI, PI)), -1, 1, 20, 50)); //functional programming
    
    float circleSize = map(cos(ri * map(mouseY, 0, screen.height, -PI, PI)), -1, 1, 5, 50);
    
    
    for(int x = 0; x< circleNum; x++){
      float angle = x * TWO_PI / circleNum;
      ellipse(ring * cos(angle), ring * sin(angle), circleSize, circleSize);
    }    
  }
}