import React, { Component } from 'react';
import {TodoList} from './TodoList';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from './TodoApp';

class App extends Component {
  render() {

    const todos = [];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="TODO React App">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <TodoApp/>
          
        </p>
      </div>
    );
  }
}

export default App;
