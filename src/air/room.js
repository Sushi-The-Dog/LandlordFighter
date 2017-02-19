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
        battlefiled: 10
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
                description: '<strong>descr</strong>iption',
                color: 'red'
            },
            {
                id: 46,
                icon: 'binoculars',
                displayname: 'eats',
                description: 'description46',
                color: 'orange'
            }
        ]
    },
    methods: {
        toicon: function (card) {
            return 'fa fa-' + card.icon + ' air-' + card.color;
        },
        addcard: function (inincard) {
            var card = {
                id: 0,
                icon: 'cc',
                displayname: 'TEST',
                description: 'Destrory EVERYTHING!',
                color: 'white'
            }
            for (var i in inincard) {
                card[i] = inincard[i];
            }
            this.usercards.push(card);
            return 1;
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