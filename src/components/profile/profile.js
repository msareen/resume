import './profile.scss';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import SkillTags from '../skill-tags/SkillTags'
import profilePicture from '../../assets/profile-pic.jpg';



export default function Profile(props) {
    return (
        <Row className="profile-background rounded-top" >
            <Col md={2}>
                <div className="picture-position">
                    <Figure >
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
                <Row>
                    <Col>
                        <div className="mt-5 ml-5 mr-5 text-light">
                            <h3>{props.profile.name}</h3>
                            <h6>{props.profile.description}</h6>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <SkillTags tags={props?.profile.skillTags}></SkillTags>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}