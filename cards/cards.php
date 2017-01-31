<?php
//collcetion of cards functions, use require_once in other php file to call it
function gencards(){
    $cards = file_get_contents('../json/cards.json');
    $cards = json_decode($cards);
}
function nextcard($type){
    switch($type){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
    }
    $cards = file_get_contents('../json/cards.json');
    $cards = json_decode($cards);
}
function burncard(){
    $cards = file_get_contents('../json/cards.json');
    $cards = json_decode($cards);
}