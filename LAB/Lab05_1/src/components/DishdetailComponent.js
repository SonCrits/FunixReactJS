import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle, NavItem } from 'reactstrap';

function RenderDish({dish}) {
    if(dish != null) {
        return(
            <Card className='col-12 col-md-5 m-1'>
                <CardImg width = '100%' src = {dish.image} alt = {dish.name} />
                <CardImgOverlay>
                    <CardTitle tag= 'h4' className='fw-bold'>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardImgOverlay> 
            </Card>
        );
    }

    else {
        return <div></div>;
    }
}

function RenderComments({comments}) {
    const dishComment = comments.map((cmt) => {
        return (
            <CardBody>
                <CardTitle>{cmt.comment}</CardTitle>
                <CardText>
                    --{cmt.author},
                    {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                    }).format(new Date(Date.parse(cmt.date)))}
                </CardText>
            </CardBody>
        );
    });
    return dishComment;
}

const  DishDetail = (props) => {
   if(props.dish != null) {
       return (
           <div className='container'>
               <div className='row'>
                   <RenderDish dish={props.dish} />
                   <Card className='col-12 col-md-5 m-1'>
                        <CardBody>
                            <CardTitle tag= 'h2'>Comments</CardTitle>
                            <RenderComments comments = {props.dish.comments} />
                        </CardBody>
                   </Card>                 
               </div>
           </div>
       )
   } else {
       return <div></div>
   }
}

export default DishDetail;
