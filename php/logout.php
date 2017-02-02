<?php
session_start();
$re = 0;
$username = $_SESSION['username'];
session_destroy();
$re = 1;
$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
$emit = getactiveplayersandtimestampplayer($username);
//for test, user will be added in to the list.
array_push($emit,$username);
for($x=0;$x<count($emit);$x++){
    array_push($list,array($emit[$x],'log out',$username,time()));
}

echo $re;
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
function getactiveplayersandtimestampplayer($username){
    $player = file_get_contents('../json/poll/player.json');
    $player = json_decode($player);
    $re = array();
    $exist = 0;
    for($x=0;$x<count($player);$x++){
        if($player[$x][0] == $username){
            $exist = 1;
            $player[$x][1] = time();
        }else{
            $t= time();
            $tchange = $t - $player[$x][1];
            if($tchange <= 600){
                array_push($re,$player[$x][0]);
            }
        }
    }
    if($exist == 0){
        array_push($player,array($username,time()));
    }
    $player = json_encode($player);
    file_put_contents('../json/poll/player.json', $player);
    return $re;
}