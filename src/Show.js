import React, { Component } from "react";
import {Route, Link, Switch, BrowserRouter} from 'react-router-dom';
import "./Show.css";
import hangmann from "./hangmann.jpg";
import Hangman from "./Hangman";
import Board from "./Board";
import lightsOut from "./lightsOut.jpg";

class Show extends Component {
 
  render() {
    return (
      <div className = "Home">
            <Route exact path = "/hangman" component = {Hangman}/>  
            <Route exact path = "/lightsOut" component = {Board}/>  

        <div className = "head">
           <h1>BRAINTRAIN</h1> 
        </div>

        <div className = "H">
            <div>
               <img  id = "HH" src = {hangmann} alt = 'hangman'/>  
            </div>
          
            <div className="wrap">
            <Link to = "/hangman"><button className ="B">HANGMAN</button></Link>
             </div>
        
        </div>    
        
        <div className = "L">
            <div >
               <img id = "LL" src = {lightsOut} alt = 'lightsOut'/>
            </div>
            
            <div className="wrap">
               <Link to = "/lightsOut"><button className="B">LIGHTS OUT</button></Link>
             </div>

        </div>
        
      </div>
    );
  }
}

export default Show;