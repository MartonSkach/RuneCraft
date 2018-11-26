import React, { Component } from 'react';

class Champion extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={`/assets/portraits/${this.props.name}.png`} />
      </div>
    )
  }
}

export default Champion;