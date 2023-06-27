var last_position_of_x, last_position_of_y;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
var color = "black";
var width_of_line = 2;

if (width < 992) {
  document.getElementById("myCanvas").width = new_width;
  document.getElementById("myCanvas").height = new_height;
  document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
  last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

  // Dibujar el anillo en la posición inicial
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.arc(last_position_of_x, last_position_of_y, 50, 0, 2 * Math.PI);
  ctx.stroke();
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
  // Evitar que se dibujen líneas durante el movimiento del toque
  e.preventDefault();
}

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  last_position_of_x = e.clientX - canvas.offsetLeft;
  last_position_of_y = e.clientY - canvas.offsetTop;

  // Dibujar el anillo en la posición inicial
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.arc(last_position_of_x, last_position_of_y, 50, 0, 2 * Math.PI);
  ctx.stroke();
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
  // Evitar que se dibujen líneas durante el movimiento del mouse
  if (e.buttons !== 1) {
    return;
  }

  var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

  // Dibujar el anillo en la posición actual del mouse
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 50, 0, 2 * Math.PI);
  ctx.stroke();

  last_position_of_x = current_position_of_mouse_x;
  last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
  // No se requiere ninguna acción específica al soltar el mouse
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  // No se requiere ninguna acción específica al salir del lienzo
}

function ClearArea() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}