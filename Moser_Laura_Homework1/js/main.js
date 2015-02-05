/*
     Name: Laura Moser
     Date: 02-04-15
     Class & Section:  WIA-1501
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
// Use Modernizr to verify that your browser supports canvas, include a fallback message

*/

window.onload = function(){
  if(Modernizr.canvas){

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

var theCanvas = document.getElementById("Canvas1");
if (theCanvas && theCanvas.getContext){
	var ctx = theCanvas.getContext("2d");
if(ctx){
	ctx.strokeStyle = "black";
	ctx.fillStyle="#007CFF";
	ctx.lineWidth =2;

	ctx.strokeRect(0,0, 50, 100);	
	ctx.fillRect(0,0, 50, 100);

	}
}


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

//Draw Circle here

var theCanvas2 = document.getElementById('Canvas2');
if (theCanvas2 && theCanvas2.getContext) {
	var ctx2 = theCanvas2.getContext("2d");
	if(ctx2){
		var degrees = 360;
		var radians = (degrees/180)*Math.PI;
		
		ctx2.fillStyle = "rgba(255,0,0,.5)";
		
		// Red Circle
		ctx2.beginPath();
		ctx2.arc(50,50,20,0,radians);
		ctx2.fill();
		ctx2.closePath();
		ctx2.stroke();
		
		//Stroke Circle
		ctx2.beginPath();
		ctx2.strokeStyle = "black";
		ctx2.arc(50,50,30,0,radians);
		ctx2.stroke();
	}
}


/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
var theCanvas3 = document.getElementById("Canvas3");
if (theCanvas3 && theCanvas3.getContext){
	var ctx3 = theCanvas3.getContext("2d");
if(ctx3){
//style
	ctx3.strokeStyle = "black";
	ctx3.fillStyle="#EF03C5";
	ctx3.lineWidth =2;
	
//Draw Star here
	ctx3.lineJoin = "miter";
	
	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(175,95);
	ctx3.lineTo(205,30);
	ctx3.lineTo(235,95);
	ctx3.lineTo(305,105);
	ctx3.lineTo(255,155);
	ctx3.lineTo(265,225);
	ctx3.lineTo(200,190);
	ctx3.lineTo(140,225);
	ctx3.lineTo(155,155);
	ctx3.lineTo(100,100);
	ctx3.fill();
	ctx3.stroke();
		
	}
}



/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

var theCanvas4 = document.getElementById('Canvas4');
	var ctx4 = theCanvas4.getContext("2d");
	if(ctx4){
				ctx4.strokeStyle = 'black';
				ctx4.fillStyle = 'yellow';
				ctx4.lineWidth =3;
				ctx4.beginPath();
				ctx4.arc(400,350,300,0, 1*Math.PI, true);
				ctx4.bezierCurveTo(100, 300, 170, 250, 200, 350);
				ctx4.bezierCurveTo(200, 300, 270, 250, 300, 350);
				ctx4.bezierCurveTo(300, 300, 370, 250, 400, 350);
				ctx4.bezierCurveTo(400, 300, 470, 250, 500, 350);
				ctx4.bezierCurveTo(500, 300, 570, 250, 600, 350);
				ctx4.bezierCurveTo(600, 300, 670, 250, 700, 350)
				ctx4.stroke();
				ctx4.fill();	
				
				
			}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can say whatever you would like in any color.

********************************************/

//Draw text here

var theCanvas5 = document.getElementById("Canvas5");
if (theCanvas5 && theCanvas5.getContext){
	var ctx5 = theCanvas5.getContext("2d");
if(ctx5){

	ctx5.fillStyle = "green";
	ctx5.font = "30pt Helvetica"
	
	ctx5.fillText("Visit LauraLynnDesigns.net ", 100, 300);
	
	
	}
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here 

	var theCanvas6 = document.getElementById("Canvas6");
	if (theCanvas6 && theCanvas6.getContext) {
		var ctx6 = theCanvas6.getContext("2d");
		if (ctx6) {
			
			var  logo = document.getElementById("img1");
			
			//The image exactly as it is.
			ctx6.drawImage(logo, 0,0);

			//Shrink the image by 50%
			ctx6.drawImage(logo, 0, 1200, 1650, 544);
			
			//Slice a section of the logo out and draw that onto the canvas.
			ctx6.drawImage(logo, 450, 505, 125, 180, 75, 75, 150, 150 );

			
		}
	}
	

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
 var theCanvas7 = document.getElementById("Canvas7");
 
 if (theCanvas7 && theCanvas7.getContext) {
 	var ctx7 = theCanvas7.getContext("2d");
 
 	if (ctx7) {
 	
 	var myTitle = "Yay I'm Done!";
 	var degrees = 360;
 	var radians = (degrees/180)*Math.PI;
 	
 	//Sky
 	ctx7.fillStyle = "skyblue";
 	ctx7.fillRect(0,0, 600, 400);
 	
 	// Grass - Rectangle
 	ctx7.fillStyle = "green";
 	ctx7.strokeStyle = "black"
 	ctx7.lineWidth = 1;
 	ctx7.beginPath();
 	ctx7.fill();
 	ctx7.stroke();
 	ctx7.fillRect(0,300,600,255);
 	
 	// Clouds - Arcs
 	ctx7.beginPath();
 	ctx7.fillStyle = "white";
 	ctx7.strokeStyle = "#ddd";
 	ctx7.lineWidth = 2;
 	ctx7.arc(140,40,50,0,radians);
 	ctx7.arc(190,40,50,0,radians);
 	ctx7.arc(250,40,50,0,radians);
 	ctx7.arc(360,40,50,0,radians);
 	ctx7.arc(400,40,50,0,radians);
 	ctx7.arc(470,40,50,0,radians);
 	ctx7.fill();
 	
 	// Title - Text 
 	ctx7.font = "14pt Helvetica";
 	ctx7.fillStyle = "#30C";
 	ctx7.strokeStyle = "#555";
 	ctx7.lineWidth = 2;
 	ctx7.fillText(myTitle, 250, 140);
 	
 	
 	}
  }

/*******************************/

  }// end if(Modernizr.canvas)
}// End window.onload
