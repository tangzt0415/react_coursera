import React from "react";
import { CardText,CardBody,CardTitle,Card,CardImg,CardImgOverlay } from 'reactstrap';

    function RenderMenuItem({dish, onClick}){
        return(
            <Card onClick={()=> onClick(dish.id)}>                   
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>   
            </Card>
        );
    }
    //another functional component
    const Menu = (props) =>{
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5"> 
                    <RenderMenuItem dish={dish} onClick={props.onClick} />
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
    //map to iterate into a list of items, arrow function for return, dish.id to uniquely identify each item in list

export default Menu;