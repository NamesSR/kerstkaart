const canvas = document.getElementById("canvas");
    const g = canvas.getContext("2d");
    
    function circal(xPos,yPos, r , startR,EndR ,kleur ,rot) {
    g.fillStyle = kleur;
    g.beginPath();
    g.arc(xPos,yPos, r, startR, EndR* Math.PI, rot);
    g.moveTo(xPos,yPos - r *2 )
    g.lineTo(xPos,yPos - r *2 +10)
    g.strokeStyle = "black";
    g.closePath();
    g.fill();
    g.stroke();
}
function triangelK(beginXPos,begingYPos,x1,y1,x2,y2,kleur) {
    
    g.moveTo(beginXPos, begingYPos); 
    g.lineTo(x1, y1); 
    g.lineTo(x2, y2); 
    g.closePath(); 
     
    g.fillStyle = kleur; 
   
  
   g.strokeStyle = kleur;
    g.fill()
}
function triangel(beginXPos,begingYPos,x1,y1,x2,y2) {
    
    g.moveTo(beginXPos, begingYPos); 
    g.lineTo(x1, y1); 
    g.lineTo(x2, y2); 
    g.closePath(); 
     
    
}
function vierkant(beginXPos,begingYPos,endXPos,endYPos) {
    g.beginPath(); 
    g.rect(beginXPos, begingYPos, endXPos, endYPos); 
   
}
function kersthuis(beginXPos,begingYPos,endXPos,endYPos, xtop, ytop, endxpos,kleur){
 vierkant(beginXPos,begingYPos,endXPos,endYPos)
 triangel(beginXPos,begingYPos, xtop, ytop, endxpos , begingYPos )
  
}
g.rect(0,0,800,400);
g.fillStyle = "blue";
g.fill()
kersthuis(50,450,50,50,75,410,100);
g.fillStyle = "brown"; 
   g.strokeStyle = "brown";
    g.fill()
kersthuis(55,450,40,45,75,417,95);
g.strokeStyle = "White";
g.stroke();
kersthuis(150,400,50,50,175,360,200);
g.fillStyle = "brown"; 
   g.strokeStyle = "brown";
    g.fill()
kersthuis(155,400,40,45,175,367,195);
g.strokeStyle = "White";
g.stroke();


kersthuis(600,350,100,100,650,290,700);
g.fillStyle = "brown"; 
   g.strokeStyle = "brown";
    g.fill()
kersthuis(605,350,90,95,650,297,695);
g.strokeStyle = "White";
g.stroke();
kersthuis(700,460,50,50,725,420,750);
g.fillStyle = "brown"; 
   g.strokeStyle = "brown";
    g.fill()
kersthuis(705,460,40,45,725,427,745);
g.strokeStyle = "White";
g.stroke();

g.rect(640,320,20,20);
g.strokeStyle = "White";

g.stroke();
g.rect(720,445,10,10);
g.strokeStyle = "White";

g.stroke();

g.rect(170,385,10,10);
g.strokeStyle = "White";

g.stroke();
g.rect(70,435,10,10);
g.strokeStyle = "White";

g.stroke();

 //g.beginPath(); 
 //   g.moveTo(190, 500); 
 //   g.lineTo(220, 450); 
 //   g.lineTo(200, 450); 
  //  g.lineTo(230, 400); 
  //  g.lineTo(215, 400);
  //  g.lineTo(250, 350);
 //   g.lineTo(280, 400);
 //   g.lineTo(265, 400);
 //   g.lineTo(265, 400);
 //   g.lineTo(290, 450);
 //   g.lineTo(270, 450);
 //  g.lineTo(300, 500);
  //  g.lineTo(190, 500);
    

   // g.stroke();
   g.beginPath(); 
   
   triangelK(200,500,400,320,600,500,"green")
   triangelK(230,430,400,250,570,430,"green")
   triangelK(300,320,400,200,500,320,"green")
   vierkant(370,500,60,60)
  g.fillStyle = "brown"; 
   g.strokeStyle = "brown";
    g.fill()
  g.stroke();
   
   circal(320, 400, 12, 0, 2, "yellow", true )
   circal(440, 290, 12, 0, 2, "blue", true )
   circal(500, 420, 12, 0, 2, "red", true )
   circal(420, 340, 12, 0, 2, "orange", false )
   circal(360, 360, 12, 0, 2, "orange", false )
   circal(350, 300, 12, 0, 2, "red", false )
   circal(430, 470, 12, 0, 2, "blue", false )
   circal(400, 430, 12, 0, 2, "yellow", false )
   
  g.stroke();