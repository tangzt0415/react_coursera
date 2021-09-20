import React, {Component} from "react";
import { CardText,CardBody,CardTitle,Card,CardImg,CardImgOverlay } from 'reactstrap';
import DishDetail from "./DishdetailComponenet";

class Menu extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
        console.log('Menu Component Constructor called');
    }
        componentDidMount(){
            console.log('Menu Component DID MOUNT called');

        }

    
    onDishSelect(dish){
        this.setState({selectedDish: dish}); //selected dish set to dish on click
    }

    //map to iterate into a list of items, arrow function for return, dish.id to uniquely identify each item in list
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card onClick={() => this.onDishSelect(dish)}>                   
                        <CardImg  classNmae= 'ml-5'width="60%"src={dish.image} alt={dish.name} />
                        <CardImgOverlay className="ml-5">
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }); 

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    <DishDetail dish = {this.state.selectedDish}></DishDetail>
                </div>
            </div>
        );
    }
}

export default Menu;