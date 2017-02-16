(function () {
    'use strict';
}());
var game = new Vue({
    el: '#game',
    data: {
        tests: 100
    },
    computed: {
        test: function () {
            return this.tests * 2;
        }
    }
})
var title = new Vue({
    el: '#title',
    data: {
        tests: 100
    },
    computed: {
        test: function () {
            return this.tests * 2;
        }
    }
})