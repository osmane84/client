import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Moving from './components/Moving/Moving';

class App extends Component {
 
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <Route path='/' component={ Home } exact/> 
              <Route path='/demenagement' component={ Moving }/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
