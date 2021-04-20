
//var t_width = window.innerWidth -40;
var t_width = 80;
var size = 10;

var char_arr = ["@", "#", "$", "%", "?", "+", "=","~", "*", "^","-",";", ":", ",", "."]
function setup(){

	createCanvas(t_width * size, t_width * size);
	pixelDensity(1);
	
	video = createCapture({
 audio: false,
  video: {
  facingMode: {
  exact: "environment" 
  }
   } 
    }); 
	
	video.size(t_width, t_width);
	
}//setup

function draw(){
	background(255);
	
	video.loadPixels();
	loadPixels();
	
	for(var y = 0; y < video.height; y++){
		 for(var x = 0; x < video.width; x++){
		 	 
		 	 var index = (x+(y*video.width))*4;
		 	 var r = video.pixels[index+0];
		 	 var g = video.pixels[index+1];
		 	 var b = video.pixels[index+2];
		 	 var bright = (r+g+b)/2;
		 	 
     var txt = char_arr[(Math.ceil(bright/17))-1];
		 	 
		   fill(0, 0, 0);
		 	 textSize(10);
		 	 text(txt, x*10, y*10);
		 	 
		 	 /*
		 	 fill(r,g,b);
		 	 rect(x*20*8,y*20*8,dense*8,dense*8)*/
		 	
		 }
	} //main for
	
	
}//draw
