var colorList = ['#ffff00','#ff3700','#0019ff','#ff9d00','#00a9ff','#00ffa9','#bfff00'];

function setup() {
  createCanvas(400,400);
}

function draw() {

  var shift=20;
 
  stroke(0);
  
  for(var x=0;x<(width+shift);x+=shift){
    for(var y=0;y<(height+shift);y+=shift){
      
      var distance=dist(x,y,mouseX,mouseY);
      var scaled=map(distance,0,width,0,colorList.length)
      
      if(scaled<1){
        fill(colorList[0]);
      } else if(scaled<2) {
        fill(colorList[1]);
      } else if(scaled<3) {
        fill(colorList[2]);
      } else if(scaled<4) {
        fill(colorList[3]);
      } else if(scaled<5) {
        fill(colorList[4]);
      } else if(scaled<6) {
        fill(colorList[5]);
      } else {
        fill(colorList[6]);
      }

      beginShape();
      vertex(x,y);
      vertex(x+shift,y-shift);
      vertex(x+shift,y);
      vertex(x,y+shift);
      endShape();
    }
  }
}