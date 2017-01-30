<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
    $timeout = 0;
    $re = array();
    while($timeout < 7){
        $list = file_get_contents('../json/poll/list.json');
        $list = json_decode($list);
        for($x=0;$x<count($list);$x++){
            if($list[$x][0] == $username){
                array_push($re,$list[$x]);
                array_splice($list,$x,1);
                $x--;
            }
            //clean error post to list.json
            else if($list[$x][0] == null){
                array_splice($list,$x,1);
                $x--;
            }
        }
        if(count($re)>0){
            $timeout = 10;
        }else{
            $timeout++;
            sleep(3);
        }
    }
}else{
    $re = 'error';
$username = $_POST['username'];
$re = false;
while($re = false){
  $changes = file_get_contents('../json/changes.json');
  $changes = json_decode($changes);
  if($changes[$username] == 0){
    sleep(3);
  }else{
    $re = true;
  }
}
if(count($re)<1){
    array_push($re,array($username,'timeout','timeout',time()));
}
$list = json_encode($list);
file_put_contents('../json/poll/list.json', $list);
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