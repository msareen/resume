import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default class Skills extends React.Component {
    render() {
        return (
            <div className={this.props.className, "p-2"}>
                <Row >
                    <Col>
                        <h4>Professional Skills</h4>
                    </Col>
                </Row>
                <Row className="gx-3">
                    <Col className="p-2">
                        <h6>test</h6>
                        <ProgressBar variant='success' now={(60)} />
                    </Col>
                    <Col className="p-2">
                        <h6>test</h6>
                        <ProgressBar animated now={40} />
                    </Col>
                </Row>
                <Row className="gx-3">
                    <Col className="p-2">
                        <h6>test</h6>
                        <ProgressBar animated now={60} />
                    </Col>
                    <Col className="p-2">
                        <h6>test</h6>
                        <ProgressBar animated now={40} />
                    </Col>
                </Row>
            </div>
        )
    }
}