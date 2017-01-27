<?php
$username = $_POST['username'];
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
    $re = array();
    $timeout = 0;
    while ($timeout < 15) {
        $changes = file_get_contents('../json/changes.json');
        $changes = json_decode($changes);
        $changes = clean($changes,$username);
        $data = array();
        $t = time();
        for($x=0;$x<count($changes[1]);$x++){
            if($changes[1][$x][0] == $username){
                $change = $t - $changes[1][$x][3];
                if($change >= 1450){
                    $changes[1][$x][2] = array();
                    $changes[1][$x][3] = $t;
                    $hold = json_encode($changes);
                    file_put_contents('../json/changes.json', $hold);
                }else{
                    $changes[1][$x][3] = $t;
                    $data = $changes[1][$x];
                    array_push($data,$x);
                }
            }
        }
        if(count($data)>1){
            if ($data[1] == 0) {
                $timeout++;
                sleep(4);
            }
            else {
                for($x=0;$x<count($data[2]);$x++){
                    array_push($re,array($data[2][$x][0],$data[2][$x][1]));
                }
                $timeout = 20;
                $changes[1][$data[4]][1] = 0;
            }
        }else{
            sleep(4);
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
function clean($changes,$username){
    $t = time();
    $ptime = $changes[0][3];
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
    $change = $t - $ptime;
    return $changes;
}