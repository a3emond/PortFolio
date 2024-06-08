const canvas = document.getElementById("circuitCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];
const lineCount = 80;
const maxLineLength = canvas.width * 1.25; // Lines will now reach across the canvas
const speed = 2;
const maxAngleChange = Math.PI / 8; // Maximum angle change

// Calculate origin points based on the given percentages
const originStartX = canvas.width * 0.6;
const originEndY = canvas.height * 0.7;
const spread = (canvas.width * 0.6) / lineCount; // Spread within the 40% width remaining

class Line {
  constructor(x, y, length, speed) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.speed = speed;
    this.angle = Math.PI / 4; // Initial angle (45 degrees)
    this.growing = true;
    this.angleChanging = false;
    this.angleChangeTime = 0;
    this.startDelay = Math.random() * 1000; // Delay before the line starts (in milliseconds)
    this.startTime = Date.now(); // The time when the line was created
  }

  update() {
    if (Date.now() - this.startTime < this.startDelay) {
      // If the start delay has not passed yet, don't update the line
      return;
    }

    this.length += this.speed;
    if (this.length > maxLineLength) {
      // If the line has reached its full length, reset it
      this.reset();
      this.startTime = Date.now(); // Reset the start time
    }
  }

  reset() {
    // Reset the line to a new starting position and length
    this.x = -spread * Math.random() * lineCount;
    this.y = canvas.height + Math.random() * maxLineLength;
    this.length = 0;
  }

  draw() {
    // Calculate the alpha value based on the length of the line
    const alpha =
      this.length <= 0.85 * maxLineLength
        ? 1
        : 1 - (this.length - 0.85 * maxLineLength) / (0.15 * maxLineLength);

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    const endX = this.x + this.length * Math.cos(this.angle);
    const endY = this.y - this.length * Math.sin(this.angle);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`; // Use rgba color to include alpha
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw a circle at the end of the line
    ctx.beginPath();
    ctx.arc(endX, endY, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`; // Use rgba color to include alpha
    ctx.fill();

    // Add a light effect to the circle
    ctx.shadowBlur = 10;
    ctx.shadowColor = `rgba(0, 240, 255, ${alpha})`; // Use rgba color to include alpha

    // Reset shadow properties for next draw
    ctx.shadowBlur = 0;
    ctx.shadowColor = "transparent";
  }
}

// Create lines originating from off-screen, towards the bottom left corner
for (let i = 0; i < lineCount; i++) {
  const originX = -spread * i; // Starting off-screen towards the left
  const length = Math.random() * maxLineLength;
  lines.push(new Line(originX, canvas.height + length, length, speed)); // Starting off-screen below the canvas
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach((line, index) => {
    line.update();
    if (line.length > maxLineLength) {
      // If the line has reached its full length, remove it from the array
      lines.splice(index, 1);
      // Create a new line
      const originX = -spread * Math.random() * lineCount;
      const length = Math.random() * maxLineLength;
      lines.push(new Line(originX, canvas.height + length, length));
    }
    line.draw();
  });

  requestAnimationFrame(animate);
}

animate();
