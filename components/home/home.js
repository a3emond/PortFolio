var image1 = document.getElementById("img1-1");
var div1 = document.getElementById("home1-1");
var image2 = document.getElementById("img1-2-1");
var div2 = document.getElementById("home1-2-1");
var image3 = document.getElementById("img2-1");
var div3 = document.getElementById("home2-1");
var image4 = document.getElementById("img2-2");
var div4 = document.getElementById("home2-2");
var touchSign1 = div1.querySelector(".touchSign");
var touchSign2 = div2.querySelector(".touchSign");
var touchSign3 = div3.querySelector(".touchSign");
var touchSign4 = div4.querySelector(".touchSign");
window.addEventListener(
  "contextmenu",
  function (e) {
    // prevent default context menu for all elements
    e.preventDefault();
  },
  false
);
window.addEventListener("mouseleave", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  // Reset the transform for all images
  image1.style.transform = "";
  image2.style.transform = "";
  image3.style.transform = "";
  image4.style.transform = "";

  // Show all touch signs
  touchSign1.style.display = "block";
  touchSign2.style.display = "block";
  touchSign3.style.display = "block";
  touchSign4.style.display = "block";
});
//
//image 1
//
div1.addEventListener("mouseenter", () => {
  console.log("mouse enter");
  slideToLeft(image1);
  touchSign1.style.display = "none";
});
div1.addEventListener("mouseleave", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image1.style.transform = "";
  touchSign1.style.display = "block";
});
div1.addEventListener("touchstart", () => {
  console.log("touch start");
  slideToLeft(image1);
  touchSign1.style.display = "none";
});
div1.addEventListener("touchend", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image1.style.transform = "";
  touchSign1.style.display = "block";
});
//
//image 2
//
div2.addEventListener("mouseenter", () => {
  slideToTop(image2);
  touchSign2.style.display = "none";
});
div2.addEventListener("mouseleave", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image2.style.transform = "";
  touchSign2.style.display = "block";
});
div2.addEventListener("touchstart", () => {
  slideToTop(image2);
  touchSign2.style.display = "none";
});
div2.addEventListener("touchend", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image2.style.transform = "";
  touchSign2.style.display = "block";
});
//
//image 3
//
div3.addEventListener("mouseenter", () => {
  slideToBottom(image3);
  touchSign3.style.display = "none";
});
div3.addEventListener("mouseleave", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image3.style.transform = "";
  touchSign3.style.display = "block";
});
div3.addEventListener("touchstart", () => {
  slideToBottom(image3);
  touchSign3.style.display = "none";
});
div3.addEventListener("touchend", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image3.style.transform = "";
  touchSign3.style.display = "block";
});
//
//image 4
div4.addEventListener("mouseenter", () => {
  slideToRight(image4);
  touchSign4.style.display = "none";
});
div4.addEventListener("mouseleave", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image4.style.transform = "";
  touchSign4.style.display = "block";
});
div4.addEventListener("touchstart", () => {
  slideToRight(image4);
  touchSign4.style.display = "none";
});
div4.addEventListener("touchend", () => {
  // Stop all ongoing animations
  animationIntervals.forEach(clearInterval);
  image4.style.transform = "";
  touchSign4.style.display = "block";
});
//
//animations
//
var animationIntervals = [];

function slideToLeft(element) {
  let pos = 0;
  let id = setInterval(frame, 4);
  animationIntervals.push(id);
  function frame() {
    if (pos == -100) {
      clearInterval(id);
    } else {
      pos--;
      element.style.transform = `translateX(${pos}%)`;
    }
  }
}
function slideToRight(element) {
  let pos = 0;
  let id = setInterval(frame, 4);
  animationIntervals.push(id);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      element.style.transform = `translateX(${pos}%)`;
    }
  }
}

function slideToTop(element) {
  let pos = 0;
  let id = setInterval(frame, 4);
  animationIntervals.push(id);
  function frame() {
    if (pos == -100) {
      clearInterval(id);
    } else {
      pos--;
      element.style.transform = `translateY(${pos}%)`;
    }
  }
}

function slideToBottom(element) {
  let pos = 0;
  let id = setInterval(frame, 4);
  animationIntervals.push(id);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      element.style.transform = `translateY(${pos}%)`;
    }
  }
}
