(function() {
    'use strict';
}());
var interesting = {
    daytime: function() {
        var now = new Date();
        var hour = now.getHours();
        if (hour < 6) {
            appmain.title = "It's ";
            appmain.titlept = "Early Morning";
        } else if (hour < 9) {
            appmain.title = "Good ";
            appmain.titlept = "Morning";
        } else if (hour < 12) {
            appmain.title = "Have ";
            appmain.titlept = "Fun";
        } else if (hour < 14) {
            appmain.title = "It's ";
            appmain.titlept = "Noon";
        } else if (hour < 17) {
            appmain.title = "Good ";
            appmain.titlept = "Afternoon";
        } else if (hour < 19) {
            appmain.title = "Good ";
            appmain.titlept = "Evening";
        } else if (hour < 22) {
            appmain.title = "It's ";
            appmain.titlept = "Late";
        } else {
            appmain.title = "Sleep ";
            appmain.titlept = "Tight";
        }
    }
};
var appmain = new Vue({
    el: '#index',
    data: {
        title: 'Hello',
        titlept: 'Vue!',
        ho: 'Login for LandlordFighter:',
        ht: 'Which is a Texas poker game',
        un: 'Username',
        ps: 'Password',
        bt: 'NOW!',
    },
    methods: {
        login: function() {
            $.ajax({
                url: './php/test.php',
                type: 'GET',
                data: {
                    'test': 'test'
                },
                success: function(data) {
                    console.log(data);
                },
                error: function() {
                    console.log("ERROR");
                }
            });
        }
    }
});
