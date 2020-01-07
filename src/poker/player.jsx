import React from 'react';

export default class Player extends React.Component {
  constructor(props){
    super(props);
    this.cards = this.props.cards;
  }

  render(){
    return (
      <div>{this.cards[0].show()}</div>
    )
  }
}