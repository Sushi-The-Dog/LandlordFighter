(function () {
    'use strict';
}());
var poll = {
    username: '',
    request: function () {
        Cp$.ajax.caperajax({
            url: '/LandlordFighter/pair/poll.php',
            type: 'POST',
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
                    console.log(error);
                }
            }
        });
    },
    requestonce: function () {
        Cp$.ajax.caperajax({
            url: '/LandlordFighter/pair/poll.php',
            type: 'POST',
            data: {},
            success: function (json) {
                try {
                    data = JSON.parse(json);
                    console.log(data);
                    for (var i = 0; i < data.length; i++) {
                        handle.handle(data[i]);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }
}
var handle = {
    handle: function (data) {

    }
}