<?php

session_start();
$changes = file_get_contents('../json/changes.json');
$changes = json_decode($changes);
if($changes[0][0] >= 2){
    echo json_encode(array(0,'full'));
}else{
    echo json_encode(array(1,$_SESSION['username']));
}