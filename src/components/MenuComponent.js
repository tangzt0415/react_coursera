import React from "react";
import { Breadcrumb,BreadcrumbItem,CardTitle,Card,CardImg,CardImgOverlay } from 'reactstrap';
import { Link } from "react-router-dom";


    function RenderMenuItem({dish, onClick}){
        return(
            <Card>
                <Link to={`/menu/${dish.id}`} >                   
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>   
                </Link>
            </Card>
        );
    }
    //another functional component
    const Menu = (props) =>{
        const menu = props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5"> 
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        }); 

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                        {menu}
                </div>
            </div>
        );

    }
    //map to iterate into a list of items, arrow function for return, dish.id to uniquely identify each item in list

export default Menu;