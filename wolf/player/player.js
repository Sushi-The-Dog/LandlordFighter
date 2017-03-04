(function () {
    'use strict';
}());
var main = new Vue({
    el: '#main',
    data: {
        bid: '',
        table: '',
        message: '不润徐在压住了',
        chips: 0,
        buttondis: false,
        bad: false
    },
    computed: {
        title: function () {
            if (this.bad == true) {
                return '错误！关闭页面！';
            }
            return '筹码: ' + this.chips;
        }
    },
    methods: {
        login: function () {
            this.buttondis = true;
            if (this.bid <= this.chips) {
                $.ajax({
                    url: '../php/register.php',
                    type: 'POST',
                    data: {
                        chips: this.bid,
                        table: this.table
                    },
                    success: function (json) {
                        try {
                            var re = JSON.parse(json);
                            console.log(re);
                            switch (re) {
                                case 1:
                                    main.message = '完成,押注了' + main.bid;
                                    main.chips -= main.bid;
                                    break;
                                case 3:
                                    main.message = '发生了没有预知的错误，请联系工作人员';
                                    main.buttondis = false;
                                    break;
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                });
            }
        },
        analysis: function () {
            $.ajax({
                url: '../php/get.php',
                type: 'GET',
                data: {

                },
                success: function (json) {
                    try {
                        var re = JSON.parse(json);
                        main.chips = re;
                    } catch (error) {
                        main.bad = true;
                        console.log(error);
                    }
                }
            });
        }
    }
});

function whilestart() {
    $.ajax({
        url: '../php/get.php',
        type: 'GET',
        data: {

        },
        success: function (json) {
            try {
                var re = JSON.parse(json);
                main.chips = re;
            } catch (error) {
                main.bad = true;
                console.log(error);
            }
        }
    });
}
whilestart();