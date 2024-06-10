//content target div
let contentDiv = document.querySelector(".content");
let buttonTitle = document.querySelector("#buttonTitle");
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
mail.addEventListener("click", () => {
  var url = "/components/mail/mail.php";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      //send button prevent default
      let form = document.querySelector("form");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          let formData = new FormData(form);
          fetch(url, {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                alert(data.message);
              } else {
                alert(data.message);
              }
            });
        });
      }
    });
});

function fetchContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
    });
}
//button title
//
//home
home.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "Accueil";
});
home.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});
//tools
tools.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "Projets";
});
tools.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});
//gitHub
gitHub.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "GitHub";
});
gitHub.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});
//linkedIn
linkedIn.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "LinkedIn";
});
linkedIn.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});
//noteTakingApp
noteTakingApp.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "Note Taking App";
});
noteTakingApp.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});
//mail
mail.addEventListener("mouseenter", () => {
  buttonTitle.innerHTML = "Me Joindre!";
});
mail.addEventListener("mouseleave", () => {
  buttonTitle.innerHTML = "";
});

// generic fetch function
function fetchContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      //load scripts
      if (url.includes("home.html")) {
        var script = document.createElement("script");
        script.src = "components/home/home.js";
        document.body.appendChild(script);
      }
      if (url.includes("tools.html")) {
        var script = document.createElement("script");
        script.src = "components/tools/tools.js";
        document.body.appendChild(script);
      }
      if (url.includes("toDoApp")) {
        var script = document.createElement("script");
        script.src = "./apps/toDoApp/public/toDoAppRouting.js";
        document.body.appendChild(script);
      }
    });
}
