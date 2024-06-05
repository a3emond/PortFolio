<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';


//retrieve data from json
$data = json_decode(file_get_contents('php://input'), true);
if ($data === null) {
    // No data or invalid JSON data was received
    echo json_encode(['status' => 'error', 'message' => 'No data received or invalid JSON']);
    exit();
}

if (!isset($data['titles'])) {
    // The 'titles' key is not set in the received data
    echo json_encode(['status' => 'error', 'message' => 'No titles received']);
    exit();
}
$titles = $data['titles'];

foreach ($titles as $title) {
    $task = \a3emond\TaskQuery::create()->findOneByTitle($title);
    if ($task) {
        try {
        $task->delete();
        }
        catch (Exception $e) {
            echo json_encode(['status' => 'error', 'message' => 'Error deleting task: ' . $e->getMessage()]);
            exit();
        }
    }
}

echo json_encode(['status' => 'success', 'message' => 'Tasks deleted successfully']);
?>
