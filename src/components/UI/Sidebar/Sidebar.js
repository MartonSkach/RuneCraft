import React from 'react';
import PropTypes from 'prop-types';

import '../../../styles/Sidebar.css';
import Aux from '../../../hoc/Hoc';

const sidebar = (props) => (
  <Aux>
    <div onClick={props.toggleSidebar} className='sideBarDrawerShader'></div>
    <div className='sideBarDrawer'>
      <p>SIDE</p>
      <p>Bar</p>
    </div>
  </Aux>
);

sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
}

export default sidebar;