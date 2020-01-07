import React from 'react';

export default class Player extends React.Component {
  constructor(props){
    super(props);
  }

  // showBoardCard(pos) {
  //   let card = document.querySelector(`.table-felt-board-card-${pos + 1}`);
  //   this.boardCards[pos].render(card, "72px", "106px", true)
  // }

  render(){
    return (
      <div>{this.props.cards[0].show()}{this.props.cards[1].show()}</div>
    )
  }
}