var mainContainer = document.querySelector(".mainContainer");

// create 14 divs with class pos1, pos2, pos3, ... pos14
for (let i = 1; i <= 14; i++) {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.transition = "all 0.5s ease";

  div.classList.add(`pos${i}`);
  div.classList.add("card");
  mainContainer.appendChild(div);
}
//pos1
var pos1 = document.querySelector(".pos1");
pos1.style.width = mainContainer.clientWidth * 0.8 + "px";
pos1.style.height = mainContainer.clientHeight / 2 + "px";
pos1.style.top = "25%";
pos1.style.left = findCenter(pos1);
pos1.style.zIndex = "10";
//pos2
var pos2 = document.querySelector(".pos2");
pos2.style.width = pos1.clientWidth / 1.5 + "px";
pos2.style.height = pos1.clientHeight / 1.5 + "px";
pos2.style.bottom = "10%";
pos2.style.left = findCenter(pos2);
pos2.style.filter = "blur(2px)";
pos2.style.zIndex = "9";
//pos3
var pos3 = document.querySelector(".pos3");
pos3.style.width = pos2.clientWidth / 1.5 + "px";
pos3.style.height = pos2.clientHeight / 1.5 + "px";
pos3.style.bottom = "5%";
pos3.style.left = findCenter(pos3);
pos3.style.filter = "blur(2px)";
pos3.style.zIndex = "8";
//pos4
var pos4 = document.querySelector(".pos4");
pos4.style.width = pos3.clientWidth / 1.5 + "px";
pos4.style.height = pos3.clientHeight / 1.5 + "px";
pos4.style.bottom = "3%";
pos4.style.left = findCenter(pos4);
pos4.style.filter = "blur(3px)";
pos4.style.zIndex = "7";
//pos5
var pos5 = document.querySelector(".pos5");
pos5.style.width = pos4.clientWidth / 1.5 + "px";
pos5.style.height = pos4.clientHeight / 1.5 + "px";
pos5.style.bottom = "17%";
pos5.style.left = findCenter(pos5);
pos5.style.filter = "blur(3px)";
pos5.style.zIndex = "6";
//pos6
var pos6 = document.querySelector(".pos6");
pos6.style.width = pos5.clientWidth / 1.5 + "px";
pos6.style.height = pos5.clientHeight / 1.5 + "px";
pos6.style.bottom = "28%";
pos6.style.left = findCenter(pos6);
pos6.style.filter = "blur(3px)";
pos6.style.zIndex = "5";
//pos7
var pos7 = document.querySelector(".pos7");
pos7.style.width = pos6.clientWidth / 1.5 + "px";
pos7.style.height = pos6.clientHeight / 1.5 + "px";
pos7.style.bottom = "38%";
pos7.style.left = findCenter(pos7);
pos7.style.filter = "blur(3px)";
pos7.style.zIndex = "4";
//pos8
var pos8 = document.querySelector(".pos8");
pos8.style.width = pos7.clientWidth / 1.5 + "px";
pos8.style.height = pos7.clientHeight / 1.5 + "px";
pos8.style.top = 48 + "%";
pos8.style.left = findCenter(pos8);
pos8.style.filter = "blur(3px)";
//pos9
var pos9 = document.querySelector(".pos9");
pos9.style.width = pos6.clientWidth / 1.5 + "px";
pos9.style.height = pos6.clientHeight / 1.5 + "px";
pos9.style.top = "38%";
pos9.style.left = findCenter(pos7);
pos9.style.filter = "blur(3px)";
pos9.style.zIndex = "4";
//pos10
var pos10 = document.querySelector(".pos10");
pos10.style.width = pos5.clientWidth / 1.5 + "px";
pos10.style.height = pos5.clientHeight / 1.5 + "px";
pos10.style.top = "28%";
pos10.style.left = findCenter(pos6);
pos10.style.filter = "blur(3px)";
pos10.style.zIndex = "5";
//pos11
var pos11 = document.querySelector(".pos11");
pos11.style.width = pos4.clientWidth / 1.5 + "px";
pos11.style.height = pos4.clientHeight / 1.5 + "px";
pos11.style.top = "17%";
pos11.style.left = findCenter(pos11);
pos11.style.filter = "blur(3px)";
pos11.style.zIndex = "6";
//pos12
var pos12 = document.querySelector(".pos12");
pos12.style.width = pos3.clientWidth / 1.5 + "px";
pos12.style.height = pos3.clientHeight / 1.5 + "px";
pos12.style.top = "3%";
pos12.style.left = findCenter(pos12);
pos12.style.filter = "blur(3px)";
pos12.style.zIndex = "7";
//pos13
var pos13 = document.querySelector(".pos13");
pos13.style.width = pos2.clientWidth / 1.5 + "px";
pos13.style.height = pos2.clientHeight / 1.5 + "px";
pos13.style.top = "5%";
pos13.style.left = findCenter(pos13);
pos13.style.filter = "blur(2px)";
pos13.style.zIndex = "8";
//pos14
var pos14 = document.querySelector(".pos14");
pos14.style.width = pos1.clientWidth / 1.5 + "px";
pos14.style.height = pos1.clientHeight / 1.5 + "px";
pos14.style.top = "10%";
pos14.style.left = findCenter(pos14);
pos14.style.filter = "blur(2px)";
pos14.style.zIndex = "9";

function findCenter(pos) {
  var center = (mainContainer.clientWidth - pos.clientWidth) / 2 + "px";

  return center;
}

// Store the initial positions in an array
var positions = Array.from({ length: 14 }, (_, i) => {
  let pos = document.querySelector(`.pos${i + 1}`);
  return {
    width: pos.style.width,
    height: pos.style.height,
    top: pos.style.top,
    bottom: pos.style.bottom,
    left: pos.style.left,
    zIndex: pos.style.zIndex,
    filter: pos.style.filter,
    backgroundColor: pos.style.backgroundColor,
  };
});

var isAnimating = false;

// Listen to wheel event
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    animateDown();
  } else {
    animateUp();
  }
});

// Listen to touch events
var touchStartY;
window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0].clientY;
});

window.addEventListener("touchmove", (event) => {
  var touchMoveY = event.touches[0].clientY;

  if (touchStartY - touchMoveY > 30) {
    animateDown();
    touchStartY = touchMoveY;
  } else if (touchStartY - touchMoveY < -30) {
    animateUp();
    touchStartY = touchMoveY;
  }
});

function animateDown() {
  if (isAnimating) return;

  isAnimating = true;

  // Rotate the positions array
  positions.unshift(positions.pop());

  // Update the position of each div
  for (let i = 1; i <= 14; i++) {
    let pos = document.querySelector(`.pos${i}`);
    let position = positions[i - 1];

    pos.style.width = position.width;
    pos.style.height = position.height;
    pos.style.top = position.top;
    pos.style.bottom = position.bottom;
    pos.style.left = position.left;
    pos.style.zIndex = position.zIndex;
    pos.style.filter = position.filter;
    pos.style.backgroundColor = position.backgroundColor;
  }

  setTimeout(() => {
    isAnimating = false;
  }, 500);
}

function animateUp() {
  if (isAnimating) return;

  isAnimating = true;

  // Rotate the positions array
  positions.push(positions.shift());

  // Update the position of each div
  for (let i = 1; i <= 14; i++) {
    let pos = document.querySelector(`.pos${i}`);
    let position = positions[i - 1];

    pos.style.width = position.width;
    pos.style.height = position.height;
    pos.style.top = position.top;
    pos.style.bottom = position.bottom;
    pos.style.left = position.left;
    pos.style.zIndex = position.zIndex;
    pos.style.filter = position.filter;
    pos.style.backgroundColor = position.backgroundColor;
  }

  setTimeout(() => {
    isAnimating = false;
  }, 500);
}
