(function () {
    'use strict';
}());
var polls = {
    loadroom: function () {
        var room = [{
            roomid: 23,
            mode: 'Normal',
            owner: 'Landlord',
            players: 0
        }, {
            roomid: 24,
            mode: 'Normal',
            owner: 'Landlord',
            players: 0
        }];
        return room;
    },
    loadcard: function () {
        var card = [{
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
        }];
        return card;
    },
    loadsetup: function () {
        var setup = [{
            layout: 'DIJAOID',
            id: 0
        }, {
            layout: 'YHHH',
            id: 1
        }];
        return setup;
    }
}
var title = new Vue({
    el: '#title',
    data: {}
})
var rooms = new Vue({
    el: '#rooms',
    data: {
        roomlist: polls.loadroom(),
        buttondis: false
    },
    methods: {
        enterroom: function (room) {
            if (room.players >= 2) {
                layer.msg('Room Full');
            } else {
                room.players++;
            }
        },
        processenter: function (room) {

        },
        refresh: function () {
            layer.open({
                type: 2,
                closeBtn: 1,
                title: 'Setup',
                area: ['75%', '75%'],
                content: './design',
                end: function () {
                    console.log('Closed');
                }
            });
            this.roomlist = polls.loadroom();
            this.buttondis = true;
            setTimeout(function () {
                rooms.buttondis = false;
            }, 5000);
        },
        freshroom: function () {

        }
    }
})
var setup = new Vue({
    el: '#setup',
    data: {
        setuplist: polls.loadsetup(),
        cardslist: polls.loadcard()
    },
    methods: {
        setup: function () {

        },
        cards: function () {

        },
        tocolor: function (col) {
            return 'c-' + col;
        }
    }
})