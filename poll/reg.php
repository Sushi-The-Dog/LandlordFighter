<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
//send emit to everyone
$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
//get active player
$emit = getactiveplayersandtimestampplayer($username);
//for test, user will be added in to the list.
array_push($emit,$username);
//send message
$did = 0;
for($y=0;$y<count($emit);$y++){
    for($x=0;$x<count($list);$x++){
        if($list[$x][0] == $emit[$y] && $list[$x][1] == 'player reg' && $list[$x][2] == $username){
            $list[$x][3] = time();
            $did = 1;
        }
        $times = time()-$list[$x][3];
        if($times >= 600){
            array_splice($list,$x,1);
            $x--;
        }
    }
    if($did == 0){
        array_push($list,array($emit[$y],'player reg',$username,time()));
    }
}

//close
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
//return echo
echo 'reg complete '.$username;
//functions
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