<?php
session_start();
$username = $_SESSION['username'];
session_write_close();
$data = $_POST['data'];
$data = json_decode($data);