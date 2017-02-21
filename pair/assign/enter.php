<?php
$username = $_POST['username'];
file_get_contents('/LandlordFighter/json/rooms/rooms.json');

$rooms = array();
$room = [0,'Landlord',[0,'normal'],23];
array_push($rooms,$room);
$room = [0,'Landlord',[0,'normal'],24];
array_push($rooms,$room);