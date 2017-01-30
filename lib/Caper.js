(function () {
    'use strict';
}());

function Caper(data, object) {
    var stop;
    Caper.prototype.data = data;
    Caper.prototype.object = object;
    Caper.prototype.flow = function () {
        stop = setInterval(Caper.prototype.test, 50);
        console.log(stop);
        // var max = this.data.max;
        // var num = parseInt(document.getElementById(this.object).innerHTML);
        // console.log(num);
        // var close = self.setInterval(flow.run(num, max, close, this.object), 100);
        // self.setInterval(console.log('test'), 50);
    };
    Caper.prototype.test = function () {
        console.log(stop);
        var num = parseInt(document.getElementById(object).innerHTML);
        if (num < data.max) {
            document.getElementById(object).innerHTML =
                parseInt(document.getElementById(object).innerHTML) + 5;
        } else {
            window.clearInterval(stop);
        }
    };
}
var flow = {
    run: function () {
        document.getElementById("test").innerHTML =
            parseInt(document.getElementById("test").innerHTML) + 5;
        // if (num >= max) {
        //     console.log(num + max);
        //     window.clearInterval(close);
        //     document.getElementById(object).innerHTML = num;
        //     console.log('Done');
        // } else {
        //
        //
        //
        // }

    }
};

function fun() {

}