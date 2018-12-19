import React, { Component } from 'react';

import Aux from '../../../hoc/Hoc';
import ChampionList from '../../ChampionList/ChampionList';
import Toolbar from '../Toolbar/Toolbar';
import Sidebar from '../Sidebar/Sidebar';
import RoleSelect from '../Elements/RoleSelect/RoleSelect';
import Disclaimer from '../Elements/Disclaimer/Disclaimer';
import axios from '../../../axios-orders';
import '../../../styles/Layout.css';

class Layout extends Component {
  state = {
    sidebarVisible: false,
    searchQuery: '',
    checkedRoles: [],
    responseContent: null
  }

  sidebarDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {sidebarVisible: !prevState.sidebarVisible};
    })
  }

  updateSearchQuery = (newSearchQuery) => {
    this.setState( {searchQuery: newSearchQuery} );
  }

  riotApiTrialTwo = () => {
    const invocation = new XMLHttpRequest();
    const url = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/nymsand';

    invocation.open('GET', url, true);
    invocation.setRequestHeader("Origin", "https://developer.riotgames.com");
    invocation.setRequestHeader("Accept-Charset", "application/x-www-form-urlencoded; charset=UTF-8");
    invocation.setRequestHeader("X-Riot-Token", "RGAPI-36b0bc55-a1aa-4f45-96e3-f24d3d4f25fd");
    invocation.setRequestHeader("Accept-Language", "en-GB,en-US;q=0.9,en;q=0.8,hu;q=0.7");
    invocation.setRequestHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36");
    invocation.send();
  }

  riotApiTrial = () => {
    axios.get('https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/nymsand', {
      headers: {
        "X-Riot-Token": "RGAPI-36b0bc55-a1aa-4f45-96e3-f24d3d4f25fd",
        "Origin": "https://developer.riotgames.com",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,hu;q=0.7",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36"
      }
    })
    .then( response => {
      // Trial delay for loader
      this.setState({ responseContent: response.data })
    } )
    .catch( error => {
      console.log(error);
    } )
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
            <button onClick={this.riotApiTrial}>GET SOME</button>
            <button onClick={this.riotApiTrialTwo}>GET SOME Other</button>
            <p>
              Data: {this.state.responseContent}
            </p>
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