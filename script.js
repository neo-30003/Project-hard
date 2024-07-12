const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const toggleButton = document.getElementById("toggle");
const resetButton = document.getElementById("reset");

let x = 0;
let y = 250;
let direction = 1;
let animationFrameId;
let isRunning = false;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  if (x > canvas.width || x < 0) {
    direction *= -1;
  }

  x += 2 * direction;
}

function animate() {
  draw();
  animationFrameId = requestAnimationFrame(animate);
}

toggleButton.addEventListener("click", () => {
  if (isRunning) {
    cancelAnimationFrame(animationFrameId);
    toggleButton.textContent = "Пуск";
  } else {
    animate();
    toggleButton.textContent = "Пауза";
  }
  isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
  cancelAnimationFrame(animationFrameId);
  isRunning = false;
  toggleButton.textContent = "Пуск";
  x = 0;
  direction = 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
});

draw();
