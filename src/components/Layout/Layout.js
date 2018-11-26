import React from 'react';

import Aux from '../../hoc/Hoc';
import './Layout.css'

const layout = ( props ) => (
  <Aux>
    <div>Menu controls, Search bar, Login</div>
    <main className='content'>
      {props.children}
    </main>
  </Aux>
);

export default layout;