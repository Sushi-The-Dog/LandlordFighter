<?php
session_start();
$username = $_SESSION['username'];
session_write_close();

$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
$player = file_get_contents('../json/poll/player.json');
$player = json_decode($player);

$exist = 0;
for($x=0;$x<$player;$x++){
    if($player[$x][0] == $username){
        $exist = 1;
        $player[$x][1] = time();
    }
}
if($exist = 0){
    array_push($player,array($username,time()));
}
array_push($list,array($username,'test','testmsg',time()));
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
$player = json_encode($player);
file_put_contents('../json/poll/player.json', $player);
echo 1;