<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
$target = $_POST['post'];
$data = $_POST['data'];
if($target == '!@everyone@!'){
    
}
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