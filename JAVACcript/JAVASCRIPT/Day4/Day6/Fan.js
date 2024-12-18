// script.js
let fan = document.querySelector('.fan');
let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');

// Function to start the fan
function startFan() {
  fan.style.animationPlayState = 'running';
}

// Function to stop the fan
function stopFan() {
  fan.style.animationPlayState = 'stop';
}

// Event listeners for buttons
startButton.addEventListener("click",stopFan)
startButton.addEventListener("click", startFan);
//stopButton.addEventListener('click', stopFan);
