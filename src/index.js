(function() {
    'use strict';
}());
// v-html need to be updated
var interesting = {
    daytime: function() {
        var now = new Date();
        var hour = now.getHours();
        appmain.title = '<img src="./style/ico/icon.png" width="50px"/>';
        if (hour < 6) {
            appmain.title += "It's <strong>Early Morning</strong>";
        } else if (hour < 9) {
            appmain.title += "Good <strong>Morning</strong>";
        } else if (hour < 12) {
            appmain.title += "Yeah <strong>:D</strong>";
        } else if (hour < 14) {
            appmain.title += "It's <strong>Noon</strong>";
        } else if (hour < 17) {
            appmain.title += "Good <strong>Afternoon</strong>";
        } else if (hour < 19) {
            appmain.title += "Good <strong>Evening</strong>";
        } else if (hour < 22) {
            appmain.title += "It's <strong>Late</strong>";
        } else {
            appmain.title += "Sleep <strong>Tight</strong>";
        }
    }
};
var appmain = new Vue({
    el: '#index',
    data: {
        title: 'Hello Vue!',
        ho: 'Login for LandlordFighter:',
        ht: 'User Sign-Up is disabled.',
        un: 'Username',
        ps: 'Password',
        bt: 'NOW!',
        ann: 'LandlordFighter is a close register site until now. Send Email to request@wmpcxpy.com for account open',
        username: '',
        password: '',
        buttondis: true
    },
    methods: {
        login: function() {
            $.ajax({
                url: './php/log.php',
                type: 'POST',
                data: {
                    'username': appmain.username,
                    'password': appmain.password
                },
                success: function(data) {
                    console.log(data);
                },
                error: function() {
                    console.log("ERROR");
                }
            });
        },
        inputing: function() {
            if (appmain.username.length < 1 || appmain.password.length < 1) {
                appmain.buttondis = true;
            } else {
                appmain.buttondis = false;
            }
        },
        popover: function() {
            console.log('?');
            $("#overr").popover();
        }
    }
});
