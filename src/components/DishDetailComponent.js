import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        console.log("DishDetail constructor");
    }

    renderComments(comments){
        if(comments != null){
            const comment = comments.map(comment => {
                return (
                    <li>
                        {comment.comment}<br/>
                        --{comment.author}, {comment.date}<br/><br/>
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

    render(){
        console.log("DishDetail Render");
        if(this.props.dish != null){
            const comments = this.renderComments(this.props.dish.comments)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <div>
                                <h5>Comments</h5>
                                {comments}
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
}

export default DishDetail;