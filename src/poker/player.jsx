import React from 'react';

export default class Player extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    debugger
    return (
      <div>{this.props.cards[0].show()}{this.props.cards[1].show()}</div>
    )
  }
}