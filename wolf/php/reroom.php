<?php
session_start();
if($_SESSION['judge'] == 'mima'){
    $table = $_POST['table'];
    $forms = file_get_contents('../json/form.json');
    $forms = json_decode($forms);
    $back = 0;
    $stat = json_decode($stat);
    for($x=0;$x<count($forms);$x++){
        if($forms[$x][2][0] == $table){
            $forms[$x][1] += $forms[$x][2][1];
            $forms[$x][2][0] = 0;
            $forms[$x][2][1] = 0;
        }
    }
    if($back == 1){
        echo 1;
    }else{
        $forms = json_encode($forms);
        file_put_contents('../json/form.json',$forms);
        echo 0;
    }
}