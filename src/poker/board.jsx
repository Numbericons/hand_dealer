import React from 'react';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.props.card.show()}</div>
    )
  }
}