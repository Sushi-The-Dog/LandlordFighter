<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
$target = $_POST['response'];
//send emit to everyone
$list = file_get_contents('../json/poll/list.json');
$list = json_decode($list);
//send message
$did = 0;
// $start = 0;
for($x=0;$x<count($list);$x++){
    if($list[$x][0] == $target && $list[$x][1] == 'responses' && $list[$x][2] == $username){
        $list[$x][3] = time();
        $did = 1;
    }
    // if($list[$x][0] == $target && $list[$x][1] == 'start' && $list[$x][2] == $username){
    //     $list[$x][3] = time();
    //     $start = 1;
    // }
}
if($did == 0){
    array_push($list,array($target,'responses',$username,time()));
}
//close
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
echo 'reg response shake complete';