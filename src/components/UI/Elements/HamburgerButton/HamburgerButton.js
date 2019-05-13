import React from 'react';
import PropTypes from 'prop-types';

import '../../../../styles/HamburgerButton.css';

const hamburgerButton = (props) => (
  <div className="hamburgerButton" onClick={props.toggleSidebar}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

hamburgerButton.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}

export default hamburgerButton;