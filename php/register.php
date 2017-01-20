<?php

session_start();
$requestback = array();
$re = json_encode($data);
file_put_contents('../json/users.json', $re);

//under ->
//functions
function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    } else {
        return false;
    }
}
