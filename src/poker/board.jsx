import React from 'react';

export default class Board extends React.Component {
  render() {
    return (
      <div>{this.props.card.show()}</div>
    )
  }
}