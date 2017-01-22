<?php
// this php file include function that running with out socket
// for sec we put card file in the cards.json
class cards
{
    public $cards = array(14);
    public function gencards($modes)
    {
        switch ($modes) {
        case 0:
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
