(function () {
    'use strict';
}());
var game = {
    setting: {
        battlefiled: 10
    },
    startgame: function () {
        game.gen();
    },
    gen: function () {
        var t = [];
        for (var i = 0; i < game.setting.battlefiled; i++) {
            t.push(i);
        }
        for (var i = 0; i < game.setting.battlefiled; i++) {
            airspace.airspaceform.push(t);
            invaders.invaderform.push(t);
        }
    }
}
var airspace = new Vue({
    el: '#airspace',
    data: {
        airspaceform: []
    },
    computed: {},
    methods: {

    }
})
var invaders = new Vue({
    el: '#invaders',
    data: {
        invaderform: [],
        test: 0
    },
    computed: {},
    methods: {
        quvc: function () {
            this.invaderform[0][0]++;
            console.log(this.invaderform[0][0]);
        }
    }
})
var title = new Vue({
    el: '#title',
    data: {},
    computed: {}
})
game.startgame();