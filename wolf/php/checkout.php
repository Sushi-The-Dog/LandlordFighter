<?php
session_start();
if($_SESSION['judge'] == 'mima'){
    $table = $_POST['table'];
    $stat = $_POST['stat'];
    $forms = file_get_contents('../json/form.json');
    $forms = json_decode($forms);
    $back = 0;
    $stat = json_decode($stat);
    for($x=0;$x<count($forms);$x++){
        if($forms[$x][2][0] == $table){
            for($y=0;$y<count($stat);$y++){
                if($stat[$y]->email == $forms[$x][0]){
                    switch($stat[$y]->win){
                        case 1:
                            $forms[$x][1] += ($forms[$x][2][1]*2);
                            $forms[$x][2][0] = 0;
                            $forms[$x][2][1] = 0;
                            break;
                        case 0:
                            $forms[$x][2][0] = 0;
                            $forms[$x][2][1] = 0;
                            break;
                        case 2:
                            $back = 1;
                            break;
                }
            }
        }
    }
}

if($back == 1){
    echo 1;
}else{
    $forms = json_encode($forms);
    file_put_contents('../json/form.json',$forms);
    echo 0;
}
}