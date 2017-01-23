(function() {
    'use strict';
}());
var connect = {
    socket: io('http://127.0.0.1:3120'),
    runf: function() {
        connect.socket.on('connect', function() {
            console.log('connect success');
        });
        connect.socket.on('chat message from server', function(msg) {
            console.log(msg);
        });
        connect.socket.on('reg complete', function(msg) {
            console.log(msg);
        });
        connect.reg();
    },
    send: function(content) {
        connect.socket.emit('message', content);
        console.log('done');
    },
    reg: function() {
        $.ajax({
            url: '../php/getusername.php',
            type: 'GET',
            data: {},
            success: function(data) {
                connect.socket.emit('user reg', data);
            },
            error: function() {
                console.log("ERROR");
            }
        });
    }
};
connect.runf();
