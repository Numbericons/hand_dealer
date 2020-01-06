import React from 'react';
import Deck from './deck';

export default class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck: new Deck()
    }
    this.dealCards();
  }

  playerArr(){
    let arr = [];
    for(let i=0; i < 10; i++) { arr.push([]) };
    for(let j=0; j < 10; j++) { arr[j] = this.state.deck.draw() };
    for(let k=0; k < 10; k++) { arr[k] = this.state.deck.draw() };
    this.players = arr;
  }
  
  dealCards(){
    this.playerArr();
    this.dealBoard();
  }
  
  dealBoard(){
    let arr = [];
    for (let z = 0; z < 5; z++) { arr[z] = this.state.deck.draw() };
    this.state.board = arr;
  }

  render(){
    let pCard = this.players[0].show();
    return (
      <div>
        <div>{pCard}</div>
      </div>
    )
  }
}