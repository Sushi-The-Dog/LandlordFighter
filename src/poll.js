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
                foot.users = data;
                title.update();
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
                    poll.request();
                } catch (error) {
                    document.getElementById("output").innerHTML = json;
                    console.log(error);
                }
            },
            error: function () {
                console.log('error');
            }
        });
    },
    requestonce: function () {
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
        switch (data[1]) {
            case 'test':
                document.getElementById("output").innerHTML += data[2];
                console.log(data[2]);
                break;
            case 'timeout':
                console.log('pollcomplete, nochange, sendingnew!');
                break;
            default:
                console.log('Unexpect message received' + data[2]);
                break;
        }
    }
}
var llfajax = {
    cheat: function () {
        $.ajax({
            url: '../poll/cheat.php',
            type: 'POST',
            data: {},
            success: function (data) {
                console.log(data);
            },
            error: function () {
                console.log('error');
            }
        });
    },
    logout: function () {
        $.ajax({
            url: '../php/logout.php',
            type: 'POST',
            data: {},
            success: function (data) {
                if (data == 1) {
                    window.location.href = '../';
                } else {
                    console.log('error');
                }
            },
            error: function () {
                console.log('error');
            }
        });
    }
}