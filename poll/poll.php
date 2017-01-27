<?php
session_start();
$username = $_POST['username'];
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
    $re = array();
    $timeout = 0;
    while ($timeout < 8) {
        $changes = file_get_contents('../json/changes.json');
        $changes = json_decode($changes);
        $changes = clean($changes);
        $data = array();
        for($x=0;$x<count($changes[1]);$x++){
            if($changes[1][$x][0] == $username){
                $data = $changes[1][$x];
                array_push($data,$x);
            }
        }
        if(count($data)>1){
            if ($data[1] == 0) {
                $timeout++;
                sleep(3);
            }
            else {
                for($x=0;$x<count($data[2]);$x++){
                    array_push($re,array($data[2][$x][0],$data[2][$x][1]));
                }
                $timeout = 10;
                $changes[1][$data[3]][1] = 0;
            }
        }else{
            sleep(3);
        }
    }
}else{
    $re = 'error';
}
if(count($re)<1){
    array_push($re,array('no change','no change'));
}
$hold = json_encode($changes);
file_put_contents('../json/changes.json', $hold);
$re = json_encode($re);
echo $re;
function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    }
    else {
        return false;
    }
}
function clean($changes){
    $t = time();
    $ptime = $changes[0][2];
    $change = $t - $ptime;
    if($change>=12500){
        $changes[0][2] = $t;
        $changes[0][0] = 0;
        $changes[0][1] = 0;
        $hold = json_encode($changes);
        file_put_contents('../json/changes.json', $hold);
    }else{
        $changes[0][2] = $t;
    }
    return $changes;
}