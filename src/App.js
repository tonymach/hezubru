import React, { Component } from 'react';
import './App.css';
import Link from './Link.js';
var Blink = require('react-blink');
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" >
            <img src="img/hezu.png" className="hezu"/>
        </div>
        <div className="container">
            <Link where="" what="Life within brackets"/>
            <Link where="https://instagram.com/hezubru" what="@hezubru"/>
            <Link where="https://medium.com/@tonymach" what="Mountain goat"/>


          <div />

        </div>
      </div>
    );
  }
}

export default App;
