import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

    function RenderDish({dish}){
        return (
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}){
        if(comments != null){
            const comment = comments.map(comment => {
                return (
                    <li>
                        {comment.comment}<br/>
                        --{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}<br/><br/>
                    </li>
                );
            });
            return (
                <ul className="list-unstyled">
                    {comment}
                </ul>
            );
        }else{
            return <div></div>;
        }
    }

    function DishDetail(props){
        if(props.dish != null){
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <div>
                                <h5>Comments</h5>
                                <RenderComments comments={props.dish.comments}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

export default DishDetail;