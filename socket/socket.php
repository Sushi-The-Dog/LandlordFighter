<?php
// update: make this common
require_once '../vendor/autoload.php';
require_once '../socket/ingame.php';
use Workerman\Worker;
use PHPSocketIO\SocketIO;

$io = new SocketIO(3120);
$useramount = 0;
// 当有客户端连接时打印一行文字
// connect
$io->on('connection', function ($connection) use ($io) {
  global $useramount;
  ++$useramount;
  echo 'Users:'.$useramount;
  var_dump($connection->conn->remoteAddress);
  $connection->on('chat message', function ($msg) use ($io) {
      // 触发所有客户端定义的chat message from server事件
    $io->emit('chat message from server', $msg);
    echo $msg.'\r\n';
  });
  $connection->on('disconnect', function ($msg) use ($io) {
    global $useramount;
    +--$useramount;
    echo 'Users:'.$useramount;
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
