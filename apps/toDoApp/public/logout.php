<?php
session_start();
header('Content-Type: application/json');
    if (isset($_SESSION["user_id"])) {
        // Unset user_id from the session
        unset($_SESSION["user_id"]);

        // Destroy the session
        session_destroy();

        echo json_encode(['status' => 'success', 'message' => 'Logged out successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Not logged in']);
    }
?>