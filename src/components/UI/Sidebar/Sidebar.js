import React from 'react';

import '../../../styles/Sidebar.css';
import Aux from '../../../hoc/Hoc';

const sidebar = () => (
  <Aux>
    <div className='sideBarDrawerShader'></div>
    <div className='sideBarDrawer'>
      <p>SIDE</p>
      <p>Bar</p>
    </div>
  </Aux>
);

export default sidebar;