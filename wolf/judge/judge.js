(function () {
    'use strict';
}());
var main = new Vue({
    el: '#main',
    data: {
        table: '',
        tablenotbind: '',
        view: [],
        regi: '',
        message: '这里显示消息'
    },
    methods: {
        enter: function () {
            this.view = [];
            $.ajax({
                url: '../php/define.php',
                type: 'POST',
                data: {
                    table: this.table
                },
                success: function (json) {
                    try {
                        var re = JSON.parse(json);
                        console.log(re);
                        for (var i = 0; i < re.length; i++) {
                            main.view.push({
                                email: re[i][0],
                                bind: re[i][2][1],
                                chips: re[i][1],
                                win: 2
                            })
                        }
                        main.tablenotbind = main.table;
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        },
        add: function (email) {
            $.ajax({
                url: '../php/addchips.php',
                type: 'POST',
                data: {
                    chips: this.regi,
                    email: email
                },
                success: function (json) {
                    try {
                        var re = JSON.parse(json);
                        console.log(re);
                        switch (re) {
                            case 0:
                                main.message = '添加筹码失败';
                                break;
                            case 1:
                                main.message = '添加筹码完成，点击概览刷新';
                                break;
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        },
        win: function (index) {
            this.view[index].win = 1;
        },
        lose: function (index) {
            this.view[index].win = 0;
        },
        reroom: function () {
            if (this.regi == 'confirm') {
                $.ajax({
                    url: '../php/reroom.php',
                    type: 'POST',
                    data: {
                        table: this.tablenotbind
                    },
                    success: function (json) {
                        try {
                            main.message = '房间重置了';
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
            } else {
                this.message = '小心误操作';
            }
        },
        submitresult: function () {
            if (this.regi == 'submit') {
                $.ajax({
                    url: '../php/checkout.php',
                    type: 'POST',
                    data: {
                        table: this.tablenotbind,
                        stat: JSON.stringify(this.view)
                    },
                    success: function (json) {
                        try {
                            if (json == 0) {
                                main.message = '服务器已经归纳了结果';
                            } else {
                                main.message = '应该是出错了，确认是否所有玩家都标记了胜负';
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
            } else {
                this.message = '小心误操作';
            }
        },
        registernew: function () {
            $.ajax({
                url: '../php/regnew.php',
                type: 'POST',
                data: {
                    email: this.regi
                },
                success: function (json) {
                    try {
                        if (json == 0) {
                            main.message = '服务器已经接受了新玩家';
                        } else {
                            main.message = '出现了错误';
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        }
    }
});