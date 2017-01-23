(function() {
    'use strict';
}());
var defind = {
    cardsize: 55,
    handsize: 157
};
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
            console.log(window.Poker.getCardData(157, 'd', 'JOKER'));

        }
    }
});
var main = new Vue({
    el: '#main',
    data: {
        cardone: window.Poker.getCardData(defind.handsize, 'd', '8'),
        cardtwo: window.Poker.getCardData(defind.handsize, 'd', 'JOKER'),
        current: 'Joker Boomer',
        display: 'Joker Boomer'
    },
    methods: {

    }
});
var players = new Vue({
    el: '#players',
    data: {
        waitinglist: ['testone', 'test2'],
        ingamelist: ['tplayer', 'who'],
        waitdisplay: 0,
        ingamedisplay: 0
    },
    methods: {
        update: function() {
            players.waitdisplay = players.waitinglist.length;
            players.ingamedisplay = players.ingamelist.length;
        }
    }
});
var opponentl = new Vue({
    el: '#opponentl',
    data: {
        oppon: []
    },
    methods: {

    }
});
var opponentr = new Vue({
    el: '#opponentr',
    data: {
        oppon: []
    },
    methods: {

    }
});
var pool = new Vue({
    el: '#pool',
    data: {
        current: '<i class="fa fa-angle-right"></i> FLOP',
        card1: window.Poker.getCardData(defind.cardsize, 'd', 'A'),
        card2: window.Poker.getCardData(defind.cardsize, 'd', 'A'),
        card3: window.Poker.getCardData(defind.cardsize, 'd', 'JOKER'),
        card4: window.Poker.getBackData(defind.cardsize, '#8F9396', '#5C6063'),
        card5: window.Poker.getBackData(defind.cardsize, '#8F9396', '#5C6063')
    },
    methods: {}
});
var panel = new Vue({
    el: '#panel',
    data: {
        chips: 5008,
        one: '<i class="fa fa-superpowers"></i> Cash In',
        two: '<i class="fa fa-forumbee"></i> Cash Out',
        three: '<i class="fa fa-bandcamp"></i> Buy Chips',
        four: '<i class="fa fa-cog"></i> Setting',
        five: '<i class="fa fa-github-alt"></i> Test'
    },
    methods: {
        ones: function() {
            console.log(window.Poker.getCardData(defind.cardsize, 'd', 'JOKER'));
        },
        twos: function() {

        },
        threes: function() {

        },
        fours: function() {

        },
        fives: function() {

        }
    }
});
var title = new Vue({
    el: '#title',
    data: {
        left: '<strong>LandlordFighter</strong>',
        right: 'Hello, <strong>' + foot.users + '</strong> <a type="button" v-on:click="logout">Log out</a>'
    },
    methods: {
        logout: function() {
            console.log('logout');
        }
    }
});
