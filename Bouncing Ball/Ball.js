var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw()
{	
	var ball = document.getElementById("ball");
	ball.style.position = "relative";
	ball.style.top = y;
	ball.style.left = x;
	if( x<0 || x>450)
			dx=-dx;
	if( y<0 || y>450)
			dy=-dy;
	x+=dx;
	y+=dy;
	console.log(x);
	console.log(y);
}

setInterval(draw,10); 