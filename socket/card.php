<?php
class card
{
  protected $color;
  protected $number;
  /**
   * construct for each card
   */
  public function __construct($colors, $number)
  {
    $this->colors = $colors;
    $this->number = $number;
  }
  /**
   * @return the color of the card
   */
  public function getColor()
  {
    return $this->colors;
  }
  /**
   * @return the number on the card
   */
  public function getNum()
  {
    return $this->number;
  }
  /**
   * @return a json for this card
   */
   public function getJson(){
     $array = array(
       'color' => $this->getColor(),
       'number' => $this->getNum()
     );
     return json_encode($array);
   }
}
