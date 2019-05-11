var canvas = document.querySelector('canvas');
var a,b,c;
function f(x){
    a = parseInt(document.getElementById("A").value);
    b = parseInt(document.getElementById("B").value); 
    c = parseInt(document.getElementById("C").value);
    return yt(a*(x**2)+(b*x)+c);
}

var x0 = -10;
var xf = 10;
var x = x0;
var dx = 0.1;

function f_(x){
    return yt(50*Math.cos(x));
}
function yt(y){
    return -5*y/2; // -((h/(xf-x0))*y)
}
function xt(x){
    return 25*x; // (w/(xf-x0))*x
}
function main() 
{
    var canvas, ctx, w, h;
    w = 500;
    h = 500;
    canvas = document.getElementById("canvas1");
    ctx = canvas.getContext("2d");
   
    ctx.translate(250,250);
    ctx.beginPath();
    ctx.moveTo(xt(-10),yt(0));
    ctx.lineTo(xt(10),yt(0));
    ctx.moveTo(xt(0),yt(-100));
    ctx.lineTo(xt(0),yt(100));
    ctx.stroke();
    ctx.save();
    ctx.beginPath();

    ctx.moveTo(xt(x),f(x0));
    x+= dx;
    while(x<xf)
    {
        ctx.lineTo(xt(x),f(x))
        x+= dx;
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
