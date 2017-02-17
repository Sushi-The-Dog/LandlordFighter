(function () {
    'use strict';
}());
/*
 * @author WMXPY
 * Caper Module
 * @version Alpha 0.2.01
 * Ajax Module
 * @varsion Alpha 1.0.01
 * @CHANGELOG
 */
var Cp$ = {
    //Todo, add part of DOM work
    Caper: function (target, data) {
        var capersettings = {
            mode: 'countup',
            elem: 'DOM',
            start: 0,
            end: 233,
            decimal: 0,
            countdowntimer: 1,
            duration: 500,
            startstring: '',
            endstring: '',
            animate: '',
            effect: '',
            endfunction: function () {},
            midfunction: function () {},
            startfunction: function () {}
        };
        for (var i in data) {
            capersettings[i] = data[i];
        }
        var elem;
        switch (capersettings[elem]) {
            case 'DOM':
                elem = document.getElementById(target);
                break;
            case 'Vue':
                break;
            case 'PART of DOM':
                break;
            case 'ENTIREDOM':
                elem = document.getElementById(target);
                elem = elem.innerHTML;
                break;
            default:
                elem = document.getElementById(target);
        }
        var re = Cp$.caperjs.verify.mode(elem, capersettings);
    },
    caperjs: {
        //:( forgot!
        analysisdata: function (data) {

        },
        //uneffect function will delete after few paths
        caper: {
            countup: function (elem, data) {
                var startVal = data.start;
                var endVal = data.end;
                var decimal = data.decimal;
                var duration = data.duration;
                var value;

                function startCount(time) {
                    //after one run, requestAnimationFrame will applay timestamp to s
                    value = startVal + (endVal - startVal) * (time / duration);
                    value = Math.min(endVal, value);
                    elem.innerHTML = value.toFixed(decimal);
                    if (time < duration) {
                        requestAnimationFrame(startCount);
                    }
                    console.log(time);
                }
                requestAnimationFrame(startCount)
            },
            //count down
            countdown: function (elem, data, mode) {
                var startVal = data.start;
                var endVal = data.end;
                var decimal = data.decimal;
                var duration = data.duration;
                var value = startVal;
                //normal count
                function startCount(time) {
                    //after one run, requestAnimationFrame will applay timestamp to s
                    value = startVal - (startVal - endVal) * (time / duration);
                    value = Math.max(endVal, value);
                    elem.innerHTML = value.toFixed(decimal);
                    if (time < duration) {
                        requestAnimationFrame(startCount);
                    }
                }
                //sec count
                function secCount() {
                    //Count as timer
                    value = value - 1;
                    if (value < endVal) {
                        data.endfunction();
                        return;
                    } else {
                        elem.innerHTML = value.toFixed(decimal);
                        setTimeout(secCount, 1000);
                    }
                }
                //switch of modes
                switch (mode) {
                    case 'normal':
                        requestAnimationFrame(startCount);
                        break;
                    case 'sec':
                        setTimeout(secCount, 100);
                        break;
                    default:
                        requestAnimationFrame(startCount);
                }
            },
            //new way to count down by sec
            countdownorder: function (elem, data) {
                var startVal = data.start;
                var endVal = data.end;
                var decimal = data.decimal;
                var value = startVal;
                var timer = countdowntimer * 1000;
                var target = elem.innerHTML;
                target = startVal.toFixed(decimal);

                function countdowns() {
                    data.startfunction();
                    countdown();
                }

                function countdown() {
                    value--;
                    if (value < endVal) {
                        //call endfunction
                        data.endfunction();
                        return;
                    } else {
                        target = value.toFixed(decimal);
                        data.midfunction();
                        setTimeout(secCount, timer);
                    }
                }
                setInterval(countdowns, timer);

            },
            curvecountup: function (target, data) {

            },
            curvecountdown: function (target, data) {

            },
            //old method of iter
            iter: function (elem, data) {
                var startstring = data.startstring;
                var endstring = data.endstring;
                var duration = data.duration;
                var frame = 6;
                console.log(frame);
                requestAnimationFrame(startCount);

                function startCount(time) {
                    //after one run, requestAnimationFrame will applay timestamp to s
                    if (frame < 6) {
                        frame++;
                        requestAnimationFrame(startCount);
                        console.log(frame);
                    } else {
                        value = Cp$.caperjs.random.string(15);
                        elem.innerHTML = value;
                        if (time < duration) {
                            requestAnimationFrame(startCount);
                        }
                        frame = 0;

                        console.log(frame);
                    }
                }

            },
            //new way to iter
            iternew: function (elem, data) {
                var tar = data.endstring;
                var value = data.startstring;
                if (tar.length != value.length) {
                    value = Cp$.caperjs.random.string(tar.length);
                }
                // var value = Cp$.caperjs.random.string(tar.length);
                var count = 0;
                var dur = Math.min(data.duration, 58);
                setTimeout(itrr, dur);

                function itrr() {
                    value = howmuchsame(tar, value);
                    elem.innerHTML = value;
                    if (tar != value) {
                        count++;
                        setTimeout(itrr, dur);
                    } else {
                        console.log('DONE -> Time: ' + count);
                    }
                }

                function howmuchsame(tar, val) {
                    for (var i = 0; i < tar.length; i++) {
                        if (val.charAt(i) != tar.charAt(i)) {
                            var ran = Cp$.caperjs.random.string(1);
                            val = val.substring(0, i) + ran + val.substring(i + 1, val.length);
                        }
                    }
                    return val;
                }
            },
            //faster version of iter
            iterfaster: function (elem, data) {
                var tar = data.endstring;
                var value = data.startstring;
                if (tar.length != value.length) {
                    value = Cp$.caperjs.random.string(tar.length);
                }
                // var value = Cp$.caperjs.random.string(tar.length);
                var count = 0;
                var dur = Math.min(data.duration, 58);
                setTimeout(itrr, dur);

                function itrr() {
                    value = howmuchsame(tar, value);
                    elem.innerHTML = value;
                    if (tar != value) {
                        count++;
                        setTimeout(itrr, dur);
                    } else {
                        console.log('DONE -> Time: ' + count);
                    }
                }

                function howmuchsame(tar, val) {
                    var diff = tar.length;
                    for (var i = 0; i < tar.length; i++) {
                        if (val.charAt(i) != tar.charAt(i)) {
                            var ran = Cp$.caperjs.random.instring(diff, tar.charAt(i))
                            val = val.substring(0, i) + ran + val.substring(i + 1, val.length);
                        } else {
                            diff--;
                        }
                    }
                    return val;
                }
            }
        },
        verify: {
            mode: function (elem, data) {
                if (data.hasOwnProperty('mode')) {
                    switch (data.mode) {
                        case 'up':
                        case 'countup':
                            Cp$.caperjs.caper.countup(elem, data);
                            break;
                        case 'down':
                        case 'countdownnormal':
                        case 'countdown':
                            Cp$.caperjs.caper.countdown(elem, data, 'normal');
                            break;
                        case 'curvecountup':
                        case 'ccountup':
                            Cp$.caperjs.caper.curvecountup(elem, data);
                            break;
                        case 'curvecountdown':
                        case 'ccountdownnormal':
                        case 'ccountdown':
                            Cp$.caperjs.caper.curvecountdown(elem, data);
                            break;
                        case 'newcountdown':
                            Cp$.caperjs.caper.countdownorder(elem, data);
                            break;
                        case 'countdownsec':
                        case 'sec':
                            Cp$.caperjs.caper.countdown(elem, data, 'sec');
                            break;
                        case 'gen':
                            Cp$.caperjs.caper.iternew(elem, data);
                            break;
                        case 'iter':
                            Cp$.caperjs.caper.iterfaster(elem, data);
                            break;
                        default:
                            Cp$.caperjs.caper.countup(elem, data);
                    }
                } else {
                    Cp$.caperjs.caper.countup(elem, data);
                }
                return data;
            },
            string: function (data) {
                if (data.hasOwnProperty('start')) {
                    return data.start;
                }
                return Cp$.caperjs.random.string(10);
            },
            stringend: function (data) {
                if (data.hasOwnProperty('end')) {
                    return data.end;
                }
                return Cp$.caperjs.random.string(10);
            }
        },
        random: {
            //random a length length string
            string: function (length) {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.!@#$%^&*()";
                length = Math.max(0, length);
                for (var i = 0; i < length; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));

                return text;
            },
            //random a int
            //need to imporve feature
            int: function (length) {
                return Math.random(length);
            },
            //random with little
            instring: function (length, little) {
                length = Math.max(0, length);
                var thisposs = little + Cp$.caperjs.random.string(length);
                return thisposs.charAt(Math.floor(Math.random() * thisposs.length));
            }
        }
    },
    //ajax module, not updating
    ajax: {
        caperajax: function (inin) {
            //default
            var ajaxsettings = {
                //default GET
                method: 'GET',
                //default link
                url: './main.php',
                data: '',
                async: true,
                cache: true,
                contentType: 'application/x-www-form-urlencoded',
                success: function (data) {
                    console.log(data);
                },
                error: function (error) {
                    console.log(error);
                }
            };
            //inin method
            for (var i in inin) {
                ajaxsettings[i] = inin[i];
            }
            //create object
            if (typeof ajaxsettings.data === 'object') {
                var str = '';
                var value = '';
                for (var key in ajaxsettings.data) {
                    value = ajaxsettings.data[key];
                    //replace & in url
                    if (ajaxsettings.data[key].indexOf('&') !== -1) {
                        value = ajaxsettings.data[key].replace(/&/g, escape('&'));
                    }
                    //replace & in key
                    if (key.indexOf('&') !== -1) {
                        key = key.replace(/&/g, escape('&'));
                    }
                    str += key + '=' + value + '&';
                }
                ajaxsettings.data = str.substring(0, str.length - 1);
            }
            //cache
            ajaxsettings.cache = ajaxsettings.cache ? '' : '&' + new Date().getTime();
            //method
            ajaxsettings.method = ajaxsettings.method.toUpperCase();
            //chche url
            if (ajaxsettings.method === 'GET' && (ajaxsettings.data || ajaxsettings.cache)) {
                ajaxsettings.url += '?' + ajaxsettings.data + ajaxsettings.cache;
            }
            var ajaxobject = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            //shake with server
            ajaxobject.open(ajaxsettings.method, ajaxsettings.url, ajaxsettings.async);
            //send request
            if (ajaxsettings.method === 'GET') {
                ajaxobject.send(null);
            } else if (ajaxsettings.method === 'POST') {
                ajaxobject.setRequestHeader("Content-type", ajaxsettings.contentType);
                ajaxobject.send(ajaxsettings.data);
            } else {
                console.log('METHOD is not supported by Caperjs');
                return false;
            }
            //waiting for response
            ajaxobject.onreadystatechange = function () {
                if (ajaxobject.readyState === 4) {
                    if (ajaxobject.status === 200)
                        ajaxsettings.success.call(ajaxobject, ajaxobject.responseText);
                    else {
                        ajaxsettings.error();
                    }
                }
            };
        }
    }
}
// export.Caper = Cp$;