import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import React, {Component, useState} from 'react';
import DishDetail from "./DishdetailComponenet";


class Main extends Component { //lower letters tags are DOM tags
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  
  onDishSelect(dishId){
    this.setState({selectedDish: dishId}); //selected dish set to dish on click
}
  render(){
    return (
      <div> 
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Focus.io</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}
            onClick= {(dishId) => this.onDishSelect(dishId)} />
        <DishDetail 
            dish={this.state.dishes.filter((dish)=> dish.id == this.state.selectedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
