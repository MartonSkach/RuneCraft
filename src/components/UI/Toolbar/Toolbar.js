import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className='toolbar'>
        <button onClick={this.props.toggleSidebar}>SIDEBAR</button>
        <p>Hamburger, Logo</p>
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}

export default Toolbar;