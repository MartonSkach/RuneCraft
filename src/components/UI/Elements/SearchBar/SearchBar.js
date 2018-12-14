import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  handleInputChange = () => {
    this.props.updateSearchQuery(this.search.value);
  }

  render () {
    return (
      <form>
        <input 
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

SearchBar.propTypes = {
  updateSearchQuery: PropTypes.func.isRequired
}

export default SearchBar;