
import './profile.scss';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import profilePicture from '../../assets/profile-pic.jpg';


export default function Profile(props) {
    return (
        <Row className={props.className, "profile-background rounded-top"} >
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
                        <div>
                            {
                                ((profile) => {
                                    if(profile && profile.skillTags) {
                                        let skillMap = profile.skillTags.map((skillTag) => {
                                            return (
                                            <span>
                                                <span className='badge rounded-pill bg-success mr-1'>{skillTag}</span>{' '}
                                            </span>)
                                        })
                                        return skillMap;
                                    }
                                })(props.profile)
                            }
                        </div>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}