<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
timeplayer($username);
$re = array();
$playerdata = file_get_contents('../json/users.json');
$playerdata = json_decode($playerdata);
for($x=0;$x<count($playerdata);$x++){
    if($playerdata[$x][0] == $username){
        array_push($re,$playerdata[$x][3]);
    }
}
if(count($re)<1){
    echo 'error';
}else{
    array_unshift($re,$username);
    $re = json_encode($re);
    echo $re;
}
function timeplayer($username){
    $player = file_get_contents('../json/poll/player.json');
    $player = json_decode($player);
    $exist = 0;
    for($x=0;$x<count($player);$x++){
        if($player[$x][0] == $username){
            $exist = 1;
            $player[$x][1] = time();
        }
    }
    if($exist == 0){
        array_push($player,array($username,time()));
    }
    $player = json_encode($player);
    file_put_contents('../json/poll/player.json', $player);
}