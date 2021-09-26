import React from "react";
import { Breadcrumb,BreadcrumbItem,CardTitle,Card,CardImg,CardImgOverlay } from 'reactstrap';
import { Link } from "react-router-dom";
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    function RenderMenuItem({dish, onClick}){
        return(
            <Card>
                <Link to={`/menu/${dish.id}`} >                   
                <CardImg src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay className="ml-5">
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>   
                </Link>
            </Card>
        );
    }
    //another functional component
    const Menu = (props) =>{
        const menu = props.dishes.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5"> 
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });
        
        if (props.dishes.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.dishes.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            );
        }
        else{
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

    }
    //map to iterate into a list of items, arrow function for return, dish.id to uniquely identify each item in list

export default Menu;