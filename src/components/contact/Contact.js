import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function Contact(props) {
    return (<div>
        <Row className="mt-3">
            <Col>
                <h4>
                    Contact
                </h4>
            </Col>
        </Row>
        <Row className="mt-3">
            <Col>
                <Form>
                    <Row >
                        <Col>
                            <Form.Control type="text" placeholder="Your email" />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Your name" />
                        </Col>
                    </Row>
                    <Row className="mt-1">
                        <Col>
                            <Form.Control as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }} />
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col>
                Other Details
            </Col>
        </Row>


    </div>
    )
}