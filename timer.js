document.addEventListener("DOMContentLoaded", function () {
  let active = false;
  const timerElement = document.getElementById("timer");
  let reset = document.getElementById("tombol-clear");
  let totalSeconds = 0;

  let timer;

  function updateTimer() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    timer = minutes;
    const seconds = totalSeconds % 60;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    timerElement.textContent = formattedTime;
    totalSeconds++;
  }

  const button = document.getElementById("tombol-timer");
  button.addEventListener("mousedown", function () {
    if (!active) {
      button.classList.remove("bg-green-500");
      button.classList.add("bg-red-500");
      active = true;
      button.innerText = "Stop";
      intervalID = setInterval(updateTimer, 1);
    } else {
      button.classList.remove("bg-red-500");
      button.classList.add("bg-green-500");
      active = false;
      button.innerText = "start";
      clearInterval(intervalID);
    }
  });

  let waktuBelajarElement = document.getElementById("waktu-belajar");
  let currentValue = parseInt(waktuBelajarElement.innerHTML);

  if (currentValue == timer) {
    alert.log("waktuBelajarElement is timer");
  }

  reset.addEventListener("click", function () {
    totalSeconds = 0;
    timerElement.textContent = "00:00:00";
    clearInterval(intervalID);
    button.classList.remove("bg-red-500");
    button.classList.add("bg-green-500");
    active = false;
    button.innerText = "start";
  });
});
