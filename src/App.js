import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from './shared/dishes';
import React, {Component, useState} from 'react';

class App extends Component { //lower letters tags are DOM tags
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  
  render(){
    return (
      <div> 
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Focus.io</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
