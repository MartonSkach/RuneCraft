import React, { Component } from 'react';

import Aux from '../../../hoc/Hoc';
import ChampionList from '../../ChampionList/ChampionList';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import RoleSelect from '../Elements/RoleSelect/RoleSelect';
import Disclaimer from '../Elements/Disclaimer/Disclaimer';
import '../../../styles/Layout.css';

class Layout extends Component {
  state = {
    sidebarVisible: false,
    searchQuery: '',
    checkedRoles: [],
    responseContent: null,
    error: null
  }

  sidebarDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sidebarVisible: !prevState.sidebarVisible};
    })
  }

  updateSearchQuery = (newSearchQuery) => {
    this.setState( {searchQuery: newSearchQuery} );
  }

  render () {
    return (
      <Aux>
        <Toolbar 
          toggleSidebar={this.sidebarDrawerToggleHandler} 
          updateSearchQuery={this.updateSearchQuery}
        />
        <Sidebar 
          sidebarVisibility={this.state.sidebarVisible} 
          toggleSidebar={this.sidebarDrawerToggleHandler}
        />
        <div className='contentWrapper'>
          <main className='content'>
            <RoleSelect />
            <ChampionList
              championList={this.getChampionList} 
              searchQuery={this.state.searchQuery} 
              />
            <Disclaimer />
          </main>
        </div>
      </Aux>
    )
  }
} 

export default Layout;