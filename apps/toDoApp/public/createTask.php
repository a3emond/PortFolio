<?php
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';
    session_start();
    if (!isset($_SESSION['user_id'])) {
        echo json_encode([
            'status' => 'error',
            'message' => 'You must be logged in to create a task!'
        ]);
        exit;
    } 
  
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $title = $_POST['title'];
    $description = $_POST['description'];
    $userId = $_SESSION['user_id'];

    if (empty($title) || empty($description)) {
        echo json_encode([
            'status' => 'error',
            'message' => 'Title and description are required!'
        ]);
        exit;
    }

    try {
        \a3emond\TaskQuery::create()->createTask($userId, $title, $description);
        echo json_encode([
            'status' => 'success',
            'message' => 'Task created successfully!'
        ]);
        exit;
    } catch (Exception $e) {
        echo json_encode([
            'status' => 'error',
            'message' => 'An error occurred while creating the task: ' . $e->getMessage()
        ]);
        exit;
    }
}
?>

<form action="createTask.php" method="post">
    <label>Title :</label>
    <input id="title" name="title" placeholder="title" type="text" required>
    <label>Description :</label>
    <input id="description" name="description" placeholder="description" type="text" required><br />
    <button type="submit" id="createTaskBtn">Creer une Tache</button>
    <button type="button" id="cancelBtn">Annuler</button>
</form>