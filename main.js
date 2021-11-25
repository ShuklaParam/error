var mouse_event ="empty";
var last_X,last_Y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
width_of_line= 2;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("colorinput").value;
    width=document.getElementById("penwidth").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    
    mouse_event="mouseleave";
} 

canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    
    curent_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouse_event=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last x="+last_X+",last y="+last_Y);
        ctx.moveTo(last_X,last_Y);
        console.log(" current x="+curent_x+",current y="+current_y);
        ctx.lineTo (curent_x,current_y);
        ctx.stroke();

    

    }

    last_X=curent_x;
    last_Y=current_y;
}

function clear() { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); }