 import './App.css';
import React, { Component } from 'react';
import Hangman from './Hangman';
import Board from './Board';
import Show from './Show';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Route exact path = "/" component = {Show}/>  
        <Route exact path = "/hangman" component = {Hangman}/>  
        <Route exact path = "/lightsOut" component = {Board}/>  
      </div>
    );
  }
}


export default App;
