<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
//load
$list = file_get_contents('../json/poll/list.json');
$users = file_get_contents('../json/users.json');
$list = json_decode($list);
$users = json_decode($users);
//get active players
$emit = getactiveplayersandtimestampplayer($username);
$chips = 0;
//get the chips of players
for($x=0;$x<count($users);$x++){
    if($users[$x][0] == $username){
        $chips = $users[$x][3];
    }
}

//for test, user will be added in to the list.
array_push($emit,$username);
//send request to list
for($x=0;$x<count($emit);$x++){
    array_push($list,array($emit[$x],'cash out',array($username,$chips),time()));
}

$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
$users = json_encode($users);
file_put_contents('../json/users.json', $users);
echo $list;
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
            if($tchange <= 12500){
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