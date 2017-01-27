<?php
$s = array();
$changes=array("Volvo"=>"XC90","BMW"=>"X5");
$hold = json_encode($changes);
file_put_contents('../json/changes.json', $hold);
?>