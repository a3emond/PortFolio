document.querySelector(".menuBtn").addEventListener("click", function (event) {
  var sidebar = document.querySelector(".sidebar");
  var menuBtn = document.querySelector(".menuBtn");
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    menuBtn.classList.remove("moved");
    menuBtn.innerHTML = '<i class="fa-solid fa-caret-right"></i>';
  } else {
    sidebar.classList.add("show");
    menuBtn.classList.add("moved");
    menuBtn.innerHTML = '<i class="fa-solid fa-caret-left"></i>';
  }
  event.stopPropagation();
});

// close sidebar when clicked outside
document.addEventListener("click", function (event) {
  var sidebar = document.querySelector(".sidebar");
  var menuBtn = document.querySelector(".menuBtn");
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    menuBtn.classList.remove("moved");
    menuBtn.innerHTML = '<i class="fa-solid fa-caret-right"></i>';
  }
});
// make sure sidebar doesn't close when clicked inside
document.querySelector(".sidebar").addEventListener("click", function (event) {
  //event.stopPropagation();
});
