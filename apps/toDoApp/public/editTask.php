<?php
session_start();
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';



//POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the post request
    $data = json_decode(file_get_contents('php://input'), true);
    $title = $data['title'];
    $description = $data['description'];
    $updatedAt = (new DateTime())->format('Y-m-d H:i:s');

    // Check if task exists in session

    if (isset($_SESSION['activeTask'])) {
        // Update task in database
        $task = \a3emond\TaskQuery::create()->findOneByTitle($_SESSION['activeTask']);
        if ($task) {
            $task->setTitle($title);
            $task->setDescription($description);
            $task->setUpdatedAt($updatedAt);
            $task->save();
            echo json_encode(['status' => 'success', 'message' => 'Task updated successfully']);
            exit();
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Task not found']);
            exit();
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'No active task in session']);
        exit();
    }
} 
//
//GET request
//
if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    // Retrieve data from the URL parameters
    $title = $_GET['title'];

    try {
        // Find the task by title
        $task = \a3emond\TaskQuery::create()->findOneByTitle($title);
        //store task data in $_SESSION
        $_SESSION['activeTask'] = $task->getTitle();
    } 
    catch (Exception $e) {
        // Return error response
        echo json_encode(['status' => 'error', 'message' => 'Error updating task status: ' . $e->getMessage()]);
        exit();
    }
}
?>


<div class="formContainer">
<form action="editTask.php" method="post">
    <label for="title">Titre:</label>
    <input type="text" id="title" name="title" value="<?php echo $task -> getTitle()?>">
    <br />
    <label for="description">Description:</label>
    <textarea id="description" name="description" placeholder="description" type="text" ><?php echo $task -> getDescription()?></textarea>
    <br />
    <button class="formBtn" type="submit">Sauvegarder</button>
    <br />
    <button class="formBtn" type="button" id="cancelBtn">Annuler</button>
</form>
</div>