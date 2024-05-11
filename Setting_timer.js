document.addEventListener("DOMContentLoaded", function () {
  let waktuBelajarElement = document.getElementById("waktu-belajar");
  let waktuIstirahatElement = document.getElementById("waktu-istirahat");
  let waktuIstirahatplus = document.getElementById("tombol+istirahat");
  let waktuIstirahatminus = document.getElementById("tombol-istirahat");
  let waktubelajarplus = document.getElementById("Tombol+waktu");
  let waktubelajarminus = document.getElementById("Tombol-waktu");

  let reset = document.getElementById("tombol-clear");

  waktubelajarplus.addEventListener("click", function () {
    if (waktuBelajarElement !== null) {
      let currentValue = parseInt(waktuBelajarElement.innerHTML);
      if (currentValue < 60) {
        waktuBelajarElement.innerText = (currentValue + 5)
          .toString()
          .padStart(2, "0");
      }
    }
  });

  waktubelajarminus.addEventListener("click", function () {
    if (waktuBelajarElement !== null) {
      let currentValue = parseInt(waktuBelajarElement.innerHTML);
      if (currentValue > 5) {
        waktuBelajarElement.innerText = (currentValue - 5)
          .toString()
          .padStart(2, "0");
      }
    }
  });

  waktuIstirahatplus.addEventListener("click", function () {
    let waktu = parseInt(waktuIstirahatElement.innerText);
    if (waktu < 30) {
      waktuIstirahatElement.innerText = (waktu + 5).toString().padStart(2, "0");
    }
  });

  waktuIstirahatminus.addEventListener("click", function () {
    let waktu = parseInt(waktuIstirahatElement.innerText);
    if (waktu > 5) {
      waktuIstirahatElement.innerText = (waktu - 5).toString().padStart(2, "0");
    }
  });
});
