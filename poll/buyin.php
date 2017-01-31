<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
//post
$chips = $_POST['chips'];
//load
$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
//get active players
$emit = getactiveplayersandtimestampplayer($username);

//for test, user will be added in to the list.
array_push($emit,$username);
//send message
for($x=0;$x<count($emit);$x++){
    array_push($list,array($emit[$x],'buy in',array($username,$chips),time()));
}
//close
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);

//for test
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