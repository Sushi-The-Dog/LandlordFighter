<?php
$username = $_POST['username'];

if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
    $re = array();
    $timeout = 0;
    while ($timeout < 7) {
        $changes = file_get_contents('../json/changes.json');
        $changes = json_decode($changes);
        if ($changes->$username->ischange == 0) {
            $timeout++;
            sleep(3);
        }
        else {
            array_push($re,$changes->$username->area,$changes->$username->msg);
            $timeout = 10;
            $changes->$username->ischange = 0;
        }
    }
}else{
    $re = 'error';
}
$hold = json_encode($changes);
file_put_contents('../json/changes.json', $hold);
$re = json_encode($re);
echo $re;
function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    }
    else {
        return false;
    }
}