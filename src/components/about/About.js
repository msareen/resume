import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class About extends React.Component {
    render() {
        return (
                <Row className={this.props.className} >
                    <Col >
                        <h3>
                            About Me
                        </h3>
                        <p>
                            I am working as Software Architect and focus towards deliviring solution that make user life easy.
                        </p>
                    </Col>
                </Row>
        );
    }
}