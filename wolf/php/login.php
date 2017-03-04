<?php

session_start();
$emails = $_POST['emails'];
$forms = file_get_contents('../json/form.json');
$forms = json_decode($forms);
$back = 3;
if(pregmatch($emails, '/^[a-zA-Z0-9.-_@]+$/')){
    for($x=0;$x<count($forms);$x++){
        if($forms[$x][0] == $emails){
            $back = 1;
            // $_SESSION['email'] = $emails;
        }
    }
}else{
    $back = 0;
}
echo $back;


function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    }
    else {
        return false;
    }
}