import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, Col, Label, Modal, ModalHeader, ModalBody, Row} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

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

    function RenderComments({comments, addComment, dishId}){
        const comment = comments.map(comment => {
            return (
                <li>
                    {comment.comment}<br/>
                    --{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}<br/><br/>
                </li>
            );
        });
        return (
            <>
                <ul className="list-unstyled">
                    {comment}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </>
        );
    }

    function DishDetail(props){
        if(props.dish != null){
            return (
                <div className="container">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to={'/menu'}>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <div>
                                <h5>Comments</h5>
                                <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
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

    const required = (name) => name && name.length;
    const minLen = (len) => (name) => !name || name.length>=len;
    const maxLen = (len) => (name) => name && name.length<=len;

    class CommentForm extends Component{
        
        constructor(props){
            super(props);
            this.state={
                isModalOpen: false
            }
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        
        toggleModal(){
            this.setState({
                isModalOpen: !this.state.isModalOpen
            })
        }

        handleSubmit(values){
            this.toggleModal();
            this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        }

        render(){
            return (
                <>
                    <Button outline onClick={this.toggleModal}>
                        <span className="fa fa-edit"></span>
                        <span> Submit Comment</span>
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values) }>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Name" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".name" id="name" name="name" placeholder="Your Name" className="form-control" validators={{required, minLen:minLen(3), maxLen:maxLen(15)}}></Control.text>
                                        <Errors className="text-danger" model=".name" show="touched" messages={{required: 'Required field. ', minLen: 'Must be greater than 2 characters', maxLen: 'Must be 15 characters or less'}}/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="Comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </>
            );
            return (<h1>Hello</h1>);
        }
    }

export default DishDetail;