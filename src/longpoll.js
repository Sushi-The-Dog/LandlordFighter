var test = {
    test: function() {
        $.ajax({
            url: '../poll/poll.php',
            type: 'POST',
            data: {
                'username': 'test'
            },
            success: function(data) {
                console.log(data);
            },
            error: function() {}
        });
    }
};
