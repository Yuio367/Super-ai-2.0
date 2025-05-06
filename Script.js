const circle = document.getElementById("circle");
let isDragging = false;
let startAngle = 0;
let currentAngle = 0;

// Start dragging
circle.addEventListener("mousedown", dragStart);
circle.addEventListener("touchstart", dragStart);

function dragStart(e) {
  isDragging = true;
  startAngle = getAngle(e);
  document.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  document.addEventListener("touchmove", dragging);
  document.addEventListener("touchend", dragStop);
  circle.style.animation = "none";
}

// Dragging function
function dragging(e) {
  if (!isDragging) return;
  const angle = getAngle(e);
  const diff = angle - startAngle;
  currentAngle += diff;
  startAngle = angle;
  circle.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg)`;
}

// Stop drag
function dragStop() {
  isDragging = false;
  document.removeEventListener("mousemove", dragging);
  document.removeEventListener("mouseup", dragStop);
  document.removeEventListener("touchmove", dragging);
  document.removeEventListener("touchend", dragStop);
}

// Get touch/mouse angle
function getAngle(e) {
  const x = (e.touches ? e.touches[0].clientX : e.clientX) - window.innerWidth / 2;
  const y = (e.touches ? e.touches[0].clientY : e.clientY) - window.innerHeight / 2;
  return Math.atan2(y, x) * (180 / Math.PI);
}
