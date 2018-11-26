import React from 'react';

import Aux from '../../hoc/Hoc';

const layout = ( props ) => (
  <Aux>
    <div>Champion list, Top drawer, Search bar</div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;