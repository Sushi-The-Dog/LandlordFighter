(function() {
    'use strict';
}());
var foot = new Vue({
    el: '#foot',
    data: {
        users: 'WEI',
        chips: 150,
        actions: ['Bet', 'Call', 'Fall'],
        amounts: [10, 20, 30],
        allin: 270,
        buttonone: '',
        buttontwo: '',
        buttonthr: ''
    },
    methods: {
        test: function() {
            main.cardone = window.Poker.getCardData(157, 'd', 'JOKER');
        }
    }
});
var main = new Vue({
    el: '#main',
    data: {
        cardone: window.Poker.getCardData(157, 'd', 'JOKER'),
        cardtwo: window.Poker.getCardData(157, 'd', 'JOKER'),
        current: 'Joker Boomer',
        display: 'Joker Boomer'
    },
    methods: {

    }
});
// var head = new Vue({
//     el: '#head',
//     data: {
//
//     },
//     methods: {
//
//     }
// });
