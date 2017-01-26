<?php
$username = $_POST['username'];
$changes = file_get_contents('../json/changes.json');
$changes = json_decode($changes);
$changes -> $username = 0;
$hold = json_encode($changes);
file_put_contents('../json/changes.json', $hold);
$re= false;
$timeout= 0;
while ($re = false) {
    if ($changes->$username == 0) {
        $timeout++;
        sleep(3);
    }
    else {
        $re = true;
    }
    if ($timeout >= 2) {
        $re = true;
    }
}
echo 'test';