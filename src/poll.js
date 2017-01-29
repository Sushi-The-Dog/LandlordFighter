(function () {
    'use strict';
}());
var poll = {
    username: '',
    reg: function () {
        $.ajax({
            url: '../poll/getusername.php',
            type: 'GET',
            data: {},
            success: function (data) {

            },
            error: function () {
                console.log('error');
            }
        });
    },
    request: function () {
        $.ajax({
            url: '../poll/poll.php',
            type: 'POST',
            timeout: 75000,
            data: {},
            success: function (json) {
                try {
                    data = JSON.parse(json);
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        handle.handle(data[i]);
                    }
                    poll.request(poll.username);
                } catch (error) {
                    document.getElementById("output").innerHTML = json;
                    console.log(error);
                }
            },
            error: function () {
                console.log('error');
            }
        });
    }
}
var handle = {
    handle: function (data) {
        switch (data[0]) {
            case 'test':
                document.getElementById("output").innerHTML += data[1];
                console.log(data[1]);
                break;
            case 'no change':
                console.log('pollcomplete, nochange, sendingnew!');
                break;
            default:
                console.log('Unexpect message received' + data[1]);
                break;
        }
    }
}