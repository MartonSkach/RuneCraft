import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RoleSelect extends Component {
  render () {
    return (
      <form>
      <div className="radio">
        <label>
          <input type="radio" value="option1" />
          Option 1
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" />
          Option 2
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option3" />
          Option 3
        </label>
      </div>
    </form>
    )
  }
}

RoleSelect.propTypes = {

}

export default RoleSelect