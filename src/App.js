import React, { Component } from 'react';
import Dashboard from './modules/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Foodistaan</h1>
          <p>Menu and Cart.</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
