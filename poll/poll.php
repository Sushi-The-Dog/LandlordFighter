<?php
$username = $_POST['username'];
$changes = file_get_contents('../json/changes.json');
$changes = json_decode($changes);
$re = false;
while($re = false){
  if($changes[$username] == 0){
    sleep(3);
  }else{
    $re = true;
  }
}
echo 'test';
 ?>
