<?php
require_once __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../generated-conf/config.php';
// get active user_id
session_start();
$userId = $_SESSION['user_id'];
// get active user tasks
$tasks = \a3emond\TaskQuery::create()->filterByUserId($userId)->find();
?>
<div id="taskContainer" class="formContainer">
    <h2> À Faire </h2>
<!--generate the task list from db-->
<ul id="taskList">
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
<br />
<button class="formBtn" id="createTaskBtn">Créer une nouvelle Tâche</button>
<br />
<button class="formBtn" id="deleteTaskBtn">Effacer les tâches complétées</button>
<br />
<button class="formBtn" id="logoutBtn">Se déconnecter</button>

</div>
<br />
<div>Double-cliquez sur une tâche pour la modifier!</div>
