<?php
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