import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import React, {Component, useState} from 'react';

class App extends Component { //lower letters tags are DOM tags  
  render(){
    return (
      <div> 
        <Main />
      </div>
    );
  }
}

export default App;
