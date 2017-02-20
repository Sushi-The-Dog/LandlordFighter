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