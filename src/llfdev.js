(function() {
    'use strict';
}());
var defind = {
    cardsize: 75,
    handsize: 157,
    start: function() {
        opponentl.userin(['who', 78600], 1);
    }
};
var foot = new Vue({
    el: '#foot',
    data: {
        users: 'Loading',
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
        waitinglist: [
            ['testone', 6800],
            ['two', 4500]
        ],
        ingamelist: [
            ['WEI', 150],
            ['who', 78600]
        ],
        waitdisplay: 0,
        ingamedisplay: 0
    },
    methods: {
        playersin: function(user) {

        },
        update: function() {
            players.waitdisplay = players.waitinglist.length;
            players.ingamedisplay = players.ingamelist.length;
        }
    }
});
var opponentl = new Vue({
    el: '#opponentl',
    data: {
        display: '',
        introone: '',
        introtwo: '',
        actionone: '',
        actiontwo: ''
    },
    methods: {
        userin: function(user, location) {
            opponentl.updateintro(user, location);
            opponentl.updateaction('<i class="fa fa-hand-spock-o"></i> Just<strong>Came in</strong>', location);
            opponentl.update();
        },
        updateintro: function(user, location) {
            var id = user[0];
            var chips = user[1];
            switch (location) {
                case 1:
                    opponentl.introone = 'ID: <strong>' + id +
                        '</strong><br>Chips: <strong><i class="fa fa-money"></i> ' +
                        chips + '</strong><hr>';
                    break;
                case 2:
                    opponentl.introtwo = 'ID: <strong>' + id +
                        '</strong><br>Chips: <strong><i class="fa fa-money"></i> ' +
                        chips + '</strong><hr>';
                    break;
            }
        },
        bet: function(amount, location) {

        },
        updateaction: function(string, location) {
            switch (location) {
                case 1:
                    opponentl.actionone = string + '<hr>';
                    break;
                case 2:
                    opponentl.actiontwo = string;
                    break;
            }
        },
        userout: function() {

        },
        update: function() {
            opponentl.display = '<strong>Opponents</strong><hr>' +
                opponentl.introone + opponentl.actionone +
                opponentl.introtwo + opponentl.actiontwo;
        }
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
        chips: 0,
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
        },
        update: function() {
            title.right = 'Hello, <strong>' + foot.users + '</strong> <a type="button" v-on:click="logout">Log out</a>';
        }
    }
});
defind.start();
