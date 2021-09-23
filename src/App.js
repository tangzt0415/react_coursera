import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import React, {Component, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';

function App(){ //lower letters tags are DOM tags  
    return (
      <BrowserRouter>
        <div> 
          <Main />
        </div>
      </BrowserRouter>

    );
}

export default App;
