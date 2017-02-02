<?php
session_start();
$username = $_SESSION['username'];
session_write_close();