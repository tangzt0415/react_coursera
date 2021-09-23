import Menu from './MenuComponent';
import Home from './HomeComponent.js';
import {DISHES} from '../shared/dishes';
import React, {Component, useState} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from "./DishdetailComponenet";
import { Switch, Route, Redirect } from 'react-router';



class Main extends Component { //lower letters tags are DOM tags
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  render(){

    const HomePage = () =>{
      return(
        <Home />
      )
    }
    return (
      <div> 
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
