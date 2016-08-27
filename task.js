
function setup(){
	var canvas = createCanvas(700,600);
	background(25,65,255);

}
function draw() {
	var x = 0 ;
	var y = 0 ;
	for(var i = 0; i<6; i++){
		line(x+200*i , y,x+200*i, 600);

	}
	for (var j = 0 ; j < 7 ; j++){
		line(x , y+200 *j, 700 , y+200*j)
	}
	
}
