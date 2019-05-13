import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/RoleSelect.css';

class RoleSelect extends Component {
  
  handleCheckboxChange = () => {
    console.log(this.filter)
  }
  render () {
    return (
      <div className="filterButtonsWrapper">
        <div className="radio">
          <label>
            <input 
              type="checkbox" 
              value="Mage"
              ref={input => this.filter = input} 
              onChange={this.handleCheckboxChange} />
            Mage
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="checkbox" 
              value="Tank"
              ref={input => this.filter = input} 
              onChange={this.handleCheckboxChange} />
            Tank
          </label>
        </div>
        <div className="radio">
          <label>
            <input 
              type="checkbox" 
              value="Kiscica" 
              ref={input => this.filter = input}
              onChange={this.handleCheckboxChange} />
            Kiscica
          </label>
        </div>
      </div>
    )
  }
}

RoleSelect.propTypes = {

}

export default RoleSelect