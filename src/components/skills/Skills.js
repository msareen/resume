import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Skills(props) {
    return (
        <div className="p-2">
            <Row >
                <Col>
                    <h4>Professional Skills</h4>
                </Col>
            </Row>
            {
                ((skills) => {
                    if (skills) {
                        let skillGroups = [];
                        let skillGroupObj = {}
                        skills.forEach((skill, index) => {
                            if (index % 2 === 0) {
                                skillGroupObj[1] = skill;
                            } else {
                                skillGroupObj[2] = skill;
                                skillGroups.push(skillGroupObj);
                                skillGroupObj = {};
                            }
                            if(index === skills.length - 1) {
                                skillGroups.push(skillGroupObj);    
                            }
                        })
                        let skillbar = skillGroups.map((skillgroup) =>
                            <Row className="gx-3">
                                <Col className="p-2" md={6}>
                                    <h6>{skillgroup[1].skillName}</h6>
                                    <ProgressBar variant='success' now={(skillgroup[1].proficiency)} />
                                </Col>
                                {
                                    (() => {
                                        if (skillgroup[2]) {
                                            return <Col className="p-2" md={6}>
                                                <h6>{skillgroup[2].skillName}</h6>
                                                <ProgressBar variant='success' now={(skillgroup[2].proficiency)} />
                                            </Col>
                                        }
                                    })()
                                }
                            </Row>
                        )
                        return skillbar;
                    }
                })(props.skills)
            }
        </div>
    )
}