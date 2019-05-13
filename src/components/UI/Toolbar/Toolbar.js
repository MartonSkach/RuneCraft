import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HamburgerButton from '../Elements/HamburgerButton/HamburgerButton';
import SearchBar from '../Elements/SearchBar/SearchBar';
import '../../../styles/Toolbar.css';

class Toolbar extends Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount() {
    window.addEventListener('resize', this.screenResizeHandler);
  }
  
  screenResizeHandler = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    return (
      <div className='toolbar'>
        <div className='logoWrapper'>
          <img className='logo' src={this.state.width > 768 ? '/assets/images/logo/RuneCraft.png' : '/assets/images/logo/RuneCraftLogo.png'} />
        </div>
        <div className='searchBarWrapper'>
          <SearchBar updateSearchQuery={this.props.updateSearchQuery}/>
        </div>
        <div className='hamburgerWrapper'>
          <HamburgerButton toggleSidebar={this.props.toggleSidebar}/>
        </div>
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired
}

export default Toolbar;