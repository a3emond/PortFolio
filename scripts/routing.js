//content target div
let contentDiv = document.querySelector(".content");

//default content
var url = "./components/home/home.html";
fetchContent(url);

//buttons
let home = document.getElementById("homeBtn");
let tools = document.getElementById("toolsBtn");
let gitHub = document.getElementById("gitHubBtn");
let linkedIn = document.getElementById("linkedInBtn");
let noteTakingApp = document.getElementById("noteTakingAppBtn");
let mail = document.getElementById("mailBtn");

//click events
home.addEventListener("click", () => {
  var url = "./components/home/home.html";
  fetchContent(url);
});
tools.addEventListener("click", () => {
  var url = "./components/tools/tools.html";
  fetchContent(url);
});
gitHub.addEventListener("click", () => {
  var url = "https://github.com/a3emond";
  window.open(url);
});
linkedIn.addEventListener("click", () => {
  var url = "https://www.linkedin.com/in/alexandre-emond-2750492a7/";
  window.open(url);
});
noteTakingApp.addEventListener("click", () => {
  var url = "./apps/toDoApp/public/toDoAppIndex.html";
  fetchContent(url);
});
mail.addEventListener("click", () => {});

// generic fetch function
function fetchContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      if (url == "./apps/toDoApp/public/toDoAppIndex.html") {
        //load script
        var script = document.createElement("script");
        script.src = "./apps/toDoApp/public/toDoAppRouting.js";
        document.body.appendChild(script);
      }
    });
}
