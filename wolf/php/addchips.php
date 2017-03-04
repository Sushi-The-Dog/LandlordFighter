<?php
session_start();
if($_SESSION['judge'] == 'mima'){
    $chips = $_POST['chips'];
    $email = $_POST['email'];
    $forms = file_get_contents('../json/form.json');
    $forms = json_decode($forms);
    $back = 0;
    for($x=0;$x<count($forms);$x++){
        if($forms[$x][0] == $email){
            $forms[$x][1] += $chips;
            $back = 1;
        }
    }
    echo $back;
    $forms = json_encode($forms);
    file_put_contents('../json/form.json',$forms);
}