import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TestComponent from './components/TestComponent/TestComponent.js'

class App extends Component 
{

  constructor(props)
  {
    super(props)

    this.apiUrl = 'http://localhost:8000'
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <TestComponent apiUrl={this.apiUrl} />

      </div>
    );
  }
}

export default App;
