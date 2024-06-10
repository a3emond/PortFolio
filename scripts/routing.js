// Content target div
let contentDiv = document.querySelector(".content");
let buttonTitle = document.querySelector("#buttonTitle");

// Default content
var defaultUrl = "./components/home/home.html";
fetchContent(defaultUrl);

// Buttons
let home = document.getElementById("homeBtn");
let tools = document.getElementById("toolsBtn");
let gitHub = document.getElementById("gitHubBtn");
let linkedIn = document.getElementById("linkedInBtn");
let noteTakingApp = document.getElementById("noteTakingAppBtn");
let mail = document.getElementById("mailBtn");

// Click events
home.addEventListener("click", () => {
  clearContent();

  fetchContent("./components/home/home.html");
});
tools.addEventListener("click", () => {
  clearContent();

  fetchContent("./components/tools/tools.html");
});
gitHub.addEventListener("click", () => {
  clearContent();

  window.open("https://github.com/a3emond");
});
linkedIn.addEventListener("click", () => {
  clearContent();

  window.open("https://www.linkedin.com/in/alexandre-emond-2750492a7/");
});
noteTakingApp.addEventListener("click", () => {
  clearContent();

  fetchContent("./apps/toDoApp/public/toDoAppIndex.html");
});
mail.addEventListener("click", () => {
  clearContent();
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

// Button title
const buttonTitles = {
  home: "Accueil",
  tools: "Projets",
  gitHub: "GitHub",
  linkedIn: "LinkedIn",
  noteTakingApp: "Note Taking App",
  mail: "Me Joindre!",
};

function setButtonTitle(buttonId) {
  buttonTitle.innerHTML = buttonTitles[buttonId] || "";
}

// Mouse enter and leave events for buttons
const buttonIds = [
  "home",
  "tools",
  "gitHub",
  "linkedIn",
  "noteTakingApp",
  "mail",
];
buttonIds.forEach((buttonId) => {
  const button = document.getElementById(`${buttonId}Btn`);
  button.addEventListener("mouseenter", () => {
    setButtonTitle(buttonId);
  });
  button.addEventListener("mouseleave", () => {
    setButtonTitle("");
  });
});

// Fetch content function
function fetchContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      contentDiv.innerHTML = data;
      if (url.includes("home.html")) {
        loadScript("components/home/home.js");
      }
      if (url.includes("tools.html")) {
        loadScript("components/tools/tools.js");
      }
      if (url.includes("toDoApp")) {
        loadScript("./apps/toDoApp/public/toDoAppRouting.js");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Clear content function
function clearContent() {
  contentDiv.innerHTML = "";
  // find all elements with card class and remove them if they exist
  let cards = document.querySelectorAll(".card");
  if (cards) {
    cards.forEach((card) => {
      card.remove();
    });
  }
}

// Load script function
function loadScript(src) {
  var script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}
