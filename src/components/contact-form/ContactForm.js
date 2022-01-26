import './ContactForm.scss'
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ContactForm(props) {
    return (<div>
                <h4 title="This will open your default email client">
                    Contact
                </h4>
                <Row >
                    <Col>
                        <Form action={`mailto:${props.email}?subject='Resume Query'`} method="post" enctype="text/plain">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Control name="name" type="name" placeholder="Your name" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridEmail" className='mt-2'>
                                <Form.Control name="email" type="email" placeholder="your email" title="your correspondence email"
                                />
                            </Form.Group>
                            <Form.Group as={Col} id="formGridQuery" className='mt-2'>
                                <Form.Control name="query" as="textarea" placeholder="your query" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mt-3'>
                                Submit
                            </Button>
                        </Form >
                    </Col>
                </Row>
         
    </div>
    )
}
