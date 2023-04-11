const updateTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById("time-text").textContent = currentTime;
};

setInterval(updateTime, 1000);

var canvas = document.getElementById("snow");
var ctx = canvas.getContext("2d");

var flakeCount = 150;
var flakeSize = 2;
var flakeSpeed = 2;

var flakes = [];

function drawSnow() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (var i = 0; i < flakeCount; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * flakeSize,
      speed: Math.random() * flakeSpeed + 1,
      xSpeed: Math.random() * flakeSpeed - flakeSpeed / 2,
      ySpeed: Math.random() * flakeSpeed + flakeSpeed / 2,
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < flakeCount; i++) {
      var flake = flakes[i];

      flake.y += flake.ySpeed;
      flake.x += flake.xSpeed;

      if (flake.y > canvas.height) {
        flake.y = 0;
      }

      if (flake.x > canvas.width) {
        flake.x = 0;
      } else if (flake.x < 0) {
        flake.x = canvas.width;
      }

      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    }

    requestAnimationFrame(update);
  }

  update();
}

window.onload = function () {
  drawSnow();
};
