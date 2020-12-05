import React from 'react'; 
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader} from 'reactstrap';
import { Link } from 'react-router-dom';    
import ModalBody from 'reactstrap/lib/ModalBody';
import { Control, Errors, LocalForm } from 'react-redux-form';
    function RenderCampsite({campsite}){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

    class CommentForm extends React.Component {
        constructor(props) {
            super(props);
            this.state= {
                isModalOpen: false,
            };
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        toggleModal() {
            this.setState({ isModalOpen: !this.state.isModalOpen });
        }

        handleSubmit(values) {
            console.log('Current state is: ' + JSON.stringify(values));
            alert('Current state is: ' + JSON.stringify(values));
        }


        render() {
            return(
                <React.Fragment>
                    <Button onClick={this.toggleModal} className="fa fa-pencil" outline>
                        Submit Comment
                    </Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="rating">Rating</label>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="author">Your Name</label>
                                    <Control.text
                                         model=".author"
                                         id="author"
                                         name="author"
                                         className="form-control"
                                         placeholder="author"
                                         validators={{
                                             minLength: minLength(2),
                                             maxLength: maxLength(15),
                                         }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: "Must be at least 2 characters",
                                            maxLength: "Must be 15 characters or less",
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment</label>
                                    <Control.textarea
                                        model=".comment"
                                        id="comment"
                                        name="comment"
                                        className="form-control"
                                        placeholder="Comment"
                                        rows="6"
                                    />
                                </div>
                                <Button type="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </React.Fragment>
            );
        }
    }
    
    function RenderComments({comments}){
        if(comments)
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(thing => {
                return (
                    <div style={{ marginBottom: "20px" }}>
                        {thing.text}
                        <br></br>
                        -- {thing.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(thing.date)))}
                    </div>
                );
            })}
            <CommentForm />
            </div>
        )
        return <div/>;
        
    }

    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    
    export default CampsiteInfo;