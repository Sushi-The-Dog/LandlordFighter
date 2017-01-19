var socket = io('http://127.0.0.1:3120');
// 当连接服务端成功时触发connect默认事件
socket.on('connect', function(){
    console.log('connect success');
});
