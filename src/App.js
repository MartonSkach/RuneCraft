import React, { Component } from 'react';

import Layout from  './components/UI/Layout/Layout';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background" />
        <Layout />
      </div>
    );
  }
}

export default App;