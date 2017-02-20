<?php
session_start();
// $username = $_SESSION['username'];
session_write_close();
file_get_contents('./json/rooms/rooms.json');