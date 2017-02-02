<?php
//wheels
function checkgamestats(){
    
}
//cards functions
function gencards(){
    //H = heart, S = space, C = club, D = dimond
    $colors = array('H','S','C','D');
    $cards = array();
    for($x=0;$x<13;$x++){
        for($y=0;$y<4;$y++){
            array_push($cards, array($colors[$y],$x));
        }
    }
    //random
    $cards = randomcards($cards);
    $cards = json_encode($cards);
    file_put_contents('../json/cards.json', $cards);
}
//swing cards
function randomcards($arr){
    for($i=0;$i<52;$i++){
        $arr[$i]=$i+1;
    }
    $N = 100;              //假设重复对调 100 次
    for($i=0;$i<$N;$i++)
    {
        $a = mt_rand(0, 51);//随机选取两个单元下标
        $b = mt_rand(0,51);//区间范围 0 ~ 51
        $temp = $arr[$a];     //经典的两数交换
        $arr[$a] = $arr[$b];
        $arr[$b] = $temp;
    }
    return $arr;
}