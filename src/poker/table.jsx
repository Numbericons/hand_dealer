import React from 'react';
import Deck from './deck';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck: new Deck()
    }
  }

  makeDeck(){

  }

  render(){
    let card = `${this.state.deck.cards[0].rank}${this.state.deck.cards[0].suit}`
    return (
      <div>
        <div>{card}</div>
      </div>
    )
  }
}

export default Table;