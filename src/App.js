import React, { Component } from 'react';

import Layout from  './components/Layout/Layout';
import RuneCraft from './containers/RuneCraft/RuneCraft';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <RuneCraft />
        </Layout>
      </div>
    );
  }
}

export default App;