import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Sidebar.css';
import Aux from '../../../hoc/Hoc';

class Sidebar extends Component {
  render () {
    return (
      <Aux>
        <div className='sideBarDrawerShader'
          onClick={this.props.toggleSidebar} 
          style={{
            display: this.props.sidebarVisibility ? 'inline' : 'none',
            opacity: this.props.sidebarVisibility ? '.5' : '0'
          }}
        ></div>
        <div className='sideBarDrawer'
          style={{
            left: this.props.sidebarVisibility ? '0' : '-100%',
            opacity: this.props.sidebarVisibility ? '1' : '0'
          }}
        >
        </div>
      </Aux>
    )
  }
}

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  sidebarVisibility: PropTypes.bool.isRequired
}

export default Sidebar;