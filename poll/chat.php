<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
$target = $_POST['target'];
$data = $_POST['data'];
//fopen
$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
$emit = getactiveplayersandtimestampplayer($username);
// send message also to my self
array_push($emit, $username);
if($target == '!@everyone@!'){
    for($x=0;$x<count($emit);$x++){
        array_push($list,array($emit[$x],'chat',array($username,$data),time()));
    }
}else{
    array_push($list,array($target,'chat',array($username,$data),time()));
    //also send to myself
    array_push($username,array($target,'chat',array($username,$data),time()));
}
//close
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