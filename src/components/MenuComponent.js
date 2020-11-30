import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

        function RenderMenuItem({dish, getDishId}){
            return (
            <Card onClick={() => getDishId(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
            );
        }

        const Menu = (props) =>{
            const menu = props.dishes.map((dish) => {
               return (
                   <div key={dish.id} className="col-12 col-md-5 m-1">
                       <RenderMenuItem dish={dish} getDishId={props.getDishId}/> 
                   </div>
               );
            });
   
            return (
               <div className="container">
                   <div className="row">
                       {menu}
                   </div>
                   <div className="row">
                       
                   </div>
               </div>
            );
        }

export default Menu;