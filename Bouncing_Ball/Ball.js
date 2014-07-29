//Global Declarations...
var boundryX = 0;   //Width of Container
var boundryY = 0;   //Height of Container..
var BallBucket = new Array();   //Array holding balls...
var BallCount = 1;

//To set Container size...
var setValues = function(width, height) {
    document.getElementById('surface').style.width = width + 'px';
    boundryX = document.getElementById('surface').offsetWidth;
    document.getElementById('surface').style.height = height + 'px';
    boundryY = document.getElementById('surface').offsetHeight;
}

//Class...
var LetTheBallBounce = function () {
    this.y;
    this.x;
    this.dx;
    this.dy;
    this.ballId = null;
    //Create Ball...
    this.createBall = function (id, x, y, color) {
        this.x = x;
        this.y = y;

        this.dx = 4;
        this.dy = 4;
        this.ballId = id;

        var div = document.createElement("div");
        div.id = id;
        div.className += 'ball';
        div.style.top = this.y + 'px';
        div.style.left = this.x + 'px';
        div.style.backgroundColor = color;

        document.getElementById('surface').appendChild(div);       
    }
}

//Initialisation function...
var initCanvas = function () {
    document.getElementById("Enter-Ball").innerHTML = "";
    document.getElementById("Enter-Color").innerHTML = "";
    
    document.getElementById("x-value").style.display = "none";
    document.getElementById("y-value").style.display = "none";
  
    document.getElementById("Create-Ball").style.display = "none";
    document.getElementById("Color-Picker").style.display = "none";

    setValues(400, 400);
    setInterval(drawByArray, 40);
}

//This function will call draw for all balls  
var drawByArray = function(){
    for (i = 0; i < BallBucket.length; i++) {
        draw(BallBucket[i]);
    }
}

//This will move the ball...
var draw = function (ball) {
    var ballHtml = document.getElementById(ball.ballId);
   
    if (ball.x < 0 || (ball.x) >= (boundryX - 50)) {
        ball.dx = -ball.dx;
    }
    if (ball.y < 0 || (ball.y) >= (boundryY - 50)) {
        ball.dy = -ball.dy;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;

    ballHtml.style.top = ball.y + 'px';
    ballHtml.style.left = ball.x + 'px';
}

//get parameters necessary to create Ball...
document.getElementById("Create-Ball").onclick = function () {

    var x_val = document.getElementById("x-value").value;
    var y_val = document.getElementById("y-value").value;
    var color = document.getElementById("Color-Picker").value;

    ball = new LetTheBallBounce();
    ball.createBall("b" + BallCount++, parseInt(x_val), parseInt(y_val), color);
    BallBucket.push(ball);    
}

//Customize Container Size...
document.getElementById("small").onclick = function () {
    setValues(400, 400);
}
document.getElementById("medium").onclick = function () {
    setValues(800, 500);
}
document.getElementById("large").onclick = function () {
    setValues(1000, 600);
}

document.getElementById("addBall").onclick = function () {
    document.getElementById("Enter-Ball").innerHTML = "Enter Ball Position (x,y)";
    document.getElementById("Enter-Color").innerHTML = "Enter Ball Color";
    document.getElementById("x-value").style.display = "";
    document.getElementById("y-value").style.display = "";
    document.getElementById("Create-Ball").style.display = "";
    document.getElementById("Color-Picker").style.display = "";
}

document.getElementById("Refresh").onclick = function () {
    alert("Hello");
    drawByArray();
}
