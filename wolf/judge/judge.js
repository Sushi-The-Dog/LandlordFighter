(function () {
    'use strict';
}());
var main = new Vue({
    el: '#main',
    data: {
        table: '',
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
        submitresult: function () {

        },
        registernew: function () {

        }
    }
});