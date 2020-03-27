import React, {Component} from "react";
import {Accordion,Card,Button} from 'react-bootstrap';
import {timeConverter} from "../util/Util";

export default class AccordionComponent extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Accordion defaultActiveKey="1">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {timeConverter(this.props.maintext)}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>

                            Cases : {this.props.cases} <br/>
                            Deaths : {this.props.deaths} <br/>
                            Recovered : {this.props.recovered}

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }


}
