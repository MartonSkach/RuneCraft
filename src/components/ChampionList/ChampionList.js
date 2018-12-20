import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Champion from './Champion/Champion';
import axios from './../../axios-orders';
import '../../styles/ChampionList.css';

class ChampionList extends Component {

  state = {
    champList: null,
    error: false,
    errorMessage: null
  }

  componentDidMount () {
    axios.get('https://runemock-10237.firebaseio.com/champions.json/')
    .then( response => {
      // Trial delay for loader
      setTimeout(
        function() {
          this.setState( { champList: response.data } );
        }
        .bind(this),
        1500
        );
    } )
    .catch( error => {
      this.setState( { error: true }, {errorMessage: error} )
    } )
  }

  render() {
    if (this.state.champList !== null) {
      let championRenderList = [];
      this.state.champList.forEach(element => {
      if (element.name.toUpperCase().includes(this.props.searchQuery.toUpperCase())) {
        championRenderList.push(element.name);
      }
     });
      return (
        <div className='championList'>
          {championRenderList.map((element) =>
            <div key={element} >
              <Champion name={element}/>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div className="loader">Loading...</div>
      )
    }
  }
}

ChampionList.propTypes = {
  searchQuery: PropTypes.string.isRequired
}

export default ChampionList; 