(function () {
    'use strict';
}());
// $('.c-red').hide();
// $('.c-blue').mousemove(function (e) {
//     $('.c-red').eq($(this).index()).show().css({
//         "top": e.pageY,
//         "left": e.pageX
//     }).siblings("div").hide();
// });
// $('.list li').mouseleave(function () {
//     $('.c-red').hide();
// });
var game = {
    setting: {
        battlefiled: 12
    },
    gen: function () {
        var s = [];
        for (var i = 0; i < game.setting.battlefiled; i++) {
            s.push([]);
            for (var j = 0; j < game.setting.battlefiled; j++) {
                s[i].push({
                    display: '',
                    row: i,
                    col: j,
                    color: 'c-blue'
                });
            }
        }
        return s;
    }
}
var cards = new Vue({
    el: '#cards',
    data: {
        usercards: [{
            id: 45,
            icon: 'bitcoin',
            displayname: 'eatsss',
            description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
            color: 'green',
            txtcolor: 'green',
            bgcolor: 'black',
            onuse: function () {
                console.log('test');
            }
        }]
    },
    methods: {
        toicon: function (card) {
            return 'fa fa-' + card.icon + ' air-' + card.color;
        },
        tocolor: function (card) {
            return 'air-' + card.txtcolor + ' c-' + card.bgcolor;
        },
        addcard: function (inincard) {
            var card = {
                id: 0,
                icon: 'cc',
                displayname: 'TEST',
                description: 'Destrory EVERYTHING!',
                color: 'white',
                txtcolor: 'red',
                bgcolor: 'black',
                onuse: function () {
                    console.log('test');
                }
            }
            for (var i in inincard) {
                card[i] = inincard[i];
            }
            this.usercards.push(card);
            return 1;
        },
        //TODO Addremove card function
        usecard: function (card, index) {
            this.usercards.splice(index, 1);
            card.onuse();
        }
    }
})
var airspace = new Vue({
    el: '#airspace',
    data: {
        airspaceform: game.gen()
    },
    computed: {},
    methods: {
        quvc: function (target) {
            this.airspaceform[target.row][target.col].color = 'c-red';
            console.log(target.row + '_' + target.col);
        }
    }
})
var invaders = new Vue({
    el: '#invaders',
    data: {
        invaderform: game.gen()
    },
    computed: {},
    methods: {
        quvc: function (target) {
            this.invaderform[target.row][target.col].color = 'c-red';
            console.log(target.row + '_' + target.col);
        }
    }
})
var title = new Vue({
    el: '#title',
    data: {},
    computed: {}
})
var gencards = {
    aoe: {
        id: 1,
        icon: 'cubes',
        displayname: 'Area of Effect',
        description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
        color: 'red',
        onuse: function () {
            console.log('boom');
        }
    }
}