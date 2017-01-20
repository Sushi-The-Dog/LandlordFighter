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
        ho: 'Login to <i class="fa fa-chevron-circle-right"></i><br><strong>LandlordFighter</strong>:',
        ht: 'User Sign-Up is disabled.',
        bt: '<strong>NOW!</strong>',
        ann: 'LandlordFighter is a close register site until now. Send Email to request@wmpcxpy.com for account open',
        username: '',
        password: '',
        output: '',
        mode: 0,
        buttondis: true
    },
    methods: {
        login: function() {
            appmain.bt += '  <i class="fa fa-spinner fa-spin"></i>';
            $.ajax({
                url: './php/log.php',
                type: 'POST',
                data: {
                    'username': appmain.username,
                    'password': appmain.password,
                    'mode': appmain.mode
                },
                success: function(data) {
                  appmain.output = data;
                    ouc = JSON.parse(data);
                    switch (ouc[0]) {
                        case 0:
                            appmain.output = '<strong>Username</strong> does not <strong>Exist</strong>';
                            appmain.output += '  <i class="fa fa-reply-all"></i>';
                            break;
                        case 1:
                            break;
                        case 2:
                            appmain.output = '<strong>Password</strong> is not <strong>Correct</strong>';
                            appmain.output += '  <i class="fa fa-chain-broken"></i>';
                            break;
                        case 3:
                            appmain.output = '<strong>Format Error</strong>';
                            appmain.output += '  <i class="fa fa-strikethrough"></i>';
                            break;
                        case 4:
                            appmain.output = '<strong>Cookie</strong> is not <strong>Marched</strong>';
                            appmain.output += '  <i class="fa fa-window-restore"></i>';
                            break;
                        case 5:
                            appmain.output = '<strong>Cookie</strong> is not <strong>Exist</strong>';
                            appmain.output += '  <i class="fa fa-bars"></i>';
                            break;
                        default:
                            appmain.output = data;
                    }
                    appmain.bt = 'NOW!';
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
