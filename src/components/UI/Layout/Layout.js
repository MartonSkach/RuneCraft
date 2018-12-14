import React, { Component } from 'react';

import Aux from '../../../hoc/Hoc';
import ChampionList from '../../ChampionList/ChampionList';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import '../../../styles/Layout.css';
import SearchBar from '../Elements/SearchBar/SearchBar';
import RoleSelect from '../Elements/RoleSelect/RoleSelect';

class Layout extends Component {
  state = {
    sidebarVisible: false,
    searchQuery: '',
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
        <Toolbar toggleSidebar={this.sidebarDrawerToggleHandler} />
        <Sidebar 
          sidebarVisibility={this.state.sidebarVisible} 
          toggleSidebar={this.sidebarDrawerToggleHandler}
        />
        <main className='content'>
          <SearchBar updateSearchQuery={this.updateSearchQuery} />
          <RoleSelect />
          <h1>{this.state.searchQuery}</h1>
          <ChampionList
            championList={this.getChampionList} 
            searchQuery={this.state.searchQuery} 
          />
        </main>
      </Aux>
    )
  }
} 

export default Layout;