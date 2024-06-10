var mainContainer = document.querySelector(".mainContainer");

// create 14 divs with class pos1, pos2, pos3, ... pos14
for (let i = 1; i <= 14; i++) {
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.transition = "all 0.5s ease";
  //if landscape flex-direction: row if portrait flex-direction: column
  div.style.display = "flex";
  div.style.padding = "20px";
  if (window.innerWidth > window.innerHeight) {
    div.style.flexDirection = "row";
  } else {
    div.style.flexDirection = "column";
  }
  div.classList.add(`pos${i}`);
  div.classList.add("card");
  mainContainer.appendChild(div);
}
//pos1
var pos1 = document.querySelector(".pos1");
pos1.style.width = mainContainer.clientWidth * 0.8 + "px";
pos1.style.height = mainContainer.clientHeight / 2 + "px";
pos1.style.background =
  "linear-gradient(-30deg, rgba(135, 206, 235, 0.7), rgba(255, 255, 255, 0.8), rgba(135, 206, 235, 0.7))";

pos1.style.top = "25%";
pos1.style.left = findCenter(pos1);
pos1.style.zIndex = "10";
pos1.innerHTML = `
  <img class="icon" src="https://img.icons8.com/color/48/000000/c-sharp-logo.png" alt="C#">
  <img class="icon" src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML">
  <img class="icon" src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS">
  <img class="icon" src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript">
  <img class="icon" src="https://img.icons8.com/officel/48/000000/php-logo.png" alt="PHP">
  <img class="icon" src="https://img.icons8.com/color/48/000000/angularjs.png" alt="Angular">
  <img class="icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React.js">
  <img class="icon" src="https://img.icons8.com/color/48/000000/vue-js.png" alt="Vue.js">
  <img class="icon" src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js">
  <img class="icon" src="https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png" alt="Blazor">
  <img class="icon" src="https://img.icons8.com/color/48/000000/powershell.png" alt="PowerShell">
  <img class="icon" src="https://img.icons8.com/fluent/48/000000/mysql-logo.png" alt="MySQL">
  <img class="icon" src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png" alt="MS SQL">
  <img class="icon" src="https://img.icons8.com/color/48/000000/database.png" alt="NoSQL">
  <img class="icon" src="https://img.icons8.com/color/48/000000/oracle-logo.png" alt="Oracle Database">
  <img class="icon" src="https://img.icons8.com/color/48/000000/azure-1.png" alt="Microsoft Azure">
  <img class="icon" src="https://img.icons8.com/color/48/000000/windows-10.png" alt="Windows">
  <img class="icon" src="https://img.icons8.com/color/48/000000/ubuntu--v1.png" alt="Ubuntu">
  <img class="icon" src="https://img.icons8.com/color/48/000000/centos.png" alt="CentOS">
  <img class="icon" src="https://img.icons8.com/color/48/000000/debian.png" alt="Debian">
  <img class="icon" src="https://img.icons8.com/color/48/000000/git.png" alt="Git">
  <img class="icon" src="https://img.icons8.com/color/48/000000/docker.png" alt="Docker">
  <img class="icon" src="https://img.icons8.com/color/48/000000/virtualbox.png" alt="VirtualBox">
  <img class="icon" src="https://img.icons8.com/color/48/000000/project-management.png" alt="Agile">
  <img class="icon" src="https://img.icons8.com/color/48/000000/teamwork.png" alt="Scrum">
  <img class="icon" src="https://img.icons8.com/color/48/000000/flow-chart.png" alt="Algorithms">
  <img class="icon" src="https://img.icons8.com/color/48/000000/code.png" alt="Data Structures">
  <img class="icon" src="https://img.icons8.com/color/48/000000/key.png" alt="Cryptography">
  <img class="icon" src="https://img.icons8.com/color/48/000000/lock.png" alt="Web Security">
  <img class="icon" src="https://img.icons8.com/color/48/000000/authentication.png" alt="Authentication and Authorization">
`;

//pos2
var pos2 = document.querySelector(".pos2");
pos2.style.width = pos1.clientWidth / 1.5 + "px";
pos2.style.height = pos1.clientHeight / 1.5 + "px";
pos2.style.bottom = "10%";
pos2.style.left = findCenter(pos2);
pos2.style.filter = "blur(2px)";
pos2.style.zIndex = "9";
pos2.innerHTML = `
<div class="project-image">
  <img  class="projectImg" src="Assets/projectImg/eCommerce.png" alt="E-commerce">
</div>
<div class="project-description">
  <h2>Développement d'une plateforme e-commerce pour les artistes locaux pour vendre leurs œuvres en ligne.</h2>
</div>
`;
//pos3
var pos3 = document.querySelector(".pos3");
pos3.style.width = pos2.clientWidth / 1.5 + "px";
pos3.style.height = pos2.clientHeight / 1.5 + "px";
pos3.style.bottom = "5%";
pos3.style.left = findCenter(pos3);
pos3.style.filter = "blur(2px)";
pos3.style.zIndex = "8";
pos3.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/unity.png" alt="Unity">
</div>
<div class="project-description">
  <h2>Création d'un jeu de rôle en 2D utilisant le moteur Unity.</h2>
</div>
`;

//pos4
var pos4 = document.querySelector(".pos4");
pos4.style.width = pos3.clientWidth / 1.5 + "px";
pos4.style.height = pos3.clientHeight / 1.5 + "px";
pos4.style.bottom = "3%";
pos4.style.left = findCenter(pos4);
pos4.style.filter = "blur(3px)";
pos4.style.zIndex = "7";
pos4.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/sudoku.png" alt="Sudoku">
</div>
<div class="project-description">
  <h2>Développement d'une application de Sudoku en utilisant C#.</h2>
</div>
`;

//pos5
var pos5 = document.querySelector(".pos5");
pos5.style.width = pos4.clientWidth / 1.5 + "px";
pos5.style.height = pos4.clientHeight / 1.5 + "px";
pos5.style.bottom = "17%";
pos5.style.left = findCenter(pos5);
pos5.style.filter = "blur(3px)";
pos5.style.zIndex = "6";
pos5.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/mssql.png" alt="MS SQL">
</div>
<div class="project-description">
  <h2>Conception et gestion d'une base de données utilisant MS SQL Server.</h2>
</div>
`;
//pos6
var pos6 = document.querySelector(".pos6");
pos6.style.width = pos5.clientWidth / 1.5 + "px";
pos6.style.height = pos5.clientHeight / 1.5 + "px";
pos6.style.bottom = "28%";
pos6.style.left = findCenter(pos6);
pos6.style.filter = "blur(3px)";
pos6.style.zIndex = "5";
pos6.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/oracleDb.png" alt="Oracle">
</div>
<div class="project-description">
  <h2>Implémentation et maintenance d'une base de données utilisant Oracle Database.</h2>
</div>
`;
//pos7
var pos7 = document.querySelector(".pos7");
pos7.style.width = pos6.clientWidth / 1.5 + "px";
pos7.style.height = pos6.clientHeight / 1.5 + "px";
pos7.style.bottom = "38%";
pos7.style.left = findCenter(pos7);
pos7.style.filter = "blur(3px)";
pos7.style.zIndex = "4";
pos7.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/algorithm.png" alt="Algorithmes">
</div>
<div class="project-description">
  <h2>Études et implémentation de divers algorithmes en utilisant C#.</h2>
</div>
`;
//pos8
var pos8 = document.querySelector(".pos8");
pos8.style.width = pos7.clientWidth / 1.5 + "px";
pos8.style.height = pos7.clientHeight / 1.5 + "px";
pos8.style.top = 48 + "%";
pos8.style.left = findCenter(pos8);
pos8.style.filter = "blur(3px)";
pos8.style.zIndex = "3";
pos8.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/blazor.png" alt="Blazor">
</div>
<div class="project-description">
  <h2>Développement d'applications web hybrides en utilisant le framework Blazor.</h2>
</div>
`;
//pos9
var pos9 = document.querySelector(".pos9");
pos9.style.width = pos6.clientWidth / 1.5 + "px";
pos9.style.height = pos6.clientHeight / 1.5 + "px";
pos9.style.top = "38%";
pos9.style.left = findCenter(pos7);
pos9.style.filter = "blur(3px)";
pos9.style.zIndex = "4";
pos9.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/angular.png" alt="Angular">
</div>
<div class="project-description">
  <h2>Création d'applications web dynamiques en utilisant Angular.</h2>
</div>
`;
//pos10
var pos10 = document.querySelector(".pos10");
pos10.style.width = pos5.clientWidth / 1.5 + "px";
pos10.style.height = pos5.clientHeight / 1.5 + "px";
pos10.style.top = "28%";
pos10.style.left = findCenter(pos6);
pos10.style.filter = "blur(3px)";
pos10.style.zIndex = "5";
pos10.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/propel.png" alt="Propel ORM">
</div>
<div class="project-description">
  <h2>Implémentation et gestion de bases de données en utilisant Propel ORM.</h2>
</div>
`;
//pos11
var pos11 = document.querySelector(".pos11");
pos11.style.width = pos4.clientWidth / 1.5 + "px";
pos11.style.height = pos4.clientHeight / 1.5 + "px";
pos11.style.top = "17%";
pos11.style.left = findCenter(pos11);
pos11.style.filter = "blur(3px)";
pos11.style.zIndex = "6";
pos11.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/server.png" alt="Deploiement Web">
</div>
<div class="project-description">
  <h2>Déploiement de site web</h2>
</div>
`;
//pos12
var pos12 = document.querySelector(".pos12");
pos12.style.width = pos3.clientWidth / 1.5 + "px";
pos12.style.height = pos3.clientHeight / 1.5 + "px";
pos12.style.top = "3%";
pos12.style.left = findCenter(pos12);
pos12.style.filter = "blur(3px)";
pos12.style.zIndex = "7";
pos12.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/gitHub.png" alt="Projets Collaboratifs">
</div>
<div class="project-description">
  <h2>Projets collaboratifs de groupe. Situations de travail avec GitHub</h2>
</div>
`;
//pos13
var pos13 = document.querySelector(".pos13");
pos13.style.width = pos2.clientWidth / 1.5 + "px";
pos13.style.height = pos2.clientHeight / 1.5 + "px";
pos13.style.top = "5%";
pos13.style.left = findCenter(pos13);
pos13.style.filter = "blur(2px)";
pos13.style.zIndex = "8";
pos13.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/results.png" alt="Exercices">
</div>
<div class="project-description">
  <h2>Résultats session hivers 2024<br />Moyenne: 99%</h2>
</div>
`;
//pos14
var pos14 = document.querySelector(".pos14");
pos14.style.width = pos1.clientWidth / 1.5 + "px";
pos14.style.height = pos1.clientHeight / 1.5 + "px";
pos14.style.top = "10%";
pos14.style.left = findCenter(pos14);
pos14.style.filter = "blur(2px)";
pos14.style.zIndex = "9";
pos14.innerHTML = `
<div class="project-image">
  <img class="projectImg" src="Assets/projectImg/soundWave.png" alt="Synthétiseur de Voix">
</div>
<div class="project-description">
  <h2>Etudes des ondes sonore avec JavaScript</h2>
</div>
`;

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
