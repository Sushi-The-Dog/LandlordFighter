<?php
// this php file include function that running with out socket
// for sec we put card file in the cards.json
class cards
{
    private $cards = array();
    public function gencards($modes)
    {
        switch ($modes) {
        case 0:
        for ($i = 0;$i < 52;++$i) {
            $arr[$i] = $i + 1;
        }
        $N = 100;
        for ($i = 0;$i < $N;++$i) {
            $a = mt_rand(0, 51);
            $b = mt_rand(0, 51);
            $temp = $arr[$a];
            $arr[$a] = $arr[$b];
            $arr[$b] = $temp;
        }
        break;
        default:
        break;
        }

        // array_push($this->cards, 15);
        // var_dump($this->cards);
    }
}
function pregmatch($string)
{
    if (preg_match('/^[a-zA-Z0-9_]+$/', $string)) {
        return true;
    } else {
        return false;
    }
}
