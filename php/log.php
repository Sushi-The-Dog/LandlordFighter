<?php
session_start();
$requestback = array();
if (!isset($_COOKIE['username'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $contentd = file_get_contents('../json/users.json');
    $data = json_decode($contentd);
    $length = count($data);
    for ($x=0;$x<$length;$x++) {
        if ($data[$x][0] == $username) {
            array_push($requestback, 1, $username);
            break;
        }
    }
    if (count($requestback)<1) {
        array_push($requestback, 0, "None");
    }
    // $re = json_encode($data);
    // file_put_contents('../json/users.json', $re);
} else {
    $eusername = $_COOKIE['username'];
    // $epassword = $_COOKIE['password'];
    $key = $_COOKIE['key'];
    $contentd = file_get_contents('../json/users.json');
    $data = json_decode($contentd);
    $username = decode($eusername, "wengye");
    $length = count($data);
    for ($x=0;$x<$length;$x++) {
        if ($data[$x][0] == $username) {
            array_push($requestback, 1, $username);
            break;
        }
    }
    if (count($requestback)<1) {
        array_push($requestback, 0, "None");
    }
  // $password = decode($epassword,$key);
}
//@author Anyon
function encode($string, $skey)
{
    $strArr = str_split(base64_encode($string));
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value) {
        $key < $strCount && $strArr[$key].=$value;
    }
    return str_replace(array('=', '+', '/'), array('O0O0O', 'o000o', 'oo00o'), join('', $strArr));
}
function decode($string, $skey)
{
    $strArr = str_split(str_replace(array('O0O0O', 'o000o', 'oo00o'), array('=', '+', '/'), $string), 2);
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value) {
        $key <= $strCount  && isset($strArr[$key]) && $strArr[$key][1] === $value && $strArr[$key] = $strArr[$key][0];
    }
    return base64_decode(join('', $strArr));
}
echo json_encode($requestback);
