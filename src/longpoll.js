var test = {
    test: function() {
        $.ajax({
            url: '../poll/poll.php',
            type: 'POST',
            data: {
                'username': 'test'
            },
            success: function(data) {
              document.getElementById("output").innerHTML = data;
                $("#output").val = data;
                console.log(data);
            },
            error: function() {}
        });
    }
};
test.test();
