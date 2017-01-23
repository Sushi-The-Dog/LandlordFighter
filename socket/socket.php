<?php
// this php file need run in the SHELL!!!
// for windows ``` php socket.php ``` stop the socket just with C-c
// for unix ``` php socket.php start ``` and ``` php socket.php stop
require_once '../vendor/autoload.php';
require_once '../socket/ingame.php';
use Workerman\Worker;
use PHPSocketIO\SocketIO;

$io = new SocketIO(3120);
$usernames = array();
// 当有客户端连接时打印一行文字
// connect
$io->on('connection', function ($connection) use ($io) {
  $connection->addedUser = false;
  echo 'C';
  $connection->on('message', function ($msg) {
    echo 'M';
  });
  $connection->on('chat message', function ($msg) use ($connection, $io) {

    // $connection->emit('chat message from server', $msg);
    // $io->emit('chat message from server', $msg);
  });
  $connection->on('user reg', function ($username) use ($connection) {
    global $usernames;
    $usernames[$username] = $username;
    $connection->addedUser = true;
    $connection->username = $username;
    var_dump($connection->username);
    var_dump($usernames);
    $connection->emit('reg complete', $username);
  });
  $connection->on('disconnect', function ($msg) use ($connection) {
    global $usernames;
    if ($connection->addedUser) {
        unset($usernames[$connection->username]);
        $connection->broadcast->emit('user left', array(
               'username' => $connection->username,
               'numUsers' => count($usernames),
            ));
    }
    var_dump($usernames);
    echo 'D';
  });
});
Worker::runAll();
// 1、向当前客户端发送事件
// $connection->emit('event name', $data);
// 2、向所有客户端发送事件
// $io->emit('event name', $data);
// 3、向所有客户端发送事件，但不包括当前连接。
// $connection->broadcast->emit('event name', $data);
// 4、向某个分组的所有客户端发送事件
// $io->to('group name')->emit('event name', $data);
