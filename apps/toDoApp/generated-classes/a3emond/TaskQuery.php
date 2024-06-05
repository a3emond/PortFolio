<?php

namespace a3emond;

use a3emond\Base\TaskQuery as BaseTaskQuery;

/**
 * Skeleton subclass for performing query and update operations on the 'Tasks' table.
 *
 *
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 */
class TaskQuery extends BaseTaskQuery
{
    public function findByUserId($userId)
    {
        return $this
            ->filterByUserId($userId) 
            ->find();
    }

    public function updateStatus($taskId, $status)
    {
        $task = $this->findPk($taskId);
        $task->setStatus($status);
        $task->setUpdatedAt(date('Y-m-d H:i:s'));
        $task->save();
    }

    public function deleteTask($taskId)
    {
        $task = $this->findPk($taskId);
        $task->delete();
    }

    public function createTask($userId, $title, $description)
    {
        $task = new Task();
        $task->setUserId($userId);
        $task->setTitle($title);
        $task->setDescription($description);
        $task->setStatus('todo');
        $task->setCreatedAt(date('Y-m-d H:i:s'));
        $task->setUpdatedAt(date('Y-m-d H:i:s'));
        $task->save();
    }

    public function updateTask($taskId, $title, $description)
    {
        $task = $this->findPk($taskId);
        $task->setTitle($title);
        $task->setDescription($description);
        $task->setUpdatedAt(date('Y-m-d H:i:s'));
        $task->save();
    }


}
