import React from 'react';

function cardStyle(posX, posY){
  return {
    backgroundPositionX: posX,
    backgroundPositionY: posY
  }
}
export default function Player(props) {
  const card1 = cardStyle(props.cards[0].img_pos_x, props.cards[0].img_pos_y);
  const card2 = cardStyle(props.cards[1].img_pos_x, props.cards[1].img_pos_y);
  return (
    <div className='hand'>
      <div className='hand-cards'>
        <div className='card' style={card1}></div>
        <div className='card' style={card2}></div>
      </div>
      <h4>Hand info</h4>
    </div>
  )
}