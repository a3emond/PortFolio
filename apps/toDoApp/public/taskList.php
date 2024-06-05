<?php
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';
// get active user_id
session_start();
$userId = $_SESSION['user_id'];
// get active user tasks
$tasks = \a3emond\TaskQuery::create()->filterByUserId($userId)->find();
?>
<button id="logoutBtn">Logout</button>
<!--generate the task list from db-->
<ul>
<?php foreach ($tasks as $task): ?>
    <?php if ($task instanceof \a3emond\Task): ?>
        <li>
            <!-- get task title -->
                <?php echo $task->getTitle() ?>
                <input 
                class="status" 
                type="checkbox" 
                name="task" 
                value="task"
                 <?php if ($task->getStatus() == 'done') echo 'checked'; ?>> 

        </li>
    <?php else: ?>
        <li>Invalid task</li>
    <?php endif; ?>
<?php endforeach; ?>
</ul>
<button id="createTaskBtn">Create New Task</button>
<button id="deleteTaskBtn">Delete Completed Task(s)</button>