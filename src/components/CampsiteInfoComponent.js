import React,{Component} from 'react';
import {Card,CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class CampsiteInfo extends Component{
    constructor(props){
        super(props);
    }

    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    
    renderComments(comments){
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
            </div>
        )
        return(
            <div/>
        )
    }

    render(){
        if(this.props.campsite){
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
                );
            }
            return <div></div>
    }
};

export default CampsiteInfo;