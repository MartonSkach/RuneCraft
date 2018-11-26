import React, { Component } from 'react';

import Aux from '../../hoc/Hoc';
import ChampionList from '../../components/ChampionList/ChampionList';

class RuneCraft extends Component {
  render() {
    return (
      <Aux>
        <div>RoleFilters</div>
        <ChampionList />
      </Aux>
    );
  }
}

export default RuneCraft;