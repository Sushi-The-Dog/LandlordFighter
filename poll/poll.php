<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
    $timeout = 0;
    $re = array();
    while($timeout < 7){
        $list = file_get_contents('../json/poll/list.json');
        $list = json_decode($list);
        for($x=0;$x<count($list);$x++){
            if($list[$x][0] == $username){
                array_push($re,$list[0]);
            }
        }
        if(count($re)>0){
            $timeout = 10;
        }
    }
}else{
    $re = 'error';
}

function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    }
    else {
        return false;
    }
}