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
            id: 1,
            icon: 'ship',
            displayname: 'eatsss',
            description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
            color: 'green',
            txtcolor: 'green',
            bgcolor: 'black',
            setcolor: 'black',
            onuse: function () {
                console.log('test');
            },
            sent: false
        }, {
            id: 2,
            icon: 'ship',
            displayname: 'eatsss',
            description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
            color: 'green',
            txtcolor: 'green',
            bgcolor: 'black',
            setcolor: 'black',
            onuse: function () {
                console.log('test');
            },
            sent: false
        }, {
            id: 3,
            icon: 'ship',
            displayname: 'eatsss',
            description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
            color: 'green',
            txtcolor: 'green',
            bgcolor: 'black',
            setcolor: 'black',
            onuse: function () {
                console.log('test');
            },
            sent: false
        }, {
            id: 4,
            icon: 'ship',
            displayname: 'eatsss',
            description: 'Shot to a <strong>3*3</strong> Area <br> instand of Normal shot',
            color: 'green',
            txtcolor: 'green',
            bgcolor: 'black',
            setcolor: 'black',
            onuse: function () {
                console.log('test');
            },
            sent: false
        }];
        return card;
    },
    loadsetup: function () {
        var setup = [];
        // var setup = [{
        //     layout: 'DIJAOID',
        //     id: 0
        // }, {
        //     layout: 'YHHH',
        //     id: 1
        // }];
        return setup;
    },
    sendedcard: []
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
        },
        toicon: function (card) {
            return 'fa fa-' + card.icon + ' air-' + card.color;
        },
        ctocolor: function (card) {
            return 'air-' + card.txtcolor + ' c-' + card.setcolor;
        },
        usecard(card, index) {
            if (card.sent == false) {
                if (polls.sendedcard.length >= 3) {
                    layer.msg('Card Pool Full');
                } else {
                    card.index = index;
                    card.sent = true;
                    card.setcolor = 'red';
                    polls.sendedcard.push(card);
                }
            } else {
                for (var i = 0; i < polls.sendedcard.length; i++) {
                    if (polls.sendedcard[i].index == index) {
                        polls.sendedcard.splice(index, 1);
                        card.sent = false;
                        card.setcolor = card.bgcolor;
                    }
                }
            }
            console.log(polls.sendedcard);
        }
    }
})