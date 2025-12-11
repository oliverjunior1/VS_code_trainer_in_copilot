const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let mario = {
  x: 50,
  y: 150,
  width: 30,
  height: 30,
  color: "red",
  speed: 5
};

function drawMario() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = mario.color;
  ctx.fillRect(mario.x, mario.y, mario.width, mario.height);
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") mario.x += mario.speed;
  if (e.key === "ArrowLeft") mario.x -= mario.speed;
  if (e.key === "ArrowUp") mario.y -= mario.speed;
  if (e.key === "ArrowDown") mario.y += mario.speed;
  drawMario();
});

drawMario();