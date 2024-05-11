document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var x = canvas.width / 2;
  var y = canvas.height / 2;

  function drawgradient() {
    ctx.translate(x, y);
    ctx.rotate((0 * Math.PI) / 180);
    ctx.translate(-x, -y);

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "rgba(0,255,68,1)");
    gradient.addColorStop(0.7, "rgba(0,212,255,1)");
    gradient.addColorStop(1, "rgba(28,28,157,1)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(x, y, 120, 195 * (Math.PI / 180), 345 * (Math.PI / 180), false);
    ctx.stroke();
  }
  function drawSolid() {
    ctx.translate(x, y);

    ctx.translate(-x, -y);

    ctx.strokeStyle = "#3f3f46";
    ctx.lineWidth = 17; //a
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      120,
      195 + angle * (Math.PI / 180),
      345 * (Math.PI / 180),
      false
    );
    ctx.stroke();
  }

  let angle = 185; // 185 == 0 MAX 332.3
  let intervalId;

  function addtext() {
    ctx.font = "15px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText("0", 55, 120);

    ctx.font = "15px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText("0", 235, 120);
  }
  ctx.font = "30px Arial"; // Atur ukuran dan jenis font teks
  ctx.fillStyle = "black"; // Atur warna teks
  ctx.fillText("Hello, World!", 50, 50); // Tambahkan teks di koordinat (50, 50)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawgradient();
    addtext();

    if (angle < 332) {
      angle++;
    } else {
      clearInterval(intervalId);
    }
    drawSolid(angle);
  }

  intervalId = setInterval(animate, 10);
});
