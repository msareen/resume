import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function AboutMe(props) {
    return (
        <Row className={props.className} >
            <Col >
                <h3>
                    About Me
                </h3>
                <p>
                    {props.aboutMedata.detailDescription}
                </p>
            </Col>
        </Row>
    );
}