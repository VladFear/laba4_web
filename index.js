var c = document.getElementById("myCanvas");
document.getElementById("change_color").onclick = changeColor;
document.getElementById("change_type").onclick = changeType;
document.getElementById("speed_up").onclick = speedUp;
document.getElementById("slow_down").onclick = slowDown;
var ctx = c.getContext("2d");
var color = "green";
var type = "circle";
var speed = 0;
 
ctx.beginPath();
ctx.moveTo(100,0);
ctx.lineTo(100,200);
ctx.stroke();

function drawCircle(x,y)
{
  ctx.beginPath();
  ctx.arc(x,y,10,0,2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawRectangle(x,y)
{
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x + 15,y);
	ctx.lineTo(x + 15,y + 15);
	ctx.lineTo(x,y + 15);
	ctx.lineTo(x,y);
	ctx.stroke();
	ctx.fillStyle = color;
  	ctx.fill();
}

function changeColor()
{
	if (color === "green")
		color = "cyan";
	else
		color = "green";
}

function changeType()
{
	if (type === "circle")
		type = "square";
	else
		type = "circle";
}

function speedUp()
{
	if (speed <= 30);    
		speed += 2;
}
function slowDown()
{
	if (speed >= 0)    
		speed -= 2;
}

var angle = 0;
var radius = 1;
var direction = 0;
setInterval(function()
{ 
	ctx.clearRect(0,0,200,200);
	if (type === "circle")
		drawCircle(Math.round((100 + radius * Math.cos(angle * Math.PI / 180))) % 250,Math.round((100 + radius*Math.sin(angle * Math.PI / 180))) % 250);
	else
		drawRectangle(Math.round((100 + radius*Math.cos(angle * Math.PI / 180))) % 250,Math.round((100 + radius*Math.sin(angle * Math.PI / 180))) % 250);
	if (angle == 360)
		angle = 0;
	else
		angle += 20 + speed;
	if (radius == 80)
		direction = 0;
	if (radius == 0)
		direction = 1;
	if (direction == 0)
		radius--;
	else
		radius++;
}, 25);
