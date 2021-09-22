import React, {Component} from "react";
import { CardText,CardBody,CardTitle,Card,CardImg,CardImgOverlay } from 'reactstrap';

class Menu extends Component{
    
    constructor(props){
        super(props);

        console.log('Menu Component Constructor called');
    }
        componentDidMount(){
            console.log('Menu Component DID MOUNT called');

        }


    //map to iterate into a list of items, arrow function for return, dish.id to uniquely identify each item in list
    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5"> 
                    <Card onClick={()=> this.props.onClick(dish.id)}>                   
                        <CardImg src={dish.image} alt={dish.name} />
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
            </div>
        );
    }
}

export default Menu;