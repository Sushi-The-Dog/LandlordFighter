var foot = new Vue({
    el: '#foot',
    data: {
        cards: 'test',
        actions: ['Bet', 'Call', 'Fall'],
        amounts: [10, 20, 30],
        allin: 270
    },
    methods: {
        test: function() {
            console.log("test");
        }
    }
});
// var head = new Vue({
//     el: '#head',
//     data: {
//
//     },
//     methods: {
//
//     }
// });
// var main = new Vue({
//     el: '#main',
//     data: {
//
//     },
//     methods: {
//
//     }
// });
