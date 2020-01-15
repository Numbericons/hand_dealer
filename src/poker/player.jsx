import React from 'react';
const Hand = require('pokersolver').Hand;

function cardStyle(posX, posY){
  return {
    backgroundPositionX: posX,
    backgroundPositionY: posY
  }
}

function handVal(card1, card2, board) {
  let handArr = [`${card1.rank}${card1.suit}`, `${card2.rank}${card2.suit}`];
  for (let i = 0, len = board.length; i < len; i++) {
    handArr.push(`${board[i].rank}${board[i].suit}`)
  }
  return Hand.solve(handArr);
}

export default function Player(props) {
  const card1 = cardStyle(props.cards[0].img_pos_x, props.cards[0].img_pos_y);
  const card2 = cardStyle(props.cards[1].img_pos_x, props.cards[1].img_pos_y);
  const handRank = handVal(props.cards[0], props.cards[1], props.board);
  return (
    <div className='hand'>
      <div className='hand-cards'>
        <div className='card' style={card1}></div>
        <div className='card' style={card2}></div>
      </div>
      <h4>{handRank}</h4>
    </div>
  )
}