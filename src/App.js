import React, { Component } from 'react';
import routes from './routes'
import Header from './component/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-head'>
          <Header/>
        </div>
        <div className='App-below'>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
