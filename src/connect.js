var socket = io('http://127.0.0.1:3120');
// 当连接服务端成功时触发connect默认事件
socket.on('connect', function() {
    console.log('connect success');
});
// 触发服务端的chat message事件
socket.emit('chat message', '这个是消息内容...');
// 服务端通过emit('chat message from server', $msg)触发客户端的chat message from server事件
socket.on('chat message from server', function(msg) {
    console.log('get message:' + msg + ' from server');
});
