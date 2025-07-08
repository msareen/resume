import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { motion } from 'framer-motion'


export default function Skills(props) {
    let leftSkills = props.skills?.left || [];
    let rightSkills = props.skills?.right || [];

    return (
        <div className="p-2">
            <Row >
                <Col>
                    <h4>Professional Skills</h4>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <SkillColumn skills={leftSkills} variant="success"></SkillColumn>
                </Col>
                <Col md={6}>
                    <SkillColumn skills={rightSkills} variant="primary"></SkillColumn>
                </Col>
            </Row>
        </div>
    )
}

function SkillColumn(props) {
    if(props.skills) {
        let skillbars = props.skills.map(skill => 
            <Row className='mt-2'>
                <Col>
                    <h6>{skill.skillName}</h6>
                    <ProgressBarAnimated variant={props?.variant} now={(skill.proficiency)} />
                </Col>
            </Row>    
        )
        return skillbars;
    }
}


function ProgressBarAnimated(props) {
    let [currentVal, updateCurrentVal] = useState(0);
    if (currentVal < props.now)
        setTimeout(() => {
            updateCurrentVal(currentVal + 1);
        }, 20)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <motion.div initial="hidden"
            animate="visible" variants={variants} transition={{ duration: 2 }} >
            <ProgressBar variant={props.variant} now={currentVal}>
            </ProgressBar>
        </motion.div>
    )
}