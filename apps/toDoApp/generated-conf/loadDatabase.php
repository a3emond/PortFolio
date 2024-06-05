<?php
$serviceContainer = \Propel\Runtime\Propel::getServiceContainer();
$serviceContainer->initDatabaseMapFromDumps(array (
  'default' => 
  array (
    'tablesByName' => 
    array (
      'Tasks' => '\\a3emond\\Map\\TaskTableMap',
      'Users' => '\\a3emond\\Map\\UserTableMap',
    ),
    'tablesByPhpName' => 
    array (
      '\\Task' => '\\a3emond\\Map\\TaskTableMap',
      '\\User' => '\\a3emond\\Map\\UserTableMap',
    ),
  ),
));
