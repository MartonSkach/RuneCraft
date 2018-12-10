import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Champion.css';

class Champion extends Component {
  render() {
    return (
      <div className='championPortraitDiv'>
        <span>{this.props.name}</span>
        <img src={`/assets/portraits/${this.props.name.replace(`'`, ``)}.png`} />
      </div>
    )
  } 
}

Champion.propTypes = {
  name: PropTypes.string.isRequired
}

export default Champion;