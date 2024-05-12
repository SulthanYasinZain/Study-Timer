let active = false;
let intervalid;
let interval;
let intervalistirahat;
document.addEventListener("DOMContentLoaded", function () {
  let waktuBelajarElement = document.getElementById("waktu-belajar");
  let resettimer = document.getElementById("tombol-clear");
  let waktubelajarplus = document.getElementById("Tombol+waktu");
  let waktubelajarminus = document.getElementById("Tombol-waktu");
  let waktuIstirahatElement = document.getElementById("waktu-istirahat");
  let waktuIstirahatplus = document.getElementById("tombol+istirahat");
  let waktuIstirahatminus = document.getElementById("tombol-istirahat");

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  const button = document.getElementById("tombol-timer");
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

  function aniamtedown() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawgradient();
    addtext();
    if (angle > 180) {
      angle--;
    } else {
      clearInterval(intervalid);
      intervalId = setInterval(animate, interval);
    }
    drawSolid(angle);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawgradient();
    addtext();
    if (angle < 332) {
      angle++;
    } else {
      clearInterval(intervalId);
      intervalid = setInterval(aniamtedown, intervalistirahat);
    }
    drawSolid(angle);
  }
  drawgradient();
  addtext();
  drawSolid(angle);

  button.addEventListener("mousedown", function () {
    if (!active) {
      intervalId = setInterval(animate, interval);
      active = true;
    } else {
      clearInterval(intervalId);
      clearInterval(intervalid);
      active = false;
      calcinterval();
    }
  });

  resettimer.addEventListener("click", function () {
    clearInterval(intervalId);
    clearInterval(intervalid);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle = 180;
    active = false;
    drawgradient();
    addtext();
    drawSolid(angle);
    calcinterval();
  });

  waktubelajarminus.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    addtext();
    drawgradient();
    drawSolid(angle);
    calcinterval();
  });
  waktubelajarplus.addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    addtext();
    drawgradient();
    drawSolid(angle);
    calcinterval();
  });

  waktuIstirahatplus.addEventListener("click", function () {
    calcintervalistirahat();
  });

  waktuIstirahatminus.addEventListener("click", function () {
    calcintervalistirahat();
  });

  function calcinterval() {
    let waktuinterval = parseInt(waktuBelajarElement.innerText);
    let ms = waktuinterval * 60 * 1000;
    ms = ms / 152;
    interval = ms;
    console.log(interval);
    console.log(waktuinterval);
  }

  function calcintervalistirahat() {
    let waktuistirahat = parseInt(waktuIstirahatElement.innerText);
    let ms = waktuistirahat * 60 * 1000;
    ms = ms / 152;
    intervalistirahat = ms;
  }
  calcintervalistirahat();
  calcinterval();
});
