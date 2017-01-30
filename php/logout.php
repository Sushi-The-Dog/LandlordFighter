<?php
session_start();
$re = 0;
session_destroy();
$re = 1;
echo $re;