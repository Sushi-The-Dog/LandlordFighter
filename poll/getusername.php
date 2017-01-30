<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
echo $username;
// $changes = file_get_contents('../json/changes.json');
// $changes = json_decode($changes);
// $t = time();
// $ingame = array();
// $changes[0][0] = 0;
// for($x=0;$x<count($changes[1]);$x++){
//     $p = $t - $changes[1][$x][3];
//     if($p < 1450){
//         $changes[0][0]++;
//         array_push($ingame,$changes[1][$x][0]);
//     }
// }
// if($changes[0][0] >= 2){
//     echo json_encode(array(0,'full'));
// }else{
//     $data = array();
//     for($x=0;$x<count($changes[1]);$x++){
//         if($changes[1][$x][0]==$_SESSION['username']){
//             $changes[1][$x][1] = 0;
//             $changes[1][$x][2] = array();
//             $changes[1][$x][3] = $t;
//             $data = $changes[1][$x];
//         }
//     }
//     if(count($data)<1){
//         array_push($changes[1],array($_SESSION['username'],0,array(),$t));
//     }
//     $hold = json_encode($changes);
//     file_put_contents('../json/changes.json', $hold);

// }