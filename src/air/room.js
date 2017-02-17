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
var airspace = new Vue({
    el: '#airspace',
    data: {
        airspaceform: game.gen()
    },
    computed: {},
    methods: {

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