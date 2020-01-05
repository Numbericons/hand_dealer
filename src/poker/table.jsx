import React from 'react';
import Deck from './deck';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      deck: new Deck()
    }
  }

  render(){
    return (
      <div>
        <div>Hello poker world 2!</div>
        {/* <div>this.deck</div> */}
      </div>
    )
  }
}

export default Table;