(function () {
    'use strict';
}());
var main = new Vue({
    el: '#main',
    data: {
        bid: '',
        table: '',
        message: '法官会指引你注册比赛',
        chips: 12,
        buttondis: false
    },
    methods: {
        login: function () {
            this.buttondis = true;
            $.ajax({
                url: '../php/login.php',
                type: 'POST',
                data: {
                    emails: this.email
                },
                success: function (json) {
                    try {
                        var re = JSON.parse(json);
                        console.log(re);
                        switch (re) {
                            case 0:
                                main.message = '邮箱格式不符';
                                main.buttondis = false;
                                break;
                            case 1:
                                main.message = '正在跳转';
                                window.location.href = './player';
                                break;
                            case 3:
                                main.message = '邮箱没有被记录，请联系工作人员';
                                main.buttondis = false;
                                break;
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        }
    }
});