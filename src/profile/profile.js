import './profile.scss';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import profilePicture from '../assets/profile-pic.jpg';


export default class Profile extends React.Component {

    render() {
        return (
            <Row className={this.props.className, "profile-background rounded-top"} >
                <Col md={2}>
                    <div className="picture-position mt-5">
                        <Figure className="" >
                            <Figure.Image
                                width={183}
                                height={171}
                                alt="171x171"
                                src={profilePicture}
                            />
                        </Figure>
                    </div>

                </Col>
                <Col>
                    <div className="m-5 text-light">
                        <h3>Manasvi Sareen</h3>
                        <h6>Softare Architect</h6>
                    </div>
                </Col>
            </Row>
        );
    }
}