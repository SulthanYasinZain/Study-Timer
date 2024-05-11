document.addEventListener("DOMContentLoaded", function () {
  let waktuBelajarElement = document.getElementById("waktu-belajar");
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height;

  function drawgradient() {
    ctx.translate(x, y);
    ctx.translate(-x, -y);
    ctx.rotate((0 * Math.PI) / 180);

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "rgba(0,255,68,1)");
    gradient.addColorStop(0.7, "rgba(0,212,255,1)");
    gradient.addColorStop(1, "rgba(28,28,157,1)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 25;
    ctx.beginPath();
    ctx.arc(x - 1, y, 120, 195 * (Math.PI / 180), 344 * (Math.PI / 180), false);
    ctx.stroke();
  }
  function drawSolid() {
    ctx.translate(x, y);
    ctx.translate(-x, -y);

    ctx.strokeStyle = "#3f3f46";
    ctx.lineWidth = 27; //a
    ctx.beginPath();
    ctx.arc(
      x - 1,
      y,
      120,
      195 + angle * (Math.PI / 180),
      345 * (Math.PI / 180),
      false
    );
    ctx.stroke();
  }

  let angle = 180; // 180 == 0 MAX 332.3
  let intervalId;

  function addtext() {
    ctx.font = "15px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText("0", 60, 120);

    ctx.font = "15px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(waktuBelajarElement.innerText, 220, 120);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawgradient();
    addtext();
    if (angle < 332) {
      angle += 0.1;
    } else {
      clearInterval(intervalId);
    }
    drawSolid(angle);
    console.log(angle);
  }
  drawgradient();
  addtext();
  drawSolid(angle);

  intervalId = setInterval(animate, 10);
});
