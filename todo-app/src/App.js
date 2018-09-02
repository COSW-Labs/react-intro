import React, { Component } from 'react';
import {TodoList} from './TodoList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const todos = [{text:"Learn React", priority:5, dueDate:"2018-1-30" },
          {text:"Learn about APIs", priority:4, dueDate:"2018-3-30" },
          {text:"write TODO App", priority:3, dueDate:"2018-2-30" }];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="TODO React App">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <TodoList todoList={todos}/>
        </p>
      </div>
    );
  }
}

export default App;
