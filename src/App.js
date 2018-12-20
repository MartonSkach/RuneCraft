import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from  './components/UI/Layout/Layout';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="background" />
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;