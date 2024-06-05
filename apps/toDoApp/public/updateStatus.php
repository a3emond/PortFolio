<?php
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';



// Retrieve data from the post request
$data = json_decode(file_get_contents('php://input'), true);

// Validate input
if (!isset($data['title'], $data['status']) || !is_string($data['title']) || !is_string($data['status'])) {
    // Return error response
    echo json_encode(['status' => 'error', 'message' => 'Invalid input']);
    exit;
}

$title = $data['title'];
$status = $data['status'];

try {
    // Find the task by title
    $task = \a3emond\TaskQuery::create()->findOneByTitle($title);

    if ($task) {
        // Update the task status
        $task->setStatus($status);
        $task->save();

        // Return success response
        echo json_encode(['status' => 'success']);
    } else {
        // Return error response
        echo json_encode(['status' => 'error', 'message' => 'Task not found']);
    }
} catch (Exception $e) {
    // Return error response
    echo json_encode(['status' => 'error', 'message' => 'Error updating task status: ' . $e->getMessage()]);
}
?>