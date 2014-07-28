var dx= 4;
var dy=4;
var y=150;
var x=10;
function draw()
{
	var a = document.getElementById("ball");
	a.
	if( x<0 || x>500)
		dx=-dx;
	if( y<0 || y>500)
		dy=-dy;
	x+=dx;
	y+=dy;
}

setInterval(draw,10); 