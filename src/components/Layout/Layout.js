import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Hoc';
import Toolbar from '../UI/Toolbar/Toolbar';
import '../../styles/Layout.css';
import Sidebar from '../UI/Sidebar/Sidebar';

class Layout extends Component {
  state = {
    sidebarVisible: false
  }

  sidebarDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sidebarVisible: !prevState.sidebarVisible};
    })
  }

  render () {
    return (
      <Aux>
        <Toolbar />
        <Sidebar />
        <main className='content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
} 

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout;