var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var mouseX, mouseY;
var mouseDown = false;

canvas.addEventListener("mousedown", function (event) {
  mouseX = event.offsetX;
  mouseY = event.offsetY;
  mouseDown = true;
  updateCurrentPosition();
});

canvas.addEventListener("mousemove", function (event) {
  if (mouseDown) {
    mouseX = event.offsetX;
    mouseY = event.offsetY;
    drawPreview();
    updateCurrentPosition();
  }
});

canvas.addEventListener("mouseup", function (event) {
  mouseDown = false;
  paintPixel();
});

function drawPreview() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var color = document.getElementById("color").value;
  ctx.fillStyle = color;
  ctx.fillRect(mouseX - 2, mouseY - 2, 4, 4);
}

function paintPixel() {
  var x = parseInt(document.getElementById("x").value);
  var y = parseInt(document.getElementById("y").value);
  var color = document.getElementById("color").value;

  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}

function saveCanvas() {
  var link = document.createElement("a");
  link.download = "canvas.png";
  link.href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, "data:application/octet-stream");
  link.click();
}

function updateCurrentPosition() {
  document.getElementById("currentX").innerText = mouseX.toString();
  document.getElementById("currentY").innerText = mouseY.toString();
}
