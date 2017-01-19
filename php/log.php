<?php
session_start();
if(!isset($_COOKIE['username'])){
  $username = $_POST['username'];
  $password = $_POST['password'];
  $contentd = file_get_contents('../json/users.json');
  $data = json_decode($contentd);
  // process
  $re = json_encode($data);
  file_put_contents('../json/users.json', $re);
}else{
  $eusername = $_COOKIE['username'];
  $epassword = $_COOKIE['password'];
  $key = $_COOKIE['key'];
  $contentd = file_get_contents('../json/users.json');
  $data = json_decode($contentd);
  // process
  $username = decode($eusername,"wengye");
  $length = count($data);
  //BEARKPOINT
  for($x=0;$x<$length;$x++){
    if($data[$x][0] == $username){

      break;
    }
  }
  $password = decode($epassword,$key);
  $re = json_encode($data);
  file_put_contents('../json/users.json', $re);

}
//加密 @author Anyon
function encode($string, $skey) {
    $strArr = str_split(base64_encode($string));
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value){
      $key < $strCount && $strArr[$key].=$value;
    }
    return str_replace(array('=', '+', '/'), array('O0O0O', 'o000o', 'oo00o'), join('', $strArr));
}
//解密
function decode($string, $skey) {
    $strArr = str_split(str_replace(array('O0O0O', 'o000o', 'oo00o'), array('=', '+', '/'), $string), 2);
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value){
      $key <= $strCount  && isset($strArr[$key]) && $strArr[$key][1] === $value && $strArr[$key] = $strArr[$key][0];
    }
    return base64_decode(join('', $strArr));
}
 ?>
