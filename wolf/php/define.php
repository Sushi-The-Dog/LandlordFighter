<?php
session_start();
if($_SESSION['judge'] == 'mima'){
    $table = $_POST['table'];
    $forms = file_get_contents('../json/form.json');
    $forms = json_decode($forms);
    $back = array();
    for($x=0;$x<count($forms);$x++){
        if($forms[$x][2][0] == $table){
            array_push($back,$forms[$x]);
        }
    }
    
    echo json_encode($back);
}