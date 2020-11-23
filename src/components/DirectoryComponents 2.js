import React, {Component} from 'react';
import Form from 'reactstrap/lib/Form';
import {Card,CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap'

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id}className="col-md-5">
                    <card>
                        <Cardimg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;