(function() {
    'use strict';
}());
var appmain = new Vue({
    el: '#index',
    data: {
        title: 'Hello',
        titlept: 'Vue!',
        ho: 'Login for LandlordFighter:',
        ht: 'Which is a Texas poker game',
        un: 'Username',
        ps: 'Password',
        bt: 'NOW!'
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
