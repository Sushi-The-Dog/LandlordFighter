(function () {
    'use strict';
}());
var poll = {
    username: '',
    reg: function () {
        $.ajax({
            url: '../poll/register.php',
            type: 'GET',
            data: {},
            success: function (data) {
                console.log(data);
                try {
                    json = JSON.parse(data);
                    var username = json[0];
                    var chips = json[1];
                    foot.users = username;
                    panel.chips = chips;
                    title.update();
                    llfajax.register();
                    poll.request();
                } catch (error) {
                    console.log(json);
                }

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