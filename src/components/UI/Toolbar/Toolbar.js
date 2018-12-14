import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HamburgerButton from '../Elements/HamburgerButton/HamburgerButton';
import '../../../styles/Toolbar.css';

class Toolbar extends Component {
  render() {
    return (
      <div className='toolbar'>
        <HamburgerButton toggleSidebar={this.props.toggleSidebar}/>
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}

export default Toolbar;