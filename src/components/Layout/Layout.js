import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Hoc';
import Toolbar from '../UI/Toolbar/Toolbar';
import '../../styles/Layout.css';
import Sidebar from '../UI/Sidebar/Sidebar';

class Layout extends Component {
  state = {
    sidebarVisible: true
  }

  sidebarDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sidebarVisible: !prevState.sidebarVisible};
    })
  }

  render () {
    let sidebar = null;
    if (this.state.sidebarVisible) {
      sidebar = <Sidebar 
      sidebarVisibility={this.state.sidebarVisible} 
      toggleSidebar={this.sidebarDrawerToggleHandler}
      />
    }
    return (
      <Aux>
        <Toolbar toggleSidebar={this.sidebarDrawerToggleHandler} />
        {sidebar}
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