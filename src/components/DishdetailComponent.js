import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null) {
            var commentDish = dish.comments.map((cmt) => {
                return (
                    <CardBody>
                        <CardTitle>{cmt.comment}</CardTitle>
                        <CardText>
                            -- {cmt.author} , 
                                {new Intl.DateTimeFormat("en-US",{
                                    year : "numeric",
                                    month : "short",
                                    day : "2-digit"
                                }).format(new Date(Date.parse(cmt.date)))}                           
                        </CardText>
                    </CardBody>
                );
            });
            
            return (
                <div className='row'>
                    <Card className='col-12 col-md-5'>
                        <CardImg width = "100%" src= {dish.image} alt= {dish.name} />
                        <CardImgOverlay>
                            <CardTitle tag="h4" className='fw-bold'>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardImgOverlay>
                    </Card>
                    <Card className='col-12 col-md-5 border-0'>
                        <CardText>{commentDish}</CardText>
                    </Card>
                </div>
            );
        }

        else {
            return <div></div>
        }
    } 

    render () {
        return <div className='container'>{this.renderDish(this.props.dish)}</div>
    }
}

export default DishDetail;
