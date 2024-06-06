//container for all the routing for the toDoApp

var container = document.querySelector(".toDoAppContainer");
var URLforPortFolio = "apps/toDoApp/public/";
var loginURL = URLforPortFolio + "login.php";
var registerURL = URLforPortFolio + "register.php";
var taskListURL = URLforPortFolio + "taskList.php";
var createTaskURL = URLforPortFolio + "createTask.php";
var editTaskURL = URLforPortFolio + "editTask.php";
var deleteTaskURL = URLforPortFolio + "deleteTask.php";
var logoutURL = URLforPortFolio + "logout.php";
var updateStatusURL = URLforPortFolio + "updateStatus.php";
var checkSessionStatusURL = URLforPortFolio + "checkSessionStatus.php";

//check if the user is already logged in
fetch(checkSessionStatusURL)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === "logged_in") {
      fetchTaskList();
    } else {
      fetchLogin();
    }
  })
  .catch((error) => console.log(error));

fetchLogin = () => {
  removeEventListener();
  //fetch login form
  fetch(loginURL)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;

      //event listener for the login form
      var registerBtn = document.querySelector("#registerBtn");
      registerBtn.addEventListener("click", fetchRegister);
      container.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        fetch(loginURL, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json()) // Expect a JSON response
          .then((data) => {
            console.log(data);
            if (data.status === "success") {
              fetchTaskList();
            } else {
              alert(data.message); // Display the error message from the server
            }
          })
          .catch((error) => console.log(error));
      });
    })
    .catch((error) => console.log(error));
};
fetchRegister = () => {
  removeEventListener();
  //fetch register form
  fetch(registerURL)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
      //event listener for the register form
      document.querySelector("#backBtn").addEventListener("click", fetchLogin);
      container.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        fetch(registerURL, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json()) // Expect a JSON response
          .then((data) => {
            if (data.status === "success") {
              fetchLogin();
            } else {
              alert(data.message); // Display the error message from the server
            }
          })
          .catch((error) => console.log(error));
      });
    })
    .catch((error) => console.log(error));
};
fetchTaskList = () => {
  removeEventListener();
  //fetch task list
  fetch(taskListURL)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
      //add event listener to delete completed task(s)
      var deleteTaskBtn = document.querySelector("#deleteTaskBtn");
      deleteTaskBtn.addEventListener("click", (event) => {
        var checkBoxes = document.querySelectorAll(".status");
        var titles = [];
        checkBoxes.forEach((checkBox) => {
          if (checkBox.checked) {
            titles.push(checkBox.parentElement.textContent.trim());
          }
        });
        console.log(titles);
        fetchDeleteTask(titles);
      });
      // on document load, add event listeners to the buttons
      var logoutBtn = document.querySelector("#logoutBtn");
      logoutBtn.addEventListener("click", fetchLogout);
      var createTaskBtn = document.querySelector("#createTaskBtn");
      createTaskBtn.addEventListener("click", fetchCreateTask);
      //
      //
      //add event listner to change status on checkBoxes (done/todo)
      var checkBoxes = document.querySelectorAll(".status");
      checkBoxes.forEach((checkBox) => {
        //check if the task is done and add line-through
        if (checkBox.checked) {
          checkBox.parentElement.style.textDecoration = "line-through";
        }
        //add event listener to the checkBox
        checkBox.addEventListener("change", (event) => {
          if (event.target.checked) {
            checkBox.parentElement.style.textDecoration = "line-through";
            var status = "done";
          } else {
            checkBox.parentElement.style.textDecoration = "none";
            var status = "todo";
          }
          //save the status in the database
          updateStatus(checkBox.parentElement.textContent.trim(), status);
        });
        //add event listner to edit task
        checkBox.parentElement.addEventListener("dblclick", (event) => {
          fetchEditTask(checkBox.parentElement.textContent.trim(), null, "GET");
        });
      });
    });
};
fetchCreateTask = () => {
  removeEventListener();
  //fetch add task form
  fetch(createTaskURL)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
      //add event listner to cancel button
      var cancelBtn = document.querySelector("#cancelBtn");
      cancelBtn.addEventListener("click", fetchTaskList);
      //event listener for the add task form
      container.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        fetch(createTaskURL, {
          method: "POST",
          body: formData,
        })
          .then((response) => response.json()) // Expect a JSON response
          .then((data) => {
            if (data.status === "success") {
              fetchTaskList();
            } else {
              alert(data.message); // Display the error message from the server
            }
          })
          .catch((error) => console.log(error));
      });
    })
    .catch((error) => console.log(error));
};
fetchLogout = () => {
  removeEventListener();
  fetch(logoutURL)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        fetchLogin();
      }
    })
    .catch((error) => console.log(error));
};
removeEventListener = () => {
  let newContainer = container.cloneNode(true);
  // Replace the old container with the new one
  container.parentNode.replaceChild(newContainer, container);
  // Update your reference to the container
  container = newContainer;
};
updateStatus = ($title, $status) => {
  fetch(updateStatusURL, {
    method: "POST",
    body: JSON.stringify({ title: $title, status: $status }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        console.log("status updated");
        fetchTaskList();
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.log(error));
};

fetchEditTask = ($title, $description = null, $method = null) => {
  if ($method === "GET") {
    fetch(`${editTaskURL}?title=${encodeURIComponent($title)}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((html) => {
        container.innerHTML = html;
        //add event listner to cancel button
        var cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", fetchTaskList);
        container.addEventListener("submit", (event) => {
          event.preventDefault();
          let formData = new FormData(event.target);
          fetchEditTask(
            formData.get("title"),
            formData.get("description"),
            "POST"
          );
        });
      })
      .catch((error) => console.log(error));
  } else if ($method === "POST") {
    fetch(editTaskURL, {
      method: "POST",
      body: JSON.stringify({ title: $title, description: $description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("task updated");
          fetchTaskList();
        } else {
          alert(data.message);
        }
      })
      .catch((error) => console.log(error));
  }
};
fetchDeleteTask = (titles = []) => {
  fetch(deleteTaskURL, {
    method: "POST",
    body: JSON.stringify({ titles: titles }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "success") {
        console.log("task deleted");
        fetchTaskList();
      } else {
        alert(data.message);
      }
    })
    .catch((error) => console.log(error));
};
