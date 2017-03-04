<?php
session_start();
$bid = $_POST['chips'];
$table = $_POST['table'];
$email = $_SESSION['email'];
$forms = file_get_contents('../json/form.json');
$forms = json_decode($forms);
$back = 3;
for($x=0;$x<count($forms);$x++){
    if($forms[$x][0] == $email){
        $forms[$x][1] -= intval($bid);
        $forms[$x][2][0] = intval($table);
        $forms[$x][2][1] = intval($bid);
        $back = 1;
    }
}
$forms = json_encode($forms);
file_put_contents('../json/form.json',$forms);
echo $back;
if($back == 1){
    session_destroy();
}
function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    }
    else {
        return false;
    }
}