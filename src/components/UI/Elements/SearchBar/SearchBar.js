import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/SearchBar.css';
class SearchBar extends Component {

  handleInputChange = () => {
    this.props.updateSearchQuery(this.search.value);
  }

  render () {
    return (
      <div>
        <input
          className='searchBar' 
          placeholder="Find a champion"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired
}

export default SearchBar;