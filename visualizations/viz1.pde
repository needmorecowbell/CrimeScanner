/**
* evil eye
*
* @author aa_debdeb
* @date 2016/09/28
*/

int ringNum = 20;

void setup(){
  size(screen.width, screen.height);
  noFill();
  stroke(20);
}

void draw(){
  background(230);
  translate(screen.width / 2, screen.height / 2);
  rotate(-HALF_PI);
  for(int ri = 1; ri <= ringNum; ri++){
    float ring = map(ri, 1, ringNum, 20, 250);
//    ellipse(0, 0, ring * 2, ring * 2); 
    int circleNum = int(map(sin(ri * map(mouseX, 0, screen.width, -PI, PI)), -1, 1, 20, 50));
    float circleSize = map(cos(ri * map(mouseY, 0, screen.height, -PI, PI)), -1, 1, 5, 50);
    for(int ci = 0; ci < circleNum; ci++){
      float angle = ci * TWO_PI / circleNum;
      ellipse(ring * cos(angle), ring * sin(angle), circleSize, circleSize);
    }    
  }
}