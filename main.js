var mouseEvent = "empty";
var lastPositionX, lastPositionY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthLine = 1;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)

{
    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    radius = document.getElementById("radius").value;
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;

        console.log("last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY);

        console.log("last position of x and y coordinates =");
        console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
        ctx.arc(PositionMouseX, PositionMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent = "mouseLeave";
}

