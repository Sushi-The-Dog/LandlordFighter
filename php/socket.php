<?php
// update: make this common
require_once '../vendor/autoload.php';
use Workerman\Worker;
use PHPSocketIO\SocketIO;

// 创建socket.io服务端，监听2021端口
$io = new SocketIO(3120);
// 当有客户端连接时打印一行文字
// connect
$io->on('connection', function ($connection) use ($io) {
  // point
  $connection->on('chat message', function($msg)use($io){
    // 触发所有客户端定义的chat message from server事件
    $io->emit('chat message from server', $msg);
  });
});
Worker::runAll();
