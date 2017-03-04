<?php
session_start();
if($_SESSION['judge'] == 'mima'){
    $forms = file_get_contents('../json/form.json');
    $forms = json_decode($forms);
    $email = $_POST['email'];
    array_push($forms,[$email,14,[0,0]]);
    $forms = json_encode($forms);
    file_put_contents('../json/form.json',$forms);
    echo 0;
}else{
    echo 1;
}