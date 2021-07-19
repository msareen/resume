import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends React.Component {
    render() {
        return (
                <Row className={this.props.className} >
                    <Col md={6}>
                        <h3>
                            About Me
                        </h3>
                        <p>
                            I am working as Software Architect and focus towards deliviring solution that make user life easy.
                        </p>
                    </Col>
                    <Col md={{span:5,offset:1}} className="ml-5">
                        <div className="mt-2">
                            <span >Email</span>
                            <span className="m-5 text-start">manasvi.sareen@outlook.com</span>
                        </div>
                        <div>
                            <span >Phone</span>
                            <span className="m-5 text-start">+91 9873579078</span>
                        </div>
                        <div>
                            <span >Location</span>
                            <span className="m-5 text-start">New Delhi</span>
                        </div>
                       
                    </Col>
                </Row>
        );
    }
}