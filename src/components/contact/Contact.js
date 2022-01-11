import './Contact.scss'
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact(props) {
    return (<div>
        <Row className='mt-3'>
            <Col>
                <h4>
                    Contact
                </h4>
                <Row className="mt-3">
                    <Col>
                        <Form action="mailto:example@example.com?subject=Test" method="post" enctype="text/plain">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control name="name" type="name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className='mt-2'>
                                <Form.Control name="email" type="email" placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group as={Col} id="formGridQuery" className='mt-2'>
                                <Form.Control name="query" as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3'>
                                Submit
                            </Button>
                        </Form >
                    </Col>
                </Row>
            </Col>
            <Col>
                <h4>
                    Other Details
                </h4>
                <Row className="mt-3">
                    <Col>
                        <h6>Prefered location:</h6>
                    </Col>
                    <Col >
                        :
                    </Col>
                    <Col>
                        <label>Banglore</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Languages</h6>
                    </Col>
                    <Col >
                        :
                    </Col>
                    <Col>
                        <label>Hindi,English</label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Email</h6>
                    </Col>
                    <Col >
                        :
                    </Col>
                    <Col>
                        <label className='breakWord'>manasvi.sareen@outlook.com</label>
                    </Col>
                </Row>
            </Col>
        </Row>


    </div>
    )
}